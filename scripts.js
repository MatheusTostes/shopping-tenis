const productsSectionEl = document.getElementsByClassName('products')[0]
let itemsList = ''

// const createWhatsLink = (id) => {
//   console.log(dynamicLink);
// }

const populateSite = () => {
  shoesList.map((shoes) => {
      const dynamicLink = `https://api.whatsapp.com/send?phone=5551993106007&text=Ol%C3%A1,%20tenho%20interesse%20no%20produto%20de%20id:%20${shoes.id}.%20Imagem:%20https://shopping-tenis.vercel.app/shoes/${shoes.id}.jpeg`
      const item = 
      `
      <a href=${dynamicLink} target='_blank'>
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
          <button class="product-buy-btn" onclick='createWhatsLink(${shoes.id})'>COMPRAR</button>
        </div>
      </a>
      `
  
      itemsList += item
  })
  
  productsSectionEl.insertAdjacentHTML( 'afterbegin', itemsList )
}

window.onload = () => {
  populateSite()
}