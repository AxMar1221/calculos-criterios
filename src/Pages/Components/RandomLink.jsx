import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useState } from 'react'

export const RandomLink = () => {

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
    <Card sx={{ bgcolor: '#2252ac', padding: '10px', margin: '15px', borderRadius: '10px' }} elevation={24}>
      <CardContent>
        <Box textAlign='center' mt={5}>
          <Button variant='contained' color='primary' onClick={handleSelectedLink}>
            Seleccionar link
          </Button>
          {selectedLink && (
            <>
              <Typography variant='h6' mt={2}>
                Link seleccionado: {selectedLink}
              </Typography>
              <Button
                variant='contained'
                color='secondary'
                onClick={handleOpenLink}
                sx={{ mt: 2 }}
              >
                Abrir link
              </Button>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  )
}
