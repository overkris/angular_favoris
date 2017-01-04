'use strict';

app
    .controller('itemList', function ($rootScope, itemProvider, $interval) {
        /**
         * Fonction qui ouvre la page
         * @param item
         */
        this.openSite = function (item) {
            if (angular.isArray(item.link)) {
                angular.forEach(item.link, function(value, key) {
                    window.open(value);
                });
            } else {
                window.open(item.link);
            }
        }

        /**
         * Set des colors des fiches
         * @param item
         * @returns {string}
         */
        this.setCssBackground = function (item) {
            return "background-image: linear-gradient(150deg,"+item.color+", white);"
        }

        // Set des éléments
        this.itemListe = itemProvider.getItems();

        // Set du titre
        $rootScope.title = title;
    });