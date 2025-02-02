var color_mode = 0

// Fonction de changement de couleur de la barre horizontale
// Changement de couleur ROUGE
function red_change(){
    document.getElementById("up_line").style.backgroundColor = "#a52a2a"
    localStorage.setItem("head_color", "#a52a2a")
}

// Changement de couleur BLEU
function blue_change(){
    document.getElementById("up_line").style.backgroundColor = "#386986"
    localStorage.setItem("head_color", "#386986")

}

// Changement de couleur VERT
function green_change(){
    document.getElementById("up_line").style.backgroundColor = "#38865f"
    localStorage.setItem("head_color", "#38865f")

}

// Changement de couleur VIOLLET
function green_change(){
    document.getElementById("up_line").style.backgroundColor = "#5a3886"
    localStorage.setItem("head_color", "#5a3886")

}

// Fonction du Mode SOMBRE et Mode ECLAIRE
function color_change(iscookie=false){
    var mode = document.getElementById("color_mode_span")

    if(color_mode == 1){
        // initialisation
        mode.textContent = "dark_mode"
        if(!iscookie){
            color_mode = 0
        }
        localStorage.setItem("color_mode", 1)


        document.body.style.backgroundColor = "#0f0f0f";
        document.body.style.color = "white";

        var buttons = document.getElementsByClassName("button");
        var len = buttons.length;

        for(var i=0; i<len; i++){
            buttons[i].style.backgroundColor = "#222222";
            buttons[i].style.color = "white";
        }

        document.getElementById("taille").style.backgroundColor = "#222222"
        document.getElementById("taille").style.color = "white"

        document.getElementById("text-editor").style.backgroundColor = "#303030"
        document.getElementById("text-editor").style.color = "white"

        var modals = document.getElementsByClassName("modal");
        var len_modal = modals.length;
    
        for(var i=0; i<len_modal; i++){
            modals[i].style.borderColor = "white"
        }

        document.getElementById("parametre").style.borderColor = "white"


    }
    else{
        // initialisation
        mode.textContent = "light_mode"
        if(!iscookie){
            color_mode = 1
        }
        localStorage.setItem("color_mode", 0)


        document.body.style.backgroundColor = "#e7e7e7";
        document.body.style.color = "black";

        var buttons = document.getElementsByClassName("button");
        var len = buttons.length;

        for(var i=0; i<len; i++){
            buttons[i].style.backgroundColor = "white";
            buttons[i].style.color = "black";
        }

        document.getElementById("taille").style.backgroundColor = "white";
        document.getElementById("taille").style.color = "black";


        document.getElementById("text-editor").style.backgroundColor = "white";
        document.getElementById("text-editor").style.color = "black";

        var modals = document.getElementsByClassName("modal");
        var len_modal = modals.length;

        for(var i=0; i<len_modal; i++){
            modals[i].style.borderColor = "black"
        }

        document.getElementById("parametre").style.borderColor = "black"



    }
}


// Management du système de cookies
function cookie_management(){

    let head_color = localStorage.getItem("head_color")
    let color_mode_cookie = localStorage.getItem("color_mode")

    console.log(head_color)
    console.log(color_mode_cookie)

    // Mise en place du cookie de mode Sombre et Clair
    if(color_mode_cookie != null){
        color_mode = color_mode_cookie
        color_change(true)
        if(color_mode==0){
            color_mode = 1
        }else{
            color_mode = 0
        }
    }
    else{
        color_mode = 0
    }

    // Mise en place du cookie des couleurs de la barre horizontale du haut
    if(head_color != null){
        document.getElementById("up_line").style.backgroundColor = head_color
    }

}
