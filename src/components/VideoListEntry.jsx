import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import App from './App.js';

var VideoListEntry = (props) => {
  //processing
  // console.log(props);
  let mediaObject = props.video.snippet.thumbnails.default.url;
  // console.log(mediaObject);
  let title = props.video.snippet.title;
  let description = props.video.snippet.description;

  // let handleClick = (event) => {
  //   console.log('I got clicked!', event);
  //   console.log('props', props);
  //   return (
  //     <VideoPlayer video={props}/>
  //   );
  // };
  return (

    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={mediaObject} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={() => props.handleClick(props.video)}>{title}</div>
        <div className="video-list-entry-detail">{description}</div>
      </div>
    </div>
  );

};
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
