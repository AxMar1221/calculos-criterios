import { Card, CardContent, CardMedia, Typography } from "@mui/material"

export const HomePage = () => {
  return (
    <>
        <Card sx={{ bgcolor: '#2252ac', padding: '10px', margin: '15px', borderRadius: '10px'}} elevation={24}>
            <CardContent>
                <Typography variant='h3' className='color'>
                    Profe Tachi 
                </Typography>
                <CardMedia
                    component='img'
                    height='175'
                    image='/profe-tachi.png'
                    alt='Profe-Tachi'
                />
            </CardContent>
        </Card>
    </>
  )
}
