new function () {

    var AddFormToScope = Miruken.extend({
        constructor: function () {
            this.extend({
                link: function (scope, element, attrs) {
                    var targetScope = scope.$eval(attrs.addFormToScope);
                    if (targetScope === null || targetScope === undefined) throw new Error("You must supply a valid scope for the directive: ex. add-form-to-scope='vm'");

                    var formName = attrs.ngForm || attrs.name;
                    if (!formName) throw new Error("add-form-to-scope must be used on a form with a name or an ng-form");

                    targetScope.form = scope[formName];
                },
                priority: '-100'
            });
        }
    });

    angular
        .module('myModule')
        .directive('addFormToScope', AddFormToScope);
}
