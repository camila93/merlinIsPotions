function openLightBox() {
    var lightBox = document.getElementById('lightBox');
    var btn = document.getElementById("openProduct");
    var span = document.getElementsByClassName("lightBox__content__close")[0];

    lightBox.style.display = "flex";

    span.onclick = function () {
        lightBox.style.display = "none";
    }

    requestJson();
}


function requestJson() {
    var xmlhttp = new XMLHttpRequest();
    var saida = '';

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);

            potions = data.potions;

            products = Array.from(potions);
            console.log('potions', potions);

            // for (i = 0; i < 6; i++) {
            saida += '<div class="content__grid__product">';
            saida += '<div content__grid__product__image">';
            saida += '<img src="images/products/' + potions.image + '">';
            saida += '</div>';
            saida += '<div content__grid__product__description">';
            saida += '<p class="content__grid__product__description__name">' + potions.name + '</p>';
            saida += '<p class="content__grid__product__description__price">' + potions.price + '</p>';
            saida += '</div>';
            // }

            document.getElementById('lightBox').innerHTML = saida;

            // document.getElementById("demo").innerHTML = data.name;
        }
    };
    xmlhttp.open("GET", "assets/js/potions.json", true);
    xmlhttp.send();
}
