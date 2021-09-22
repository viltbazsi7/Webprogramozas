function delegal(szulo, gyerek, mikor, mit) {
    function esemenyKezelo(esemeny) {
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);
        if (esemenyKezeloje.contains(legkozelebbiKeresettElem)) {
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }
    szulo.addEventListener(mikor, esemenyKezelo);
}