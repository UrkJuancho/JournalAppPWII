import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid2, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='Login' >
      <Grid2
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
      >
        <Grid2
          className='box-shadow'
          size={4}
          sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Iniciar Sesion.
          </Typography>
          <form>
            <Grid2 container spacing={2}>
              <Grid2 size={12} sx={{ mt: 2 }}>
                <TextField
                  label="Correo"
                  type="email"
                  autoComplete="current-password"
                  placeholder='correo@gmail.com'
                  fullWidth
                />
              </Grid2>
              <Grid2 size={12} sx={{ mt: 2 }}>
                <TextField
                  label="contraseña"
                  type="password"
                  autoComplete="current-password"
                  placecholder='contraseña'
                  fullWidth
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Button variant="contained" fullWidth>
                  Entrar
                </Button>
              </Grid2>
              {/* <Grid2 size={{ xs: 12, md: 6 }}>
              <Button variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid2> */}
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>
                    Google
                  </Typography>
                </Button>
              </Grid2>
              <Grid2 container direction='row' justifyContent='end'>
                <Link component={RouterLink} color='inherit' to="/auth/register">
                  Crear nueva cuenta
                </Link>
              </Grid2>
            </Grid2>
          </form>
        </Grid2>
      </Grid2>
    </AuthLayout>
  )
}
