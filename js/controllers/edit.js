let editTaskController = {
    name: "editTaskController",
    func: [
        "$scope",
        "$location",
        function ($scope, $location) {
            const editedTaskIndex = localStorage.getItem("edited_index");

            $scope.tasksArr = Array.from(
                JSON.parse(localStorage.getItem("allTaches"))
            );

            // Récupère la tâche à éditer
            let editedTask = null;
            if (
                editedTaskIndex != undefined &&
                editedTaskIndex != null &&
                editedTaskIndex != ""
            ) {
                editedTask = $scope.tasksArr[editedTaskIndex];

                $scope.tache = {
                    tache: editedTask.tache,
                    description: editedTask.description,
                    categorie: editedTask.categorie,
                    dateDebut: editedTask.dateDebut,
                    duree: editedTask.duree,
                };
            }

            // Editer tâche
            $scope.editTask = function () {
                editedTask.tache = this.tache.tache;
                editedTask.description = this.tache.description;
                editedTask.categorie = this.tache.categorie;
                editedTask.dateDebut = this.tache.dateDebut;
                editedTask.duree = this.tache.duree;

                this.tasksArr.splice(editedTaskIndex, 1, editedTask);

                // Ecrire la nouvelle liste dans localstorage
                localStorage.setItem(
                    "allTaches",
                    JSON.stringify(this.tasksArr)
                );

                $location.path("/list");
            };
        },
    ],
};
