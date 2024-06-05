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


if(screen.width<850){
    let servicios = document.querySelectorAll('.servicio')
    for(let i of servicios){
        i.querySelector('p').remove()
    }
    document.querySelector('.servicios').style = 'display : flex;flex-direction:column'
}
