import React from 'react';

class Login extends React.Component {
    state = {
        username: '',
        password: '' 
    };

    render() {
        return(
            <div>
                <form>
                    <label>Username or e-mail</label>
                    <input
                      type='text'
                      value={this.state.username}
                      onChange={e => this.setState({ username: e.target.value})}
                    />
                    <br />
                    <label>Password</label>
                    <input
                      type='text'
                      value={this.state.password}
                      onChange={e => this.setState({ password: e.target.value})}
                    />
                    <br />
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Login;
