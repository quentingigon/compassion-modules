##############################################################################
#
#    Copyright (C) 2015 Compassion CH (http://www.compassion.ch)
#    Releasing children from poverty in Jesus' name
#    @author: Serpent Consulting Services Pvt. Ltd.
#
#    The licence is in the file __manifest__.py
#
##############################################################################

from odoo import models, fields, api, _
from odoo.tools import safe_eval
import json

class LabelPrint(models.Model):
    _name = "label.print"
    _description = 'Label Print'

    name = fields.Char("Name", size=64, required=True, index=1)
    model_id = fields.Many2one('ir.model', 'Model', required=True, index=1)
    field_ids = fields.One2many(
        "label.print.field", 'report_id', string='Fields')
    ref_ir_act_report = fields.Many2one(
        'ir.actions.act_window', 'Sidebar action', readonly=True,
        help="Sidebar action to make this template available on records "
        "of the related document model")
    ref_ir_default = fields.Many2one(
        'ir.default', 'Sidebar button', readonly=True,
        help="Sidebar button to open the sidebar action")
    model_list = fields.Char('Model List', size=256)
    padding_top = fields.Float("Padding Top (in mm)", default=1.0)
    padding_bottom = fields.Float("Padding Bottom  (in mm)", default=1.0)
    padding_left = fields.Float("Padding Left (in mm)", default=1.0)
    padding_right = fields.Float("Padding Right (in mm)", default=1.0)
    barcode_width = fields.Float('Barcode Width (in mm)', default=20)
    barcode_height = fields.Float('Barcode Height (in mm)', default=20)
    is_barcode = fields.Boolean(
        'Is Barcode?', compute='_compute_is_barcode')

    def _compute_is_barcode(self):
        for label in self:
            label.is_barcode = bool(label.field_ids.filtered(
                lambda f: f.type == 'barcode'))

    @api.depends('fields_ids', 'fields_ids.type')
    def onchange_image(self):
        for label in self:
            label.is_barcode = False
            for field in label.fields_ids:
                if field.type == 'barcode':
                    label.is_barcode = True

    @api.onchange('model_id')
    def onchange_model(self):
        model_list = []
        if self.model_id:
            model_obj = self.env['ir.model']
            current_model = self.model_id.model
            model_list.append(current_model)

            active_model_obj = self.env[self.model_id.model]
            if active_model_obj._inherits:
                for key, val in active_model_obj._inherits.items():
                    model_ids = model_obj.search([('model', '=', key)])
                    if model_ids:
                        model_list.append(key)
        self.model_list = model_list
        # TODO: this avoid crashing the app but may not be correct
        if len(model_list) == 1:
            model_list = None
        return model_list

    @api.multi
    def create_action(self):
        vals = {}
        action_obj = self.env['ir.actions.act_window']
        for data in self.browse(self.ids):
            src_obj = data.model_id.model
            button_name = _(f'Label ({data.name})')

            vals['ref_ir_act_report'] = action_obj.create({
                'name': button_name,
                'type': 'ir.actions.act_window',
                'res_model': 'label.print.wizard',
                'src_model': src_obj,
                'view_type': 'form',
                'context': f"{{'label_print' : {data.id}}}",
                'view_mode': 'form,tree',
                'target': 'new',
                'binding_model_id': self.env.ref("base.model_res_partner").id,
                'binding_type': 'report'
            })

        self.write({
            'ref_ir_act_report': vals.get('ref_ir_act_report', False).id
        })
        return True

    @api.multi
    def unlink(self):
        self.unlink_action()
        super().unlink()

    @api.multi
    def unlink_action(self):
        ir_values_obj = self.env['ir.default']
        act_window_obj = self.env['ir.actions.act_window']

        for template in self:
                if template.ref_ir_act_report.id:
                    act_window_obj_search = act_window_obj.browse(
                        template.ref_ir_act_report.id)
                    act_window_obj_search.unlink()
                if template.ref_ir_default.id:
                    ir_values_obj_search = ir_values_obj.browse(
                        template.ref_ir_default.id)
                    ir_values_obj_search.unlink()
        return True


class IrModelFields(models.Model):

    _inherit = 'ir.model.fields'

    @api.model
    def name_search(self, name='', args=None, operator='ilike', limit=None):
        data = self.env.context.get('model_list')
        if data:
            args.append(('model', 'in', safe_eval(data)))
        ret_vat = super().name_search(
            name=name, args=args, operator=operator, limit=limit)
        return ret_vat
