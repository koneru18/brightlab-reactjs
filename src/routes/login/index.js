import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './login.css';
import StringM from '../../components/common/assests/string-m.png';
import { Form, Icon, Input, Button, Checkbox, Row, Col, Spin } from 'antd';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const FormItem = Form.Item;
const USER_LOGIN = gql`
  mutation login($logonId: String, $password: String, $cent: Boolean) {
    login(logonId: $logonId, password: $password, cent: $cent) {
      userId
      sessionId
      logonId
    }
  }
`;

class LoginForm extends Component {
  
  handleSubmit = (e, login) => {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
      if (!err) {
        const logonId = values.userName;
        const password = values.password;
        const cent = true;
          await login({
            variables: { logonId, password, cent },
          });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Mutation mutation={USER_LOGIN} errorPolicy="all"
                onCompleted={result => {
                  // saveAccessToken(result.login.sessionId);
                  // console.log('result', result);
                  // <Redirect to="/dashboard" />
                  this.props.history.push("/dashboard");
                }}
                onError={({ graphQLErrors, networkError }) => {
                  console.log('graphQLErrors', graphQLErrors[0].message);
                }}>
        {(login, { data, loading, error }) => (
          
          <Row type="flex" justify="center">
            <Col span={5}>
              <Row type="flex" justify="center">
                <Col>
                  <img src={StringM} alt="fireSpot" style={{ marginTop: 50, marginBottom: 25 }} />
                </Col>
              </Row>
              <Spin spinning={loading} size="large" tip="Loading...">
                <Form onSubmit={e => this.handleSubmit(e, login)}>
                  <FormItem label="Username / Email">
                        {getFieldDecorator('userName', {
                          rules: [{ type: 'email', required: true, message: 'Please input your username!' }],
                        })(
                          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                  </FormItem>
                  <FormItem label="Password">
                        {getFieldDecorator('password', {
                          rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                  </FormItem>
                  <FormItem>
                        {getFieldDecorator('remember', {
                          valuePropName: 'checked',
                          initialValue: true,
                        })(
                          <Checkbox>Remember me</Checkbox>
                        )}
                        {/* <a className="login-form-forgot" href="">Forgot password</a> */}
                  </FormItem>
                  {/* <FormItem> */}
                  <Row type="flex" justify="center">
                    <Col>
                      <Button type="primary" htmlType="submit">
                        Log in
                      </Button>
                    </Col>
                  </Row>
                  {/* </FormItem> */}
                </Form>
              </Spin>
            </Col>
          </Row>

          
        )}

      </Mutation>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.object,
  history: PropTypes.object
};

export default Form.create()(LoginForm);