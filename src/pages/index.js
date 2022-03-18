import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import Link from 'next/link'
import {useRouter} from 'next/router';

function LoginPage(){

  const router = useRouter()

  function navigateToDashBoard(){
    router.push('/user')
    if(typeof window !== 'undefined'){
      return window.localStorage.setItem("userType","User")
 }
  }
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        User Log-in
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

          <Button color='teal' fluid size='large' onClick={navigateToDashBoard}>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
      <Link href="/admin/login">
          <a>Admin Login</a>
        </Link>
      </Message>
    </Grid.Column>
  </Grid>
  )
}

export default LoginPage;