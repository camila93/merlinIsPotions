function openLightBox(potion) {
    var lightBox = document.getElementById('lightBox');
    var btn = document.getElementById("openProduct");
    var span = document.getElementsByClassName("lightBox__content__close")[0];

    lightBox.style.display = "flex";

    span.onclick = function () {
        lightBox.style.display = "none";
    }
    console.log('potion', potion);
    
    // requestJson();
}

// function requestJson() {
//     var xmlhttp = new XMLHttpRequest();
//     var output = '';

//     xmlhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var data = JSON.parse(this.responseText);
//             potions = data.potions;
//             products = Object.values(potions);

//             for (i = 0; i < products.length; i++) {
//                 output += '<div class="content__grid__product" onclick="openLightBox(products[i].id)">';
//                 output += '<div class="content__grid__product__image">';
//                 output += '<img src="images/products/' + products[i].image + '">';
//                 output += '</div>';
//                 output += '<div class="content__grid__product__description">';
//                 output += '<p class="content__grid__product__description__name">' + products[i].name + ' - </p>';
//                 output += '<p class="content__grid__product__description__price"> $ ' + products[i].price + '</p>';
//                 output += '</div>';
//                 output += '</div>';
//             }

//             document.getElementById('openProduct').innerHTML = output;
//         }
//     };

//     xmlhttp.open("GET", "assets/js/potions.json", true);
//     xmlhttp.send();
// }
