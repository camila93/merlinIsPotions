function loadProducts() {
    requestJson();
}

function requestJson() {
    var xmlhttp = new XMLHttpRequest();
    var output = '';

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var products = Object.values(data.potions);

            for (i = 0; i < products.length; i++) {
                console.log('products[]', products[i]);
                var potion = products[i];
                output += '<div class="content__grid__product" onclick="openLightBox(' + products[i] + ')">';
                output += '<div class="content__grid__product__image">';
                output += '<img src="images/products/' + products[i].image + '">';
                output += '</div>';
                output += '<div class="content__grid__product__description">';
                output += '<p class="content__grid__product__description__name">' + products[i].name + ' - </p>';
                output += '<p class="content__grid__product__description__price"> $ ' + products[i].price + '</p>';
                output += '</div>';
                output += '</div>';
            }

            document.getElementById('loadProduct').innerHTML = output;
        }
    };

    xmlhttp.open("GET", "assets/js/potions.json", true);
    xmlhttp.send();
}
