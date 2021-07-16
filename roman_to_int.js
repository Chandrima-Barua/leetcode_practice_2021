var romanToInt = function(s) {

   var roman = {I:1, V:5, X:10, L: 50, C:100, D:500, M:1000};
   var integer = 0;
   var string_to_array = s.split(''); 
   var second = 0;
    
   if((string_to_array.length >= 1) && (string_to_array.length <= 15)){
   for (var i = 0; i< string_to_array.length ; i++){
       number = string_to_array[i];
       second = string_to_array[1];
       console.log(string_to_array[1]);
       
       if(parseInt(roman[string_to_array[0]]) < parseInt(roman[string_to_array[1]])){
       		integer = parseInt(roman[number]) - integer; 
           
       }else{
           
       		integer = integer + parseInt(roman[number]); 
       }		 
      }
    }
    
    return integer
};