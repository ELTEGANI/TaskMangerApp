import AdminIcon from './icons/admin';

const data = [
  {
    section: 'Admin',
    icon: <AdminIcon />,
    content: [
      {
        title: 'Add New User',
        link: '/admin',
      },
      {
        title: 'Create New Users Group',
        link: '/admin/createNewGroup',
      },
      {
        title: 'Create Task',
        link: '/admin/createNewTask',
      },
      {
        title: 'Assign Users',
        link: '/admin/assignUsers',
      },
      {
        title: 'View List Of All User & List Of Group',
        link: '/admin/viewLists',
      }
    ],
  },
];

export default data;
