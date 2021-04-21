import React from 'react'

import { Container, CircularProgress, Box } from '../common'

const LayoutLoading = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    </Container>
  )
}

export default LayoutLoading
