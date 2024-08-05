import { database } from "./database.js"

export const displayMoods = (random) => {
    for (const mood of database) {
        random.innerHTML += `<div class="mood_daddy">
        <section class="mood_name">${mood.name}</section>
        <img src=${mood.imageUrl} class="mood_image">
        <section class="mood_quote">${mood.quotes}</section>
</div>
`
    }
}