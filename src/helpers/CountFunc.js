export const CountFunc = async () => {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await resp.json();
  return data.count
};
