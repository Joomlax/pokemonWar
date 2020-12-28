import React from 'react';
import Map from './Map';
import Toolbox from './Toolbox';

let x,y;
class App extends React.Component {
    
    constructor() {
        super()
        this.state= {
            pokemonId:null
        }
    }
    
    pokemonCall3 = (pokemonId2) => {
        this.setState({
            pokemonId: pokemonId2
        })
        
        //this.props.pokemonid = pokemonId;  
    
    }

    area = (xCoor,yCoor) => {
        x = xCoor;
        y = yCoor;
    }


    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <Map 
                    x = {x ? x : 51.505}
                    y = {y ? y : -0.09}
                    pokemonId = {this.state.pokemonId}
                    
                    />
                    
                    
                </div>
                <div className="col-6">
                    <Toolbox 
                    area={this.area}
                    pokemonCall2={this.pokemonCall3} />
                    
                </div>
            </div>
        );
    }
       
};
export default App;