import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

const drawerWidth = 240

const useStyles = makeStyles({
  root: {
    width: drawerWidth,
    flexShrink: 0,
  }
})

export default function Nav({ className }) {
  const classes = useStyles()
  const [state, setState] = React.useState({ nav: false })

  const to = category => (
    // 全てのカテゴリみたいなのも実装する
    `/category/${category.id}`
  )

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ ...state, 'nav': open })
  }

  const sideList = () => (
    <div
      className={classes.root}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['All Categories', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  )

  return (
    <div>
      <IconButton 
        edge="start" 
        className={className} 
        color="inherit" 
        aria-label="menu"
        onClick={toggleDrawer(true)}
        >
        <MenuIcon />
      </IconButton>
      <Drawer open={state.nav} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  )
}

// import React from 'react'
// import PropTypes from 'prop-types'
// import Button from '@material-ui/core/Button'
// import Drawer from '@material-ui/core/Drawer'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'

// export default function Nav({ categories, onClick }) {
//   // 遷移先パスの生成
//   //   - カテゴリIDが"1"の場合は /all
//   //   - それ以外は /category/カテゴリID
//   const to = category => (
//     category.id === '1'
//       ? '/all'
//       : `/category/${category.id}`
//   )
//   // - Drawer, List、ListItem、ListItemTextで実装
//   // - onClickでContainer Componentに各リンクの選択を通知
//   return (
//     <div>
//       <p>NavBar!!</p>
//       <Button variant="contained" color="primary" onClick={() => toi()} />
//     </div>
//     <Drawer type="permanent">
//       <List style={{ width: 240 }}>
//         {categories.map(category => (
//           <ListItem
//             button
//             key={`menu-item-${category.id}`}
//             onClick={() => onClick(to(category))}
//           >
//             <ListItemText primary={category.name} />
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   )
// }
// Nav.propTypes = {
//   categories: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired
//     })
//   ).isRequired,
//   onClick: PropTypes.func.isRequired
// }

// import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import HelpIcon from '@material-ui/icons/Help';
// import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import Link from '@material-ui/core/Link';
// import MenuIcon from '@material-ui/icons/Menu';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import Tab from '@material-ui/core/Tab';
// import Tabs from '@material-ui/core/Tabs';
// import Toolbar from '@material-ui/core/Toolbar';
// import Tooltip from '@material-ui/core/Tooltip';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';

// const lightColor = 'rgba(255, 255, 255, 0.7)';

// const styles = theme => ({
//   secondaryBar: {
//     zIndex: 0,
//   },
//   menuButton: {
//     marginLeft: -theme.spacing(1),
//   },
//   iconButtonAvatar: {
//     padding: 4,
//   },
//   link: {
//     textDecoration: 'none',
//     color: lightColor,
//     '&:hover': {
//       color: theme.palette.common.white,
//     },
//   },
//   button: {
//     borderColor: lightColor,
//   },
// });

// function Header(props) {
//   const { classes, onDrawerToggle } = props;

//   return (
//     <React.Fragment>
//       <AppBar color="primary" position="sticky" elevation={0}>
//         <Toolbar>
//           <Grid container spacing={1} alignItems="center">
//             <Hidden smUp>
//               <Grid item>
//                 <IconButton
//                   color="inherit"
//                   aria-label="open drawer"
//                   onClick={onDrawerToggle}
//                   className={classes.menuButton}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </Grid>
//             </Hidden>
//             <Grid item xs />
//             <Grid item>
//               <Link className={classes.link} href="#" variant="body2">
//                 Go to docs
//               </Link>
//             </Grid>
//             <Grid item>
//               <Tooltip title="Alerts • No alerts">
//                 <IconButton color="inherit">
//                   <NotificationsIcon />
//                 </IconButton>
//               </Tooltip>
//             </Grid>
//             <Grid item>
//               <IconButton color="inherit" className={classes.iconButtonAvatar}>
//                 <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
//               </IconButton>
//             </Grid>
//           </Grid>
//         </Toolbar>
//       </AppBar>
//       <AppBar
//         component="div"
//         className={classes.secondaryBar}
//         color="primary"
//         position="static"
//         elevation={0}
//       >
//         <Toolbar>
//           <Grid container alignItems="center" spacing={1}>
//             <Grid item xs>
//               <Typography color="inherit" variant="h5" component="h1">
//                 Authentication
//               </Typography>
//             </Grid>
//             <Grid item>
//               <Button className={classes.button} variant="outlined" color="inherit" size="small">
//                 Web setup
//               </Button>
//             </Grid>
//             <Grid item>
//               <Tooltip title="Help">
//                 <IconButton color="inherit">
//                   <HelpIcon />
//                 </IconButton>
//               </Tooltip>
//             </Grid>
//           </Grid>
//         </Toolbar>
//       </AppBar>
//       <AppBar
//         component="div"
//         className={classes.secondaryBar}
//         color="primary"
//         position="static"
//         elevation={0}
//       >
//         <Tabs value={0} textColor="inherit">
//           <Tab textColor="inherit" label="Users" />
//           <Tab textColor="inherit" label="Sign-in method" />
//           <Tab textColor="inherit" label="Templates" />
//           <Tab textColor="inherit" label="Usage" />
//         </Tabs>
//       </AppBar>
//     </React.Fragment>
//   );
// }

// Header.propTypes = {
//   classes: PropTypes.object.isRequired,
//   onDrawerToggle: PropTypes.func.isRequired,
// };

// export default withStyles(styles)(Header)