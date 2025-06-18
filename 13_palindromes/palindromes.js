const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwsyz0123456789";

    const cleanedString = string 
    .toLowercase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

const reversedString = cleanedString.split('').reverse().join();
return cleanedString === reversedString;

};


// Do not edit below this line
module.exports = palindromes;
