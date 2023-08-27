const URL = import.meta.env.VITE_BASE_API_URL;

let search = "dogs";

export function getVideo() {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&key=${URL}`
  )
    .then((response) => {
      response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}


