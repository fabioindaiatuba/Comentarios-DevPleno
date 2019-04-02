import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: '',
        passwd: '',
    }

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }
    login = () => {
        this.props.login(this.state.email, this.state.passwd);
    }

    render() {
        const errorMessages = {
            'auth/wrong-password': 'e-Mail e/ou senha inválidos',
            'auth/user-not-found': 'Usuário não encontrado',
            'auth/invalid-email': 'e-Mail inválido',
        }
        return (
            <div>
                <h4>Login</h4>
                <input type="text" onChange={this.handleChange('email')} placeholder="e-Mail" />
                <input type="password" onChange={this.handleChange('passwd')} placeholder="senha" />
                <button type='button' onClick={this.login}>Entrar</button>
                <button onClick={() => this.props.changeScreen('signup')} >Criar Conta</button>
                {
                    this.props.isAuthError && 
                    <p><b>Erro: </b>{errorMessages[this.props.authError]}</p>
                }
            </div>
        );
    }
}
export default Login