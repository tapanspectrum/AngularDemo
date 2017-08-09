(function() {
    'use strict';

    angular
        .module('app.product')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'product',
                config: {
                    url: '/',
                    templateUrl: 'app/product/product.html',
                    controller: 'Product',
                    controllerAs: 'vm',
                    title: '/',
                    settings: {
                        nav: 1
                    }
                }
            }
        ];
    }
})();
