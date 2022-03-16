import DashboardLayout from '../../components/dashboard/layout';
import 'tailwindcss/tailwind.css';
import { List,Header,Button,Icon} from 'semantic-ui-react'


function AssignUser(){
  return (
    <DashboardLayout>
      <Header as='h2' icon textAlign='center'>
    <Header.Content>Assign Task To Group</Header.Content>
  </Header>
  <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button>Assign Task</Button>
      </List.Content>
      <List.Content>Task1</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <Button>Assign Task</Button>
      </List.Content>
      <List.Content>Task2</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <Button>Assign Task</Button>
      </List.Content>
      <List.Content>Task3</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <Button>Assign Task</Button>
      </List.Content>
      <List.Content>Task4</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <Button>Assign Task</Button>
      </List.Content>
      <List.Content>Task5</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <Button>Assign Task</Button>
      </List.Content>
      <List.Content>Task6</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <Button>Assign Task</Button>
      </List.Content>
      <List.Content>Task7</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <Button>Assign Task</Button>
      </List.Content>
      <List.Content>Task8</List.Content>
    </List.Item>
  </List>
    </DashboardLayout>
  )
    }
    
    export default AssignUser;