import { Container, Grid, Typography, Button } from '@mui/material'
// import * as React from 'react'

function Home() {
  return (
      <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid sm={4}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png"
                alt=' about us'
                width="100%"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={7}>
              <Typography variant="h2" component="h1" gutterBottom align='center'>
                 Emille Santos Recruitment
              </Typography>
              <br />
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Typography variant="h5" component="h2" gutterBottom align='center'>
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