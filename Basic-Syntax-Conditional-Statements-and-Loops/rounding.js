function rounding(num, rnd) {
    //logic
    if (rnd > 15) {rnd = 15;}
    
    let result = parseFloat(num.toFixed(rnd));
    //print result
    console.log(result);
}

//rounding(3.1415926535897932384626433832795,2);
