let btn = document.getElementById("btn")
let image = document.getElementById("image")
let url = "https://pokeapi.co/api/v2/pokemon/"
let hp = document.getElementById("hp")
let attack = document.getElementById("attack")
let defence = document.getElementById("defence")
let speed = document.getElementById("speed")
let pokName = document.getElementById("pok-name")
let type = document.getElementById('type');
let card=document.querySelector(".card")

const color = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#ff0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#efb549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190ff"
}

let getdata = () => {
    let id = Math.ceil(Math.random() * 150)
    let finalurl = url + id
    fetch(finalurl).then(response => response.json()).then(data => {
        generatecard(data)
        console.log(data)
    })
}

let generatecard = (data) => {
    let stathp = data.stats[0].base_stat
    let statattack = data.stats[1].base_stat
    let statdefence = data.stats[2].base_stat
    let statspeed = data.stats[5].base_stat
    let name = data.name.toUpperCase()
    let img = data.sprites.other.dream_world.front_default

    hp.textContent = stathp
    attack.textContent = statattack
    defence.textContent = statdefence
    speed.textContent = statspeed
    pokName.textContent = name
    image.src = img

    let col=color[data.types[0].type.name]
    card.style.background=`radial-gradient(circle at 50% 0%, ${col} 36%, #fff 36%)`

    while (type.firstChild) type.removeChild(type.firstChild);

    data.types.forEach(item => {
        let span = document.createElement("span")
        span.textContent = item.type.name
        span.style.background=`${col}`
        type.appendChild(span)
    });
}

btn.addEventListener("click", getdata)
window.addEventListener("load", getdata)
