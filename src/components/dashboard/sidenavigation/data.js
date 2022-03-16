import AdminIcon from './icons/admin';

const data = [
  {
    section: 'New User',
    icon: <AdminIcon />,
    content: [
      {
        title: 'Add New User',
        link: '/admin',
      }
    ],
  },
  {
    section: 'New Group',
    icon: <AdminIcon />,
    content: [
      {
        title: 'Create New Users Group',
        link: '/admin/createNewGroup',
      }
    ],
  },
  {
    section: 'Task',
    icon: <AdminIcon />,
    content: [
      {
        title: 'Create Task',
        link: '/admin/createNewTask',
      }
    ],
  },
   {
    section: 'Assign',
    icon: <AdminIcon />,
    content: [
      {
        title: 'Assign User To Group',
        link: '/admin/assignUsersToGroup',
      },
      {
        title: 'Assign Task To Group',
        link: '/admin/assignTaskToGroup',
      }
    ],
  },
  {
    section: 'View List',
    icon: <AdminIcon />,
    content: [
      {
        title: 'View List Of All Users',
        link: '/admin/viewListsOfUsers',
      },
      {
        title: 'View List Of Groups',
        link: '/admin/viewListsOfGroups',
      }
    ],
  }
];

export default data;
