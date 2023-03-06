import styles from '@/styles/Dropdown.module.css'
import {motion , AnimatePresence} from 'framer-motion'
const Dropdown = ({toggle,setToggle}) => {
    const handleCloseToggle = ()=>{
        setToggle(false)
        console.log(toggle)
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
        <motion.div className={styles.dropdown}
        variants = {dropdownVariants}
        initial = "hidden"
        animate = "visible"
        >
            <div className={styles.dropdownItem}>
                <div className={styles.box}>
                    ITEM1
                </div>
                <div className={styles.box}>
                    ITEM2
                </div>
                <div className={styles.box}>
                <button className={styles.toggleClose}
                onClick = {handleCloseToggle}
                >Close</button>
                </div>
            </div>
            
        </motion.div>
     );
}
 
export default Dropdown;