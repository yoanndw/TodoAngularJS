let routeAppController = angular.module("routeAppController", []); // crée module routeAppController, sans dépendances

routeAppController.controller(listController.name, listController.func);
routeAppController.controller(newTaskController.name, newTaskController.func);
routeAppController.controller(editTaskController.name, editTaskController.func);


