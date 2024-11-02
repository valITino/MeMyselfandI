function countWords(text) {
    const array = text.split(',');
    console.log(array)
    let anzahlWorter = 0;
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
        anzahlWorter++;

    }


    console.log("Anzahl: " + anzahlWorter)
    return array.length;
}

document.getElementById("root").innerHTML = countWords("hallo,was,ist,das");