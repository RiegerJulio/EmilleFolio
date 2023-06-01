import { Container, Grid, Typography, Button, createTheme } from '@mui/material'
import esBanner from '../assets/esBanner.png'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Avenir,sans-serif',
      'Arial',
      'sans-serif',
      'Roboto',
    ].join(','),
  },
});

function Home() {
  return (
      <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid sm={8}>
              <img
                src={esBanner}
                alt='ES Recruitment Banner'
                width="100%"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={7}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Typography gutterBottom align='center' fontFamily={theme.typography.fontFamily}>
                    A E.S Recruitment oferece um serviço que fornece aos candidatos as ferramentas necessárias para conseguir o emprego dos seus sonhos.
                  </Typography>
                </Grid>
                <Grid paddingTop={3}>
                  <Button variant="contained" color="primary" href="/pricing">
                    Pricing
                  </Button>
                </Grid>
              </Grid>
          </Grid>
        </Container>
  )
}

export default Home