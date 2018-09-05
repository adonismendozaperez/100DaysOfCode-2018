function smallestCommons(arr) {
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);
    var grandLCM;

    for (var i=min; i<max; i++) {
        if(i===min){
            grandLCM = (i * (i+1))/gcd(i, i+1);
        }else{
            grandLCM = (grandLCM * (i+1))/gcd(grandLCM, i+1);
        }
    }

    return grandLCM;

    function gcd(x, y) {
        if (y === 0)
            return x;
        else
            return gcd(y, x%y);
    }
}

smallestCommons([1,5]);