let longestPrefix = (strs) => {
    if (strs.length === 0) return ""
    let largest = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < largest.length && largest[j] === strs[i][j] && j < strs[i].length) {

            j++
        }
        largest = largest.slice(0, j)
        if (largest === "") break;
    }
    return largest
}
console.log(longestPrefix(["flower", "flow", "flight"]));
