let backspace_Compare = function(s, t) {
    let sStack = [];
    let tStack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            sStack.pop();
        } else {
            sStack.push(s[i]);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] === '#') {
            tStack.pop();
        } else {
            tStack.push(t[i]);
        }
    }

    return sStack.join('') === tStack.join('');
};
const s = "ab#c";
const t = "ad#c";
console.log(backspace_Compare(s, t)); // Output: true
