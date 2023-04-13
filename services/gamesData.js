const URL = 'https://pokeapi.co/api/v2/pokemon/ditto'

export function gamesData () {
  return fetch(URL)
    .then(res => res.json())
    .then(data => {
      return { name: data.name }
    })
}

gamesData.then(info => info.name)
