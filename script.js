// ======================================================
// AS RESTAURANT - PURE JAVASCRIPT
// IMAGE ONLY VERSION
// ======================================================


// ======================================================
// 1. MENU ITEMS DATA
// ======================================================

const MENU_ITEMS = [

  {
    id: '1',
    name: 'Mutton Shinwari Karahi',
    category: 'karahi',
    price: 2450,
    desc: 'Fresh organic mutton cooked in lamb fat, tomatoes, black pepper.',

    // PUT YOUR IMAGE HERE
    image: 'images/karahi.png.webp'
  },

  {
    id: '2',
    name: 'Chicken White Handi',
    category: 'karahi',
    price: 1650,
    desc: 'Boneless chicken simmered in heavy dairy cream and white pepper.',

    // PUT YOUR IMAGE HERE
    image: 'images/white_handi.png.webp'
  },

  {
    id: '3',
    name: 'Royal Mixed BBQ Platter',
    category: 'bbq',
    price: 2850,
    desc: 'Seekh Kabab, Malai Boti & Mutton Chops on sizzling platter.',

    // PUT YOUR IMAGE HERE
    image: 'images/BBQ.png.webp'
  },

  {
    id: '4',
    name: 'Chicken Malai Boti (10 Pcs)',
    category: 'bbq',
    price: 980,
    desc: 'Melt-in-mouth chicken cubes char-grilled over white coals.',

    // PUT YOUR IMAGE HERE
    image: 'images/malai_boti.png.webp'
  },

  {
    id: '5',
    name: 'AS Chicken Dum Biryani',
    category: 'biryani',
    price: 650,
    desc: 'Long-grain basmati with saffron dum, tender chicken and fried onions.',

    // PUT YOUR IMAGE HERE
    image: 'images/biryani.png.webp'
  },

  {
    id: '6',
    name: 'Tandoori Garlic Roghani Naan',
    category: 'tandoor',
    price: 140,
    desc: 'Fresh clay-oven flatbread brushed with desi ghee and sesame.',

    // PUT YOUR IMAGE HERE
    image: 'images/naan.png.webp'
  },

    {
    id: '7',
    name: 'VIP Special Coffee',
    category: 'drinks',
    price: 380,
    desc: 'Smooth, aromatic brew topped with creamy foam and elegant latte art — pure warmth in a cup.',

    // PUT YOUR IMAGE HERE
    image: 'images/coffee.png.webp'
  },

  {
    id: '8',
    name: 'Karak Tandoori Matka Chai',
    category: 'drinks',
    price: 180,
    desc: 'Smoky clay cup tea slow-simmered in buffalo milk and cardamom.',

    // PUT YOUR IMAGE HERE
    image: 'images/chai.png.webp'
  }

];


// ======================================================
// 2. 3D SECTION - NOW IMAGE ONLY
// ======================================================

const DISHES_3D = {

  karahi: {
    title: "AS Special Mutton Shinwari Karahi",
    desc: "Fresh mutton cooked in lamb fat & green chilies.",
    price: 2450,
    portion: "1 KG (Full)",
    image: "images/karahi.png.webp"
  },

  bbq: {
    title: "AS Royal Mixed BBQ Platter",
    desc: "Char-grilled Seekh Kabab & Malai Boti on sizzling iron.",
    price: 2850,
    portion: "Serves 3-4",
    image: "images/BBQ.png.webp"
  },

  biryani: {
    title: "AS Special Chicken Dum Biryani",
    desc: "Fragrant basmati rice with saffron & fried onions.",
    price: 650,
    portion: "Single Plate",
    image: "images/biryani.png.webp"
  },

  coffee: {
    title: "VIP Special Coffee",
    desc: "Smooth, aromatic brew topped with creamy foam and elegant latte art — pure warmth in a cup.",
    price: 380,
    portion: "1 Clay Cup",
    image: "images/coffee.png.webp"
  },

  chai: {
    title: "Karak Tandoori Matka Chai",
    desc: "Smoky earthen clay cup tea baked in tandoor.",
    price: 180,
    portion: "1 Clay Cup",
    image: "images/chai.png.webp"
  }

};


let current3DKey = 'karahi';

let cart = [];


// ======================================================
// 3. IMAGE CARD TILT
// ======================================================

const stage = document.getElementById('stage3D');

const card = document.getElementById('card3D');


if (stage && card) {

  // DESKTOP MOUSE

  stage.addEventListener('mousemove', (e) => {

    const rect = stage.getBoundingClientRect();

    const x =
      e.clientX -
      rect.left -
      rect.width / 2;

    const y =
      e.clientY -
      rect.top -
      rect.height / 2;

    const rotX =
      -(y / rect.height) * 20;

    const rotY =
      (x / rect.width) * 20;

    card.style.transform =
      `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

  });


  // RESET

  stage.addEventListener('mouseleave', () => {

    card.style.transform =
      'rotateX(0deg) rotateY(0deg)';

  });


  // MOBILE TOUCH

  stage.addEventListener(
    'touchmove',
    (e) => {

      if (!e.touches[0]) return;

      const rect =
        stage.getBoundingClientRect();

      const x =
        e.touches[0].clientX -
        rect.left -
        rect.width / 2;

      const y =
        e.touches[0].clientY -
        rect.top -
        rect.height / 2;

      const rotX =
        -(y / rect.height) * 15;

      const rotY =
        (x / rect.width) * 15;

      card.style.transform =
        `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

    },
    { passive: true }
  );


  stage.addEventListener('touchend', () => {

    card.style.transform =
      'rotateX(0deg) rotateY(0deg)';

  });

}


