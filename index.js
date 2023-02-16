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
				console.log("Hello World!");
			}
		});
	});
});

// Der Code sucht sich alle Buttons mit der Klasse "show-answer".
// Danach fügt er jedem Button ein Klick Event hinzu.Antwort
// Wenn der Buton geklickt wird, sucht er sich das nächste Element und kontrolliert ob es eine Antwort ist.
// Wenn es sich um eine Antwort handelt wird die CSS Klasse (die das Element versteckt) sichtbar gemacht.

document.addEventListener("DOMContentLoaded", function () {
	// JavaScript-Code hier
	var bookmarkButton = document.getElementById("bookmark_button");
	// Button-Element aus dem DOM auswählen// Event-Listener hinzufügen
	bookmarkButton.addEventListener("click", function () {
		// Bild des Buttons verändern

		console.log("Hello World!");
	});
});

document.addEventListener("DOMContentLoaded", function () {
	var bookmarkButton = document.getElementById("bookmarktest");

	bookmarkButton.addEventListener("click", function () {
		bookmarkButton.classList.toggle("bookmarked");
		var bookmarkIcon = bookmarkButton.querySelector(
			"./icons/bookmark_white.png"
		);
		var bookmarkText = bookmarkButton.querySelector(".bookmark-text");

		if (bookmarkButton.classList.contains("bookmarked")) {
			bookmarkIcon.src = "./icons/bookmark_white.png";
			bookmarkText.innerHTML = "Bookmarked";
		} else {
			bookmarkIcon.src = "./icons/bookbookmark_whitemark.png";
			bookmarkText.innerHTML = "Bookmark";
		}
	});
});
