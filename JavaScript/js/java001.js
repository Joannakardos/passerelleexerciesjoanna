let huh = "huh let";
var ah = "ah var"
try {
    if (true) {
        let huhscoped = "lol"/* c'est que dans le block la"*/
        var ahglobale = " oui"
        console.log(huhscoped, ahglobale);
    }
catch (error) {
        console.log(huhscoped);
        console.log(ahglobale);
    }
}
</head >