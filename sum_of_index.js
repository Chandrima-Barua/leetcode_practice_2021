/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   
 var output = []
   
    for(var i = 0; i< nums.length; i++){
        var sub = target - nums[i]; 
        var index = nums.indexOf(sub);
        if(index > -1){
        if(index != i){
          // console.log("not matched index:" + i + "value:" + nums[i])
          output.push(i,index);
           return output;
        }
        }
    }
    
};

console.log(twoSum)