function increaseTextSize() {
    alert("Hello, world!");
    // Default front size = 16px => changes to 24pt = 32px => 2em 
    document.getElementById("inputText").style.fontSize = "2em";
}

function changeStyle() {
    alert("change style");
    const fancyShmancy = document.getElementById("fancyShmancy");
    const boringBetty = document.getElementById("boringBetty");
    const text = document.getElementById("inputText");
    if(fancyShmancy.checked){
        text.style.fontWeight = "bold";
        text.style.textDecoration = "underline";
        text.style.color = "blue";
    }
    if(boringBetty.checked){
        text.style.fontWeight = "normal";
        text.style.textDecoration = "none";
        text.style.color = "black";
    }
}

function upperCase(){
    const text = document.getElementById("inputText");
    text.value = text.value.toUpperCase();
    // Split text into an array of sentences
    /*
        filter(): create new array with all elements that pass the test impelemnted by 
        the callback Boolean() function. Noted that there an empty string at the end of 
        array as the result of last period in the text, filter(Boolean) get rid of this
        empty string; otherwise, there'll be an addition -Moo after the last period.
    */
    const arrayOfSentences = text.value.split(".").filter(Boolean);
    /* 
        map(): apply a provided callback function to each element of an array and returns
        a new array containing the results of applying the callback to each element
    */ 
    const modifiedArrayOfSentences = arrayOfSentences.map(sentence => {
        // Split each sentence into an array of words
        const arrayOfWords = sentence.trim().split(" ");
        if(arrayOfWords.length > 0){
            // Append "-Moo" to the last word 
            arrayOfWords[arrayOfWords.length-1] += "-Moo";
        }
        // Join words back into a sentence
        return arrayOfWords.join(" ");
    });
    // Join modified sentences back into text
    text.value = modifiedArrayOfSentences.join(". ");
    text.value += ".";
}
