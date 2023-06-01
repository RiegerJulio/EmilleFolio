import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Container>
      <Grid
        container
        paddingTop={5}
      >
        <Grid sm={4}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png"
            alt=' about us'
            width="100%"
          />
        </Grid>
        <Grid item sm={8} paddingLeft={3}>
          <Typography>
            A E.S Recruitment oferece um serviço que fornece aos candidatos as ferramentas necessárias para conseguir o emprego dos seus sonhos. O foco principal é fornecer aos candidatos consultoria especializada sobre como criar um currículo e uma carta de apresentação que chamem atenção de empregadores potenciais . O E. S Recruitment também ajudará os candidatos a encontrar empregos adequados que se alinhem com seus objetivos e aspirações de carreira. Com anos de experiência no setor, temos o conhecimento necessário para orientar os candidatos em todo o processo de busca de emprego, desde a criação de um currículo forte e carta de apresentação até a preparação para entrevistas. Os serviços prestados pela equipe da E.S Recruitment são inestimáveis, pois podemos ajudar os candidatos a se destacarem da concorrência e aumentar suas chances de conseguir o emprego desejado. No geral, a E.S Recruitment oferece um serviço profissional que desempenha um papel vital em ajudar os candidatos a alcançar seus objetivos de carreira.Deixe-nos ajudá-lo a encontrar o emprego perfeito para você. Reserve com a E.S Recruitment hoje.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About