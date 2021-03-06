//Topic of the question is to find the top "k" frequent elements (where k is a positive integer) in an array.
//If two elements have the same frequency, return them in alphabetic order.

let words = ["i", "love", "leetcode", "i", "love", "coding"]
let k = 2


//O(nlogn) solution where n is the number of words given
//We use a custom comparator to sort the frequencies

let map = {}

//A counter to find the frequency of the words
for (let i = 0; i < words.length; i++) {
    if (map[words[i]] == undefined) {
        map[words[i]] = 1
    } else {
        map[words[i]]++
    }
}

//Sort the word frequencies
let sorted = Object.keys(map).sort((a,b) => {
    
    //If they have the same frequency, return them alphabetically
    if (map[a] == map[b]) {
        return a > b ? 1 : -1
        
    //If not, return them in descending order
    } else {
        return map[b] - map[a]
    }
})

return sorted.slice(0, k)
