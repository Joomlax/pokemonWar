import React from 'react';
import L, { map, marker } from 'leaflet';


var mymap, circle;


var markers = [];
class Map extends React.Component {

    state = {
        logs: "",
        insideMap: [],
        x: 0,
        y: 0,
        pokemon: null,
        pokemonsFaction1: [
            {
                Name: "Pikachu",
                Icon: "https://www.flaticon.com/svg/static/icons/svg/188/188987.svg",
                AttackPower: null,
                DefensePower: null,
                TotalHealth: null,
                id: 1,
                canUsable: true
            },
            {
                Name: "Bulbasaur",
                Icon: "http://www.rw-designer.com/icon-image/14434-256x256x8.png",
                AttackPower: null,
                DefensePower: null,
                TotalHealth: null,
                id: 2,
                canUsable: true
            },
            {
                Name: "Snorlax",
                Icon: "https://www.flaticon.com/svg/static/icons/svg/189/189001.svg",
                AttackPower: null,
                DefensePower: null,
                TotalHealth: null,
                id: 3,
                canUsable: true
            },
            {
                Name: "Charizard",
                Icon: "https://cdn.dribbble.com/users/1088894/screenshots/2631953/charizard-shot.jpg?compress=1&resize=800x600",
                AttackPower: null,
                DefensePower: null,
                TotalHealth: null,
                id: 4,
                canUsable: true
            },
            {
                Name: "Mewtwo",
                Icon: "https://i.pinimg.com/originals/ef/07/74/ef0774a46a2116d3201c252459328540.jpg",
                AttackPower: null,
                DefensePower: null,
                TotalHealth: null,
                id: 5,
                canUsable: true
            },
            {
                Name: "Ditto",
                Icon: "https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/ditto-pokemon-nintendo-video-game-gaming-gartoon-monster-512.png",
                AttackPower: null,
                DefensePower: null,
                TotalHealth: null,
                id: 6,
                canUsable: true
            }
        ]
    }



