const productos = [
  {
    nombre: "Gold Standard Whey 5lb",
    descripcion: "Proteína de suero premium con 24g por porción. Ideal para recuperación y crecimiento muscular.",
    precio: "$1,599 MXN",
    imagen: "Gold.JPEG"
  },
  {
    nombre: "C4 Original Pre-Workout",
    descripcion: "Energía explosiva y concentración máxima para tus entrenamientos intensos.",
    precio: "$899 MXN",
    imagen: "C4.JPEG"
  },
  {
    nombre: "Total War Pre-Workout",
    descripcion: "Preentreno de alto rendimiento con cafeína, beta-alanina y citrulina.",
    precio: "$999 MXN",
    imagen: "WAR.JPEG"
  },
  {
    nombre: "ISO 100 Dymatize 5lb",
    descripcion: "Proteína hidrolizada de rápida absorción. Ideal post-entreno.",
    precio: "$2,199 MXN",
    imagen: "ISO.JPEG"
  },
  {
    nombre: "NitroTech Whey Gold",
    descripcion: "Fórmula avanzada con péptidos de suero para máxima recuperación.",
    precio: "$1,699 MXN",
    imagen: "Nitro.WEBP"
  }
];

const catalogo = document.getElementById("catalogo");

productos.forEach(producto => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  tarjeta.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h2>${producto.nombre}</h2>
    <p>${producto.descripcion}</p>
    <p class="precio">${producto.precio}</p>
    <button class="boton">Comprar</button>
  `;

  catalogo.appendChild(tarjeta);
});
