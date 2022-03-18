import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import {useRouter} from 'next/router';


function AdminLoginPage(){

  const router = useRouter()

  function navigateToDashBoard(){
    router.push('/admin')
    if(typeof window !== 'undefined'){
      return window.localStorage.setItem("userType","Admin")
 }
}

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='red' textAlign='center'>
        Admin Log-in
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='red' fluid size='large' onClick={navigateToDashBoard}>
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  )
}

export default AdminLoginPage;