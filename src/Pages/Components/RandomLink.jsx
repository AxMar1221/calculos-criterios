import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useState } from 'react'

export const RandomLink = () => {

  const links = [
    'https://studio.code.org/projects/applab/dAw5oMghx1X9xc15qkhDugAQk57ywbIQs9QW4ohJc6Y',
    'https://studio.code.org/projects/applab/dAw5oMghx1X9xc15qkhDuslsUaBJhVE-StL7_qnSB2M',
    'https://studio.code.org/projects/applab/4HDxQySnFryW6VV-k70cTGeBHewr8DVLNtFarfdDhQk',
    'https://studio.code.org/projects/applab/4HDxQySnFryW6VV-k70cTBUykiCWWRkcyiUOQpMQkmw',
    'https://studio.code.org/projects/applab/4HDxQySnFryW6VV-k70cTFOGquAxJaEJ0gRalFLD9_4',
    'https://studio.code.org/projects/applab/v_lZNmI8oOJAS5m67oC3e4ssap0AamP0of0WEFYGG78',
    'https://studio.code.org/projects/applab/v_lZNmI8oOJAS5m67oC3e7SYBrj37PQDDmGXdFFtUlQ',
    'https://studio.code.org/projects/applab/v_lZNmI8oOJAS5m67oC3e4hmFz9oS5THpv_LxzgmcM0',
    'https://studio.code.org/projects/applab/v_lZNmI8oOJAS5m67oC3ewDRqRcQz43tHyfl-grwgP8',
    'https://studio.code.org/projects/applab/v_lZNmI8oOJAS5m67oC3e4sAlYhbXyYWZJ87l5oV4DM'
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
