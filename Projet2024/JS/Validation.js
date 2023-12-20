 function validateForm() {
    // Validation des champs obligatoires (matricule, nom, filiere)
    var Matricule = document.getElementById("Matricule").value;
    var Nom = document.getElementById("Nom").value;
    var Filiere = document.getElementById("Filiere").value;

    if (Matricule === "" || Nom === "" || Filiere === "") {
        alert("Veuillez remplir tous les champs obligatoires.");
        return false;
    }

    return true;
}