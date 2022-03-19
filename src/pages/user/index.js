import DashboardLayout from '../../components/dashboard/layout';
import 'tailwindcss/tailwind.css';
import { Button, List,Header,Modal,Form,Input} from 'semantic-ui-react'

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
         <br/>
        <Button type='submit' color='green' fluid 
        >Done Task</Button>

        </Modal.Description>
       </Modal.Content>
    </Modal>
      </List.Content>
      <List.Content>Task 2</List.Content>
    </List.Item>

    <List.Item>
      <List.Content floated='right'>

      <Modal centered={false} trigger={
      <Button floated='left' color='red'>View Task Detailes</Button>
    } closeIcon>

      <Modal.Header><center>Task 3 Detailes</center></Modal.Header>
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
         <br/>
        <Button type='submit' color='green' fluid 
        >Done Task</Button>

        </Modal.Description>
       </Modal.Content>
    </Modal>
      </List.Content>
      <List.Content>Task 3</List.Content>
    </List.Item>

    <List.Item>
      <List.Content floated='right'>

      <Modal centered={false} trigger={
      <Button floated='left' color='red'>View Task Detailes</Button>
    } closeIcon>

      <Modal.Header><center>Task 4 Detailes</center></Modal.Header>
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
         <br/>
        <Button type='submit' color='green' fluid 
        >Done Task</Button>

        </Modal.Description>
       </Modal.Content>
    </Modal>
      </List.Content>
      <List.Content>Task 4</List.Content>
    </List.Item>

    <List.Item>
      <List.Content floated='right'>

      <Modal centered={false} trigger={
      <Button floated='left' color='red'>View Task Detailes</Button>
    } closeIcon>

      <Modal.Header><center>Task 5 Detailes</center></Modal.Header>
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
         <br/>
        <Button type='submit' color='green' fluid 
        >Done Task</Button>

        </Modal.Description>
       </Modal.Content>
    </Modal>
      </List.Content>
      <List.Content>Task 5</List.Content>
    </List.Item>

    
  </List>
  <br/>
  <Header as='h2' icon textAlign='center'>
            <Header.Content>Get Task From User Group</Header.Content>
          </Header>
          <Form>
         <Form.Field>
             <label>Group Name</label>
             <Input 
             placeholder='Enter Group Name' 
             type='text' 
             />  
        </Form.Field>

                       <Modal centered={false} trigger={
             <Button  fluid color='green'>Get Task From Group</Button> 
            } closeIcon>

      <Modal.Header><center>Task From Group X Detailes</center></Modal.Header>
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

        <Button type='submit' color='yellow' fluid 
        >Complete This Task</Button>
        </Modal.Description>
       </Modal.Content>
    </Modal>
  
             
             </Form>

      </DashboardLayout>
    )}
    
    export default ViewUserTask;