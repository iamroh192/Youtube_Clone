const API_KEY = process.env.REACT_APP_API_KEY;
export const videos_list = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+API_KEY;
export const search_api = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='