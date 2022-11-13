let explore = document.querySelector('#explore')

explore.addEventListener('mouseover',() => {
    explore.style.transitionDuration = '1s'    
    explore.style.marginLeft = '-320px'
} )
explore.addEventListener('mouseout',() => {    
    explore.style.marginLeft = '30px'
} )

const mediaQuery = window.matchMedia('(min-width: 768px)')

