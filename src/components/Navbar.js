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
        if(toggle == false){
            setToggle(true)
        }
        else{
            setToggle(false)

        }
        console.log(toggle)
    }
    const handleSunnyClick = ()=>{
        setSunny(true)
        console.log(sunny)
    }
    const dropdownVariants = {
        hidden : {
            x:'100vh'
        },
        visible:{
            x:0,
            transition:{
                duration : 1
            }
        }

    }
    return ( 
        <div className={styles.navbar}>
            <motion.div className={styles.leftNavbar}>
                e<span className={styles.leftNavbarTitle}>Chat</span>
            </motion.div>
            <div className={styles.rightNavbar}>
                <div className={styles.media}>
                    <div className={styles.itm}>
                        ITEM1
                    </div>
                    <div className={styles.itm}>
                        ITEM2
                    </div>
                    <div className={styles.itm}>
                        ITEM3
                    </div>
                    <div className={styles.itm}>
                        ITEM4
                    </div>
                    <div className={styles.itm}>
                        ITEM5
                    </div>
                    <div className={styles.itm}>
                        ITEM6
                    </div>
                </div>
                <div className={styles.icons}>
                    <motion.div className={styles.sunny}
                    onClick = {handleSunnyClick}
                    whileHover = {{scale:1.3 , color : '#2c2c54',transition : {duration : .3}}}
                    ><WbSunnyOutlinedIcon/></motion.div>
                    <motion.div className={styles.toggle}
                    onClick = {handleToggleClick}
                    whileHover = {{scale:1.3 , color : '#2c2c54',transition : {duration : .2}}}
                    ><LegendToggleOutlinedIcon/></motion.div>
                </div>
            </div>
            <AnimatePresence>
            {toggle && (
                <motion.div className={styles.dropdownComp}
                exit = {{opacity : 0 , transition : {duration : .5}}}
                variants = {dropdownVariants}
                initial = "hidden"
                animate = "visible"
                ><Dropdown toggle = {toggle} setToggle = {setToggle}/></motion.div>
            )}
            
            </AnimatePresence>
        </div>
     );
}
 
export default Navbar;