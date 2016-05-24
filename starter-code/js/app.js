/* setup your angular app here */
var app = angular.module('MyApp', []);
//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

app.controller("FruitCtrl", ['$scope', function($scope){
  $scope.allFoods = fruit.concat(vegetables);
  $scope.foods = shuffle($scope.allFoods);
  $scope.myVeg = []
  $scope.myFruit = []
  $scope.originalFruitList = fruit;
  $scope.originalVegList = vegetables;
  $scope.redFruit = [];
  $scope.redVeg = [];
  $scope.winner = false;

  $scope.endGame = function(){
    if (($scope.foods).length === 0){
      console.log("game over");
      
        console.log()
      for (i=0; i<$scope.myFruit.length; i++){
        var index = $scope.originalFruitList.indexOf($scope.myFruit[i]);
        if (index < 0 ){
          $scope.redFruit[i] = true;
        } else {
          $scope.redFruit[i] = false;
          console.log("yes")
        }
      }
        for (i=0; i<$scope.myVeg.length; i++){
        var index = $scope.originalVegList.indexOf($scope.myVeg[i]);
          if (index < 0){
          $scope.redVeg[i] = true;
          } else {
          $scope.redVeg[i] = false;
          console.log("yes")
          }
        }   
     if ($scope.redFruit.indexOf(true) === -1 && $scope.redVeg.indexOf(true) === -1){
        $scope.winner = true;
        console.log("You WIN!!!!!!");
      }
    } else {
     console.log("keep playing."); 
      }
  }



  $scope.makeVeg = function(food){
   ($scope.myVeg).push(food);
   var index = ($scope.foods).indexOf(food);
   ($scope.foods).splice(index, 1);
   $scope.endGame();
  }
  
  $scope.makeFruit = function(food){
    ($scope.myFruit).push(food);
    var index = ($scope.foods).indexOf(food);
    ($scope.foods).splice(index, 1);
    $scope.endGame();
  }

  $scope.returnListFruit = function(food){
    ($scope.foods).push(food);
    var index = ($scope.myFruit).indexOf(food);
    ($scope.myFruit).splice(index, 1); 
    $scope.endGame(); 
  }

  $scope.returnListVeg = function(food){
    ($scope.foods).push(food);
    var index = ($scope.myVeg).indexOf(food);
    ($scope.myVeg).splice(index, 1); 
    $scope.endGame(); 
  }

 

}]);

