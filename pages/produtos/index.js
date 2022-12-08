import axios from 'axios'
import Link from 'next/link'
import styles from '../../styles/produtos.module.css'

export default function Produtos({data}) {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.h1}>SAFARI PRODUTOS</h1>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {data.map((produto)=>{
            return(
              <div key={produto.id} className={styles.produto}>
                <span>{produto.title}</span>
                <Link className={styles.link} href='/produtos/[id]' as= {`/produtos/${produto.id}`}>Ver produto!</Link>
              </div>
            )
          })}
        </div>
      </div>
      
      
    </div>
  )
}

export async function getStaticProps(){
  
  const response = await axios.get('https://fakestoreapi.com/products')
  const data = await response.data

  return{
    props : {data}
  }

}