new function () {

    var CapitalizeInput = Miruken.extend({
        constructor: function() {
            this.extend({
                require: 'ngModel',
                link: function (scope, element, attrs, model) {
                    var capitalize = function (inputValue) {
                        if (inputValue == undefined) inputValue = '';
                        var capitalized = inputValue.toUpperCase();
                        if (capitalized !== inputValue) {
                            model.$setViewValue(capitalized);
                            model.$render();
                        }
                        return capitalized;
                    }
                    model.$parsers.unshift(capitalize);
                    capitalize(scope[attrs.ngModel]);  // capitalize initial value
                }
            });
        }
    });

    angular
        .module('myModule')
        .directive('capitalizeInput', CapitalizeInput);
}
