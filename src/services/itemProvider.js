'use strict';

app.service('itemProvider', function () {
    this.getItems = function () {
        return items;
    }
});