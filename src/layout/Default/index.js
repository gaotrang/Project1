
import { UserOutlined, SkinOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { Header, Main, Footer, Sidebar, Content, Logo, Layout, MenuItem } from './styled';
import AuthUser from "./AuthUser";

const DefaultLayout = ({ children }) => {

    return (
        <Layout>
            <Sidebar>
                <Logo>Green Academy</Logo>
                <MenuItem>
                    <Link to='/user'>
                        <UserOutlined />User
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/products'>
                        <SkinOutlined /> Products
                    </Link>
                </MenuItem>
            </Sidebar>

            <Content>

                <Header>
                    <AuthUser />
                </Header>

                <Main>
                    {children}
                </Main>

                <Footer>Powered by GaoTrang </Footer>

            </Content>

        </Layout>
    );
};

export default DefaultLayout;


