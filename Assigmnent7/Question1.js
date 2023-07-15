let is_Isomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        if (!sMap[s[i]]) {
            sMap[s[i]] = t[i];
        } else if (sMap[s[i]] !== t[i]) {
            return false;
        }

        if (!tMap[t[i]]) {
            tMap[t[i]] = s[i];
        } else if (tMap[t[i]] !== s[i]) {
            return false;
        }
    }

    return true;
};
const s = "egg";
const t = "add";
console.log(is_Isomorphic(s, t)); // Output: true