// ======================================================
// 4. SWITCH FOOD IMAGE
// ======================================================

function switch3DDish(key, button) {

  current3DKey = key;

  const dish = DISHES_3D[key];

  if (!dish) return;


  // TITLE

  const title =
    document.getElementById('dishTitle');

  if (title) {
    title.innerText = dish.title;
  }


  // DESCRIPTION

  const desc =
    document.getElementById('dishDesc');

  if (desc) {
    desc.innerText = dish.desc;
  }


  // PRICE

  const price =
    document.getElementById('dishPrice');

  if (price) {
    price.innerText =
      `Rs. ${dish.price.toLocaleString()}`;
  }


  // PORTION

  const portion =
    document.getElementById('dishPortion');

  if (portion) {
    portion.innerText =
      dish.portion;
  }


  // ==========================
  // FOOD IMAGE
  // ==========================

  const foodImage =
    document.getElementById('foodImage');

  if (foodImage) {

    if (
      dish.image &&
      dish.image.trim() !== ''
    ) {

      foodImage.src =
        dish.image;

      foodImage.alt =
        dish.title;

      foodImage.style.display =
        'block';

    } else {

      foodImage.removeAttribute('src');

      foodImage.style.display =
        'none';

    }

  }


  // ==========================
  // ACTIVE TAB
  // ==========================

  document
    .querySelectorAll('.dish-tab')
    .forEach(b => {

      b.classList.remove('active');

    });


  if (button) {

    button.classList.add('active');

  }

}


// ======================================================
// 5. RENDER MENU
// ======================================================

function renderMenu(category = 'all') {

  const grid =
    document.getElementById('menuGrid');

  if (!grid) return;


  const filtered =
    category === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter(
          item =>
            item.category === category
        );


  grid.innerHTML =
    filtered.map(item => `

      <div class="menu-card">

        <!-- FOOD IMAGE -->

        <div class="menu-image-box">

          ${
            item.image
              ? `
                <img
                  class="menu-image"
                  src="${item.image}"
                  alt="${item.name}"
                  onerror="this.style.display='none';">
              `
              : ''
          }

        </div>


        <div class="menu-content">

          <div class="card-top">

            <span>
              ${item.name}
            </span>

            <span class="item-price">
              Rs. ${item.price.toLocaleString()}
            </span>

          </div>


          <p class="item-desc">
            ${item.desc}
          </p>


          <div class="card-actions">

            <button
              class="btn btn-whatsapp"
              style="padding:4px 8px;font-size:0.75rem;"
              onclick="orderItemWhatsApp(
                '${item.name}',
                ${item.price}
              )">

              WhatsApp

            </button>


            <button
              class="btn btn-primary"
              style="padding:4px 8px;font-size:0.75rem;"
              onclick="addToCart('${item.id}')">

              Add +

            </button>

          </div>

        </div>

      </div>

    `).join('');

}


// ======================================================
// 6. FILTER MENU
// ======================================================

function filterMenu(category, button) {

  document
    .querySelectorAll('.cat-btn')
    .forEach(b => {

      b.classList.remove('active');

    });


  if (button) {

    button.classList.add('active');

  }


  renderMenu(category);

}


// ======================================================
// 7. CART
// ======================================================

function toggleCart() {

  const drawer =
    document.getElementById('cartDrawer');

  if (drawer) {

    drawer.classList.toggle('open');

  }

}


// ======================================================
// 8. ADD MENU ITEM TO CART
// ======================================================

function addToCart(id) {

  const item =
    MENU_ITEMS.find(
      m => m.id === id
    );

  if (!item) return;


  const existing =
    cart.find(
      c => c.id === id
    );


  if (existing) {

    existing.qty += 1;

  } else {

    cart.push({

      ...item,

      qty: 1

    });

  }


  updateCartUI();

  toggleCart();

}


// ======================================================
// 9. ADD CURRENT FOOD TO CART
// ======================================================

function addCurrent3DToCart() {

  const dish =
    DISHES_3D[current3DKey];

  if (!dish) return;


  const existing =
    cart.find(
      c =>
        c.id ===
        `food-${current3DKey}`
    );


  if (existing) {

    existing.qty += 1;

  } else {

    cart.push({

      id:
        `food-${current3DKey}`,

      name:
        dish.title,

      price:
        dish.price,

      qty: 1

    });

  }


  updateCartUI();

  toggleCart();

}


