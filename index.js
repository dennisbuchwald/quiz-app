// Warten, bis die Seite geladen ist
document.addEventListener("DOMContentLoaded", function () {
	// Alle "show-answer"-Buttons abrufen
	var buttons = document.querySelectorAll(".card__button-answer");

	// Für jeden Button eine Klick-Event-Listener hinzufügen
	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			// Das nächste Element nach dem Button abrufen
			var answer = button.nextElementSibling;
			// Kontrollieren ob es sich um eine Antwort handelt
			if (answer.classList.contains("answer")) {
				// Die Antwort anzeigen
				answer.style.display = "block";
			}
		});
	});
});

// Der Code sucht sich alle Buttons mit der Klasse "show-answer".
// Danach fügt er jedem Button ein Klick Event hinzu.Antwort
// Wenn der Buton geklickt wird, sucht er sich das nächste Element und kontrolliert ob es eine Antwort ist.
// Wenn es sich um eine Antwort handelt wird die CSS Klasse (die das Element versteckt) sichtbar gemacht.
