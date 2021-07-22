var romanToInt = function(s) {

  var roman = {I:1, V:5, X:10, L: 50, C:100, D:500, M:1000};
  var prev , sum = 0;
  var string_to_array = s.split('').reverse(); 
   if((string_to_array.length >= 1) && (string_to_array.length <= 15)){
     for( var i= 0; i < string_to_array.length ; i++){
         next = (i > 0) ? string_to_array[i - 1] : '';
         if((sum <= roman[string_to_array[i]]) || (string_to_array[i] == next)){
         sum = sum + parseInt(roman[string_to_array[i]]);
         }
         else{
             sum = sum - parseInt(roman[string_to_array[i]]);
         }
     }
   }
     
     return sum
 };