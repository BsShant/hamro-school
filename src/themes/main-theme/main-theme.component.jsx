import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './main-theme.css';
import { logoutProcessStarts } from '../../store/authStore/auth.action';
import {
    useHistory,
} from "react-router-dom";
import { Layout, Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    PoweroffOutlined
} from '@ant-design/icons';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

const AppTheme = (PassedComponent, ...props) => {
    const Sticky = (props) => {
        const { error } = props;
        let history = useHistory();
        const dispatch = useDispatch()
        const { Header, Sider, Content } = Layout;
        const [collapsed, toggleCollapse] = useState(false)
        const [loadings, toggleloading] = useState(false)


        const toggle = () => {
            toggleCollapse(!collapsed)
        };
        const enterLoading = () => {
            toggleloading(true)
            dispatch(logoutProcessStarts())
            setTimeout(() => {
                if (!error) {
                    history.push('/login')
                }
                return toggleloading(false)
            }, 6000);

        }
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} style={{
                    minHeight: "100vh",
                }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                        <Button
                            type="primary"
                            icon={<PoweroffOutlined />}
                            loading={loadings}
                            onClick={() => enterLoading()}
                        >
                            LogOut
        </Button>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <PassedComponent {...props} />
                    </Content>
                </Layout>
            </Layout>
        )
    }
    const mapStateToProps = state => ({
        user: state.authMode.authUser,
        error: state.authMode.error

    })
    return connect(mapStateToProps)(Sticky);
}

export default AppTheme;
