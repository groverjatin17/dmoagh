import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [expandedPanel, setPanelState] = useState(null);

  const menu = useSelector((state) => state.homepageReducers.menu);

  const handleClick = (panelId) => {
    if (panelId === expandedPanel) {
      setPanelState(null);
    } else {
        setPanelState(panelId);
    }
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
      {menu &&
        menu.map((menuItem) => {
          if (menuItem.subItems.length > 0) {
            return (
              <>
                <ListItem
                  button
                  onClick={() => handleClick(menuItem.menuItemId)}
                >
                  <ListItemText primary={menuItem.menuItemTitle} />
                  {expandedPanel === menuItem.menuItemId ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItem>
                <Collapse
                  in={expandedPanel === menuItem.menuItemId}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {menuItem.subItems.map((subItem) => (
                      <ListItem
                        key={subItem.subItemId}
                        button
                        className={classes.nested}
                      >
                        <ListItemText primary={subItem.subItemTitle} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            );
          }
          return (
            <ListItem key={menuItem.menuItemId} button>
              <ListItemText primary={menuItem.menuItemTitle} />
            </ListItem>
          );
        })}
    </List>
  );
}
