/*


      WARNING THIS METHOD MAY NOT PROVIDE A UNIFORM DISTRIBUTION DEPENDING ON SECONDARY PRNG USED 
      AND FUNCTIONS USED TO EFFECT n WHEN PASSED INTO Math.acos(Math.cos(foos[x](n)))*k + low


*/




/**
 * Generates a uniformly distributed random number through the use of y = arccos(cos(x)) which with perfect mathematical implementation would not work as the values for y would increase as x -> Infinity but the computer to increase efficiency will only calculate the smallest possible value.
 * 
 * If you have permission to, and wish to implement this either pick a single function from foos to use or implement your own random selection to select a function
 * 
 * @param {Number} low - The lowest possible value you want to return
 * @param {Number} high - The highest possible value you want to return
 * @param {Number} seed - the seed with which you want to generate the numbers, if none is passed in pi is used
 */

function RandInt(low, high, seed){
  
  // Chose list of random functions to effect n to make the function less predictable.
  foos = [
    n => {return i(512*n - 16 + 36*n, seed)},
    n => {return i(1024*n, seed)},
    n => {return i(73826 + n, seed)},
    n => {return i(555 * n * (n - 3), seed)},
    n => {return i(329 + 2**n, seed)},
    n => {return i(n-2**2, seed)},
    n => {return i(17*(n**5), seed)},
    n => {return i(13-n, seed)},
    n => {return i(Math.sqrt(n), seed)},
    n => {return i(n**n, seed)}
  ];

  x = Math.round(parkMillerRand(0, foos.length - 1, seed));

  var n = seed || Math.PI;
  var k = (high-low)/Math.PI;
  var n = Math.acos(Math.cos(foos[x](n)))*k + low;
  console.log(`${n} ${x}`)
  var n = Math.round(n);

  return n;
  
}

/**
   * Tests if a number is Infinity, if it is it will fallback to the seed, if no seed is passed in it will fallback to pi
   * @param {Number} n - number to test
   * @param {Number} seed - seed for backup is number is Infinity
   */

  function i(n, seed){
    if(n !== Infinity){
      return n
    }else{
      if(typeof(seed)  === 'number'){
        return seed
      }else{
        return Math.PI
      }
    }
  }



// Past this point has been adapted from other algorithms.


/**
 * Secondary seeded random generator taken from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
 * (Implemented from http://www.ict.griffith.edu.au/anthony/info/C/RandomNumbers )
 * Made by Dr Stepher K. Park & Keith W. Miller ( https://www.chemie.unibas.ch/~steinhauser/teaching/FS2014/AdvancedMethInCompSci/MC_LectureHandout_2.pdf )
 * 
 * From the paper -- RANDOM NUMBER GENERATORS: GOOD ONES ARE HARD TO FIND, published 2014-03-18
 * Permission to use this algorithm is provided by the Association of Computing Machinery
 * 
 * "Permission to copy without fee all or part of this material is granted provided the copies 
 * are not made or distributed for direct commercial advantage, the ACM copyright notice and the 
 * title of the publication and its date appear, and notice is given that copying is by permission 
 * of the Association for Computing Machinery."
 */

function parkMillerRand(min, max, seed){
  
  max = max || 1;
  min = min || 0;

  seed = (seed * 9301 + 49297) % 233280;
  var rnd = seed / 233280;

  return min + rnd * (max - min);
}
