import React from 'react'
import clsx from 'clsx'

import { Box, Fade } from './common'

import { makeStyles } from '../themes'

interface IProps {
  loading?: boolean
  fetching?: boolean
}

const useStyles = makeStyles({
  /**
     * TODO: current we do not have the mobile design, 
    ensure user could perform horizontal scrolling if it is necessary 
  */
  root: {
    position: 'relative',
    width: '100%',
  },
  fetchingContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    zIndex: 2,
  },
  fetchingLoader: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1302,
  },
  hidden: {
    visibility: 'hidden',
  },
  loading: {
    minHeight: '50px',
  },
})

const Body: React.FC<IProps> = ({ loading = false, fetching = false, children }) => {
  const classes = useStyles()
  return (
    <>
      <Box py={9} px={2} className={classes.root}>
        <Fade in={fetching}>
          <div className={classes.fetchingContainer} />
        </Fade>
        <div className={clsx({ [classes.hidden]: loading })}>{children}</div>
      </Box>
    </>
  )
}

export default Body
