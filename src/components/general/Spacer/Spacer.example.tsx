import React from 'react'

import Spacer from './Spacer'

const SpacerExample: React.FC = () => {
  return (
    <Spacer
      pt={1}
      pr={1}
      pb={1}
      pl={1}
      padding={1}
      mt={1}
      mr={1}
      mb={1}
      ml={1}
      margin={1}
      flexWrap="wrap"
      alignSelf="center"
      alignItems="center"
      alignContent="center"
      flexDirection="column"
      justifyContent="center"
    >
      EXAMPLE
    </Spacer>
  )
}

export default SpacerExample
