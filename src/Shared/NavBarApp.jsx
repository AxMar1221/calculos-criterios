import { AppBar, Container, MenuItem, Toolbar } from "@mui/material"
import LaptopIcon from '@mui/icons-material/Laptop';
import { NavLink } from "react-router-dom"


export const NavBarApp = () => {
  return (
    <>
      <AppBar color='success'>
        <Container maxWidth='xl'>
          <Toolbar
            disableGutters
            sx={{ display: 'flex', justifyContent: 'center', gap: '10px', my: 1 }}
          >
            <MenuItem sx={{ borderRadius: 3 }}>
              <NavLink
                className='color'
                to='/home'
              >
                <LaptopIcon />
              </NavLink>
            </MenuItem>
            <MenuItem sx={{ borderRadius: 3 }}>
              <NavLink
                className='color'
                to='links'
              >
                Obtener link
              </NavLink>
            </MenuItem>
            {/* <MenuItem sx={{ borderRadius: 3 }}>
              <NavLink
                className='color'
                to='info'
              >
                Información digital, Internet y Big Data
              </NavLink>
            </MenuItem>
            <MenuItem sx={{ borderRadius: 3 }}>
              <NavLink
                className='color'
                to='/poo'
              >
                Programación Orientada a Objetos
              </NavLink>
            </MenuItem> */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}


