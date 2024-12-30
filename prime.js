//WAP to print prime numbers in a range

function primes(start, end) {
    for (let num = start; num <= end; num++) {
        let isPrime = true;

        if (num < 2) {
            continue; 
        }

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num);
        }
    }
}
primes(10,20);