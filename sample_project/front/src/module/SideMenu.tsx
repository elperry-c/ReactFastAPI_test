/**
 * @module SideMenu.tsx
 * @author S.Utsumi
 */

import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import {
    Home as HomeIcon,
    Settings as SettingIcon,
    Api as ApiIcon    
} from '@mui/icons-material'
import { Link } from "react-router-dom";

/**
 * メニューのプロパティ
 * @interface
 * @prop {string} name - メニュー表示名
 * @prop {string} link - リンク先
 * @prop {JSX.Element} icon - アイコン
 */
interface MenuProp {
    name: string
    link: string
    icon: JSX.Element
}

/**
 * サイドメニューの一番上のブロックに表示するメニュー
 * @constant
 * @type {MenuProp[]}
 */
const menuList1: MenuProp[] = [
    { name: 'Home', link: '/', icon: <HomeIcon /> },
    { name: 'Setting', link: '/setting', icon: <SettingIcon /> }
];

/**
 * サイドメニューの上から2番目のブロックに表示するメニュー 
 * @constant
 * @type {MenuProp[]}
 */
const menuList2: MenuProp[] = [
    { name: 'Sample', link: '/sample', icon: <ApiIcon /> }
];

/**
 * 引数のメニューアイテムを表示する
 * @function 
 * @param {MenuProp} menu - メニューアイテム
 * @returns {JSX.Element}
 */
const MenuItemElement = (menu: MenuProp): JSX.Element => {
    return (
        <Link to={menu.link} >
            <ListItem key={menu.name} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        {menu.icon}
                    </ListItemIcon>
                    <ListItemText primary={menu.name} />
                </ListItemButton>
            </ListItem>
        </Link>
    );
};

/**
 * サイドメニュー
 * @function
 * @returns {JSX.Element}
 */
export const SideMenu = (): JSX.Element => {
    return (
        <>
            <Divider />
            <List>
                {menuList1.map((menu) => MenuItemElement(menu))}
            </List>
            <Divider />
            <List>
                {menuList2.map((menu) => MenuItemElement(menu))}
            </List>
        </>
    );
};