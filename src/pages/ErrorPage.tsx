import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@material-ui/core'

import { PageError } from '../types'

interface IProps {
  type?: PageError
}

const ErrorPage: React.FC<IProps> = ({ type = PageError.NotFound }) => {
  const isForbidden = type === PageError.Forbidden
  return (
    <Box textAlign="center" component={Container} maxWidth="md">
      <Typography variant="h3" color="primary">
        {isForbidden ? 'Forbidden' : '404 Not Found'}
      </Typography>
      <Box my={3}>
        {isForbidden ? (
          <Typography>You do not have access to this page.</Typography>
        ) : (
          <>
            <Typography>The page you requested could not be found.</Typography>
            <Typography>Please check the URL and try again.</Typography>
          </>
        )}
      </Box>
      <Button variant="contained" color="primary" component={Link} to="/">
        Return to Home
      </Button>
    </Box>
  )
}

export default ErrorPage
