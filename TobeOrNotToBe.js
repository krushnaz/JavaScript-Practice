/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
    toBe : function(n){
        if(val === n){
            return true
        }else{
            return new Error("Not Equal")
        }
    },
    notToBe : function (n){
        if(val !== n){
            return true
        }else{
            return new Error("Equal")
        }
    }
}
};


 expect(5).toBe(5); // true
 expect(5).notToBe(5); // throws "Equal"
 