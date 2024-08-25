
// aca se desata un meje de alerta de form enviado cuando se hace click en el boton
const btn = document.querySelector(".botonenviar");

btn.addEventListener("click", mostrarboton);


function mostrarboton(){

 alert("¡¡Formulario enviado correctamente!!");

}

// cambia de color form en caso de pasar moyuse encima


const formulario = document.getElementById('formulario');

formulario.addEventListener("mouseover", cambiacolor);

formulario.addEventListener("mouseout", vuelveoriginal);



function cambiacolor(){

    formulario.style.backgroundColor = '#00FF00';

}

// vuelve a su color original

function vuelveoriginal(){

    formulario.style.backgroundColor = '#f0f0f0'; 

}

//zoom imagenes


//function zoomimagenes(){

 //   document.querySelector('#contenedor-img').addEventListener('mouseover', function() {
 //       this.classList.toggle('zoom');
 //   })
//}

//document.querySelector('#imageZoom').addEventListener('click', function() {
 //  this.classList.toggle('zoom');
//})

//const imagenes = document.querySelectorAll('.galeria');

    const imagenes = document.querySelectorAll('.container img');

    
    imagenes.forEach(imagen => {

        //document.querySelector('.container img').addEventListener('mouseover', function() {
           // this.classList.toggle('zoom');
        //})
        imagen.addEventListener('mouseover', function() {
                this.classList.toggle('zoom');
            })
        

        imagen.addEventListener('mouseout', function() {
            this.classList.toggle('zoom');
        })
    })
        //imagen.style.transform = 'scale(1.2)';
      //});

      //imagen.addEventListener('mouseout', () => {
        //imagen.style.transform = 'scale(1)';   

      //});
    