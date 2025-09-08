let bli = "huh let";
var bloup = "ah var"
try {
    if (true) {
        let huhscoped = "lol"/* c'est QUE dans le block la"*/
        var ahglobale = " oui"
        console.log(huhscoped, ahglobale);
    }
}
catch (error) {
    console.info("I caught the error");
    /* console.log(huhscoped);* ce n'est definis que dans le bloc precedent donc ic ica ne s'affichera pas*/
    console.log(ahglobale);
}
