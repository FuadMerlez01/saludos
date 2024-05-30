const myCarouselElement = document.querySelector('#carouselExample')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    ride: true,
    pause: false
})

//agregar un observador al evento carrusel

myCarouselElement.addEventListener('slide.bs.carousel', function(){
    console.log('se muestra un sliler');
    //document.getElementById('veces').innerText = 
    //document.getElementById('ingresaAlgo').innerHTML += '<p>Ha pasado el slide</p>'
});

//funcion modal oara manipular los eventos

const miVetanaEmergente = document.getElementById('ventanaEmergente');

// egregar un observador sobre el modal

miVetanaEmergente.addEventListener('shown.bs.modal', function(event){
    console.log('se esta abriendo el modal');

    // reconocer el elemento que habilita el evento modal
    let boton = event.relatedTarget // etiquetado relacionado
    let mensaje = boton.getAttribute('data-titulo');
    let contenido = boton.getAttribute('data-contenido');
    document.getElementById('tituloModal').innerText = mensaje
    document.querySelector('.modal-body').innerText = contenido
});

miVetanaEmergente.addEventListener('shown.bs.modal', function(){
    console.log('se esta abierto el modal');
});

miVetanaEmergente.addEventListener('hide.bs.modal', function(){
    console.log('se esta cerrando el modal');
});

miVetanaEmergente.addEventListener('hidden.bs.modal', function(){
    console.log('se esta cerrando el modal');
});