import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Group Formation and Purpose Realization',
    content:
      'Empowering young single mothers and youths by organizing them into groups, fostering unity, and helping them realize their life purposes',
    user: {
      id: 1,
      name: 'Luis Sera',
      professional: 'UI/UX Engineer',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Skills Development and Income Generation',
    content:
      'Equipping women and youths with the necessary skills to identify and initiate income-generating activities aligned with their interests.',
    user: {
      id: 1,
      name: 'Riski',
      professional: 'Software Engineer',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Financial Literacy and Management',
    content:
      'Providing training on money management, budgeting, and savings to enhance their ability to control and improve their standard of living.',
    user: {
      id: 1,
      name: 'Nguyễn Văn',
      professional: 'FullStack Designer',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Village Savings and Credit Associations(VSCAs)',
    content:
      'Encouraging participation in VSCAs to promote savings, access to credit, and community-based financial support systems.',
    user: {
      id: 1,
      name: 'Diana Jordan',
      professional: 'SEO Expert',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: 'Collaboration and Networking Opportunities',
    content:
      'Linking groups with other NGOs and UN agencies to access additional training and credit opportunities for further empowerment.',
    user: {
      id: 1,
      name: 'Ashley Graham',
      professional: 'Back-End Developer',
      photo: '5.jpg',
    },
  },
]
