import AdminIcon from './icons/admin';

const userData = [
  {
    section: 'View Task',
    icon: <AdminIcon />,
    content: [
      {
        title: 'View User Task',
        link: '/user',
      }
    ],
  },
  {
    section: 'Sort Task',
    icon: <AdminIcon />,
    content: [
      {
        title: 'Sort My Tasks',
        link: '/user/sortTask',
      }
    ],
  }
];

export default userData;
