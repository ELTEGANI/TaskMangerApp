import DashboardLayout from '../../components/dashboard/layout';
import 'tailwindcss/tailwind.css';
import { Card,Header,Icon } from 'semantic-ui-react'

function ViewList(){
    return (
      <DashboardLayout>
        <Header as='h2' icon textAlign='center'>
      <Icon name='group' circular />
      <Header.Content>All Groups</Header.Content>
    </Header>
           <Card.Group>
            <Card fluid color='red' header='Group 1' />
           < Card fluid color='orange' header='Group 2' />
            <Card fluid color='yellow' header='Group 3' />
            <Card fluid color='red' header='Group 4' />
           < Card fluid color='orange' header='Group 5' />
            <Card fluid color='yellow' header='Group 6' />
            <Card fluid color='red' header='Group 7' />
           < Card fluid color='orange' header='Group 8' />
            <Card fluid color='yellow' header='Group 9' />
            <Card fluid color='red' header='Group 10' />
           < Card fluid color='orange' header='Group 11' />
            <Card fluid color='yellow' header='Group 12' />
           </Card.Group>
      </DashboardLayout>
    )
    }
    
    export default ViewList;