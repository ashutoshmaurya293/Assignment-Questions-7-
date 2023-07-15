let is_Strobogrammatic = function(num) {
    const map = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };

    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        if (!(num[left] in map) || map[num[left]] !== num[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};
const num = "69";
console.log(is_Strobogrammatic(num)); // Output: true
