import DashboardLayout from '../../components/dashboard/layout';
import 'tailwindcss/tailwind.css';
import { Button, Form,Input ,Header} from 'semantic-ui-react'

function CreateNewGroup(){
    return (
      <DashboardLayout>
          <Form>
          <Header as='h2' icon textAlign='center'>
          <Header.Content>Create New Group</Header.Content>
          </Header>
         <Form.Field>
             <label>Group Name</label>
             <Input 
             placeholder='Enter Group Name' 
             type='text' 
             id='user name'
             />  
        </Form.Field>
              
                         
             <Form.Field>
             <div>
             <label>Created Date</label>
             <Input 
             placeholder='Enter Created Date' 
             type='date'
             />
            </div>
             </Form.Field>
                        
             <Button  fluid color='green'>Add New Group</Button> 
             
             </Form>
      </DashboardLayout>
    )
    }
    
    export default CreateNewGroup;