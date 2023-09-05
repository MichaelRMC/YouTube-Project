const URL = import.meta.env.VITE_BASE_API_KEY;

export function getVideo(search) {

  return fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&type=video&key=${URL}`
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getSelectedVideo(videoId) {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${URL}`
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}
