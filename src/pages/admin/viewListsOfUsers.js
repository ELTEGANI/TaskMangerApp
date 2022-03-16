import DashboardLayout from '../../components/dashboard/layout';
import 'tailwindcss/tailwind.css';
import { Card,Header,Icon } from 'semantic-ui-react'

function ViewList(){
    return (
      <DashboardLayout>
        <Header as='h2' icon textAlign='center'>
      <Icon name='group' circular />
      <Header.Content>All Users</Header.Content>
    </Header>
           <Card.Group>
            <Card fluid color='red' header='user 1' />
           < Card fluid color='orange' header='user 2' />
            <Card fluid color='yellow' header='user 3' />
            <Card fluid color='red' header='user 4' />
           < Card fluid color='orange' header='user 5' />
            <Card fluid color='yellow' header='user 6' />
            <Card fluid color='red' header='user 7' />
           < Card fluid color='orange' header='user 8' />
            <Card fluid color='yellow' header='user 9' />
            <Card fluid color='red' header='user 10' />
           < Card fluid color='orange' header='user 11' />
            <Card fluid color='yellow' header='user 12' />
           </Card.Group>
      </DashboardLayout>
    )
    }
    
    export default ViewList;