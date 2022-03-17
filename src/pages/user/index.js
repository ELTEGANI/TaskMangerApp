import DashboardLayout from '../../components/dashboard/layout';
import 'tailwindcss/tailwind.css';
import { Button, List,Header,Modal,Form} from 'semantic-ui-react'

function ViewUserTask(){
    return (
      <DashboardLayout>
          <Header as='h2' icon textAlign='center'>
            <Header.Content>View My Task</Header.Content>
          </Header>

          


           <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
      <Modal centered={false} trigger={
      <Button floated='left' color='red'>View Task Detailes</Button>
    } closeIcon>

      <Modal.Header><center>Task 1 Detailes</center></Modal.Header>
      <Modal.Content image scrolling>
        <Modal.Description>

        <Header as='h4' icon textAlign='left'>
            <Header.Content>Task title:...........</Header.Content>
          </Header>

          <Header as='h4' icon textAlign='left'>
            <Header.Content>Task Discreption:.........</Header.Content>
          </Header>

          <Header as='h4' icon textAlign='left'>
            <Header.Content>Task Duration:........</Header.Content>
          </Header>

          <Header as='h4' icon textAlign='left'>
            <Header.Content>Task Created Date:.........</Header.Content>
          </Header>

        <Button type='submit' color='green' fluid 
        >Done Task</Button>
        </Modal.Description>
       </Modal.Content>
    </Modal>

      </List.Content>
      <List.Content>Task 1</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>

      <Modal centered={false} trigger={
      <Button floated='left' color='red'>View Task Detailes</Button>
    } closeIcon>

      <Modal.Header><center>Task 2 Detailes</center></Modal.Header>
      <Modal.Content image scrolling>
        <Modal.Description>
        <Header as='h4' icon textAlign='left'>
            <Header.Content>Task title:...........</Header.Content>
          </Header>

          <Header as='h4' icon textAlign='left'>
            <Header.Content>Task Discreption:.........</Header.Content>
          </Header>

          <Header as='h4' icon textAlign='left'>
            <Header.Content>Task Duration:........</Header.Content>
          </Header>

          <Header as='h4' icon textAlign='left'>
            <Header.Content>Task Created Date:.........</Header.Content>
          </Header>

        <Button type='submit' color='green' fluid 
        >Done Task</Button>

        </Modal.Description>
       </Modal.Content>
    </Modal>

      </List.Content>
      
      <List.Content>Task 2</List.Content>
    </List.Item>
  </List>
      </DashboardLayout>
    )
    }
    
    export default ViewUserTask;