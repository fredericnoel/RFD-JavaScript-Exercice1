var resultat = "<ul>";
var compteur = 0;

for (var i = -12728 ; i < 16857 ; i += 17) {
  if (i % 23 == 0) {
    compteur++;
    resultat += "<li>" + i;
    // resultat = resultat + "<li>" + i + "</li>";

    resultat += "<ul>";
    for (var j = 0 ; j < 11 ; j++) {
      resultat += "<li>" + j + "</li>";
    }
    resultat += "</ul>";
    resultat += "</li>";
  }
}

resultat += "</ul>";

document.write(resultat);
alert(compteur);
