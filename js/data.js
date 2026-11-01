/*
  La Birrieria — contenido editable del sitio.
  Todo dato pendiente de confirmar con el dueño lleva la marca [PLACEHOLDER].
  Precios tomados del menú impreso (noviembre 2026).
*/
window.LB = {
  negocio: {
    nombre: "La Birrieria",
    slogan: "Lo mejor de la birria",
    ciudad: "Turrialba, Cartago",
    // Número del menú ("Servicio exprés 7151-2453").
    // [PLACEHOLDER] Confirmar que este número recibe WhatsApp.
    whatsapp: "50671512453",
    telefonoVisible: "7151-2453",
    instagram: "labirrieria__",
    facebook: "", // [PLACEHOLDER] usuario de Facebook, si tienen
    tiktok: "", // [PLACEHOLDER] usuario de TikTok, si tienen
    direccion: "Turrialba centro", // [PLACEHOLDER] dirección exacta con señas
    mapsUrl: "https://maps.app.goo.gl/UsgdoxPhNPQ6Hca86",
    coords: { lat: 9.9107299, lng: -83.6896525 },
    horario: { abre: 11, cierra: 23, texto: "Todos los días · 11:00 a.m. – 11:00 p.m." },
    expres: "El costo del servicio exprés se confirma por WhatsApp según tu zona.", // [PLACEHOLDER] zonas y tarifa
    pagos: "Efectivo y SINPE Móvil", // [PLACEHOLDER] confirmar métodos de pago
  },

  // Fotos tomadas del Instagram del negocio. [PLACEHOLDER] Confirmar permiso de uso.
  favoritos: [
    {
      id: "birriatacos", img: "assets/birriatacos.webp", nombre: "Birriatacos",
      texto: "Tortilla de maíz, birria de res o pollo a la plancha, queso mozzarella y acompañamientos.",
      desde: 2900, variante: "3 ×", boton: "3 tacos", w: 543, h: 470,
    },
    {
      id: "birriaramen", img: "assets/birriaramen.webp", nombre: "Birriaramen",
      texto: "La fusión perfecta: ramen en consomé de birria con queso, cebolla y culantro.",
      desde: 3500, w: 335, h: 300,
    },
    {
      id: "burripizza", img: "assets/burripizza.webp", nombre: "Burripizza",
      texto: "Burrito de gran tamaño gratinado con pepperoni. Incluye papas y salsa.",
      desde: 5500, w: 500, h: 398,
    },
    {
      id: "mini-burgers", img: "assets/miniburgers.webp", nombre: "4 Mini Burgers",
      texto: "Dos de pollo tipo Crispy Burger y dos de carne tipo Beast Burger, con salsas de la casa.",
      desde: 5990, w: 345, h: 443,
    },
  ],

  menu: [
    {
      id: "birriatacos-cat", titulo: "Birriatacos",
      nota: "Tortilla de maíz, birria de res o pollo a la plancha, queso mozzarella y acompañamientos. Adiciona papas por ₡990.",
      items: [
        { id: "birriatacos", nombre: "Birriatacos", variantes: [
          ["3 ×", 2900], ["4 ×", 3700], ["6 ×", 5500], ["8 ×", 7000], ["10 ×", 8500], ["12 ×", 9900] ] },
        { id: "papas-tacos", nombre: "Adicionar papas", precio: 990 },
      ],
    },
    {
      id: "quesabirrias", titulo: "Quesabirrias o Quesacrispys",
      nota: "Tortilla de trigo, birria de res o pollo crispy, queso mozzarella y acompañamientos. Adiciona papas por ₡990.",
      items: [
        { id: "quesabirrias", nombre: "Quesabirrias / Quesacrispys", variantes: [
          ["4 ×", 2800], ["6 ×", 3800], ["8 ×", 4800], ["10 ×", 5800] ] },
        { id: "papas-quesas", nombre: "Adicionar papas", precio: 990 },
      ],
    },
    {
      id: "antojos", titulo: "Antojos con birria",
      items: [
        { id: "birriaramen", nombre: "Birriaramen", precio: 3500 },
        { id: "platanos-goat", nombre: "Plátanos GOAT", precio: 3500 },
        { id: "birriaempanada", nombre: "Birriaempanada", precio: 3500 },
        { id: "birriarice", nombre: "Birriarice", precio: 3500 },
        { id: "birriapatacones", nombre: "Birriapatacones", precio: 4200 },
      ],
    },
    {
      id: "burritos", titulo: "Burritos y wraps",
      nota: "De gran tamaño, incluyen papas y salsa como acompañamiento.",
      items: [
        { id: "quesasteak", nombre: "Quesasteak", precio: 4500 },
        { id: "burribirria", nombre: "Burribirria", precio: 5000 },
        { id: "burritico", nombre: "Burritico", precio: 5000 },
        { id: "burricrispy", nombre: "Burricrispy", precio: 5500 },
        { id: "burripizza", nombre: "Burripizza", precio: 5500 },
        { id: "chimichanga", nombre: "Chimichanga", precio: 5900 },
        { id: "supreme-wrap", nombre: "Supreme Wrap", precio: 5900 },
      ],
    },
    {
      id: "sandwich", titulo: "Sándwich y hamburguesas",
      nota: "De gran tamaño, incluyen papas y salsa como acompañamiento.",
      items: [
        { id: "birriadogs", nombre: "Birriadogs", precio: 3990 },
        { id: "cheese-burger", nombre: "Cheese Burger", precio: 3990 },
        { id: "torta-chivo", nombre: "Torta Chivo", precio: 4700 },
        { id: "beast-burger", nombre: "Beast Burger", precio: 5500 },
        { id: "crispy-burger", nombre: "Crispy Burger", precio: 5500 },
        { id: "torta-milanesa", nombre: "Torta Milanesa", precio: 5500 },
        { id: "cheese-steak", nombre: "Cheese Steak Sandwich", precio: 5500 },
        { id: "mini-burgers", nombre: "4 Mini Burgers", precio: 5990,
          desc: "2 de pollo (tipo Crispy Burger) y 2 de carne (tipo Beast Burger) con salsas de la casa." },
      ],
    },
    {
      id: "papas", titulo: "Papas y nachos",
      items: [
        { id: "orden-papas", nombre: "Orden de papas", precio: 2000 },
        { id: "birrialdosas", nombre: "Birrialdosas", precio: 2900 },
        { id: "nuggets-papas", nombre: "Nuggets con papas", precio: 3990 },
        { id: "birriafries", nombre: "Birriafries", precio: 3990 },
        { id: "salchibirria", nombre: "Salchibirria o Salchicrispy", precio: 3990 },
        { id: "papas-rancheras", nombre: "Papas rancheras", precio: 4500 },
        { id: "birriafries-grandes", nombre: "Birriafries grandes", precio: 4990 },
        { id: "papas-goat", nombre: "Papas GOAT", precio: 6500 },
        { id: "chicken-pizza-fries", nombre: "Chicken Pizza Fries", precio: 6500 },
        { id: "big-papa-nachos", nombre: "Big Papa Nachos", precio: 6500 },
      ],
    },
    {
      id: "combos-personales", titulo: "Combos personales",
      nota: "Incluyen papas y refresco de 250 ml.",
      items: [
        { id: "combo-personal", nombre: "Combo de personal", precio: 5500,
          desc: "2 birriatacos + 2 quesabirrias + birriafries + refresco y acompañamientos." },
        { id: "birriatacos-junior", nombre: "Birriatacos Junior", precio: 3500,
          desc: "3 birriatacos + papas + refresco y acompañamientos." },
        { id: "quesas-junior", nombre: "Quesas Junior", precio: 3500,
          desc: "4 quesabirrias + papas + refresco y acompañamientos." },
      ],
    },
    {
      id: "compartir", titulo: "Combos para compartir",
      nota: "Para 3 a 4 personas.",
      items: [
        { id: "taquiza", nombre: "Taquiza", precio: 11000, desc: "14 birriatacos + papas y acompañamientos." },
        { id: "combo-quesas", nombre: "Combo Quesas", precio: 11000, desc: "18 quesabirrias + papas y acompañamientos." },
      ],
    },
    {
      id: "mini-menu", titulo: "Mini menú",
      nota: "Incluyen papas.",
      items: [
        { id: "mini-birriadog", nombre: "1 Birriadog", precio: 2600 },
        { id: "nuggets-peq", nombre: "Nuggets pequeños", precio: 3000 },
        { id: "mini-torta-chivo", nombre: "Mini Torta Chivo", precio: 3500 },
        { id: "mini-torta-milanesa", nombre: "Mini Torta Milanesa", precio: 3700 },
        { id: "dos-mini-burgers", nombre: "Orden de 2 Mini Burgers", precio: 3800 },
      ],
    },
    {
      id: "postres", titulo: "Postres",
      items: [
        { id: "nachito-dulces", nombre: "Nachito dulces", precio: 2500 },
        { id: "sweet-quesadillas", nombre: "Sweet quesadillas", precio: 2500 },
      ],
    },
    {
      id: "salsas", titulo: "Salsas de la casa",
      items: [
        { id: "consome", nombre: "Consomé de birria", precio: 400 },
        { id: "mayo-jalapeno", nombre: "Mayo jalapeño", precio: 400 },
        { id: "mostaza-miel", nombre: "Mostaza miel", precio: 400 },
        { id: "mayo-chipotle", nombre: "Mayo chipotle", precio: 400 },
        { id: "mayo-sriracha", nombre: "Mayo sriracha", precio: 400 },
        { id: "spicy-ketchup", nombre: "Spicy ketchup", precio: 400 },
        { id: "bbq", nombre: "BBQ", precio: 400 },
      ],
    },
    {
      id: "adicionales", titulo: "Adicionales",
      items: [
        { id: "guacamole", nombre: "Guacamole", precio: 500 },
        { id: "pico-gallo", nombre: "Pico de gallo", precio: 500 },
        { id: "ensalada-repollo", nombre: "Ensalada de repollo", precio: 500 },
        { id: "salsa-queso", nombre: "Salsa de queso", precio: 500 },
        { id: "frijoles", nombre: "Frijoles molidos", precio: 500 },
      ],
    },
    {
      id: "refrescos", titulo: "Refrescos",
      nota: "Gaseosas y tés fríos.",
      items: [
        { id: "refresco", nombre: "Refresco", variantes: [
          ["250 ml", 400], ["355 ml", 700], ["600 ml", 1000], ["1,5 L", 1600], ["2,5 L", 1800] ] },
      ],
    },
  ],
};
