# Function to calculate prime numbers using the Sieve of Eratosthenes
def sieve_of_eratosthenes(n):
    """
    This function finds all prime numbers up to a given number n
    using the Sieve of Eratosthenes algorithm.
    :param n: The number up to which prime numbers should be found
    :return: A list of found prime numbers
    """

    # Create a list of True values representing numbers from 0 to n
    # Initially, we assume every number is prime
    primes = [True] * (n + 1)

    # Mark 0 and 1 as not prime because they are not prime numbers by definition
    primes[0] = False
    primes[1] = False

    # Start with the smallest prime number, which is 2
    p = 2

    # Continue looping as long as p * p <= n.
    # This means we only check up to the square root of n.
    while (p * p <= n):
        # If p is still marked as prime (True)
        if primes[p]:
            # Mark all multiples of p as False (they are not prime)
            for i in range(p * p, n + 1, p):
                primes[i] = False
        # Move to the next number
        p += 1

    # Create a list of prime numbers by collecting all the numbers still marked as True
    prime_list = [i for i in range(n + 1) if primes[i]]

    # Return the list of prime numbers
    return prime_list

# Input: Find all prime numbers up to a certain number n
n = 50  # You can change this to any number you want
print(f"Prime numbers up to {n}: {sieve_of_eratosthenes(n)}")