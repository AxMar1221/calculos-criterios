import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'


export const RandomLink = () => {
  I
  const links = [
    'https://www.google.com',
    'https://www.openai.com',
    'https://www.github.com'
  ];

  const [selectedLink, setSelectedLink] = useState('');

  const handleSelectedLink = () => {
    const randomIndex = Math.floor(Math.random() * links.length);
    setSelectedLink(links[randomIndex]);
  };

  const handleOpenLink = () => {
    if (selectedLink) {
      window.open(selectedLink, '_blank');
    }
  }

  return (
    <Box textAlign={center} mt={5}>
      <Button variant='contained' color='primary' onClick={handleSelectedLink}>
        Seleccionar link
      </Button>
      { selectedLink && (
        <>
        <Typography variant='h6' mt={2}>
          Link seleccionado: {selectedLink}
        </Typography>
        <Button
          variant='contained'
          color='secondary'
          onClick={handleOpenLink}
          sx={{ mt: 2}}
        >
          Abrir link
        </Button>
        </>
      )}
    </Box>
  )
}
