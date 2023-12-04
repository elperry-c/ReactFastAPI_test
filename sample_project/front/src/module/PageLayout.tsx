/**
 * @module PageLayout.tsx
 * @link [参考URL](https://qiita.com/akiumikin/items/b95f3fc3d9ba5d9924b2)
 */

import * as React from 'react';
import {
    styled,
    useTheme,
    Box,
    AppBar as MuiAppBar,
    AppBarProps as MuiAppBarProps,
    Drawer,
    CssBaseline,
    Toolbar,
    Typography,
    IconButton,
} from '@mui/material';
import {
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from '@mui/icons-material'
import { DRAWER_WITDH } from './Constants';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${DRAWER_WITDH}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${DRAWER_WITDH}px)`,
        marginLeft: `${DRAWER_WITDH}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

/**
 * @interface
 * @prop {React.ReactNode} sideMenu
 * @prop {React.ReactNode} mainContent
 */
interface Props {
    sideMenu: React.ReactNode
    mainContent: React.ReactNode
}

/**
 * 左にサイドメニュー、残りスペースはメインコンテンツを表示
 * @function
 * @param {Props} props - サイドメニューとメインコンテンツの Reactコンポーネント
 * @returns {JSX.Element}
 */
export const PersistentDrawerLeft = (props: Props): JSX.Element => {
    const [open, setOpen] = React.useState(true);
    const theme = useTheme();

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Perry の開発テスト用ページ
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: DRAWER_WITDH,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: DRAWER_WITDH,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                {props.sideMenu}
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Box minHeight={window.innerHeight - 90}>
                    {props.mainContent}
                </Box>
            </Main>
        </Box>
    );
};