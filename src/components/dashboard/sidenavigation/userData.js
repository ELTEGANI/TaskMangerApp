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
    section: 'Get Task',
    icon: <AdminIcon />,
    content: [
      {
        title: 'Get Task From Users Group',
        link: '/user/getTask',
      }
    ],
  },
  {
    section: 'Complete Task',
    icon: <AdminIcon />,
    content: [
      {
        title: 'Complete New Task',
        link: '/user/completeTask',
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
