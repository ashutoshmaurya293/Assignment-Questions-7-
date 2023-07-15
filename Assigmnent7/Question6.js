var rotate_String = function(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    return (s + s).includes(goal);
};
const s = "abcde";
const goal = "cdeab";
console.log(rotate_String(s, goal)); // Output: true
