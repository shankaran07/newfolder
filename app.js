var app = angular.module("serviceApp", []);

app.service("cancelServices",function(){
    this.cancelService= function(a){
        a.service={};
        a.editmode = false;
    }
})

app.controller("MainCtrl", function($scope, $http) {
    $scope.service = {}
    $scope.serviceList = []
    $scope.editMode = false

    function loadData() {
        $http.get("http://localhost:5000/list").then((res) => {
            $scope.serviceList = res.data;
        })
    }

    loadData();

    $scope.saveService = function() {
        if ($scope.editMode) {
            $http.put("http://localhost:5000/update/" + $scope.service._id, $scope.service).then(res => {
                alert(res.data);
                $scope.service = {}
                $scope.editMode = false
                loadData();
            })
        } else {
            $http.post("http://localhost:5000/add", $scope.service).then(res => {
                alert(res.data);
                $scope.service = {}
                loadData();
            })
        }
    }

    $scope.editService = function(a) {
        $scope.service = angular.copy(a)
        $scope.service.date = new Date(a.date); 
        $scope.editMode = true
    }

    
    $scope.cancelService = function(){
            // $scope.student={};
            // $scope.editmode = false;
            cancelService.cancelService($scope);
        }

    $scope.deleteService = function(id) {
    if (confirm("Are you sure to delete?")) {
      $http.delete("http://localhost:5000/delete/" + id)
        .then(() => {
          alert("🗑️ Record deleted!");
          loadData();
        });
    }
    }

})
