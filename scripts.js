const productsSectionEl = document.getElementsByClassName('products')[0]
let itemsList = ''

shoesList.map((shoes) => {
    const item = 
    `
    <div class="product">
      <div class="product-img">
        <img src="./shoes/${shoes.id}.jpeg" alt=""/>
      </div>
      <div class="product-data">
        <p class="product-name">cod: ${shoes.id}</p>
        <p class="product-class">${shoes.mark}</p>
      </div>
      <p class="product-buy-method">${shoes.method}</p>
      <p class="product-discount">R$ ${(shoes.price+30).toFixed(2)}</p>
      <p class="product-price">R$ ${shoes.price.toFixed(2)}</p>
      <button class="product-buy-btn">COMPRAR</button>
    </div>
    `

    itemsList += item
})

console.log(productsSectionEl);

productsSectionEl.insertAdjacentHTML( 'afterbegin', itemsList )