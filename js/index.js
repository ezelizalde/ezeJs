
const cardsContainer = document.querySelector('.cards'); 
const carritoItems = document.querySelector('.carrito-items');
const totalPrecio = document.querySelector('.total-precio'); 
const btnComprar = document.getElementById('btn-comprar');

let carrito = [];

async function cargarProyectos() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if (!response.ok) {
    throw new Error('Error al cargar proyectos: ' + response.status);
    }

    const proyectos = data.map(proyecto => {
    return {
        id: proyecto.id,
        nombre: proyecto.title,
        imagen: proyecto.featured_media_url || './', 
        descripcion: proyecto.excerpt,
        precio: proyecto.price || 1000
    }
    })

    mostrarProyectos(proyectos);

    } catch (error) {
    console.error('Error:', error);
    }
}

function mostrarProyectos(proyectos) {
    proyectos.forEach(proyecto => {
    const card = document.createElement('.cards');
    card.classList.add('.cards');
    card.id = proyecto.id;

    const img = document.createElement('img');
    img.src = proyecto.imagen;
    img.alt = proyecto.nombre;

    const h3 = document.createElement('h3');
    h3.textContent = proyecto.nombre;

    const p = document.createElement('p');
    p.textContent = proyecto.descripcion;

    const spanPrecio = document.createElement('span');
    spanPrecio.classList.add('precio');
    spanPrecio.textContent = proyecto.precio + ' Tokens';

    const btnAgregar = document.createElement('button');
    btnAgregar.textContent = 'Agregar al carrito'; 
    btnAgregar.dataset.id = proyecto.id;

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(spanPrecio);
    card.appendChild(btnAgregar);

    cardsContainer.appendChild(card);
})

    agregarEventosBotonesAgregar();
}

function agregarEventosBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll('button'); 
    botonesAgregar.forEach(btnAgregar => {
    btnAgregar.addEventListener('click', () => {
        const id = btnAgregar.dataset.id;
        agregarAlCarrito(id);
    })
})
}

function agregarAlCarrito(id) {
    const proyecto = proyectos.find(proyecto => proyecto.id === id);
    if (!proyecto) {
    console.error('Proyecto no encontrado:', id);
    return; 
}

    const nombreProyecto = proyecto.nombre;
    const precioProyecto = proyecto.precio;

    const itemCarrito = document.createElement('li');
    itemCarrito.classList.add('carrito-items'); 
    itemCarrito.innerHTML = `
    <p>${nombreProyecto}</p>
    <span>Precio: <span class="math-inline">\{precioProyecto\} Tokens</span\>
<button data\-id\="</span>{id}">Eliminar</button>`;

    carritoItems.appendChild(itemCarrito);

    actualizarCarrito(id);
}


function actualizarCarrito(id) {
    const proyecto = carrito.find(proyecto => proyecto.id === id)}
    if (proyecto) {
        proyecto.cantidad++;
    } else {
        carrito.push({ id, cantidad: 1 });
    
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
        const btnAgregar = card.querySelector('btn-comprar');
        btnAgregar.addEventListener('click', () => {
        const id = btnAgregar.dataset.id;
        agregarAlCarrito(id)});
    })
    
    carritoItems.addEventListener('click', (event) => {
        const btnEliminar = event.target.closest('btn-eliminar');
        if (btnEliminar) {
        const id = btnEliminar.dataset.id;
        eliminarDelCarrito(id)}
    })
    
    import Swal from 'sweetalert2';
    
    btnComprar.addEventListener('click', () => {
        Swal.fire({
            title: "Felicitaciones",
            text: "Adquiriste tus tokens",
            icon: "success"
        })})