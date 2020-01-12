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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
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
      className={classes.list}
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