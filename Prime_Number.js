let num = 4;   

if (num === 1) {
    console.log("Neither prime nor composite");
} 
else if (num === 2) {
    console.log("Prime Number");
} 
else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Prime Number");
    } else {
        console.log("Composite Number");
    }
}

