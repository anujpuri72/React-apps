import React from "react";
const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <div class="ui active centered inline loader"></div>
      </div>
    );
  }
  const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          width="100"
          height="200"
          src={videosrc}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
