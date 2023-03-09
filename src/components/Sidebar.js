import styles from "@/styles/Sidebar.module.css";
import {motion , AnimatePresence} from 'framer-motion'
const Sidebar = ({left,setLeft}) => {
    
    const handleCloseSidebar = ()=>{
        setLeft(false)
        console.log(left)
    }
    const sideBarVariants = {
        hidden:{
            x:'-100vw'
        },
        visible:{
            x:0,
            transition:{
                duration:1,
                when : "beforeChildren",
                staggerChildren:1
            }
        }
    }
    const childrenVariants = {
        hidden:{
            x:'-100vw'
        },
        visible:{
            x:0,
            transition:{
                duration:1,
            }
        }
    }
    const closeVariants = {
        hidden:{
            x:'-100vw'
        },
        visible:{
            x:0,
            transition:{
                duration:1.5,
            }
        }
    }
    return ( 
        <motion.div className={styles.sideBar}
        variants = {sideBarVariants}
        initial = "hidden"
        animate = "visible"
        >
            <div className={styles.sidebarBox}>
                <motion.div className={styles.item1}
                variants = {childrenVariants}
                initial = "hidden"
                animate = "visible"
                >Home</motion.div>
                <motion.div className={styles.item2}
                variants = {childrenVariants}
                initial = "hidden"
                animate = "visible"
                >Account</motion.div>
                <motion.div className={styles.item3}
                variants = {childrenVariants}
                initial = "hidden"
                animate = "visible"
                >Downloads</motion.div>
                <motion.div className={styles.item4}
                variants = {childrenVariants}
                initial = "hidden"
                animate = "visible"
                >Logout</motion.div>
                <motion.div className={styles.item5}
                variants = {childrenVariants}
                initial = "hidden"
                animate = "visible"
                >About us</motion.div>
                <motion.button className={styles.closeSidebar} onClick= {handleCloseSidebar}
                variants = {closeVariants}
                initial = "hidden"
                animate = "visible"
                >Close</motion.button>

            </div>
        </motion.div>
        
     );
}
 
export default Sidebar;