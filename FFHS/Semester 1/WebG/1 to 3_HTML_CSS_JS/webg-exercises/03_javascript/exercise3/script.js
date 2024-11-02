/**
 *
 *
 *     Ziel: Üben von Schleifen und Bedingungen in JavaScript.
 *
 *     Erstelle eine Datei aufgabe3.js.
 *     Schreibe eine Funktion fizzBuzz, die alle Zahlen von 1 bis 50 durchläuft.
 *     Für jede Zahl gelten folgende Regeln:
 *     Ist die Zahl durch 3 teilbar, soll „Fizz“ ausgegeben werden.
 *     Ist die Zahl durch 5 teilbar, soll „Buzz“ ausgegeben werden.
 *     Ist die Zahl durch 3 und 5 teilbar, soll „FizzBuzz“ ausgegeben werden.
 *     Ist die Zahl durch 7 teilbar, soll „Bazz“ ausgegeben werden.
 *     Für alle anderen Zahlen wird einfach die Zahl ausgegeben.
 *     Teste die Funktion, indem du fizzBuzz() aufrufst und das Ergebnis in der Konsole ausgibst.
 */


function fizzBuzz() {

    let text = "";
    for (let i = 0; i < 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) text += "FizzBuzz";
        else if (i % 3 === 0) text += "Fizz";
        else if (i % 5 === 0) text += "Buzz";
        else if (i % 7 === 0) text += "Bazz";
        else text += i;
        text += "<br/>";
    }
    return text;
}


document.getElementById("root").innerHTML = fizzBuzz();

