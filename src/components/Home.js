import { Breadcrumb, Layout, Menu } from 'antd';
import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';





const { Header, Content, Footer } = Layout;
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
];

const onClick = (e) => {
    console.log('click', e);
};

const Home = () => (
    <Layout className="layout">
        <Header style={{ padding: '0px', }}>
            <div className="logo" />
            <Menu
                onClick={onClick}
                style={{
                    width: '100%', backgroundColor: '#000', color: '#fff'
                }}
                mode="horizontal"
                items={items}
            />
        </Header>
        <Content
            style={{
                padding: '0 50px',
            }}
        >
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                {/* <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item> */}
            </Breadcrumb>
            <div className="site-layout-content">
                <h3>Chào mừng đến với trang chủ</h3>

            </div>
        </Content>
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Đây là cuối trang rồi
        </Footer>
    </Layout>
);

export default Home;