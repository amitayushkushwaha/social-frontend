import styles from '@/styles/Dropdown.module.css'
import {motion , AnimatePresence} from 'framer-motion'
const Dropdown = ({toggle,setToggle}) => {
    const handleCloseToggle = ()=>{
        setToggle(false)
        console.log(toggle)
    }
    
    return ( 
        <motion.div className={styles.dropdown}
        
        >
            <div className={styles.dropdownItem}>
                <motion.div className={styles.box}
                whileHover = {{backgroundColor : "#ef5777" , scale : 1.1}}
                >
                    ITEM1
                </motion.div>
                <motion.div className={styles.box}
                whileHover = {{backgroundColor : "#575fcf" , scale : 1.1}}
                
                >
                    ITEM2
                </motion.div>
                <motion.div className={styles.box}
                whileHover = {{backgroundColor : "#0fbcf9" , scale : 1.1}}
                
                >
                    ITEM3
                </motion.div>
                <motion.div className={styles.box}
                whileHover = {{backgroundColor : "#0be881" , scale : 1.1}}
                
                >
                    ITEM4
                </motion.div>
                <motion.div className={styles.box}
                whileHover = {{backgroundColor : "#8854d0" , scale : 1.1}}
                
                >
                    ITEM5
                </motion.div>
                <motion.div className={styles.box}
                whileHover = {{backgroundColor : "#2C3A47" , scale : 1.1}}
                
                >
                    ITEM6
                </motion.div>
                <div className={styles.box}>
                <button className={styles.toggleClose}
                onClick = {handleCloseToggle}
                whileHover = {{scale : 1.1 , backgroundColor : '#ff3838'}}
                >Close</button>
                </div>
            </div>
            
        </motion.div>
     );
}
 
export default Dropdown;