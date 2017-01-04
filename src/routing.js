'use strict';
/*
 * Set des routes de l'application
 */
app.config(
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'itemList',
                controllerAs: 'itemliste',
                templateUrl: 'views/item/list.html'
            });
    }
);