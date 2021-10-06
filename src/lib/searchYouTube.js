import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  // $.get(url, configuration object to define parameters)
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: YOUTUBE_API_KEY,
    q: query,
    maxResults: 5,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({ items }) => {
      console.log(items);
      if (callback) {
        callback(items);
      }
    })
    .fail(({ responseJSON }) => {
      responseJSON.error.errors.forEach((err) => console.error(err));
    });
};
// GET https://www.googleapis.com/youtube/v3/search

// 'https://youtube.googleapis.com/youtube/v3/search?' \
// --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
// --header 'Accept: application/json' \
// --compressed
//part= snippet
//maxResults with default
//q value
//key=[YOUR_API_KEY]
//  var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});


// {
//   "kind": "youtube#searchListResponse",
//   "etag": etag,
//   "nextPageToken": string,
//   "prevPageToken": string,
//   "regionCode": string,
//   "pageInfo": {
//     "totalResults": integer,
//     "resultsPerPage": integer
//   },
//   "items": [
//     search Resource
//   ]
// }

export default searchYouTube;
