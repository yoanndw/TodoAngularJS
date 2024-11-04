let listController = {
    name: "listController",
    func: [
        "$scope",
        "$routeParams",
        "$location",
        "$route",
        function ($scope, $routeParams, $location, $route) {
            $scope.taches = [];

            // Suppression de tâche
            $scope.deleteTache = function (index) {
                let arrTaches = Array.from(this.taches);
                arrTaches.splice(index, 1);

                this.taches = arrTaches;

                // Copie dans localStorage
                localStorage.setItem("allTaches", JSON.stringify(this.taches));

                // Update route render
                $route.reload();
            };

            // Editer tache
            $scope.editTache = function (index) {
                localStorage.setItem("edited_index", index);

                $location.path("/edit");
            };

            // Si on vient de créer une tâche
            if (localStorage.getItem("createdTask") != "false") {
                const newTache = {
                    tache: localStorage.getItem("new_tache"),
                    description: localStorage.getItem("new_description"),
                    categorie: localStorage.getItem("new_categorie"),
                    dateDebut: localStorage.getItem("new_dateDebut"),
                    duree: localStorage.getItem("new_duree"),
                };

                // Push dans localStorage
                // Tableau vide si n'existe pas
                // On récupère "allTaches"
                const allTachesFromStorage = localStorage.getItem("allTaches");

                if (
                    allTachesFromStorage == null ||
                    allTachesFromStorage == ""
                ) {
                    localStorage.setItem("allTaches", "[]");
                }

                let allTaches = JSON.parse(localStorage.getItem("allTaches"));

                // On rajoute la tache
                allTaches.push(newTache);

                // On met le nouveau tableau (avec la nouvelle tache)
                localStorage.setItem("allTaches", JSON.stringify(allTaches));

                // On vient d'insérer la tâche, on remet à zéro l'état
                localStorage.setItem("createdTask", "false");
            }

            // On update le scope local

            // Tableau vide si n'existe pas
            // On récupère "allTaches"
            const allTachesFromStorage = localStorage.getItem("allTaches");

            if (allTachesFromStorage == null || allTachesFromStorage == "") {
                localStorage.setItem("allTaches", "[]");
            }

            let allTaches = JSON.parse(localStorage.getItem("allTaches"));

            $scope.taches = Array.from(allTaches);
        },
    ],
};
