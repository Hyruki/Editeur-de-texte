
// Fonction du mode GRAS d'écriture
function gras(){
    document.execCommand("bold", false, null);   
}


// Fonction du mode ITALIQUE d'écriture
function italique(){
    document.execCommand("italic", false, null);   
}


// Fonction du mode SOULIGNE d'écriture
function souligne(){
    document.execCommand("underline", false, null);   
}


// Fonction du mode ALIGNEMENT A GAUCHE d'écriture
function alignerGauche(){
    document.execCommand("justifyLeft", false, null);   
}

// Fonction du mode ALIGNEMENT AU CENTRE d'écriture
function alignerCentre(){
    document.execCommand("justifyCenter", false, null);   
}


// Fonction du mode ALIGNEMENT A DROITE d'écriture
function alignerDroite(){
    document.execCommand("justifyRight", false, null);   
}


// Fonction de changement de taille de la police
function changertaille(){

    var taille = document.getElementById("taille").value;
    
    let selection = window.getSelection();
    if (selection.rangeCount == 0) {
        return;
    }


    let range = selection.getRangeAt(0);
    let parent = range.commonAncestorContainer.parentNode;

    // Vérifie si le texte sélectionné est déjà dans un <span>
    if (parent.tagName === "SPAN") {
        // Si oui, on change simplement la taille
        parent.style.fontSize = taille + "px";
    } else {
        // Sinon, on applique un nouveau <span>
        let span = document.createElement("span");
        span.style.fontSize = taille + "px";
        span.appendChild(range.extractContents());
        range.insertNode(span);
    }
}
