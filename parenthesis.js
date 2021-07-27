function checkClosing(starting) {

  var closing = '';
  if (starting == '(') {
    closing = ')';
  } else if (starting == '{') {
    closing = '}';
  } else if (starting == '[') {
    closing = ']';
  }
  return closing;
}


function parentheses(s) {

  if ((s.length % 2) == 0) {
    var stack = []
    for (var i=0;i<s.length;i++){
       if (stack.length == 0) {
        stack.push(s[i]);
      }else {
        var top= stack.pop();
        if (checkClosing(top) ==s[i]){
           //do none
        } else{
           stack.push(top);
          stack.push(s[i])
        }
      }
      /* console.log(stack) */
    }
    /* return stack.length == 0 */;
  } else {
    return false;
  }

}

console.log(parentheses("(]"))