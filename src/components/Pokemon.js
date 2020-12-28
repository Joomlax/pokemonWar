import React from 'react';



class Pokemon extends React.Component {


    state = {
        "pokemons-faction1": [
            {
                Name: "Pikachu",
                Icon: "https://www.flaticon.com/svg/static/icons/svg/188/188987.svg",
                AttackPower: "",
                DefensePower: "",
                TotalHealth: "",
                id: 1,
                canUsable: true
            },
            {
                Name: "Bulbasaur",
                Icon: "http://www.rw-designer.com/icon-image/14434-256x256x8.png",
                AttackPower: "",
                DefensePower: "",
                TotalHealth: "",
                id: 2,
                canUsable: true
            },
            {
                Name: "Snorlax",
                Icon: "https://www.flaticon.com/svg/static/icons/svg/189/189001.svg",
                AttackPower: "",
                DefensePower: "",
                TotalHealth: "",
                id: 3,
                canUsable: true
            }
        ],
        "pokemons-faction2": [
            {
                Name: "Charizard",
                Icon: "https://cdn.dribbble.com/users/1088894/screenshots/2631953/charizard-shot.jpg?compress=1&resize=800x600",
                AttackPower: "",
                DefensePower: "",
                TotalHealth: "",
                id: 4,
                canUsable: true
            },
            {
                Name: "Mewtwo",
                Icon: "https://i.pinimg.com/originals/ef/07/74/ef0774a46a2116d3201c252459328540.jpg",
                AttackPower: "",
                DefensePower: "",
                TotalHealth: "",
                id: 5,
                canUsable: true
            },
            {
                Name: "Ditto",
                Icon: "https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/ditto-pokemon-nintendo-video-game-gaming-gartoon-monster-512.png",
                AttackPower: "",
                DefensePower: "",
                TotalHealth: "",
                id: 6,
                canUsable: true
            }
        ]
    }



    render() {
        return (
            <div>
                
                <h4>Faction 1</h4>

                <div id="faction-1">
                    <ul className="list-group">
                        {this.state['pokemons-faction1'].map(pokemon => (
                            <button onClick={() => this.props.pokemonCall(pokemon)} key={pokemon.id}>
                                <li className="list-group-item d-flex justify-content-between align-items-center" >
                                    {pokemon.Name}
                                    
                                    <img src={pokemon.Icon} style={{ width: "30px", height: "30px" }} alt="Pokemon Icon" />
                                    <span className="badge badge-primary badge-pill">Pokemon Id: {pokemon.id } </span>
                                </li>
                            </button>
                        ))}
                    </ul>
                </div>

                
                <h4>Faction 2</h4>
                <div id="faction-2">
                    <ul className="list-group">
                        {this.state['pokemons-faction2'].map(pokemon => (
                            <button onClick={() => this.props.pokemonCall(pokemon)} key={pokemon.id}>
                                <li className="list-group-item d-flex justify-content-between align-items-center" >
                                    {pokemon.Name}
                                    <img src={pokemon.Icon} style={{ width: "30px", height: "30px" }} alt="Pokemon Icon" />
                                    <span className="badge badge-primary badge-pill">Pokemon Id: {pokemon.id} </span>
                                </li>
                            </button>
                        ))}
                    </ul>
                </div>


            </div>
        );
    }
};


export default Pokemon;

