import React from 'react';

class Pokemon extends React.Component {
  render() {

    return (
      <div className="pokemon">
        <div>
          <p>{this.props.pokemon.name}</p>
          <p>{ this.props.pokemon.type }</p>
          <p>
            {`Average weight: ${this.props.pokemon.averageWeight.value} ${this.props.pokemon.averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ this.props.pokemon.image } alt={ `${this.props.pokemon.name} sprite` } />
      </div>
    );
  }
}

export default Pokemon;