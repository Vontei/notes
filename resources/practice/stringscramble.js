/*

Create function called `stringScramble` that takes two strings, `str1` and `str1`, as arguments and returns `true` if a portion of the first string's characters can be rearranged to match the second string, otherwise return `false`.

For example - if `str1` is "rkqodlw" and `str2` is "world" the output should return true. Punctuation and symbols should not be part of the strings.

*/



function stringScramble(str1, str2) {

  var arr1 = str1.split("");
  var arr2 = str2.split("");

  for (var i=0; i < arr2.length; i++){
    if (arr1.indexOf(arr2[i]) === -1){
      return false;
    }
  }
  return true;
}
