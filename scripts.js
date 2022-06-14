const productsSectionEl = document.getElementsByClassName('products')[0]
const filtersUlEl = document.getElementsByClassName('filters')[0]
let itemsList = ''
const marks = ['todos', 'adidas', 'nike', 'olympikus', 'reserva', 'caterpillar', 'all-star', 'fila', 'lacoste', 'mizuno', 'outros']
let filtersList = ''

const populateNav = () => {
  marks.map((mark) => {
    const filter = 
    `
    <li onclick=filterMark("${mark}")>
      <p class='filter-name'>${mark.replace('-', ' ')}</p>
    </li>
    `
    filtersList += filter
  })
  
  filtersUlEl.insertAdjacentHTML( 'afterbegin', filtersList )
}

const filterMark = (mark) => {
  productsSectionEl.innerHTML = ''
  let itemsList = ''

  if (mark === 'todos') {
    productsSectionEl.innerHTML = ''
    populateSite()
  }

  shoesList.map((shoes) => {
    if (shoes.mark === mark) {
      const dynamicLink = `https://api.whatsapp.com/send?phone=555197428181&text=Ol%C3%A1,%20tenho%20interesse%20no%20produto%20de%20id:%20${shoes.id},%20na%20categoria%20${shoes.mark}.%20Imagem:%20https://shopping-tenis.vercel.app/shoes/${shoes.id}.jpeg`
      const item = 
      `
        <a class="product" href=${dynamicLink} target='_blank'>
            <div class="product-img">
              <img src="./shoes/${shoes.id}.jpeg" alt=""/>
            </div>
            <div class="product-data">
              <p class="product-name">cod: ${shoes.id}</p>
              <p class="product-class">${shoes.mark.replace('-', ' ')}</p>
            </div>
            <p class="product-buy-method">${shoes.method}</p>
            <p class="product-discount">R$ ${(shoes.price+30).toFixed(2)}</p>
            <p class="product-price">R$ ${shoes.price.toFixed(2)}</p>
            <button class="product-buy-btn"'>COMPRAR</button>
        </a>
      `
  
      itemsList += item
    }

  })
  
  productsSectionEl.insertAdjacentHTML( 'afterbegin', itemsList )

  // if (itemsList.length === 0) {
  //   const empty = 
  //   `
  //   <h1>
  //     Não há produtos na categoria selecionada!
  //   </h1>
  //   `
  //   productsSectionEl.insertAdjacentHTML( 'afterbegin', empty )
  // }
}

const populateSite = () => {
  productsSectionEl.innerHTML = ''

  shoesList.map((shoes) => {
      const dynamicLink = `https://api.whatsapp.com/send?phone=555197428181&text=Ol%C3%A1,%20tenho%20interesse%20no%20produto%20de%20id:%20${shoes.id},%20na%20categoria%20${shoes.mark}.%20Imagem:%20https://shopping-tenis.vercel.app/shoes/${shoes.id}.jpeg`
      const item = 
      `
        <a class="product" href=${dynamicLink} target='_blank'>
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
            <button class="product-buy-btn"'>COMPRAR</button>
        </a>
      `
  
      itemsList += item
  })
  
  productsSectionEl.insertAdjacentHTML( 'afterbegin', itemsList )
}

window.onload = () => {
  populateSite(),
  populateNav()
}