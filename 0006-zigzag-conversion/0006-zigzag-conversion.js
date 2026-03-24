/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let current=0;
    let key=1;

    let dizi=[];
    for(let i=0; i<numRows; i++){
        dizi[i]=[];
    }
    

    for(let i=0; i<s.length; i++){
        
        dizi[current].push(s[i]);

        if(current == numRows-1 ){
            key = -1;
        }

        if(current==0){
            key = 1;
        }

        if(current==0 && current == numRows-1){
            key=0;
        }

        current+=key;
    }

    let word="";

    for(let i=0; i<dizi.length; i++){
        for(let j=0; j<dizi[i].length; j++){
            word+=dizi[i][j];
        }
    }
    console.log(dizi);
    return word;
    
};