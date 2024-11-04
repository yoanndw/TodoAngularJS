let app = angular.module("app", ["ngRoute", "routeAppController"]);

// Définit le routage
app.config(["$routeProvider",
    function ($routeProvider) {
        $routeProvider
            .when("/list", {
                templateUrl: "partials/list.html",
                controller: "listController",
                title: "Liste des tâches"
            })
            .when("/new", {
                templateUrl: "partials/new.html",
                controller: "newTaskController",
                title: "Nouvelle tâche"
            })
            .when("/edit", {
                templateUrl: "partials/edit.html",
                controller: "editTaskController",
                title: "Editer tâche"
            })
            .otherwise({
                redirectTo: "/list"
            })
        ;
    }
]);
