//A Pangram is a sentence that contains every character of the english language. This sentence 
//"The quick brown fox jumps over the lazy dog." is a panagram. Create a function that will return 
//true if a given input is a panagram or false if the input is not.

const Pangram = (string) => 
     new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

console.log(Pangram("abcdefghijklmnopqrstuvwxyz")); 
console.log(Pangram("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));