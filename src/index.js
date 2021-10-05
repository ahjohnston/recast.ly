// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import Search from './components/Search.js';
import VideoPlayer from './components/VideoPlayer.js';
import VideoList from './components/VideoList.js';
import exampleVideoData from './data/exampleVideoData.js';


ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Search />, document.getElementById('searchBar'));
ReactDOM.render(<VideoPlayer />, document.getElementById('videoPlayer'));
ReactDOM.render(<VideoList />, document.getElementById('videoList'));

