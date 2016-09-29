var ToolTip = Directive.extend({
    link: function (scope, element) {
        setTimeout(function () {
            var target = element.find('[data-toggle="tooltip"]');
            target.tooltip();
        }, 0);
    }
});
