// import React, { FC } from 'react'
// import { Box, Typography } from '@mui/material'

// interface Props {
//   onClick?: () => void
//   variant?: 'primary' | 'secondary'
// }

// const Logo: FC<Props> = ({ onClick, variant }) => {
//   return (
//     <Box onClick={onClick}>
//       <Typography
//         variant="h4"
//         component="h1"
//         sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
//       >
//         CO<span>WE</span>
//       </Typography>
//     </Box>
//   )
// }

// Logo.defaultProps = {
//   variant: 'primary',
// }

// export default Logo

import React, { FC } from 'react'
import { Box } from '@mui/material'

interface Props {
  onClick?: () => void
}

const Logo: FC<Props> = ({ onClick }) => {
  return (
    <Box onClick={onClick}>
      <img src="/images/logo.jpg" alt="Logo" style={{ width: 30, height: 30 }} />
    </Box>
  )
}

export default Logo
