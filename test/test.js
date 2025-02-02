function formatText(command) {
    document.execCommand(command, false, null);
}

function changeFontSize(size) {
    document.execCommand("fontSize", false, "7"); // Hack pour modifier la taille
    let elements = document.querySelectorAll("font[size='7']");
    elements.forEach(el => el.removeAttribute("size")); // Supprime l'ancien attribut size
    elements.forEach(el => el.style.fontSize = size); // Applique la nouvelle taille
}
