function handlerEvent() {
    let link = document.querySelectorAll('.container__elementoLista');
    let fondo = document.querySelectorAll('.container__fondo')

    link.forEach ( (cadalink, i) => {
        link[i].addEventListener('mouseenter', () => {

            link.forEach ( (cadalink, i) => {
                link[i].classList.add('desactive');
                fondo[i].classList.remove('active');
            });
            link[i].classList.remove('desactive');
            fondo[i].classList.add('active');
        });

        link[i].addEventListener('mouseleave', () => {

            link.forEach ( (cadalink, i) => {
                link[i].classList.remove('desactive');
                fondo[i].classList.remove('active');
            });
        });
    });
};

window.onload = handlerEvent;