//José Alejandro Rojas Arroyo
import java.util.ArrayList;

class Functionality{
 
  int myArray[] = { 1, 2, 2, 5, 4, 6, 7, 8, 8, 8 };
  ArrayList<Number> myList = new ArrayList<Number>();
  
//Method that counts the number of occurrences
  public ArrayList  ocurrencesNumber() {
  int index;
    for (int i = 0; i < myArray.length; i++) {
      if (!myList.isEmpty()) {
        index = myList.size();
        for (int j = 0; j < index; j++) {
          if (myList.get(j).getValue() == (myArray[i])) {
            myList.get(j).setQuantity(myList.get(j).getQuantity()+1);
          } else {
            myList.add(new Number(myArray[i], 1));
          }
        }
      } else {
        myList.add(new Number(myArray[i], 1));
      }
    }
    return myList;
  }
  //Print the array
  public String print(){
    ArrayList<Number> list = ocurrencesNumber();
    Number number = new Number(0, 0);
    for (int i = 0; i < list.size(); i++) {
      if (list.get(i).getQuantity() > number.getQuantity()) {
        number = list.get(i);
      }
    }
    return "Ocurrencias = " + number.getQuantity() + "\nNumero = " + number.getValue();
  }
}