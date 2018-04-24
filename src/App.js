import React from 'react';
import LoginForm from './LoginForm'

class App extends React.Component {
    render() {
        return (
            <div>
            <h1>Auth Jwt App</h1>
            <LoginForm />
            </div>
        )
    }
}

export default App;