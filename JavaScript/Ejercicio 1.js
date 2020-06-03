//José Alejandro Rojas Arroyo
//This function  is responsible for doing the factorial operation
//num is the parameter where the number will be applied to the factorial
function factorial (num){ 

  var factorial = 1;

  for( var i = 1; i <= num;i++){

    factorial = factorial * i;
  }
  return factorial;
}

// This function is responsible of print all factories
//num is the parameter that we will send you to see up to which number to print the factorial
function printFactorial(num){
var print = "";
  for( var i = 0; i <= num; i++){

  print += i+"!: " + factorial(i) +"\n";
  }
return print;
}

var number = prompt('Ingrese el numero al que le desea sacar la factorial: ');
console.log(printFactorial(number));