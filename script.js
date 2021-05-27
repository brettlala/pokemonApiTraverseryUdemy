const pokeContainer = document.getElementById("pokemon-container");
const pokeCount = 250;
const colors = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: 'green',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

const main_types = Object.keys(colors);

const passPoke = async ()=> {
    for(i = 1; i <= pokeCount; i++) {
        await fetchPokemon(i);
    }
}

const fetchPokemon = async(pokemon) => {
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const res = await url.json();
    const singlePoke = document.createElement('div');
    singlePoke.classList.add('pokemon');

    let name = res.name[0].toUpperCase() + res.name.slice(1);
    let number = res.id.toString().padStart(3, '0');
    const types = res.types.map(type => type.type.name);
    const new_types = types.find(type => type.indexOf(type) > -1);
    singlePoke.style.background = colors[new_types];

    singlePoke.innerHTML = `
    <div class="pokemon">
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${res.id}.png" alt="">
        </div>
        <div class="info-container">
            <span class="number">#${number}</span>
            <h2 class="name">${name}</h2>
            <p>Type: <span class="type">${new_types}</span> </p>
        </div>
    </div>
    `;

    pokeContainer.appendChild(singlePoke);

}

passPoke();











