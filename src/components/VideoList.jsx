import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {
  // console.log(props);

  return (
    <ul className='video-list'>
      {props.videos.map(video =>
      // console.log('object', video);
        <VideoListEntry video={video} key={video.id.videoId} handleClick={props.handleClick} />

      )}
    </ul>);
};


VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};



export default VideoList;
