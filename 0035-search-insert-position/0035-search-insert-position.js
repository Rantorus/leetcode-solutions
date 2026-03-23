/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 
 function search(nums, leftIndex,rightIndex,target){
    let markedIndex=Math.floor((rightIndex+leftIndex)/2);

    if (leftIndex > rightIndex) {
        return leftIndex; 
    }
    
    if(nums[markedIndex]==target){
        return markedIndex
    }
    else if(nums[markedIndex]>target){
        return search(nums,leftIndex,markedIndex-1,target)
    }
    else if(nums[markedIndex]<target){
        return search(nums,markedIndex+1,rightIndex,target)
    }
    
 }
var searchInsert = function(nums, target) {
    
    return search(nums, 0,nums.length-1,target);
    
    
    
    
};