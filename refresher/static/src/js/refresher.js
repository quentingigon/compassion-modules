// initial pager in odoo/addons/web/static/src/js/widgets/pager.js

odoo.define('refresher.pager', function(require) {
    'use strict';

    var pager = require('web.Pager');
    pager.include({
        start: function() {
            var self = this;
            var res = self._super();
            var el = self.$el;

            var pager_value = el.find('.o_pager_counter');
            pager_value.before('<span class="fa fa-refresh btn btn-icon"></span>');
            var refresh_btn = pager_value.prev();
            refresh_btn.css('marginRight', '8px');

            refresh_btn.click(function() {
                self._changeSelection(0);
            });

            return res;
        },

        _changeSelection: function(direction) {
            if(!direction)
                direction = 0
            this._super(direction);
        }
    });
});
