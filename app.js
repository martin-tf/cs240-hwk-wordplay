let statement = true;

let guess = prompt("Take a guess");

let randomWord = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

var word = randomWord(dictionary);
while(statement) {
if (word.length == 6) {
    console.log("random word is", word);
    console.log(word.split(''));
    statement = false;
    console.log(word.split(``).length);
    word.split(``);
}
else {
    word = randomWord(dictionary);
}
}

var combine = function(a, min) {
var fn = function(n,src,got,all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    var all = [];
    for (var i = min; i < a.length; i++) {
        fn(i, a, [], all);
    }
    all.push(a);
    return all;
}

var subsets = combine(word.split(``), 3);

console.log(subsets);
