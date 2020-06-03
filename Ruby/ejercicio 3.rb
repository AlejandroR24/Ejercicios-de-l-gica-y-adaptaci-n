#José Alejandro Rojas Arroyo
class Number
 #Get the biggest number of the array
  def biggerNumber()
    number = 0
    myArray = [13,2,4,35,1];
    #Read the array
      myArray.each do |i|
        #Compare the biggest number
        if i > number
          number = i 
        end
      end
      puts number 
  end    
end
objeto = Number.new()
objeto.biggerNumber
