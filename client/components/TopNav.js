import { useState, useEffect, useContext } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { AppstoreOutlined, CoffeeOutlined, LogoutOutlined, UserAddOutlined } from '@ant-design/icons';
import { Context } from "../context";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const { Item, SubMenu, ItemGroup } = Menu;

const TopNav = () => {
    const [current, setCurrent] = useState("")
    const { state, dispatch } = useContext(Context);
    const { user } = state
    const router = useRouter()

    useEffect(() => {
        typeof window !== 'undefined' && setCurrent(window.location.pathname)
    }, [typeof window !== 'undefined' && window.location.pathname])

    const logout = async () => {
        dispatch({type: "LOGOUT"})
        window.localStorage.removeItem("user")
        const { data } = await axios.get("/api/logout")
        toast(data.message)
        router.push("/login")
    }

    return (
        <>
            <Menu mode='horizontal' selectedKeys={[current]}>
                <Item key="/" onClick={(e) => setCurrent(e.key)} icon={<AppstoreOutlined />}>
                    <Link href="/">
                        <a>App</a>
                    </Link>
                </Item>
                {user === null && (
                    <>
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
                    </>
                )}
                {user !== null && (
                    <>
                        <SubMenu icon={<CoffeeOutlined />} title={user && user.name} style={{ marginLeft: 'auto' }}>
                            <ItemGroup>
                                <Item key="/user" style={{ marginLeft: 'auto' }}>
                                    <Link href="/user"><a>Dashboard</a></Link>
                                </Item>
                                <Item key="/logout" onClick={logout} icon={<LogoutOutlined />} style={{ marginLeft: 'auto' }}>
                                    Logout
                                </Item>
                            </ItemGroup>
                        </SubMenu>
                    </>
                )}
            </Menu>
        </>
    );
};

export default TopNav;