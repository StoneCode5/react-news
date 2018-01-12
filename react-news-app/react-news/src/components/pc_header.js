import React from 'react';
import {
  Col,
  Row,
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  // Input,
  Button,
  Modal
} from 'antd';
import logo from '../image/logo.png'
// import axios from 'axios'
import '../css/head.scss';
// import ReactDOM from 'react-dom';
// const FormItem = Form.Item;
const TabPane = Tabs.TabPane;


class Abc extends React.Component {

  handleSubmit() {
    alert('通信成功')
  }
  render() {
    return (
      <h1>child</h1>
    )
  }
}

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // this.props.handleSubmit()
      }
    });
  }
  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
        <FormItem label="账户">
          {/* <Input placeholder="请输入您的账号" {...getFieldProps('userName') } /> */}
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
        </FormItem>
      </Form>
    )
  }
}

const LoginForm = Form.create()(NormalLoginForm);


export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userid: 0,
      btnLoading: false
    }
    this.handleModelOk = this.handleModelOk.bind(this)
  }

  logout() {
    console.warn('out', message)
  }

  setModalVisible(value) {
    this.setState({ modalVisible: value });
  }

  handleModelOk() {
    console.log(this.refs.loginForm)
    this.refs.loginForm.handleSubmit()
    // this.refs.login.handleSubmit()
  }

  handleModelCancel() {

  }
  tabChange() {

  }
  handleSubmit() {

  }
  handleMenuClick({ key }) {
    if (key === 'register') {
      this.setState({ current: key })
      this.setModalVisible(true)
      // 打开model
    } else {
      console.warn('go to other page');
    }
    // console.warn('click', item);
  }
  render() {
    const loginedModel =
      <Menu.Item key="logout" class="register">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
        &nbsp;&nbsp;
        <Button type="dashed" htmlType="button">个人中心</Button>
        &nbsp;&nbsp;
        <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
      </Menu.Item>
    const noLoginModel =
      <Menu.Item key="register" className="h_register">
        <Icon type="appstore" /><span>登陆/注册</span>
      </Menu.Item>
    const userModel = this.state.hasLogined ? loginedModel : noLoginModel

    return (
      <div>
        <Row>
          <Col span={4}>
            <a href="" className="h_logoBox">
              <div className="h_imgBox">
                <img src={logo} alt="logo" />
              </div>
              <p className="h_logo">ReactNews</p>
            </a>
          </Col>
          <Col span={20}>
            {/* <Row type="flex" justify="space-between">
              <Col> */}
            <Menu mode="horizontal" onClick={this.handleMenuClick.bind(this)} defaultSelectedKeys={[this.state.current]}>
              <Menu.Item key="top">
                <Icon type="appstore" />头条
          </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="appstore" />社会
          </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore" />国内
             </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore" />国际
             </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="appstore" />娱乐
             </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="appstore" />体育
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="appstore" />科技
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="appstore" />时尚
              </Menu.Item>
              {userModel}
            </Menu>
          </Col>
        </Row>
        <Modal title="用户中心"
          wrapClassName="vertical-center-modal"
          visible={this.state.modalVisible}
          onCancel={() => this.setModalVisible(false)}
          onOk={() => this.setModalVisible(false)}
          // footer={[
          //   <Button key="back" onClick={this.handleModelCancel}>返回</Button>,
          //   <Button key="submit" type="primary" loading={this.state.btnLoading} onClick={this.handleModelOk}>
          //     {this.state.action ? '登陆' : '注册'}
          //   </Button>,
          // ]}
          >
          <Tabs type="card" onChange={this.tabChange.bind(this)}>
            <TabPane tab="登录" key="1">
              {/* <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户"> */}
              {/* <Input placeholder="请输入您的账号" {...getFieldProps('userName') } /> */}
              {/* {getFieldDecorator(this.state.userNickName, {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )} */}
              {/* </FormItem>
              </Form> */}
              <LoginForm  />
              <Abc ref="login" />
            </TabPane>
            <TabPane tab="注册" key="2">
              <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                {/* <FormItem label="账户">
                  <Input placeholder="请输入您的账号" {...getFieldProps('r_userName') } />
                </FormItem>
                <FormItem label="密码">
                  <Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password') } />
                </FormItem>
                <FormItem label="确认密码">
                  <Input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword') } />
                </FormItem>
                <Button type="primary" htmlType="submit">注册</Button> */}
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    )
  }
}
