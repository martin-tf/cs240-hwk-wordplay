let statement = true;

var guessedCorrect = [];

let randomWord = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

var root = randomWord(dictionary);

function createRoot() {
    while(statement) {
        if (root.length == 6) {
            statement = false;
            root.split(``);
}
        else {
            root = randomWord(dictionary);
        }
}
}

createRoot();


var combine = function(a, min) {
var listCombinations = function(x,letters,combo,allCombos) {
        if (x == 0) {
            if (combo.length > 0) {
                allCombos[allCombos.length] = combo;
            }
            return;
        }
        for (var j = 0; j < letters.length; j++) {
            listCombinations(x - 1, letters.slice(j + 1), combo.concat([letters[j]]), allCombos);
        }
        return;
    }
    var allCombos = [];
    for (var i = min; i < a.length; i++) {
        listCombinations(i, a, [], allCombos);
    }
    allCombos.push(a);
    return allCombos;
}


var subsets = combine(root.split(``), 3);
//console.log(subsets);

var validWords = [];

function findValidWords() {
    for (var i = 0; i < subsets.length; i++) {
        for (var j = 0; j < dictionary.length; j++) {
            if (subsets[i].join("") == dictionary[j]) {
                validWords.push(subsets[i]);
            }
        }
    }
}

findValidWords();

function replaceLetters(str) {
    var hStr = str.replace(/[a-z]/gi, " - ");
    return hStr;
}

function contains(str, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].join('') == str) {
            return true;
        }
    }
    return false;
}

function printWordHyphens() {
    for (var i = 0; i < validWords.length; i++) {
        if (contains(validWords[i].join(""), guessedCorrect)) {
            console.log(validWords[i].join(""));
        }
        else {
            console.log(replaceLetters(validWords[i].join("")) + "\n");
        }
    }
}

function printWords() {
    for (var i = 0; i < validWords.length; i++) {
        console.log(validWords[i].join(""));
    }
}


function shuffle(word) {
    var sWord = "";
    word = word.split("");
    while (word.length > 0) {
        sWord += word.splice(word.length * Math.random() << 0,1);
    }
    return sWord;
}




// TODO: ADD SOME OFF THAT CSS EDITED TEXT IN THE CONCOLE FROM THE VIDEO YOU FOUND (JAVASCRIPT PRO TIPS - CODE THIS, NOT THAT) (syntax: "'%c [some text]' , 'color: orange; ")
// TODO: PROBABLY WILL NEED TO ADD AN IF STATEMENT THAT MAKES SURE THE CHOSEN WORD HAS A SUBSET OF WORDS THAT CAN BE SPELLED FROM IT AND THAT YOU DON'T GET REPEAT WORDS UNLESS ITS THE ROOT WORD



function game() {
    var guessNum = 0;
    var tar = true;
    var shuffeled = shuffle(root);
    console.log("Welcome to Wordplay! Let's get started")

    while(tar) {

    console.log("Here are your letters:\n")
    console.log(shuffeled);
    console.log(printWordHyphens());
    console.log(validWords);
    
    let input = prompt("Please enter a single word guess")
    
    if (contains(input, validWords)) {
        if (contains(input, guessedCorrect)) {
            alert("The word " + input + " has already been found!");
            console.clear();
            continue;
        }
        alert("Correct " + input + " is a word!");
        guessedCorrect.push(input.split(""));
        console.clear();
    }
    else if (input == null) {
        tar = false;
        console.clear();
        console.log("Thanks for playing!");
        console.log(printWords());
        console.log("Here are your stats:\n" + guessNum + " total guesses | " + guessedCorrect.length + " correct guesses")

    }
    else if (validWords.length == guessedCorrect.length) {
        tar  = false;
        console.log("Congrats you won!") //TODO: ADD A BETTER VICTORY MESSAGE.
    }
    else if (input == "*") {
        shuffeled = shuffle(root);
        console.clear();
    }
    else {
        alert("Oops! " + input + " is not a valid word.")
        console.clear();
    }
        guessNum += 1;
    }
}

game();