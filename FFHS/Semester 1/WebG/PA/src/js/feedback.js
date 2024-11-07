document.getElementById("jetztsenden").addEventListener("click", async function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const ratingDesign = document.getElementById("rating-design").value;
    const ratingComponent = document.getElementById("rating-component").value;
    const feedback = document.getElementById("feedback").value.trim();

    let hasError = false;

    // Funktion zur Fehleranzeige
    function highlightError(fieldId, message) {
        const field = document.getElementById(fieldId);
        field.classList.add("error");
        document.getElementById(`${fieldId}-error`).textContent = message;
        hasError = true;
    }

    function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        field.classList.remove("error");
        document.getElementById(`${fieldId}-error`).textContent = "";
    }

    // Validierung
    clearError("name");
    if (name.length < 3 || name.length > 100) {
        highlightError("name", "Name muss zwischen 3 und 100 Zeichen lang sein.");
    }

    clearError("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 200) {
        highlightError("email", "Bitte geben Sie eine gültige E-Mail-Adresse ein (max. 200 Zeichen).");
    }

    clearError("rating-design");
    if (isNaN(ratingDesign) || ratingDesign < 2 || ratingDesign > 10) {
        highlightError("rating-design", "Bewertung Design muss zwischen 1 und 10 sein.");
    }

    clearError("rating-component");
    if (isNaN(ratingComponent) || ratingComponent < 2 || ratingComponent > 10) {
        highlightError("rating-component", "Bewertung Komponente muss zwischen 1 und 10 sein.");
    }

    if (hasError) {
        return;
    }

    // Serveranfrage senden
    const payload = { name, email, ratingDesign, ratingComponent, feedback };
    try {
        const response = await fetch("http://localhost:8080/jetztsenden", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const data = await response.json();
        const popup = document.getElementById("feedback-popup");
        popup.classList.remove("hidden");
        popup.classList.add("show");
        if (response.ok) {
            console.log("Serverantwort erfolgreich:", data.message);
            document.getElementById("popup-message").textContent = data.message || "Feedback erfolgreich gesendet!";
        } else {
            console.error("Serverantwort mit Fehler:", data.message);
            document.getElementById("popup-message").textContent = data.message || "Ein Fehler ist aufgetreten.";
        }


        document.getElementById("popup-close").addEventListener("click", () => {
            popup.classList.add("hidden");
            popup.classList.remove("show");

        });

    } catch (error) {
        alert(`Netzwerkfehler: ${error.message}`);
    }
});
