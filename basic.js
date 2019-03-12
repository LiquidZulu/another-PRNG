/**
 * Generates a uniformly distributed random number through the use of y = arccos(cos(x)) which with perfect mathematical implementation would not work as the values for y would increase as x -> Infinity but the computer to increase efficiency will only calculate the smallest possible value.
 * 
 * @param {Number} low - The lowest possible value you want to return
 * @param {Number} high - The highest possible value you want to return
 * @param {Number} seed - the seed with which you want to generate the numbers, if none is passed in pi is used
 */

function RandInt(low, high, seed){
    
    var n = seed || Math.PI;
    var k = (high-low)/Math.PI;
    var n = Math.acos(Math.cos(n))*k + low;
    var n = Math.round(n);
    
    return n;
}


/**
 * Alternatively a decimal can be returned.
 * 
 * @param {Number} low - The lowest possible value you want to return
 * @param {Number} high - The highest possible value you want to return
 * @param {Number} seed - the seed with which you want to generate the numbers, if none is passed in pi is used
 */
 
 function RandInt(low, high, seed){
    
    var n = seed || Math.PI;
    var k = (high-low)/Math.PI;
    var n = Math.acos(Math.cos(n))*k + low;
    
    return n;
}
