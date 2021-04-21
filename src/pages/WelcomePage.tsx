import React from 'react'

import { Typography, Grid, Button } from '../components/common'
import { useThemeContext } from '../hooks'
import { makeStyles } from '../themes'
import { logger } from '../utils'

const useStyles = makeStyles({
  title: {
    margin: '50px 0',
    textAlign: 'center',
  },
  button: {
    margin: '10px, 16px',
  },
})

const WelcomePage = () => {
  const { setThemeName, hostName } = useThemeContext()
  const classes = useStyles()
  logger.debug('Landing on the welcome page')
  return (
    <>
      <Grid
        container
        alignContent="center"
        justify="center"
        direction="column"
        className={classes.title}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Home
        </Typography>
        <Typography variant="h5" gutterBottom>{`Hostname: ${hostName}`}</Typography>
      </Grid>
      <Grid container alignContent="center" justify="center">
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => setThemeName('lightTheme')}>
            Set Light Theme
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={() => setThemeName('darkTheme')}>
            Set Dark Theme
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default WelcomePage
