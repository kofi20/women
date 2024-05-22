import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Our Vision',
    description:
      'The organization envisions a society in which all Women, girls and boys are nurtured and empowered to reach their fullest potential.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Our Mission',
    description:
      'The mission of the Organization is to empower and improve the livelihoods of women, girls and boys through evidence-based intervention for sustainable development.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Our Core Values',
    description: 'Empowerment, Integrity, Collaboration, Inclusivity, Sustainability',
    icon: <LocalLibraryIcon />,
  },
  // {
  //   title: 'Consultation With Mentor',
  //   description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
  //   icon: <ContactSupportIcon />,
  // },
]
