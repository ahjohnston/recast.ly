import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoListEntry from '/src/components/VideoListEntry.js';

var VideoList = () => (
  <div className="video-list">
    <VideoListConverter ListEntries={exampleVideoData}/>
  </div>
);

////  <div className="video-list">
////<VideoListConverter ListEntries={///examplevideodata}/> <=== How to insert from data folder??
//// </div>

//conver above to below format
// var App = () => (
//   <div id='testing'>
//     <h1>MEAT!</h1>
//     <TodoList todos={['Eat a Sandwich', 'maybe eat a MEAT salad', 'crush Recast.ly']}/>
//     </div>
// );
///////////////


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};


class VideoListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      VideoListEntry(ListEntry)
    );

  }

}

let VideoListConverter = (props) => (
  <ul>
    {props.ListEntry.map(ListEntry =>
      <VideoListItem ListEntry={ListEntry} />
    )}
  </ul>
);


// window.fakeVideoData = [{
//   etag: 'L332gQTY',
//   id: {
//     videoId: '000001'
//   },
//   snippet: {
//     title: 'Cute cat video',
//     description: 'The best cat video on the internet!',
//     thumbnails: {
//       default: {
//         url: 'http://www.fndvisions.org/img/cutecat.jpg',
//       }
//     }
//   }
// },


export default VideoList;
