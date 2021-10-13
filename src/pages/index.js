import React from 'react';
import Nav from '../components/nav.js'
import { Container, Segment, Header, Button } from 'semantic-ui-react';

const HomePage = () => {
  function onButtonClick() {
    console.log('Hi there');
}


return (
  <React.Fragment>
    <Nav></Nav>
      <Container textAlign='center'>
        <Segment>
        <Header as ='h1'>Home</Header>
        <p>Some random text that needs not readen</p>
        <Button color="green">Join Now!</Button>
        </Segment>
      </Container>
      <Container>
        <Header as='h2'>News</Header>
        <p>More text that need not readen.</p>
      </Container>
  </React.Fragment>
  );
};

export default HomePage;