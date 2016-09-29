var ParseIntDirective = Directive.extend({
    restrict: 'A',
    require:  '?ngModel',
    link: function (scope, element, attrs, modelCtrl) {
        modelCtrl.$parsers.push(function (inputValue) {
            if (!modelCtrl) {
                return;
            }
            if (inputValue == undefined) {
                return undefined;
            }
            var strippedInput = inputValue.replace(/[^0-9]/g, '');
            if (strippedInput != inputValue) {
                modelCtrl.$setViewValue(strippedInput);
                modelCtrl.$render();
            }
            return parseInt(strippedInput);
        });
    }
});
