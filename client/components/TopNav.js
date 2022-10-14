import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { AppstoreOutlined, LogoutOutlined, UserAddOutlined } from '@ant-design/icons';

const { Item } = Menu;

const TopNav = () => {
    const [current, setCurrent] = useState("")

    useEffect(() => {
        typeof window !== 'undefined' && setCurrent(window.location.pathname)
    }, [typeof window !== 'undefined' && window.location.pathname])

    return (
        <>
            <Menu mode='horizontal' selectedKeys={[current]}>
                <Item key="/" onClick={(e) => setCurrent(e.key)} icon={<AppstoreOutlined />}>
                    <Link href="/">
                        <a>App</a>
                    </Link>
                </Item>
                <Item key="/login" onClick={(e) => setCurrent(e.key)} icon={<LogoutOutlined />}>
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                </Item>
                <Item key="/register" onClick={(e) => setCurrent(e.key)} icon={<UserAddOutlined />}>
                    <Link href="/register">
                        <a>Register</a>
                    </Link>
                </Item>
            </Menu>
        </>
    );
};

export default TopNav;