function openLightBox(id) {
    var lightBox = document.getElementById('lightBox');
    var btn = document.getElementById("openProduct");
    var span = document.getElementsByClassName("lightBox__content__close")[0];

    lightBox.style.display = "flex";

    span.onclick = function () {
        lightBox.style.display = "none";
    }

    var xmlhttp = new XMLHttpRequest();
    var output = '';

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var products = Object.values(data.potions);
            
            for (i = 0; i < products.length; i++) {
                if (products[i].id === id){
                    output += '<div class="lightBox__content__product__image">';
                    output += '<img src="images/products/' + products[i].image + '">';
                    output += '</div>';
                    output += '<div class="lightBox__content__product__description">';
                        output += '<p class="lightBox__content__product__description__name">' + products[i].name + '</p>';
                        output += '<p class="lightBox__content__product__description__name">Use/Efect </p>';
                        output += '<p class="lightBox__content__product__description__text">' + products[i].effect + '</p>';
                        output += '<p class="lightBox__content__product__description__name">Ingredients </p>';
                            for (j = 0; j < products[i].ingredients.length; j++) {
                                output += '<p class="lightBox__content__product__description__text">' + products[i].ingredients[j] + '</p>';
                            }
                        output += '<p class="lightBox__content__product__description__name">Price: </p>';
                        output += '<p class="lightBox__content__product__description__price">$ ' + products[i].price + '</p>';
                        output += '<div class="lightBox__button"> <p>ADD TO CART</p> </div>';
                    output += '</div>';
                }
            }
            document.getElementById('openProduct').innerHTML = output;
        }
    };

    xmlhttp.open("GET", "assets/js/potions.json", true);
    xmlhttp.send();
}