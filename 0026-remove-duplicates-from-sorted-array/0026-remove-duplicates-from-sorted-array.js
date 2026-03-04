/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let visited= [];
    let sorted= [];
    let counter = 0;

    for(let i of nums){
        if(!visited.includes(i)){
            counter++;
            sorted.push(i);
            visited.push(i);
        }
    }

    for(let i in sorted){
        nums[i] = sorted[i];
    }
    
    return counter;

};