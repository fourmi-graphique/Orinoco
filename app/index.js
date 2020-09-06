let url = (`http://localhost:3000/api/furniture`)
// Index.html
onload = function () {
  fetch(url)
    .then((response) => response.json())
    .then((cardName) => {
      for (let i = 0; i < cardName.length; i++) {
        const {
          name,
          description,
          imageUrl,
          price,
          _id
        } = cardName[i];
        const linkCard = document.createElement("a");
        linkCard.setAttribute("href", "../pages/produits.html?_id=" + _id);
        linkCard.classList.add("index__item--link", "col-lg-6");
        const img = document.createElement("img");
        img.setAttribute("src", imageUrl);
        img.classList.add("index__item--img", "rounded", "mx-auto", "d-block");
        const txt = document.createElement("div");
        txt.classList.add("index__item--txt");
        const txtDesc = document.createElement("div");
        txtDesc.classList.add("index__item--txtdesc");
        const txtPrice = document.createElement("div");
        txtPrice.classList.add("index__item--price");
        txt.innerText = name;
        txtDesc.innerText = description;
        txtPrice.innerText = price + " €";
        linkCard.appendChild(img);
        linkCard.appendChild(txt);
        linkCard.appendChild(txtDesc);
        linkCard.appendChild(txtPrice);
        document.getElementById("index__item--body").appendChild(linkCard);
      }
    })
    .catch((err) => console.log('Erreur :' + err));
};