import React from 'react'
import { usePokemonType } from '../../hooks/usePokemonType';
import { ListPoket } from '../pokemon/ListPoket';

export const ElectricScreen = () => {
    const {poketFire}=usePokemonType('electric');

    return (
      <div>{poketFire ? <ListPoket data={poketFire} /> : <p>Cargando...</p>}</div>
    );
}
