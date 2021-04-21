import React from 'react'

import { ENVIRONMENT } from '../../constants'
import { Box, Typography } from '../common'
/**
   *   Error boundaries do not catch errors for:
  Event handlers.
  setTimeout or requestAnimationFramecallbacks.
  Server side rendering.
  Errors thrown in the error boundary itself, rather than in its children.
   */

interface IErrorBoundaryFallbackProps {
  error: Error
  componentStack?: string
}

const errorBoundaryFallback = ({ error, componentStack }: IErrorBoundaryFallbackProps) => {
  return (
    <Box
      marginTop="18px"
      display="flex"
      flexDirection="column"
      justifyItems="center"
      alignItems="center"
    >
      <Typography variant="h3" gutterBottom>
        There was an error in loading this page.
      </Typography>
      {ENVIRONMENT === 'local' && (
        <>
          <Typography variant="h5" gutterBottom>
            {error.toString()}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {componentStack}
          </Typography>
        </>
      )}
    </Box>
  )
}

export default errorBoundaryFallback
