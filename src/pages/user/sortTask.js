import DashboardLayout from '../../components/dashboard/layout';
import 'tailwindcss/tailwind.css';
import VerticalDragList from '../../components/VerticalDragList';
import { Header,Button} from 'semantic-ui-react'

function SortTask(){
    return (
      <DashboardLayout>
         <Header as='h2' icon textAlign='center'>
          <Header.Content>Sort Tasks</Header.Content>
          </Header>
          <div align='center'>
          <VerticalDragList />
          <Button  color='purple'>Save New Sorted List</Button> 
          </div>
      </DashboardLayout>
    )
    }
    
    export default SortTask;