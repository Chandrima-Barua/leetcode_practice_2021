
  function Node(val) {
    this.data = val;
    this.next = null;
  }
  
  
  //convert array into a linked list
  function createList(array){
      var head = new Node(array[0])
      var pnode = head;
        for(var i = 1;i < array.length; i++){
           node = new Node(array[i]);
           pnode.next = node;   
           pnode = node;  	
      }
      return head;
  }
  
  //convert a linked list into array 
  function list2array(head) {
      if(!head) {
          return []
      }  
      var result = []
      var p = head
  
      while(p) {
          result.push(p.data)
          p = p.next
      } 
      return result
  }
  
  //merge two linked list and sorting them
   function mergeList(l1,l2){
     link1 = createList(l1);
     link2 = createList(l2);

   if (l2.length == 0) return createList(l1); 
   if (l1.length == 0) return createList(l2);

    // create new linked list pointer
    var L3 = new Node(null, null);
    var prev = L3;
    
    // while both linked lists are not empty
    while (link1 !== null && link2 !== null) {
      if (link1.data <= link2.data) { 
        prev.next = link1;
        link1 = link1.next;
      } else {
        prev.next = link2;
        link2 = link2.next;
      }
      prev =prev.next;
    }
    
    // once we reach end of a linked list, append the other 
    // list because we know it is already sorted
    if (link1 === null) { prev.next = link2; }
    if (link2 === null) { prev.next = link1; }
    
    /* console.log(L3.next['data']) */
    
    var listtoarray = list2array(L3.next);
    /* console.log(listtoarray) */
    return listtoarray; 
  } 
  
  console.log(mergeList([1,2], [1,3,4]))