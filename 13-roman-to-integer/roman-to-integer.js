/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let number=0;
    for(let i=0; i<s.length; i++){
        switch(s[i]){
            case "I" : {
                if(i!=s.length-1 && (s[i+1]=="V" || s[i+1]=="X")){
                    number-=1;
                }
                else{
                    number+=1;
                }
                break;
            }
            case "V" : number+=5; break;
            case "X" :{
                if(i!=s.length-1 && (s[i+1]=="L" || s[i+1]=="C")){
                    number-=10;
                }
                else{
                    number+=10;
                }
                break;
            } 
            case "L" : number+=50; break;
            case "C" : {
                if(i!=s.length-1 && (s[i+1]=="D" || s[i+1]=="M")){
                    number-=100;
                }
                else{
                    number+=100;
                }
                break;
            }
            case "D" : number+=500; break;
            case "M" : number+=1000; break;
        }
    }

    return number

};