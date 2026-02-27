/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let word="";
    let flag=1;
    let minNum=strs[0].length;
    let counter=0;

    for(let i=0; i<strs.length; i++){
        if(strs[i].length < minNum){
            minNum = strs[i].length;
        }
    }

    
    for(let i=0; i<minNum; i++){
        flag=1;
        
        for(let j=0; j<strs.length; j++){
            if(j<=strs.length-2 && (strs[j][i] != strs[j+1][i])){
                console.log(i,j);
                flag=0;
                break;
            }
        }

        if(flag){
            word+=strs[0][counter];
            counter++;
        }
        else{
            break;
        }
        
       
        
    }

    return word
};