function convertToRoman(num) {
    var rom = { M: 1000, CM: 900, D: 500, CD: 400,
                C:  100, XC:  90, L:  50, XL:  40,
                X:   10, IX:   9, V:   5, IV:   4,
                I:    1 };
    
    return Object.keys(rom).reduce(function (acc, ch) {
    acc.str += ch.repeat(acc.num / rom[ch]);
    acc.num %= rom[ch];
    return acc;
    }, { str: '', num: num }).str;
    
}
console.log(convertToRoman(39));

