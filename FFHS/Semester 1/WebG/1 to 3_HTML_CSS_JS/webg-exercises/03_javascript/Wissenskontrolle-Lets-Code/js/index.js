// Get DOM elements
const inputField = document.getElementById("inputField");
const validationDropdown = document.getElementById("validationDropdown");
const validateButton = document.getElementById("validateButton");
const feedbackMessage = document.getElementById("feedbackMessage");
const historyList = document.getElementById("historyList");

// Validation logic
validateButton.addEventListener("click", () => {
    const inputValue = inputField.value.trim();
    const validationType = validationDropdown.value;
    let result = "";

    // Perform validation based on the selected type
    switch (validationType) {
        case "filled":
            result = inputValue ? "Erfüllt die Bedingung 'Ausgefüllt'" : "Erfüllt NICHT die Bedingung 'Ausgefüllt'";
            break;

        case "numeric":
            result = /^\d+$/.test(inputValue) ? "Erfüllt die Bedingung 'Numerisch'" : "Erfüllt NICHT die Bedingung 'Numerisch'";
            break;

        case "length":
            result =
                inputValue.length >= 10 && inputValue.length <= 20
                    ? "Erfüllt die Bedingung 'Zwischen 10 und 20 Zeichen'"
                    : "Erfüllt NICHT die Bedingung 'Zwischen 10 und 20 Zeichen'";
            break;

        case "contains":
            result =
                inputValue.includes("X") && inputValue.includes("3") && inputValue.includes("$")
                    ? "Erfüllt die Bedingung 'Enthält X, 3 und $'"
                    : "Erfüllt NICHT die Bedingung 'Enthält X, 3 und $'";
            break;

        default:
            result = "Ungültige Validierung ausgewählt.";
    }

    // Display feedback
    feedbackMessage.textContent = result;

    // Add to history
    const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);
    const historyItem = document.createElement("li");
    historyItem.textContent = `[${timestamp}] Die Eingabe "${inputValue}" ${result}.`;
    historyList.appendChild(historyItem);
});
