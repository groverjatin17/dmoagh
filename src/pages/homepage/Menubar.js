import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '../../assets/menu-icon.svg';
import MobileMenuBar from './MobileMenuBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color:"#001653",
    textTransform: "uppercase",
    fontSize: "16px",
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-evenly',
      width: '100%',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Menubar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menu = useSelector((state) => state.homepageReducers.menu);
  const submenu = useSelector((state) => state.homepageReducers.submenu);
  const dispatch = useDispatch();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    if (mobileMoreAnchorEl) {
      handleMobileMenuClose(null)
    } else {
      setMobileMoreAnchorEl(event.currentTarget);

    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  const renderMenu = submenu && submenu.length > 0 && (
    <div>
      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {submenu.length > 0 &&
          submenu.map((subItem) => (
            <StyledMenuItem key={subItem.subItemId}>
              <ListItemText primary={subItem.subItemTitle} />
            </StyledMenuItem>
          ))}
      </Menu>
    </div>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = isMobileMenuOpen && <MobileMenuBar />;

  return (
    <>
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar className="flex justify-center">
            <div className={classes.sectionDesktop}>
              {menu &&
                menu.map((menuItem) => (
                  <button
                    key={menuItem.menuItemId}
                    type="button"
                    className="focus:outline-none"
                    onClick={(e) => {
                      dispatch({
                        type: 'CURRENT_SUBMENU',
                        payload: menuItem.subItems,
                      });
                      handleProfileMenuOpen(e);
                    }}
                  >
                    <Typography className={classes.title} variant="h6" noWrap>
                      {menuItem.menuItemTitle}
                    </Typography>
                  </button>
                ))}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <img src={MenuIcon} alt="menu-icon" className="h-10" />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
      <div className="h-1 bg-gradient-to-r from-teal-400 to-blue-500" />
    </>
  );
}