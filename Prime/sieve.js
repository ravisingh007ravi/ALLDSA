
function sieveOfEratosthenes(n) {
	let prime = Array.from({ length: n + 1 }, (_, i) => true)

	for (p = 2; p * p <= n; p++) {
		if (prime[p] == true) {
			for (i = p * p; i <= n; i += p)
				prime[i] = false;
		}
	}
	let primes = []
	for (i = 2; i <= n; i++) {
		if (prime[i] == true) primes.push(i)
	}
	console.log(primes);
}

sieveOfEratosthenes(1000)