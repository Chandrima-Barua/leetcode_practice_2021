function longest_prefix(strs){
  if (strs.length == 0) 
    return "";
  var prefix = strs[0];
  console.log(prefix.length)
  for (var i = 1; i < strs.length; i++)
      while (strs[i].indexOf(prefix) != 0) {
          prefix = prefix.substring(0, prefix.length - 1);
          console.log(prefix)
          if (prefix.length < 1) return "";
      }        
  return prefix;
}

console.log(longest_prefix(["cir","car"]))