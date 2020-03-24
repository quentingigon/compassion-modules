# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

from odoo import fields, models


class CrmClaim(models.Model):

    """
        CRM Claim
    """
    _inherit = 'crm.claim'

    stage_id = fields.Many2one(
        'crm.claim.stage',
        string='Stage',
        track_visibility='onchange',
        domain="[ '&',"
               "'|',('team_ids', '=', team_id), "
               "('case_default', '=', True), "
               "'|',('claim_category', '=', claim_category)"
               ",('claim_common', '=', True)]")
