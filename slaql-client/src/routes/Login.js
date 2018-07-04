import React from 'react';
import { observer } from 'mobx-react';
import { Message, Button, Input, Container, Header } from 'semantic-ui-react';
import { extendObservable } from 'mobx';

export default observer(class Login extends React.Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      email: '',
      password: '',
    });
  }

  onSubmit = () => {
    const { email, password } = this;
    console.log('email :', email);
    console.log('password', password);
  }
  onChange = e => {
    const { name, value } = e.target;
    this[name] = value;
  }
  render() {
    const { email, password } = this;
    return (
      <Container text>
        <Header as="h2">Login</Header>

        <Input
          name="email"
          onChange={this.onChange}
          value={email}
          placeholder="Email"
          fluid
        />
        <Input
          name="password"
          onChange={this.onChange}
          value={password}
          type="password"
          placeholder="Password"
          fluid
        />
        <Button onClick={this.onSubmit}>Submit</Button>
      </Container>
    );
  }
});
