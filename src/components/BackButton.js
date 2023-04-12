import React from 'react'
import { ArrowBack } from '@mui/icons-material'
import styles from "@/styles/BackButton.module.css"
import { useRouter } from 'next/router';

const BackButton = () => {
    const router=useRouter()
    const handleBackButton=()=>{
        router.back();
    }
  return (
    <ArrowBack onClick={handleBackButton} className={styles.back_button} />
  )
}

export default BackButton