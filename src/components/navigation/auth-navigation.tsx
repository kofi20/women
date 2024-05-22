// import React, { FC } from 'react'
// import Box from '@mui/material/Box'
// import { StyledButton } from '@/components/styled-button'

// const AuthNavigation: FC = () => {
//   return (
//     <Box sx={{ '& button:first-child': { mr: 2 } }}>
//       <StyledButton disableHoverEffect={true} variant="outlined">
//         Donate
//       </StyledButton>
//       <StyledButton disableHoverEffect={true}>Become a Member</StyledButton>
//     </Box>
//   )
// }

// export default AuthNavigation

import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <StyledButton disableHoverEffect={true} variant="outlined">
        Donate
      </StyledButton>
      <StyledButton
        disableHoverEffect={true}
        onClick={() => window.open('https://forms.gle/chUWng2zbHk3AV8m6', '_blank')}
      >
        Become a Member
      </StyledButton>
    </Box>
  )
}

export default AuthNavigation
