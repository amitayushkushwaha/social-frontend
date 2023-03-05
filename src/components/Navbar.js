import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
    const handleLight = () => {
        console.log("light mode")
        
    }
    const handleToggle = () => {
        
        document.getElementById("dropdownId").classList.toggle("show")
    }
    return (
        <div className="navbar-2">
        <div className={styles.navbar}>
            <div className={styles.left}>
                Logo
            </div>
            <div className={styles.right}>
                <span onClick={handleLight} id="lightModeId"><LightModeOutlinedIcon className={styles.lightMode} /></span>
                <span onClick={handleToggle} id="toggleBtnId"><MenuOutlinedIcon className={styles.toggleBtn} /></span>
            </div>
            
        </div>
            <div className="dropdown" id="dropdownId">
                <div className='item'>item1</div>
                <div className='item'>item2</div>
                <div className='item'>item3</div>
            </div>
        </div>


    );
}

export default Navbar;