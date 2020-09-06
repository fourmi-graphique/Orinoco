// product page
onload = function () {
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('_id')
  console.log(id);
  let url = (`http://localhost:3000/api/furniture/${id}`)
  fetch(url)
    .then(
      (response) => response.json()
    ).then(
      (cardProd) => {
        const {
          name,
          description,
          imageUrl,
          price,
        } = cardProd
        const cardProduct = document.createElement('div');
        cardProduct.classList.add('card-body');
        const img = document.createElement('img');
        img.setAttribute('src', imageUrl);
        img.classList.add('rounded', 'mx-auto', 'd-block');
        const txt = document.createElement('div');
        txt.classList.add('card-product-txt');
        const txtDesc = document.createElement('div');
        txtDesc.classList.add('card-product-txtdesc');
        const prix = document.createElement('div');
        prix.classList.add('card-product-prix');
        txt.innerText = name;
        txtDesc.innerText = description;
        prix.innerText = price + (' €');
        cardProduct.appendChild(img);
        cardProduct.appendChild(txt);
        cardProduct.appendChild(txtDesc);
        cardProduct.appendChild(prix);
        document.getElementById('card-product').appendChild(cardProduct);
      }
    )
    .then(
      (cardTint) => {
        for (let i = 0; i < cardTint.length; i++) {
          const {
            varnish
          } = cardTint[i];
          console.log(cardTint);
          const choiceTint = document.createElement('option');
          choiceTint.innerText = varnish;
          choiceTint.value = varnish;
          document.getElementById('choiceid').appendChild(choiceTint);
        }
      }
    )
    .catch((err) => console.log('Erreur :' + err));
}


// onload = function(){
//   fetch('http://localhost:3000/api/furniture/').then(
//       (response) => response.json()
//   ).then(
//     (cardTint) => {
//       for (let i = 0; i < cardTint.length; i++){
//       const { varnish } = cardTint[0];
//       console.log(cardTint);
//       const choiceTint = document.createElement('option');
//       choiceTint.innerText = varnish[i];
//       choiceTint.value = varnish[i];
//       document.getElementById('choiceid').appendChild(choiceTint);
//       }
//     }
//   )
// }