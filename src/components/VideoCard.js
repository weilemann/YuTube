import '../css/VideoCard.css';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

const VideoCard = (props) => {
  return (
    <div className='ui container' style={{ width: '400px', display: 'flex' }}>
      <div>
        <a href='/#'>
          <img
            src={props.videoImage.url}
            alt={props.videoTitle}
            onClick={props.onClick}
          />
        </a>
      </div>
      <div style={{ marginLeft: '10px' }}>
        <h4>
          <a href='/#' onClick={props.onClick}>
            <LinesEllipsis
              text={props.videoTitle}
              maxLine={1}
              ellipsis='...'
              trimRight
            />
          </a>
        </h4>
        <p>Published at: {props.videoPublish}</p>
      </div>
    </div>
  );
};

export default VideoCard;
