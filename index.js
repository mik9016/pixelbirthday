const introText = document.getElementById('intro')
const map = document.getElementById('mapa')
const playground = document.getElementById('playground')
const ice = document.getElementById('ice')
const mainImage = document.getElementById('mainImage')
const home = document.getElementById('home')
const end = document.getElementById('end')

const input0Wrapper = document.getElementById('input0Wrapper')
const input0 = document.getElementById('letter0')
const introBtn = document.getElementById('introBtn')

const input1Wrapper = document.getElementById('input1Wrapper')
const input1 = document.getElementById('letter1')
const mapBtn = document.getElementById('mapBtn')

const input2Wrapper = document.getElementById('input2Wrapper')
const input2 = document.getElementById('letter2')
const playgroundBtn = document.getElementById('playgroundBtn')

const input3Wrapper = document.getElementById('input3Wrapper')
const input3 = document.getElementById('letter3')
const iceBtn = document.getElementById('iceBtn')

function showError(element){
    const node = document.createElement("p");
    const textnode = document.createTextNode("Spróbuj jeszcze raz! :)");
    node.classList.add('error')
    node.appendChild(textnode);
    element.appendChild(node);
}

function enableBtn(btn){
    btn.disabled = false
}


const answers = {
    3: 'A',
    0: 'E',
    1: 'R',
    2: 'T',
}


function validate(input,answer) {
    return input.value.toString().toUpperCase() === answer
}

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
    if(!validate(input3,answers[2])){
        showError(input3Wrapper)
        return
    }
    ice.classList.add('unvisible')
    showHome()
}
function showIce(){
    ice.classList.remove('unvisible')
    mainImage.src="./assets/ice.jpg"
}

function hidePlayground(){
    if(!validate(input2,answers[1])){
        showError(input2Wrapper)
        return
    }
    playground.classList.add('unvisible')
    showIce()
}

function showPlayground(){
    playground.classList.remove('unvisible')
    mainImage.src="./assets/bread.jpg"
}

function hideMaps(){
    if(!validate(input1,answers[0])){
        showError(input1Wrapper)
        return
    }
    map.classList.add('unvisible')
    showPlayground()
}

function showText(){
    map.classList.remove('unvisible')

}

function hideIntroText(){
    if(!validate(input0,answers[3])){
        showError(input0Wrapper)
        return
    }
    introText.classList.add('unvisible')
    showText()
}




