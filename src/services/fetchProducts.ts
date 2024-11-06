const API_URL = "https://rickandmortyapi.com/api"

export const getCharacters = async () => {

    const res = await fetch(`${API_URL}/character`)
    const data = await res.json()

    return data
}   