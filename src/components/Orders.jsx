import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { Typography, Stack, Grid, Item } from '@mui/material';
import { ArrowDropUp, ArrowDropDown, KeyboardDoubleArrowLeft, Delete } from '@mui/icons-material';

function FormRow() {
  return (
    <React.Fragment>

      <Stack direction='row' sx={{direction:'flex', justifyContent:'space-between', alignItems:'center', ml:1, mr:1 }}>
        <Typography>12421521</Typography>
        <Typography>2 ADET</Typography>
        <Stack direction="column">
          <ArrowDropUp sx={{cursor:'pointer'}}/>
          <ArrowDropDown sx={{cursor:'pointer'}}/>
        </Stack>
        <Typography>230 TL</Typography>
        <Delete/>
      </Stack>

    </React.Fragment>
  );
}

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >


    <Stack >
      <Stack direction="row">
        <KeyboardDoubleArrowLeft/>
        <Typography>Detaylı Sepeti Gizle</Typography>
      </Stack>

      <Typography sx={{fontWeight:'bold', p:1}}>SEPET</Typography>

      <FormRow/>
      <FormRow/>
      <FormRow/>

      <Divider/>

      <Stack sx={{ direction:'flex', flexDirection:'row', justifyContent:'space-between', mr:11}}>
        <Typography sx={{p:1}}>Ara Toplam</Typography>
        <Typography sx={{p:1}}>660,36</Typography>
      </Stack>

      <Stack sx={{ direction:'flex', flexDirection:'row', justifyContent:'space-between', mr:11}}>
        <Typography sx={{p:1}}>KDV</Typography>
        <Typography sx={{p:1}}>%18  </Typography>
        <Typography sx={{p:1}}>118,86</Typography>
      </Stack>

      <Stack sx={{ direction:'flex', flexDirection:'row', justifyContent:'space-between', mr:11}}>
        <Typography sx={{p:1, fontWeight:'bold'}}>Toplam</Typography>
        <Typography sx={{p:1}}>660,36</Typography>
      </Stack>

    </Stack>


    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}