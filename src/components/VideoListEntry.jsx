

var VideoListEntry = (props) => {

  //processing
  let mediaObject = this.snippet.default.url;
  console.log(mediaObject);
  let title = this.snippet.title;
  let description = this.snippet.description;

  return (

    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={mediaObject} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{title}</div>
        <div className="video-list-entry-detail">{description}</div>
      </div>
    </div>
  );

};
/*
class VideoListEntry extends React.component {

  constructor(props) {
    super(props);
  }

  render() {
    let mediaObject = this.snippet.default.url;
    console.log(mediaObject);
    let title = this.snippet.title;
    let description = this.snippet.description;

    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={mediaObject} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">{title}</div>
          <div className="video-list-entry-detail">{description}</div>
        </div>
      </div>
    );

  }
}
*/

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;

