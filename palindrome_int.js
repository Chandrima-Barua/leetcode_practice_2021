var isPalindrome = function(number) {

  var rem, final, temp = 0;
  var temp = number;

  while(number > 0){
    
    rem = number%10;
    number = parseInt(number/10);
    final = final * 10 + rem;

  }

  if(final == temp){
    return true;
  }
  else{
    return false;
  }



}
 