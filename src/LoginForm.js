import React from 'react';

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        };
        this.handlerEmail = this.handlerEmail.bind(this);
        this.handlerPassword = this.handlerPassword.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    handlerEmail(event) {
        this.setState({email: event.target.value});
    }

    handlerPassword(event) {
        this.setState({password: event.target.value});
    }

    handlerSubmit(event) {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            }),
        }).then(function(response) {
            console.log(response.headers.get("Authorization"));
            console.log(response.status);
            console.log(response.type);
            console.log(response.body);
        })
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handlerSubmit}>
                <label>
                    Email:
                    <input type="text" onChange={this.handlerEmail}/>
                </label>
                <label>
                    Password:
                    <input type="password" onChange={this.handlerPassword}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default LoginForm;