import { Grid2, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid2
            container
            rowSpacing={1}
            // direction="column"
            alignItems="center"
            sx={{ minHeight: '100vh', backgroudColor: 'primary.main', padding: 4 }}>
            <Grid2
                className='box-shadow'
                xs={4}
                ss={{
                    width: { md: 450 },
                    backgroudColor: 'white',
                    padding: 3,
                    borderRadius: 2
                }} >

                <Typography variant="h5" sx={{ mb: 1 }}>{title}</Typography>
                {children}
            </Grid2>
        </Grid2>
    )
}