class Personnage {
  constructor(nom, type, niveau, pv, degat,attaqueS) {
    this.nom = nom;
    this.type = type;
    this.niveau = niveau;
    this.pv = pv;
    this.degat = degat;
    this.attaqueS = attaqueS;
  }

  get propriété() {
    return this.niveau + this.pv + this.degat;
  }

  set propriété(valeur) {
    [this.niveau, this.pv, this.degat] = valeur.split(" ");
  }

  attaquer(lol) {
    var e = lol.pv - lol.degat;
    this.niveau += 1;
    console.log(
      this.nom +
        " attaque " +
        lol.nom +
        " en lancant un sort " +
        "( " +
        this.degat +
        "dégàts) "
    );
    console.log(
      this.nom +
        " (" +
        this.type +
        ") a " +
        this.pv +
        " point de vie et est au niveau " +
        this.niveau
    );
    if (e <= 0) {
      console.log(lol.nom + " a perdu !");
    } else {
      console.log(
        lol.nom +
          " (" +
          lol.type +
          ") a " +
          e +
          " point de vie et est au niveau " +
          lol.niveau
      );
    }
    var a = this.pv - this.degat;
    lol.niveau += 1;
    console.log(
      lol.nom +
        " attaque " +
        this.nom +
        " en lancant un sort " +
        "( " +
        lol.degat +
        "dégàts) "
    );
    console.log(
      lol.nom +
        " (" +
        lol.type +
        ") a " +
        lol.pv +
        " point de vie et est au niveau " +
        lol.niveau
    );
    if (a <= 0) {
      console.log(this.nom + " a perdu !");
    } else {
      console.log(
        this.nom +
          " (" +
          this.type +
          ") a " +
          a +
          " point de vie et est au niveau " +
          this.niveau
      );
    }

    var c = e - this.attaqueS;
    console.log(
      this.nom +
        " attaque " +
        lol.nom +
        " en lancant un sort " +
        "( " +
        this.attaqueS +
        "dégàts) "
    );

    if (c <= 0) {
      console.log(lol.nom + " a perdu !");
    } else {
      console.log(
        lol.nom +
          " (" +
          lol.type +
          ") a " +
          e +
          " point de vie et est au niveau " +
          lol.niveau
      );
    }
  }
}   

var guerrier = new Personnage(
  prompt("quel est le nom de votre personnage guerrier"),
  "guerrier",
  1,
  200,
  50,
  100
);

var magicien = new Personnage(
  prompt("quel est le nom de votre personnage magicien"),
  "magicien",
  1,
  80,
  70,
  120
);

console.log(
  guerrier.nom +
    " (" +
    guerrier.type +
    ") " +
    " a " +
    guerrier.pv +
    " point de vie et est au niveau " +
    guerrier.niveau
);
console.log(
  magicien.nom +
    " (" +
    magicien.type +
    ") " +
    " a " +
    magicien.pv +
    " point de vie et est au niveau " +
    magicien.niveau
);

guerrier.attaquer(magicien);

