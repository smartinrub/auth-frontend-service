import React from 'react';
import Cookies from 'universal-cookie';

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
        const cookies = new Cookies();

        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            }),
        }).then(response => {
            if(!response.ok) {
                throw response;
            }
            return response.text()
            
        }).then(value => {
            cookies.set('token', value, { path: '/' });
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