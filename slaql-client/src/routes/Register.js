import React, { Component } from 'react';
import { Button, Input, Container, Header } from 'semantic-ui-react';
import { gql, graphql } from 'react-apollo'



class Register extends React.Component {
	state = {
		username: '',
		email: '',
		password: ''
	}

	onChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	onSubmit = () => {

		const response = this.props.mutate({
			variables: this.state
		});

		console.log(response);
	}

	render() {

		const { username, email, password } = this.state;

		return (
			<Container text>
				<Header as='h2'>Register</Header>
				<Input
					name="username"
					onChange={this.onChange}
					value={username}
					placeholder="Name"
					fluid
				/>
				<Input
					name="email"
					onChange={this.onChange}
					placeholder="Email"
					fluid
					value={email}
				/>
				<Input
					name="password"
					onChange={this.onChange}
					type="password"
					value={password}
					placeholder="Password"
					fluid />
				<Button onClick={this.onSubmit}>

				</Button>
			</Container>
		);
	}
}

const registerMutation = gql`
mutation($username: String!,$email: String!, $password: String!){
  	register(username: $username,email: $email, password:$password)
}
`;

export default graphql(registerMutation)(Register);