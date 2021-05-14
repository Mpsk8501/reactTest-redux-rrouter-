import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import {
  UserOutlined,
  DesktopOutlined,
  AppstoreOutlined,
} from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
const Header = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState('/')

  useEffect(() => {
    setCurrentMenuItem(window.location.pathname)
  }, [])

  return (
    <header>
      <Menu
        onClick={(e) => setCurrentMenuItem(e.key)}
        selectedKeys={currentMenuItem}
        mode="horizontal"
      >
        <Menu.Item key="/" icon={<DesktopOutlined />}>
          <Link to={'/'}>Home</Link>
        </Menu.Item>
        <Menu.Item key="/userPage" icon={<UserOutlined />}>
          <Link to={'/userPage'}>Users</Link>
        </Menu.Item>
        <Menu.Item key="/albumsPage" icon={<AppstoreOutlined />}>
          <Link to={'/albumsPage'}>Albums</Link>
        </Menu.Item>
      </Menu>
    </header>
  )
}

export default Header
