const carro = new Carrito();
const carrito = document.getElementById(`carrito`);
const productos = document.getElementById(`lista-productos`);
const listaProductos = document.getElementById(`productos-carrito`);

cargarEventos();

function cargarEventos (){
    productos.addEventListener(`click`, (e) => {carro.añadirProducto(e)})
}