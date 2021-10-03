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
            if (!(contains(subsets[i].join(""), validWords))) {
                if (subsets[i].join("") == dictionary[j]) {
                validWords.push(subsets[i]);
                }
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
            console.log(replaceLetters(validWords[i].join("")));
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


function game() {
    var guessNum = 0;
    var tar = true;
    var shuffeled = shuffle(root);
    var lastElement = (validWords.pop());
    guessedCorrect.push(lastElement);
    console.log("%cWelcome to Wordplay! Let's get started", "color: red; font-weight: bold; font-size: larger;");

    while(tar) {
    
    console.log("%cHere is your root word: " + root, "color: black; font-weight: bold;");
    console.log("%cHere are your letters:", "color: black; font-weight: bold;");
    console.log(shuffeled);
    console.log(printWordHyphens());
    console.log(lastElement.join(""));
    
    let input = prompt("Please enter a single word guess")
    
    if (input == null) {
        tar = false;
        console.clear();
        console.log("%cThanks for playing!", "color: red; font-weight: bold; font-size: larger;");
        console.log("%cThis was the root word: " + root, "color: black; font-weight: bold;");
        console.log("%cHere is the list of words made from the root word:", "color: black; font-weight: bold;");
        printWords();
        console.log("%cHere are your stats:\n" + guessNum + " total guesses | " + guessedCorrect.length + " correct guesses", "color: black; font-weight: bold;");

    }
    else if (input == root) {
        alert("You entered the root word.");
        console.clear();
    }
    else if (input == "*") {
        shuffeled = shuffle(root);
        console.clear();
        alert("Letters scrambled")
    }
    else if (input.length < 3){
        alert("Word too short. Words have to be at least 3 letters long.");
        console.clear();
        continue;
    }
    else if (contains(input, validWords)) {
        if (contains(input, guessedCorrect)) {
            alert("The word " + input + " has already been found!");
            console.clear();
            continue;
        }
        alert("Correct " + input + " is a word!");
        guessedCorrect.push(input.split(""));
        console.clear();
        guessNum += 1;
        if (validWords.length + 1 == guessedCorrect.length) {
            tar = false;
            console.log("%cCongrats you won!", "color: red; font-weight: bold; font-size: larger;");
            console.log("%cHere are your stats:\n" + guessNum + " total guesses | " + guessedCorrect.length + " correct guesses", "color: black; font-weight: bold;");
            console.log("%cHere is the list of words:", "color: black; font-weight: bold;");
            printWords();
            console.log("%cThe root word was: " + root, "color: black; font-weight: bold;");
        }
    }
    else {
        alert("Oops! " + input + " is not a valid word.")
        console.clear();
        guessNum += 1;
    }
    }
}

game();