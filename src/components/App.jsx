import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: exampleVideoData[0]
    };
  }

  selectClickedVideo (video) {
    this.setState({video});
  }

  render() {
    return (

      < div >
        <nav className="navbar" >
          <div className="col-md-6 offset-md-3">
            <div id="searchBar"><h5><em>TELL ME WAT-CHU WAAANT!</em></h5></div>
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div id="videoPlayer"><h5><em>Watch things here!</em></h5></div>
            <VideoPlayer video={this.state.video} />
          </div>
          <div className="col-md-5">
            <div id="videoList" className="video-list"><h5><em>Find things here!</em></h5></div>
            <VideoList videos={exampleVideoData} handleClick={this.selectClickedVideo.bind(this)}/>
          </div>
        </div>
      </div >
    );

  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
