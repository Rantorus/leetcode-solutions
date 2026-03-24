/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let counter=0;
    let flag=1;
    for(let i=s.length-1; i>=0; i--){
        if(s[i]!=" "){
            counter++;
            flag=0;
        }
        else{
            if(!flag){
                return counter;
            }
        }
        if(i==0){
            return counter;
        }
    }
};