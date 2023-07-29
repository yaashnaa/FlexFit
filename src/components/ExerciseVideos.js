import React from 'react';
import { Typography, Box, Stack } from '@mui/material';


const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return 'Loading...';

  return (
    <div>
      <div className='video-main-title'>
        Watch <span style={{ color: '#E63946', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </div>
      <div className='youtube-videos'>
        {exerciseVideos?.slice(0, 4)?.map((item, index) => (
            
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div> 
                <div className='video-title'> 
                    {item.video.title}
                </div>
             
                <div className='video-channel'> 
                    {item.video.channelName}
                </div>
            </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
