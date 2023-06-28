const introText = document.getElementById('intro')
const map = document.getElementById('mapa')
const playground = document.getElementById('playground')
const ice = document.getElementById('ice')
const mainImage = document.getElementById('mainImage')
const home = document.getElementById('home')
const end = document.getElementById('end')

function showEnd(){
    end.classList.remove('unvisible')
    mainImage.src="./assets/hpb.jpg"
}

function hideHome(){
    home.classList.add('unvisible')
    showEnd()
}

function showHome(){
    home.classList.remove('unvisible')
    mainImage.src="./assets/sleep.jpg"
}
function hideIce(){
    ice.classList.add('unvisible')
    showHome()
}
function showIce(){
    ice.classList.remove('unvisible')
    mainImage.src="./assets/ice.jpg"
}

function hidePlayground(){
    playground.classList.add('unvisible')
    showIce()
}

function showPlayground(){
    playground.classList.remove('unvisible')
    mainImage.src="./assets/bread.jpg"
}

function hideMaps(){
    map.classList.add('unvisible')
    showPlayground()
}

function showText(){
    map.classList.remove('unvisible')

}

function hideIntroText(){
    introText.classList.add('unvisible')
    showText()
}