// ======================================================
// 10. UPDATE CART UI
// ======================================================

function updateCartUI() {

  const count =
    cart.reduce(
      (sum, item) =>
        sum + item.qty,
      0
    );


  const cartCount =
    document.getElementById(
      'cartCount'
    );

  if (cartCount) {

    cartCount.innerText =
      count;

  }


  const total =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price *
        item.qty,
      0
    );


  const cartTotal =
    document.getElementById(
      'cartTotal'
    );

  if (cartTotal) {

    cartTotal.innerText =
      `Rs. ${total.toLocaleString()}`;

  }


  const list =
    document.getElementById(
      'cartItemsList'
    );


  if (!list) return;


  if (cart.length === 0) {

    list.innerHTML = `

      <p style="
        text-align:center;
        color:#777;
        padding:20px;">

        Basket is empty.

      </p>

    `;

    return;

  }


  list.innerHTML =
    cart.map(item => `

      <div class="cart-item-row">

        <div>

          <p style="
            font-size:0.85rem;
            font-weight:700;">

            ${item.name}

          </p>


          <span style="
            color:#f59e0b;
            font-size:0.8rem;">

            Rs.
            ${(item.price * item.qty)
              .toLocaleString()}

          </span>

        </div>


        <div>

          <button
            onclick="
              changeQty(
                '${item.id}',
                -1
              )
            "
            style="
              padding:2px 6px;">

            -

          </button>


          <span style="
            margin:0 4px;
            font-weight:700;">

            ${item.qty}

          </span>


          <button
            onclick="
              changeQty(
                '${item.id}',
                1
              )
            "
            style="
              padding:2px 6px;">

            +

          </button>

        </div>

      </div>

    `).join('');

}


// ======================================================
// 11. CHANGE QUANTITY
// ======================================================

function changeQty(id, delta) {

  const item =
    cart.find(
      c => c.id === id
    );

  if (!item) return;


  item.qty += delta;


  if (item.qty <= 0) {

    cart =
      cart.filter(
        c => c.id !== id
      );

  }


  updateCartUI();

}


// ======================================================
// 12. WHATSAPP CHECKOUT
// ======================================================

function checkoutViaWhatsApp() {

  if (cart.length === 0) {

    alert(
      'Aapki basket khali hai!'
    );

    return;

  }


  const name =
    document
      .getElementById('custName')
      .value
      .trim();


  const phone =
    document
      .getElementById('custPhone')
      .value
      .trim();


  const address =
    document
      .getElementById('custAddress')
      .value
      .trim();


  if (!name || !phone) {

    alert(
      'Please enter Name and Phone #'
    );

    return;

  }


  const items =
    cart.map(item =>

      `• ${item.qty}x ${item.name} (Rs. ${
        (item.price * item.qty)
          .toLocaleString()
      })`

    ).join('\n');


  const total =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price *
        item.qty,
      0
    );


  const msg =

`*Assalam-o-Alaikum AS Restaurant!*

*Order:*

${items}

*Total:* Rs. ${total.toLocaleString()}

*Name:* ${name}

*Phone:* ${phone}

*Address:* ${address || 'Pickup'}`;


  window.open(

    `https://wa.me/923163862958?text=${
      encodeURIComponent(msg)
    }`,

    '_blank'

  );

}


// ======================================================
// 13. SINGLE ITEM WHATSAPP
// ======================================================

function orderItemWhatsApp(
  name,
  price
) {

  const msg =
    `Assalam-o-Alaikum AS Restaurant! I want to order ${name} (Rs. ${price}).`;


  window.open(

    `https://wa.me/923163862958?text=${
      encodeURIComponent(msg)
    }`,

    '_blank'

  );

}


// ======================================================
// 14. CURRENT FOOD WHATSAPP
// ======================================================

function orderCurrent3DWhatsApp() {

  const dish =
    DISHES_3D[current3DKey];

  if (!dish) return;


  orderItemWhatsApp(
    dish.title,
    dish.price
  );

}


// ======================================================
// 15. TABLE RESERVATION
// ======================================================

function handleReservation(e) {

  e.preventDefault();


  const branch =
    document
      .getElementById('resBranch')
      .value;


  const name =
    document
      .getElementById('resName')
      .value;


  const guests =
    document
      .getElementById('resGuests')
      .value;


  const box =
    document.getElementById(
      'reserveSuccess'
    );


  if (!box) return;


  box.innerHTML = `

    ✓ Table reserved for
    <strong>${name}</strong>

    (${guests} persons)

    at
    <strong>${branch}</strong>!

  `;


  box.style.display =
    'block';

}


// ======================================================
// 16. PAGE LOAD
// ======================================================

document.addEventListener(
  'DOMContentLoaded',
  () => {

    renderMenu('all');

    updateCartUI();


    // LOAD FIRST FOOD IMAGE

    switch3DDish(
      'karahi',
      document.querySelector(
        '.dish-tab.active'
      )
    );

  }
);
