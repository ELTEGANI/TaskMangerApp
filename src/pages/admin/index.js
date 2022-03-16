import DashboardLayout from '../../components/dashboard/layout';
import 'tailwindcss/tailwind.css';
import { Button, Form,Input,Header } from 'semantic-ui-react'

function AddNewUser(){
    return (
      <DashboardLayout>
         <Header as='h2' icon textAlign='center'>
          <Header.Content>Create New User</Header.Content>
          </Header>
        <Form>
         <Form.Field>
             <label>User Name</label>
             <Input 
             placeholder='Enter User Name' 
             type='text' 
             id='user name'
             />  
        </Form.Field>
              
                         
             <Form.Field>
             <div>
             <label>Job Title</label>
             <Input 
             placeholder='Enter Job Title' 
             type='text'
             />
            </div>
             </Form.Field>
            
             
             <Form.Field>
               <label>Join Date</label>
              <Input 
              placeholder='Enter Join Date' 
              type='date'
             />                
             </Form.Field>
            
             <Button  fluid color='brown'>Add New User</Button> 
             
             </Form>
      </DashboardLayout>
    )
    }
    
    export default AddNewUser;