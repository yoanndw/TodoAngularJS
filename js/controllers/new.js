let newTaskController = {
    name: "newTaskController",
    func: [
        "$scope",
        "$routeParams",
        "$window",
        "$location",
        function ($scope, $routeParams, $window, $location) {
            $scope.tache = {};

            $scope.showTache = function () {
                console.log($scope.tache);
            };

            $scope.createTask = function () {
                const tache = $scope.tache;

                // On vient de créer une tâche
                $window.localStorage.setItem("createdTask", "true");

                $window.localStorage.setItem("new_tache", tache.tache);
                $window.localStorage.setItem(
                    "new_description",
                    tache.description
                );
                $window.localStorage.setItem("new_categorie", tache.categorie);
                $window.localStorage.setItem("new_dateDebut", tache.dateDebut);
                $window.localStorage.setItem("new_duree", tache.duree);

                $location.path("/list");
            };
        },
    ],
};
