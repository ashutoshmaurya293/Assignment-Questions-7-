let reverse_Words = function(s) {
    const words = s.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').reverse().join('');
    }

    return words.join(' ');
};
const s = "Let's take LeetCode contest";
console.log(reverse_Words(s)); // Output: "s'teL ekat edoCteeL tsetnoc"
