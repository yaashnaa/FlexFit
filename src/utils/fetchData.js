export const exerciseOptions ={
method: 'GET',
headers: {
  'X-RapidAPI-Key': process.env.REACT_APP_EXERCISE_API_KEY,
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
// export const nutrition = {
//   method: 'GET',

//   headers: {
//     'X-RapidAPI-Key': 'f04eeb3897msheac4d83d0e84b89p1766ffjsnc54a8ed33aee',
//     'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
//   }
// };

export const recipes = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RECIPES_API_KEY,
    'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
  }
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
    console.log('hello')
  } 

  const data = await res.json();
 
  return data;
};