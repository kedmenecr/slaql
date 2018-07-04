import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

const link = createHttpLink({
	uri: 'http://localhost:8081/graphql',
});

const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});
const App = (
	<ApolloProvider client={client}>
		<Routes />
	</ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
