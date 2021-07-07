import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import pokemons from './data';

class Pokedex extends React.Component {
  constructor({ pokemons }) {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      pokemons,
      filteredPokemons: [...pokemons],
      cliques: 0,
    }
  }

  handleClick() {
    const { filteredPokemons, cliques } = this.state;
    if (cliques === filteredPokemons.length - 1) {
      this.setState({ cliques: 0 });
    } else {
      this.setState((estadoAnterior) => ({
        cliques: estadoAnterior.cliques + 1,
      }))
    }
  }

  filterPokemons(pokeType) {
    const newArray = pokeType === 'All'
      ? pokemons
      : pokemons.filter(({ type }) => pokeType === type)
    this.setState(() => (
      {
        filteredPokemons: newArray,
        cliques: 0,
      }
    ))
  }

  render() {
    const { filteredPokemons, cliques, pokemons } = this.state
    const types = pokemons.reduce((acc, { type }) => {
      if (acc.includes(type)) {
        return acc
      } else {
        return acc.concat(type)
      }
    }, ['All']);

    return (
      <>
        <div className="pokedex">
          <Pokemon pokemon={filteredPokemons[cliques]} />
        </div>
        <Button text="Next Pokemon" onClick={this.handleClick} />
        {
          types.map((type) => (
            <Button
              text={type}
              onClick={() => this.filterPokemons(type)}
              key={type}
              className={type}
            />
          ))
        }
      </>
    );
  }
}

export default Pokedex;