$(document).ready(function() {
  document.getElementById('ok').addEventListener('click', input);

    var search = "";
    var req = new XMLHttpRequest();


    function input() {
        search = document.getElementById('search').value;
        req.open('GET', 'http://www.omdbapi.com/?t=' + search, false);
        req.send(null);
        if (req.status == 200) {
            var resultat = JSON.parse(req.responseText);
            var reponse = resultat;
            console.log(resultat);

            // document.getElementById('resultat').innerHTML = `Titre : ${resultat}`;
            $('#resultat').append('<div>''</div>');

        }
    }
});
