//Código de estilos
function changeStyle(style) {
    if (style === 'blanco') {
        // Cambiar estilo de header y footer a blanco
        document.querySelector('header').classList.add('blanco');
        document.querySelector('footer').classList.add('blanco');
        // Restaurar color de fondo de la página si se había cambiado previamente a rosado
        document.body.style.backgroundColor = '';
    } else if (style === 'rosado') {
        // Cambiar color de fondo de la página a rosado
        document.body.style.backgroundColor = 'pink';
        document.querySelector('header').classList.remove('blanco');
        document.querySelector('footer').classList.remove('blanco');
    }
}

function restoreStyle() {
    // Restaurar estilos originales de header y footer
    document.querySelector('header').classList.remove('blanco');
    document.querySelector('footer').classList.remove('blanco');

    document.body.style.backgroundColor = '';
}

//Código para la alerta
document.addEventListener('DOMContentLoaded', function() {

    var imagen1 = document.getElementById('imagen1');
    var imagen2 = document.getElementById('imagen2');
    var imagen3 = document.getElementById('imagen3');


    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName('close')[0];

    // Agregar eventos
    imagen1.addEventListener('click', function() {
        modal.style.display = 'block';
    });


    imagen2.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    imagen3.addEventListener('click', function() {
        modal.style.display = 'block';
    });


    span.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar la ventana modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

