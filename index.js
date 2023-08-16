class product {
  constructor(nombre, cantidad, año) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.año = año;
  }
}

class UI {
  addProduct(producto) {
    const contenedor = document.createElement("div");
    contenedor.classList.add ("bgcolore-success");

    contenedor.innerHTML = `
        <div class="alert alert-primary d-flex mensaje" role="alert" >
            <p>${producto.nombre}</p>
            <p>${producto.cantidad}</p>
            <p>${producto.año}</p>
        </div>
    `;
    const ventana = document.getElementById("ventanaemergente");
    ventana.prepend(contenedor);
  }
}

// DOM
document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {

    const nombre = document.getElementById ("nombre").value;
    const cantidad = document.getElementById ("cantidad").value;
    const año = document.getElementById ("año").value;

    const producto = new product(nombre, cantidad, año);
    const ui = new UI();

    ui.addProduct(producto);

    event.preventDefault();
  });
