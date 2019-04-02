import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        email: '',
        passwd: '',
    }

    handleChange = field => event => {
        this.setState({ [field]: event.target.value })
    }
    createAccount = () => {
        this.props.createAccount(this.state.email, this.state.passwd);
    }

    render() {
        const errorMessages = {
            'auth/email-already-in-use': 'e-Mail já foi utilizado',
            'auth/weak-password': 'Senha muito fraca',
            'auth/invalid-email': 'e-Mail inválido',
        }
        return (
            <div>
                <h4>Criar Conta</h4>
                <input type="text" onChange={this.handleChange('email')} placeholder="e-Mail" />
                <input type="password" onChange={this.handleChange('passwd')} placeholder="senha" />
                <button type='button' onClick={this.createAccount}>Criar conta</button>
                <button onClick={() => this.props.changeScreen('login')} >Já tenho uma conta, entrar!</button>
                {
                    this.props.isSignUpError && 
                    <p><b>Erro: </b>{errorMessages[this.props.signUpError]}</p>
                }
            </div>
        );
    }
}
export default SignUp