import { movies } from './movies-data.js'

export const generateMoviesHTML = () => {
    let movieHTML = ''

    for (const movie of movies) {
        movieHTML += `
            <article class="movie">
                <img src="${movie.poster}" alt="${movie.title} poster" class="movie_poster">
                <div class="movie_details">
                    <h2 class"movie_title">${movie.title}</h2>
                    <p class="movie_description">${movie.description}</p>
                </div>
            </article>
        `
    }

    return movieHTML
}