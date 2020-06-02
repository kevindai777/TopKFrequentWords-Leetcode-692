//Topic of the question is to find the top "k" frequent elements (where k is a positive integer) in an array.
//If two elements have the same frequency, return them in alphabetic order.

//O(n) solution
let words = ["i", "love", "leetcode", "i", "love", "coding"]
let k = 2

let map = {}

//A counter to find the frequency of the words
for (let i = 0; i < words.length; i++) {
    if (map[words[i]] === undefined) {
        map[words[i]] = 1
    } else {
        map[words[i]]++
    }
}

let sorted = Object.keys(map).sort((a,b) => {
    if (map[a] === map[b]) {
        return a > b ? 1 : -1
    } else {
        return map[b] - map[a]
    }
})

return sorted.slice(0, k)
