// Find the Palindrome Number Program

function Palindrome(number) {
    let rem = 0;
    let final = 0;

    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
    }
    return final;
}
console.log(Palindrome(123456789));