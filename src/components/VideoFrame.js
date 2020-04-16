import React from 'react';

class VideoFrame extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <iframe
          src={this.props.videoURL}
          width='100%'
          height='100%'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
        <div style={{ marginTop: '10px' }}>
          <div className='ui header'>
            <h1>{this.props.videoTitle}</h1>
            <p style={{ color: 'red', fontSize: '14px' }}>
              {this.props.videoChannelTitle}
            </p>
          </div>
          <div className='sub header'>
            <p>{this.props.videoDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoFrame;
