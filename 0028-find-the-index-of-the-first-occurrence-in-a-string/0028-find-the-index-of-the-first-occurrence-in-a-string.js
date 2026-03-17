/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let indexHolder=haystack.length+1;
    let previousIndex=0;
    flag=0;
    for(let i=0; i<haystack.length; i++){
        if(flag){
            break;
        }
        for(let j=0; j<needle.length; j++){
            if(haystack[i] == needle[j]){
                if(!flag){
                    flag=!flag;
                    previousIndex=i;
                } 
                if(i<indexHolder){
                    indexHolder = i;
                }
                i++;
                
            }
            else{
                if(flag){
                    flag=!flag
                    indexHolder=haystack.length+1;
                    i = previousIndex;
                } 
                break;
            }
        }
    }
    if(flag){
        return indexHolder;
    }
    else{
        return -1;
    }
};