import React, {useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CityButton from './cityButton';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    width: '93%',
    padding: '5px'
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [cities, setCities] = useState([
    {cityFa : 'تهران',cityEn: 'tehran'},
    {cityFa : 'کرج',cityEn: 'karaj'},
    {cityFa : 'اسلام شهر',cityEn: 'eslamshahr'},
    {cityFa : 'ساوه',cityEn: 'saveh'},
  ])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleCityId(id) {
    //console.log(id);
    setOpen(false);
    props.cityId(id)
  }



  return (
    <div>
      <button type="button" onClick={handleOpen} className="open-modal-btn">
        تهران
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="modal-box">
            <h2 id="transition-modal-title">انتخاب شهر</h2>
            <div className="modal-box__content">
              <div className="modal-box__content-search">
                
                  <InputBase
                    className={classes.input}
                    placeholder="جستجوی سریع نام شهر..."
                    inputProps={{ 'aria-label': 'جستجوی سریع نام شهر...' }}
                  />
                  <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                 
              </div> 

              <p className="modal-box__content-title">شهرهای پربازدید</p>
              <div className="modal-box__content-cities">  
                
                {cities.map( (item, index) => (
                  <CityButton city={item.cityFa} key={index + 1} dateId={item.cityEn} handleId={handleCityId}/>   

                ))}
                   
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
