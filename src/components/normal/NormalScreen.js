import React from 'react'
import { usePokemonType } from '../../hooks/usePokemonType';
import { ListPoket } from '../pokemon/ListPoket';

export const NormalScreen = () => {
  const { poketFire } = usePokemonType("normal");
  return (
    <div>{poketFire ? <ListPoket data={poketFire} /> : <p>Cargando...</p>}</div>
  );
}
