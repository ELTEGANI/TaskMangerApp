import AdminIcon from './icons/admin';

const userData = [
  {
    section: 'User',
    icon: <AdminIcon />,
    content: [
      {
        title: 'View User Task',
        link: '/user',
      },
      {
        title: 'Get Task From Users Group',
        link: '/user/getTask',
      },
      {
        title: 'Complete New Task',
        link: '/user/completeTask',
      },
      {
        title: 'Sort Task',
        link: '/user/sortTask',
      }
    ],
  },
];

export default userData;
