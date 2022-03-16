import DashboardLayout from '../../components/dashboard/layout';
import 'tailwindcss/tailwind.css';
import { List,Header,Button,Icon} from 'semantic-ui-react'


function AssignUser(){
  return (
    <DashboardLayout>
      <Header as='h2' icon textAlign='center'>
    <Header.Content>Assign User To Group</Header.Content>
  </Header>
  <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button>Assign User</Button>
      </List.Content>
      <Icon name='user' circular />
      <List.Content>Ahmed</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Assign User</Button>
      </List.Content>
      <Icon name='user' circular />
      <List.Content>Ali</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Assign User</Button>
      </List.Content>
      <Icon name='user' circular />
      <List.Content>Omer</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Assign User</Button>
      </List.Content>
      <Icon name='user' circular />
      <List.Content>Khalid</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Assign User</Button>
      </List.Content>
      <Icon name='user' circular />
      <List.Content>Khalid</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Assign User</Button>
      </List.Content>
      <Icon name='user' circular />
      <List.Content>Yassin</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Assign User</Button>
      </List.Content>
      <Icon name='user' circular />
      <List.Content>Mohamed</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Assign User</Button>
      </List.Content>
      <Icon name='user' circular />
      <List.Content>Nader</List.Content>
    </List.Item>
  </List>
    </DashboardLayout>
  )
    }
    
    export default AssignUser;