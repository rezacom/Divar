import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../style/main.scss'
import logo from './divar.png'
import  Modal from './modal'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    back: {
        background: 'white',
        boxShadow: '0 0 0 0',
        border: 'none',
        borderBottom: '2px solid #eee'
    },
    Button: {
      padding: '11px 20px',
      lineHeight: 1,
      alignSelf: 'center',
      marginRight: 25,

    }
  
  }));
  

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
    const classes = useStyles();
    const [cityIdState, setCityIdState] = useState('tehran')

    function handleCityId(id) {
      setCityIdState(id)
      props.cityId(id)
    }

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.back}>
          <Toolbar position="static" className="sss">
              <div className="header-items">
                <a href="http://localhost:3000/" className="logo"><img className="logo__img" src={logo} alt=""/></a>

                <Modal className={classes.Button} variant="outlined" cityId={handleCityId}/>
                <div className="nav-bar">
                      <ul className="menu-items">
                          <li className={classes.menuItem}><a href="#">دیوار من</a></li>
                          <li className={classes.menuItem}><a href="#">چت</a></li>
                          <li className={classes.menuItem}><a href="#">درباره ما</a></li>
                          <li className={classes.menuItem}><a href="#">بلاگ</a></li>
                          <li className={classes.menuItem}><a href="#">پشتیبانی و قوانین</a></li>
                          <li className={classes.menuItem}><a href="#">تماس باما</a></li>
                      </ul>
                  
                  </div>
                  
                  <Button variant="contained" className="header-items__button">
                    ثبت رایگان اگهی
                  </Button>

                  
              </div>
            
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

    </>
  );
}
