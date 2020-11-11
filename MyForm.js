import React, {useState} from 'react';
import { Container, Header, Content, Form, Item, Input, Text, Button } from 'native-base';
export default function FormExample() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleSubmit = () => {
        // var emailValid = false;
        // if(email.length == 0){
        //     setEmailError("Email is required");
        // }
        // else if(email.length < 6){
        //     setEmailError("Email should be minimum 6 characters")
        // } else if(email.indexOf('') >= 0){
        //     setEmailError('Email cannot contain spaces')
        // } else {
        //     setEmailError("")
        //     emailValid = true
        //     alert('Email: ' + email + '\nPassword: ' + password)
        // }

        // if(emailValid){
            alert('Email: ' + email + '\nPassword: ' + password)
        // }
    }


    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Enter Email" onChangeText={text => setEmail(text)} />
            </Item>
            <Item last>
              <Input placeholder="Enter Password" onChangeText={text => setPassword(text)} />
            </Item>
            <Button onPress={handleSubmit} >
                <Text>Submit</Text>
            </Button>
          </Form>
          <Text>
              Email entered: {email}
          </Text>
          <Text>
              Password Entered: {password}
          </Text>
        </Content>
      </Container>
    );
}