    componentDidMount() {
        let prevIdMarker
        mymap = L.map('mapid').setView([51.505, -0.09], 13);
        var pokemon1;



        //var pokemon1 = L.marker([x, y]).addTo(mymap);
        //var pokemon2 = L.marker([51.5, -0.10]).addTo(mymap);

        /*
       
        */

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiZGd1bHlhc2FyIiwiYSI6ImNrajYwZjdoYzYzNTIyc2xiNGkwZHFibW0ifQ.mqAXzMxXZJ197aIL5DsOQA'
        }).addTo(mymap);

    }

    componentDidUpdate() {


    }


    createArea = (xCoor, yCoor) => {
        this.state.x = xCoor;
        this.state.y = yCoor;

        if (!mymap) {
            mymap = L.map('mapid').setView([51.505, -0.09], 13);
        } else {
            circle = L.circle([this.state.x, this.state.y], {
                color: 'red',
                fillColor: 'red',
                fillOpacity: 0.5,
                radius: 1500
            }).addTo(mymap);
        }

        this.render();

    }


    setAttack = (idMarker) => {

        if (this.prevIdMarker != idMarker) {
            
            //Simulation
            
            //console.log("Insıde map: " + idMarker)
            let attackFrom, attackTo;

            attackFrom = prompt("Attack From (id):")
            attackTo = prompt("Attack To (id):")
            attackFrom -= 1
            attackTo -= 1

            if (attackFrom +1 <= 3) {
                if (attackTo +1 > 3) {
                    let distanceAttDef = this.state.pokemonsFaction1[attackFrom].AttackPower - this.state.pokemonsFaction1[attackTo].DefensePower;
                    if(distanceAttDef>0) {
                        this.state.pokemonsFaction1[attackTo].TotalHealth = this.state.pokemonsFaction1[attackTo].TotalHealth - distanceAttDef;
                    }
                    alert(this.state.pokemonsFaction1[attackFrom].Name + " attacked to " + this.state.pokemonsFaction1[attackTo].Name + " it damages:" + distanceAttDef + " health of attacked: " + this.state.pokemonsFaction1[attackTo].TotalHealth)
                    
                    if (this.state.pokemonsFaction1[attackTo].TotalHealth <= 0) {
                        this.prevIdMarker = idMarker
                        this.state.pokemonsFaction1[attackTo - 1].canUsable = false
                        alert(this.state.pokemonsFaction1[attackTo].Name + " is defeat!")
                        var new_markers = []
                        markers.forEach(function (marker) {
                            if (marker._id == idMarker) mymap.removeLayer(marker)
                            else new_markers.push(marker)
                        })
                        markers = new_markers

                    }
                } else {
                    alert("Cannot attack same faction! Please do not try again -_-")
                }
                this.prevIdMarker = idMarker
            } else if (attackFrom +1  > 3) {
                if (attackTo +1 <= 3) {
                    let distanceAttDef = this.state.pokemonsFaction1[attackFrom].AttackPower - this.state.pokemonsFaction1[attackTo].DefensePower;
                    if(distanceAttDef>0) {
                        this.state.pokemonsFaction1[attackTo].TotalHealth = this.state.pokemonsFaction1[attackTo].TotalHealth - distanceAttDef;
                    }
                    this.state.pokemonsFaction1[attackTo].TotalHealth = this.state.pokemonsFaction1[attackTo].TotalHealth - distanceAttDef;
                    console.log(this.state.pokemonsFaction1[attackTo])
                    alert(this.state.pokemonsFaction1[attackFrom].Name + " attacked to " + this.state.pokemonsFaction1[attackTo].Name + " it damages:" + distanceAttDef + " health of attacked: " + this.state.pokemonsFaction1[attackTo].TotalHealth)
                    this.prevIdMarker = idMarker
                    if (this.state.pokemonsFaction1[attackTo].TotalHealth <= 0) {
                        this.prevIdMarker = idMarker
                        //this.state.pokemonsFaction1[attackTo - 1].canUsable = false
                        alert(this.state.pokemonsFaction1[attackTo].Name + " is defeat!")
                        var new_markers = []
                        markers.forEach(function (marker) {
                            if (marker._id == idMarker) mymap.removeLayer(marker)
                            else new_markers.push(marker)
                        })
                        markers = new_markers

                    }
                } else {
                    alert("Cannot attack same faction! Please do not try again -_-")
                }
            }
        }


    }

    setChanges = (pokemonProp) => {
        if (this.state.pokemonsFaction1[pokemonProp.id - 1].canUsable) {

            var pokemonIcon = L.icon({
                iconUrl: pokemonProp.Icon,
                shadowUrl: pokemonProp.Icon,

                iconSize: [38, 64],
                shadowSize: [0, 0],
                iconAnchor: [22, 94],
                shadowAnchor: [4, 62],
                popupAnchor: [-3, -76]

            });

            //Adds Marker to the map

            var idMarker;
            if (markers.length < 1) idMarker = 0
            else idMarker = markers[markers.length - 1]._id + 1


            this.pokemon1 = L.marker([this.state.x, this.state.y], { icon: pokemonIcon, draggable: true }).on('click', () => {
                this.pokemon1.bindPopup(
                    pokemonProp.Name + "<b> <br /> Please click icon one more to set attributes of pokemon <br /> After set attributes next click will attack </b>"

                ).openPopup().on('click', () => {
                    if (this.state.pokemonsFaction1[pokemonProp.id - 1].AttackPower == null) {
                        this.Attack()
                    } else {

                        if (this.state.insideMap.some(e => {
                            return e < 3
                        }) && this.state.insideMap.some(e => {
                            return e > 3
                        })) {
                            this.setAttack(idMarker)
                        }
                    }
                });
            });


            this.pokemon1._id = idMarker
            mymap.addLayer(this.pokemon1)
            markers.push(this.pokemon1)

            let firstLat = this.pokemon1.getLatLng().lat;
            let firstLng = this.pokemon1.getLatLng().lng;
            let pokemon2 = this.pokemon1

            this.pokemon1.on('dragend', function (e) {
                let currentLat = pokemon2.getLatLng().lat;
                let currentLng = pokemon2.getLatLng().lng;
                if (currentLat < (firstLat) + 0.01 && currentLat > (firstLat) - 0.01 && currentLng < (firstLng) + 0.025 && currentLng > (firstLng) - 0.025) {
                    document.getElementById('latitude').value = currentLat;
                    document.getElementById('longitude').value = currentLng
                } else {
                    pokemon2.getLatLng().lat = firstLat;
                    pokemon2.getLatLng().lng = firstLng;
                }
            });
        }
    }


    Attack = () => {
        let pokemonId = this.props.pokemonId.id - 1
        if (this.state.pokemonsFaction1[pokemonId].canUsable) {
            let attPow = prompt("Attack Power")
            let defPow = prompt("Defense Power")
            let totHealth = prompt("Total Health")
            if (attPow != null) {
                this.state.pokemonsFaction1[pokemonId].AttackPower = attPow
            } else {
                alert("Cannot use as null")
            }

            if (defPow != null) {
                this.state.pokemonsFaction1[pokemonId].DefensePower = defPow
            } else {
                alert("Cannot use as null")
            }

            if (totHealth != null) {
                this.state.pokemonsFaction1[pokemonId].TotalHealth = totHealth
            } else {
                alert("Cannot use as null")
            }

            this.state.pokemonsFaction1[pokemonId].canUsable = false

            this.state.insideMap.push(pokemonId + 1)
        }

    }


    render() {
        return (
            <div>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger" onClick={() => { this.createArea(prompt("X (Location of see in map 51.505)"), prompt("Y (Location of see in map -0.09)")) }}>Create area </button>
                </div>

                <form hidden>
                    <label htmlFor="latitude">Latitude:</label>
                    <input id="latitude" type="text" />
                    <label htmlFor="longitude">Longitude:</label>
                    <input id="longitude" type="text" />
                </form>

                <div id="mapid" style={{ width: "100%", height: "800px" }} />

                {this.props.pokemonId != null ? this.setChanges(this.props.pokemonId) : null}

            </div>


        );
    }


};

export default Map;