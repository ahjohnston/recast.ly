// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import Search from './components/Search.js';
import VideoPlayer from './components/VideoPlayer.js';
import VideoList from './components/VideoList.js';
import searchYouTube from './lib/searchYouTube.js';



ReactDOM.render(<App searchYouTube={searchYouTube}/>, document.getElementById('app'));


