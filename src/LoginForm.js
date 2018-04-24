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
        this.setState({email: event.target.value.toUpperCase()});
    }

    handlerPassword(event) {
        this.setState({password: event.target.value.toUpperCase()});
    }

    handlerSubmit(event) {
        alert('An email was submitted: ' + this.state.email + " with password " + this.state.password);
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