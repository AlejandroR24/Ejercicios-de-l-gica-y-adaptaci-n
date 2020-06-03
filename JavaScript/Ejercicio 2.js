//José Alejandro Rojas Arroyo
//This function is responsible for the multiplication of the vector numbers
function multiplication (num){

  var multiply = 1;
  var myArray = new Array(4);

//Gives the index to the vector
    for(var i = 0; i< num.length;i++){
//Read the numbers ahead of the index
     for(var j = i+1; j < num.length ;j++){

      multiply = multiply * num[j];
     }
//Read the numbers behind  of the index
    for(var k = i-1; k >= 0 ;k--){

      multiply = multiply * num[k];
     }

      myArray.push(multiply);
      multiply = 1;
  }

  return myArray;
}

var amount = prompt('Ingrese la cantidad de numeros que tendra su vector: ');
var number;
var vector = [];

for(var i = 0; i < amount ;i++){
  
  number = prompt("Ingrese el numero de la celda " + i + ": ");
  vector.push(number);

}

console.log(multiplication(vector));





