import React from 'react';
import Pokemon from './Pokemon';

class Toolbox extends React.Component {
    render() {
        return (
            <div>
                <Pokemon
                pokemonCall={this.props.pokemonCall2}
                  />
                <div>
                </div>
            </div>

        );
    }
};


export default Toolbox;

