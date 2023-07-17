import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import styled from 'styled-components';
import TestProfileImage from '../Header/TestProfileImage.jpg'
import AddArticle from './AddArticle';


const drawerWidth = 60;

const StyledImage = styled.img`
    border-radius : 50%;
    width : 30px;
    height : 30px;
    margin : 0px;
    position : absolute;
    top : 16px;
    left : 12px;
`;


export default function SideBar() {
    return (
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >
    
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <List>
                        {['Instagram', 'Home', 'Add', 'Image'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon style={{color : "black"}}>
                                        {index === 0 && <InstagramIcon />}
                                        {index === 1 && <HomeIcon />}
                                        {index === 2 && <AddArticle />}
                                        {index === 3 && <StyledImage src={TestProfileImage} />}
    
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Drawer>
            </Box>
        );
}