import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

export default function Login() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button color="inherit">
        <Avatar src="/broken-image.jpg" />
      </Button>
    </div>
  )
}