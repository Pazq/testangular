/**
 * Created by pascual on 12/11/15.
 */

var app = angular.module("MyFirstApp",[]);

app.controller('FirstController',function($scope) {
    $scope.nombre = 'Juan';
    $scope.comentarios = [
        {
            comentario: "Buen tutorial",
            username: "codigofacilito"
        },
        {
            comentario: "Mal tutorial",
            username: "otro_usuario"
        }
    ];
    $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }

});