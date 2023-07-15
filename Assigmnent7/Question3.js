let add_Strings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = '';

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;

        const sum = digit1 + digit2 + carry;
        const digitSum = sum % 10;
        carry = Math.floor(sum / 10);

        result = digitSum + result;

        i--;
        j--;
    }

    return result;
};
const num1 = "11";
const num2 = "123";
console.log(add_Strings(num1, num2)); // Output: "134"
