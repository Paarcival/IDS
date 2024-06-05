document.querySelector('#servicios-scroll').addEventListener('click',(event) => {
    document.querySelector('#servicios').scrollIntoView({behavior : 'smooth'})    
})

document.querySelector('#nosotros-scroll').addEventListener('click', even => {
    document.querySelector('#nosotros').scrollIntoView({behavior : 'smooth'})
})

document.querySelector('#contacto-scroll').addEventListener('click', event =>{
    document.querySelector('.contact-form').scrollIntoView({behavior : 'smooth'})
    document.querySelector('#nombre').focus({preventScroll: true})
})