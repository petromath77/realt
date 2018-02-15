'use strict';

realtApp.filter('filterBest', function () {
    return function (items) {
        var filtered = [];
        angular.forEach(items, function (item) {
            if (item.price_type === "best") {
                filtered.push(item);
            }
        });
        return filtered;
    };
});
realtApp.filter('filterStudio', function () {
    return function (items) {
        var filtered = [];
        angular.forEach(items, function (item) {
            if (item.type === "studio") {
                filtered.push(item);
            }
        });
        return filtered;
    };
});
realtApp.filter('filterTwoRooms', function () {
    return function (items) {
        var filtered = [];
        angular.forEach(items, function (item) {
            if (item.type === "two-rooms") {
                filtered.push(item);
            }
        });
        return filtered;
    };
});
realtApp.filter('filterLarge', function () {
    return function (items) {
        var filtered = [];
        angular.forEach(items, function (item) {
            if (item.type === "large") {
                filtered.push(item);
            }
        });
        return filtered;
    };
});