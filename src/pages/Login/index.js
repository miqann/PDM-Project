import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../../components/css/LoginPage.css';
import { Layout, Menu, Form, Input, Button, Checkbox, PageHeader } from 'antd';
import {
  DesktopOutlined,
  SmileOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import image from '../../components/image/logo.jpg';
import Password from 'antd/lib/input/Password';
import { render } from '@testing-library/react';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 10,
  },
};


const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LoginPage = () => {

  const [collapsed, setCollapsed] = useState(true)
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed)
  }

  const login = (text) => {
    console.log('Username', username)
    console.log('Password', pass)
    console.log(text)
    alert(text)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo"><img srs={image} /></div> /*chèn logo 179x100px*/

            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
            <Menu.Item key="1" icon={<SmileOutlined />}>Cá nhân</Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>Doanh nghiệp</Menu.Item>

        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>

             <Menu.Item key="9" icon={<FileOutlined />}>Files</Menu.Item></Menu>
         </Sider>

         <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
                         This is header. //nơi chèn banner, thanh search, ngày giờ...
           </Header>

          <Content style={{ margin: '0 16px' }}>
            <PageHeader
            className="site-page-header"
            title="Homepage"
            subTitle="Welcome to our BANK!" />

          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Form //tạo form đăng nhập
              name="normal-login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item {...layout}
                label="Username"
                name="username"
                rules={[{
                  require: true,
                  message: 'Please input your username!',
                },]}>
                <Input value={username} onChange={(e) => {
                  console.log(e.target.value)
                  setUsername(e.target.value)
                }} />
              </Form.Item>
              <Form.Item {...layout}
                label="Password"
                name="password"
                rules={[{
                  require: true,
                  message: 'Please input your password',
                },]}>
                <Input.Password />
              </Form.Item>
              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={() => {
                  login('OK!') 
                }}>Login</Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>@PDM Project 2021</Footer>
      </Layout>
    </Layout>
  );
}

export default LoginPage;