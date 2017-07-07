import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>it is just loading</div>
    }
    const videoId = video.id.videoId;
    const url= `https://www.youtube.com/embed/${videoId}`;
            // equals to :
    // const videoId = "https://www.youtube.com/embed/" + "QlcHo79_WLE";
    return (
        <div className="video-detail col-md-8">
             <div className="embed-responsive embed-responsive-16by9">
                 <iframe className="embed-responsive-item" src={url}></iframe>
             </div>
             <div className="details">
                 <div>{video.snippet.title}</div>
                 <div>{video.snippet.description}</div>
             </div>
        </div>
    )

}

export default VideoDetail;