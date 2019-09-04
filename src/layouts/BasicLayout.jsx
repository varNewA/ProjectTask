import styles from './BasicLayout.css';
/* import Sider from '../components/Sider' */
import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd';
import Link from 'umi/link';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function BasicLayout(props) {

  const logout = (
    <Menu>
      <Menu.Item>
        <Link to={'./login'}>退出</Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.logo} />
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
          <div className={styles.right}>
            <Dropdown overlay={logout}>
              <div>
                <span className={styles.username}>
                  {`hi，admin`}<Icon type="down" />
                </span>
              </div>
            </Dropdown>
          </div>

      </Header>
      <Layout>
        <Sider width={300} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav 1
          </span>
              }
            >
              <Menu.Item key="1" ><Link to={'./index'}>QueryTable</Link></Menu.Item>
              <Menu.Item key="2" ><Link to={'./showform'}>ShowForm</Link></Menu.Item>
              <Menu.Item key="3"><Link to={'./dateform'}>DateForm</Link></Menu.Item>
              <Menu.Item key="4"><Link to={'./packageform'}>PackageForm</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  subnav 2
          </span>
              }
            >
              <Menu.Item key="5"><Link to={'./billform'}>BillForm</Link></Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  subnav 3
          </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/*  <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;

