const URL = import.meta.env.VITE_BASE_API_URL


export function getVideos() {
fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}`).then(res => res.json());
}