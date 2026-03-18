/**
 * @param {string} s
 * @return {string}
 */

 function isPalindrom(s,left,len){
    let right = left + len - 1 ;

    while(left<right){
        if(s[left] != s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;

 }
var longestPalindrome = function(s) {
    
    for(let i=s.length; i>0; i-- ){
        for(let j=0; j<=s.length - i ; j++){
            let flag = isPalindrom(s,j,i);
            if(flag){
                return s.substring(j, j + i);;
            }
        }
    }
};