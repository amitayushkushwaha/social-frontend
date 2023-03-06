import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import LegendToggleOutlinedIcon from '@mui/icons-material/LegendToggleOutlined';
import styles from '@/styles/Navbar.module.css'
import {motion , AnimatePresence} from 'framer-motion'
import { useState } from 'react';
import Dropdown from './Dropdown';
const Navbar = () => {
    const[toggle,setToggle] = useState(false)
    const[sunny,setSunny] = useState(false)
    const handleToggleClick = ()=>{
        setToggle(true)
        console.log(toggle)
    }
    const handleSunnyClick = ()=>{
        setSunny(true)
        console.log(sunny)
    }
    return ( 
        <div className={styles.navbar}>
            <motion.div className={styles.leftNavbar}>
                e<span className={styles.leftNavbarTitle}>Chat</span>
            </motion.div>
            <div className="rightNavbar">
                <div className={styles.icons}>
                    <motion.div className={styles.sunny}
                    onClick = {handleSunnyClick}
                    whileHover = {{scale:1.3 , color : '#2c2c54',rotateY : 360,transition : {duration : .7}}}
                    ><WbSunnyOutlinedIcon/></motion.div>
                    <motion.div className={styles.toggle}
                    onClick = {handleToggleClick}
                    whileHover = {{scale:1.3 , color : '#2c2c54',rotateY : 360,transition : {duration : .5}}}
                    ><LegendToggleOutlinedIcon/></motion.div>
                </div>
            </div>
            <AnimatePresence>
            {toggle && (
                <motion.div className={styles.dropdownComp}
                exit = {{opacity : 0 , transition : {duration : .5}}}
                ><Dropdown toggle = {toggle} setToggle = {setToggle}/></motion.div>
            )}
            
            </AnimatePresence>
        </div>
     );
}
 
export default Navbar;