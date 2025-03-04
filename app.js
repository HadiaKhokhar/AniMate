const API_KEY = '81fc5ebaf32cbc8aec88c3e9c374665d'; 
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';

async function getAnimatedMovies(page = 1) {
    const URL = `${BASE_URL}?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&page=${page}`;

    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`Page ${page}:`, data.results); // Log movies from the requested page
    } catch (error) {
        console.error("Error fetching animated movies:", error);
    }
}

// Fetch first 3 pages
for (let i = 1; i <= 3; i++) {
    getAnimatedMovies(i);
}
