import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';



const StyledFab = styled(Fab)({
  // position: 'absolute',
  // zIndex: 1,
  // left: 0,
  // right: 0,
  // margin: '0 auto',
});

export default function BottomAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
            <IconButton color="secondary" size="large" aria-label="shuffle">
              <ShuffleIcon />
            </IconButton>
            <IconButton color="secondary" size="large" aria-label="skipprevious">
              <SkipPreviousIcon />
            </IconButton>
            <StyledFab color="secondary" aria-label="add">
              <PauseIcon />
            </StyledFab>
            <IconButton color="secondary" size="large" aria-label="skipnext">
              <SkipNextIcon />
            </IconButton>
            <IconButton color="secondary" size="large" aria-label="shuffle">
              <RepeatIcon />
            </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}