import Link from "next/link";
import styles from '../styles/index.module.css'

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <img src="/hero.jpg" className={styles.hero} /> 
      <div className = {styles.filter}></div>
      <div>
        <h1 className={styles.h1}>Safari produtos</h1>
        <h2 className={styles.h2}>Do exoticismo ao padrão</h2>
      </div>
      
      <Link href="/produtos" className={styles.button}>VER PRODUTOS</Link>
    </div>
    
  )
}