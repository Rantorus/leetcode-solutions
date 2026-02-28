/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];

    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(let letter in s){
        if(s[letter]=="(" || s[letter]=="{" || s[letter]=="["){
            stack.push(s[letter]);
        }
        else{
            if (stack.length === 0) return false;

            let top = stack.pop();
            console.log(top);

            if (top !== map[s[letter]]) return false;
        }
    }

    return stack.length === 0;
    

};