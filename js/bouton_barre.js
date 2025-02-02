
// Fonction d'encodage en base64 du texte dans la zone d'écriture 
function encode(){
    var content = document.getElementById("text-editor").innerHTML

    let bs64 = btoa(encodeURIComponent(content));

    document.getElementById("bs64_encode").value = bs64
}


// Fonction de décodage en base64 du texte dans la zone d'écriture 
function decode(){
    var bs64_encode = document.getElementById("bs64_decode").value;

    let bs64 = decodeURIComponent(atob(bs64_encode));

    document.getElementById("text-editor").innerHTML = bs64;
}


// Fonction de téléchargement du fichier encodé en base64
function download(){
    var filename = document.getElementById("filename-input").value

    // Encodage en Bs64
    var content = document.getElementById("text-editor").innerHTML

    let bs64 = btoa(encodeURIComponent(content));

    // Création Système de téléchargement
    var blob = new Blob([bs64], {type: "text/plain"});

    var url = URL.createObjectURL(blob);

    var link = document.createElement("a");

    link.href = url;
    link.download = filename + ".txt";
    link.click();

    const dialog = document.getElementById("filename");
    dialog.close();

    

}
// Fonction d'ouverture de fichier et de décodage de base64
function open_file(){
    let filetxt = document.getElementById("upload_file");
    let textzone = document.getElementById("text-editor");
    const dialog = document.getElementById("uploadfile");

    let file = filetxt.files[0];

    if(file){
        let reader = new FileReader();
        reader.onload = function(){
            var bs64_encode = reader.result;

            let bs64 = decodeURIComponent(atob(bs64_encode));

            textzone.innerHTML = bs64;
        };
        reader.readAsText(file);
    };

    dialog.close();
}


// Fonction d'ouverture du modal OPEN FILE
function open_modal_open(){
    const dialog = document.getElementById("uploadfile");
    dialog.showModal();
}


// Fonction de fermeture du modal OPEN FILE
function close_modal_open(){
    const dialog = document.getElementById("uploadfile");
    dialog.close();
}


// Fonction d'ouvrir du modal DOWNLOAD
function open_modal_download() {
    const dialog = document.getElementById("filename");
    dialog.showModal(); // Utilisation de showModal pour bloquer le fond

}


// Fonction de fermeture du modal DOWNLOAD
function close_modal_download() {
    const dialog = document.getElementById("filename");
    dialog.close();

}

// Fonction d'ouvrir du modal PARAMETRE
function open_modal_parametre() {
    const dialog = document.getElementById("parametre");
    dialog.showModal(); // Utilisation de showModal pour bloquer le fond

}


// Fonction de fermeture du modal PARAMETRE
function close_modal_parametre() {
    const dialog = document.getElementById("parametre");
    dialog.close();

}