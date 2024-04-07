import { Card, CardContent, CardMedia, Typography } from "@mui/material"

export const HomePage = () => {
  return (
    <>
        <Card sx={{ bgcolor: '#5f9e61', padding: '10px', margin: '15px', borderRadius: '10px'}} elevation={24}>
            <CardContent>
                <Typography variant='h3' className='color'>
                    Profe Tachi 
                </Typography>
                <CardMedia
                    component='img'
                    height='175'
                    image='/public/profe-tachi.png'
                    alt='Profe-Tachi'
                />
            </CardContent>
        </Card>
    </>
  )
}
