import DashboardLayout from '../../components/dashboard/layout';
import 'tailwindcss/tailwind.css';
import { Button, Form,Input ,TextArea,Header} from 'semantic-ui-react'

function CreateNewTask(){
    return (
      <DashboardLayout>
         <Header as='h2' icon textAlign='center'>
          <Header.Content>Create New Task</Header.Content>
          </Header>
           <Form>
         <Form.Field>
             <label>Task Title</label>
             <Input 
             placeholder='Enter Task Title' 
             type='text' 
             />  
        </Form.Field>
              
        <Form.Field>
             <div>
             <label>Task Duration</label>
             <Input 
             placeholder='Enter Task Duration' 
             type='text'
             />
            </div>
             </Form.Field>

             <Form.Field>
             <div>
             <label>Task Discreption</label>
             <TextArea 
             placeholder='Enter Task Discreption' 
             type='text'
             />
            </div>
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
                        
             <Button  fluid color='red'>Add New Task</Button> 
             
             </Form>
      </DashboardLayout>
    )
    }
    
    export default CreateNewTask;