#José Alejandro Rojas Arroyo
class Histogram
  #Method that generates the histogram
  def getHistogram
    myArray = [1,2,1,3,3,1,2,1,5,1]
    array= [1,2,3,4,5]
    printArray =["1:","2:","3:","4:","5:"]
    #Cycle to read arrays
    for i in myArray
      for j in array
        #if they are the equals "*" is added to the index in printArray
        if i == j 
          printArray[j-1] << "*"  
        end
       end
    end
    #Cycle to print array
    printArray.each do |k|
    puts k
    end
  end
end
objeto = Histogram.new()
objeto.getHistogram


