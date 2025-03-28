import React from 'react';
import PokemonCard from "./PokemonCard";

const Pokedex = ({ items }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', padding: '16px' }}>
            {items.map((item) => (
                <PokemonCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Pokedex;