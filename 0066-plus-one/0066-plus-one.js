/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carry = 0;
    if (digits[digits.length - 1] != 9) {
        digits[digits.length - 1] += 1;
        return digits;
    } else {
        digits[digits.length - 1] = 0;
        carry = 1;
    }

    for (let i = digits.length - 2; i >= 0; i--) {
        if (carry) {
            if (digits[i] != 9) {
                digits[i] += carry;
                carry=0;
            } else {
                digits[i] = 0;
                carry = 1;
            }
        }
        else{
            break;
        }

    }

    if(carry){
        digits.unshift(1);
    }

    console.log(digits)
    return digits;

};