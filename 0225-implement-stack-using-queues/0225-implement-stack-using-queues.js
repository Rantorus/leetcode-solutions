
var MyStack = function() {
        this.q1 = [];
        this.q2 = [];
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q2.push(x);
    this.q1.forEach(item =>{
        this.q2.push(item);
    })

    this.q1 = [];

    this.q2.forEach(item =>{
        this.q1.push(item);
    })

    this.q2 = [];
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.q1[0] == null){
        return true
    }
    else {
        return false
    }
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */