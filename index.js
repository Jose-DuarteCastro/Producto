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

<div class="alert alert-primary d-flex flex-column mensaje ct" role="alert">
    <div class="d-flex align-items-start">
       <div class="d-flex">
        <p class="p-2 ">${producto.nombre}</p>
        <p class="p-2 ">${producto.cantidad}</p>
        <p class="p-2 ">${producto.año}</p>
        </div>
        <div class=" ms-auto ">
        <a class="btn btn-danger" id="eliminar">Eliminar</a>
        </div>
    </div>
</div>
    `;
    const ventana = document.getElementById("ventanaemergente");
    ventana.prepend(contenedor);


    this.showmessage ();
  }

  //Permite resetear los datos del formulario
  resetear (){
    document.getElementById("formulario").reset();
  }

  delete () {
    const eliminar = document.getElementById("eliminar");
    eliminar.addEventListener("click", ()=>{
        eliminar.parentNode.parentNode.parentNode.remove ();
    });
  }
showmessage () {
    const principal = document.getElementById("principal");
    const mensaje = document.createElement ("div");
    mensaje.innerHTML = `
    <div class="alert alert-success" role="alert">
    Se agrego el producto de forma correcta
  </div>
    ` 
   
    principal.prepend(mensaje);

    setTimeout (()=>{
        mensaje.remove ();

    },1000);


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
    ui.delete ();

    event.preventDefault();

    ui.resetear ();

  });
