
const cards = document.querySelectorAll('.card');
const carritoItems = document.querySelector('.carrito-items');
const totalPrecio = document.querySelector('.total-precio');
const btnComprar = document.getElementById('btn-comprar');

let carrito = [];


function agregarAlCarrito(id) {
    const proyecto = cards.find(card => card.dataset.id === id);
    const nombreProyecto = proyecto.querySelector('h3').textContent;
    const precioProyecto = proyecto.querySelector('.precio').textContent;

    const itemCarrito = document.createElement('li');
    itemCarrito.classList.add('carrito-item');
    itemCarrito.innerHTML = `
    <p>${nombreProyecto}</p>
    <span>Precio: ${precioProyecto}</span>
    <button data-id="${id}">Eliminar</button>`;

    carritoItems.appendChild(itemCarrito);

    actualizarCarrito(id);
}


function actualizarCarrito(id) {
    const proyecto = carrito.find(proyecto => proyecto.id === id);
    if (proyecto) {
    proyecto.cantidad++;
} else {
    carrito.push({ id, cantidad: 1 });
}

    calcularTotalPrecio();
}


function calcularTotalPrecio() {
    let total = 0;
    carrito.forEach(proyecto => {
    const precioProyecto = cards.querySelector(`.card[data-id="${proyecto.id}"] .precio`).textContent;
    total += proyecto.cantidad * parseInt(precioProyecto)});

    totalPrecio.textContent = `${total} Tokens`;
}


function eliminarDelCarrito(id) {
    const itemCarrito = carritoItems.querySelector(`[data-id="${id}"]`);
    itemCarrito.remove();

    carrito = carrito.filter(proyecto => proyecto.id !== id);

    calcularTotalPrecio();
}


cards.forEach(card => {
    const btnAgregar = card.querySelector('button');
    btnAgregar.addEventListener('click', () => {
    const id = btnAgregar.dataset.id;
    agregarAlCarrito(id)});
});

carritoItems.addEventListener('click', (event) => {
    const btnEliminar = event.target.closest('button');
    if (btnEliminar) {
    const id = btnEliminar.dataset.id;
    eliminarDelCarrito(id)}
});


btnComprar.addEventListener('click', () => {
    alert('¡Gracias por tu compra!');
});
