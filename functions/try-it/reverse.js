function reverse(str) {
   return str.toLowerCase().split('').reverse().join('');

}

function isPalindrome(str) {
   return reverse(str) === str.toLowerCase();
}

 console.log(isPalindrome("Racecar"));
