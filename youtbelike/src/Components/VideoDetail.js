import React from "react";
const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <div class="ui active centered inline loader"></div>
      </div>
    );
  }
  return <div>{video.snippet.title}</div>;
};
export default VideoDetail;
