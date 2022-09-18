
const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "29206449-c7acbb0b478066fae72cee790";

 export function getImages(q = ''){
     return fetch(`${BASE_URL}?key=${API_KEY}&q=${q}`).then(res => res.json())
     


}
    
