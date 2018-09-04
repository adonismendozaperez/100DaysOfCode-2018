function translatePigLatin(str) {
    return str.replace(/(^[^aeiou]*)(\w*)/, function(match, p1, p2){
        return p2 + (p1 ? p1 : 'w') + 'ay';
    })
}

translatePigLatin("consonant");