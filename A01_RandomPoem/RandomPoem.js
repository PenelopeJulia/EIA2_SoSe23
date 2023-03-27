"use strict";
var RandomPoem;
(function (RandomPoem) {
    // Penelope Julia Vogel
    // A1: Random Poem
    // 26.03.2022
    // Arrays with subjects, verb und object
    let subject = ["Julia", "Hanna", "Tom", "Tina", "Jonathan", "Carmen", "Pedro"];
    let predicate = [" sagt", " isst", " hat Angst vor", " träumt", " singt gerne", " hasst", " schreit", " läuft mit dem Familienhund Karsten"];
    let object = [" Tomaten", " Nichts", " Spagetthi", " von einer anderen Welt", " Spinnen", "  Lieder", " nach Hause", " dem Familienhund Karsten"];
    // Making sure that the array works
    // console.log(subject); console.log(verb); console.log(object);
    // For-Schleife,that counts backwards through the arrays
    for (let i = subject.length; i >= 1; i--) {
        // Declare Variable that triggers function and contains value of randomized words
        let randomPoem = getVerse(subject, predicate, object);
        // Poem appears in the console
        console.log(randomPoem);
    }
    // Function that gets triggered by for-schleife
    function getVerse(_subject, _verb, _object) {
        // Randomize Words in Array. Source: https://timonweb.com/javascript/how-to-get-a-random-value-from-a-javascript-array/#:~:text=Math.floor%20%28Math.random%20%28%29%20%2A%20colors.length%29%2C%20gives%20us%20a,index%20larger%20than%20the%20length%20of%20the%20array.
        let subjectRandom = Math.floor(Math.random() * _subject.length);
        let verbRandom = Math.floor(Math.random() * _verb.length);
        let objectRandom = Math.floor(Math.random() * _object.length);
        // Variable that contains the randomly generated words from the arrays on the top. With Spaces in between so that the words don't stick to eachother.
        let randomVerse = _subject[subjectRandom] + "" + _verb[verbRandom] + "" + _object[objectRandom];
        // Value of first randomized word gets removed from _subject-array
        _subject.splice(subjectRandom, 1);
        _verb.splice(verbRandom, 1);
        _object.splice(objectRandom, 1);
        // Value from randomVerse is returned to the function
        return randomVerse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoem.js.map