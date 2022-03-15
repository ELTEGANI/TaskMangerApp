import AdminIcon from './icons/admin';

const data = [
  {
    section: 'Admin',
    icon: <AdminIcon />,
    content: [
      {
        title: 'Add New User',
        link: '/admin/addNewUser',
      },
      {
        title: 'Create New USers Group',
        link: '/admin/assignUsers',
      },
      {
        title: 'Create Task',
        link: '/admin/createNewGroup',
      },
      {
        title: 'Assign Users',
        link: '/admin/viewLists',
      },
      {
        title: 'View List Of All User & List Of Group',
        link: '/admin/',
      }
    ],
  },
];

export default data;
