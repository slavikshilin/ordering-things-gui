import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { fetchLogin } from '../actions/authActions';

const FormItem = Form.Item

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field])
}

class Login extends React.Component {

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let _self = this;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { fetchLoginAction, history } = _self.props
                fetchLoginAction(values.userName, values.password, history)

                console.log('Received values of form: ', values)
            }
        })
    }

    handleConfirmLogin = (rule, value, callback) => {

        if (value && (value.length < 3 || value.length > 30)) {
            callback('Логин должен быть не менее 3-х и не более 30-ти символов!')
        }

        callback()
    }

    handleConfirmPassword = (rule, value, callback) => {

        if (value && (value.length < 3 || value.length > 20)) {
            callback('Пароль должен быть не менее 3-х и не более 20-ти символов!')
        }

        callback()
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
        const { isFetching } = this.props

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName')
        const passwordError = isFieldTouched('password') && getFieldError('password')
        return (
            <Form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                >
                    {getFieldDecorator('userName', {
                        rules: [
                            { required: true, message: 'Введите логин!' },
                            { validator: this.handleConfirmLogin }],
                    })(
                        <Input disabled={isFetching} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Логин" maxLength="30" />
                    )}
                </FormItem>
                <FormItem
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}
                >
                    {getFieldDecorator('password', {
                        rules: [
                            { required: true, message: 'Введите пароль!' },
                            { validator: this.handleConfirmPassword }],
                    })(
                        <Input disabled={isFetching} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Пароль" maxLength="20" />
                    )}
                </FormItem>
                <FormItem>
                    <Button
                        className="login-form-button"
                        type="primary"
                        htmlType="submit"
                        loading={isFetching}
                        disabled={hasErrors(getFieldsError())}
                    >
                        Войти
          </Button>
                </FormItem>
            </Form>
        )
    }
}

const WrappedLogin = Form.create()(Login)

const mapDispatchToProps = dispatch => {
    return {
        fetchLoginAction: (login, password, history) => dispatch(fetchLogin(login, password, history))
    }
}

export default withRouter(connect(
    null,
    mapDispatchToProps
)(WrappedLogin))
