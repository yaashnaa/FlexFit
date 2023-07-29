import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <div className='similar-exercises-title'>Exercises that target the same <span style={{ color: '#D3AB9E', textTransform: 'capitalize' }}> muscle group</span> </div>
      <Box sx={{ overflowX: 'auto', maxWidth: '100%' }}>
        <Stack direction='row' sx={{ p: '2' }}>
          {targetMuscleExercises.length ? (
            <HorizontalScrollBar data={targetMuscleExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
      <div className='similar-exercises-title '>Exercises that use the same <span style={{ color: '#D3AB9E', textTransform: 'capitalize', textDecoration: 'underline #3C887E;' }}>equipment</span></div>
      <Box sx={{ overflowX: 'auto', maxWidth: '100%' }}>
        <Stack direction='row' sx={{ p: '2' }}>
          {equipmentExercises.length ? (
            <HorizontalScrollBar data={equipmentExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default SimilarExercises;
