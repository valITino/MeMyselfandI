// Array mit Testimonial-Daten
const testimonials = [
    {
        "id": 2,
        "firstname": "Dietmar",
        "lastname": "Diez",
        "company": "tPuter",
        "quote": "Super Beratung, geniale Umsetzung und aussergewöhnlich sympathisches Team! Wunschlos Glücklich",
        "avatar": "https://web-modules.dev/storage/apicontents/testimonials/RNJbd8MB2dcA6bp4bDV9.jpg",
        "likes_count": 1
    },
    {
        "id": 9,
        "firstname": "Alex",
        "lastname": "Alberti",
        "company": "Desktor GmbH",
        "quote": "Zuverlässig und kompetent - das alles in einem sehr angenehnehmen Klima.",
        "avatar": "https://web-modules.dev/storage/apicontents/testimonials/y44qK1NDTSlkcaYFuDfZ.jpg",
        "likes_count": 0
    },
    {
        "id": 5,
        "firstname": "Manfred",
        "lastname": "Metzger",
        "company": "TECHIP Inc.",
        "quote": "Spitzen Service zu guten Preise.",
        "avatar": "https://web-modules.dev/storage/apicontents/testimonials/2suzN2WWiErzu7o6Nf3T.jpg",
        "likes_count": 5
    },
    {
        "id": 6,
        "firstname": "Adolf",
        "lastname": "Aumüller",
        "company": "Cyberint GmbH",
        "quote": "Mehrere Jahre Erfahrung in der Branche lassen mich klar das Fazit ziehen: Mit diesen Leuten werde die Projekte erfolgreich umgesetzt und fristgerecht realisiert.",
        "avatar": "https://web-modules.dev/storage/apicontents/testimonials/JqmpNuvKPfOUeE8txaDb.jpg",
        "likes_count": 0
    },
    {
        "id": 3,
        "firstname": "Annemarie",
        "lastname": "Addo",
        "company": "Miss Computer",
        "quote": "Meine Ideen wurden wahrgenommen und mit der Erfahrung des Teams angereichert - so macht Zusammenarbeit Freude!",
        "avatar": "https://web-modules.dev/storage/apicontents/testimonials/JUtCceHJz7nedtRaSDpL.jpg",
        "likes_count": 0
    },
    {
        "id": 7,
        "firstname": "Florentin",
        "lastname": "Filus",
        "company": "Computia",
        "quote": "Nach vielen wechselnden Partnern und eher bescheidenen Ergebnissen habe ich hier endlich die Leute für mein Tag-Team gefunden!",
        "avatar": "https://web-modules.dev/storage/apicontents/testimonials/PCvLvPwHdCLE20WeVIYg.jpg",
        "likes_count": 0
    },
    {
        "id": 10,
        "firstname": "Melissa",
        "lastname": "Meinert",
        "company": "G-Tronix",
        "quote": "Auf Google habe ich schon die Bestwertung hinterlassen, gerne stehe ich auch hier mit meinem Namen für eine Empfehlung!",
        "avatar": "https://web-modules.dev/storage/apicontents/testimonials/R7UKGHw8y9vx0m2LbZ0t.jpg",
        "likes_count": 76
    }
];

// Container für Testimonials
const testimonialContainer = document.getElementById("testimonial-section");

// Dynamische Erstellung
testimonials.forEach((testimonial) => {
    const testimonialCard = document.createElement("div");
    testimonialCard.classList.add("testimonial-card");

    const avatar = document.createElement("img");
    avatar.src = testimonial.avatar;
    avatar.alt = `${testimonial.firstname} ${testimonial.lastname}`;
    avatar.classList.add("testimonial-avatar");
    testimonialCard.appendChild(avatar);

    const name = document.createElement("h3");
    name.textContent = `${testimonial.firstname} ${testimonial.lastname}`;
    name.classList.add("testimonial-name");
    testimonialCard.appendChild(name);

    const company = document.createElement("p");
    company.textContent = testimonial.company;
    company.classList.add("testimonial-company");
    testimonialCard.appendChild(company);

    const quote = document.createElement("blockquote");
    quote.textContent = testimonial.quote;
    quote.classList.add("testimonial-quote");
    testimonialCard.appendChild(quote);

    const likes = document.createElement("p");
    likes.textContent = `Likes: ${testimonial.likes_count}`;
    likes.classList.add("testimonial-likes");
    testimonialCard.appendChild(likes);

    testimonialContainer.appendChild(testimonialCard);
});
