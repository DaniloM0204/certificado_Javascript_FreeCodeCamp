function palindrome(str) {
    const alphanumericOnly = str
    // 1 Lowercase the input
    .toLowerCase()
    // 2 strip out non-alphanumeric
    .match(/[a-z0-9]/g);

    // 3 return string === reversedString
    return alphanumericOnly.join('') ===
        alphanumericOnly.reverse().join('');
}
console.log(palindrome("eye"));

palindrome("eye");
palindrome("_eye"); 
palindrome("race car"); 
palindrome("not a palindrome"); 
palindrome("A man, a plan, a canal. Panama"); 
palindrome("never odd or even"); 
palindrome("nope"); 
palindrome("almostomla"); 
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0"); 
palindrome("five|\_/|four");