import axios from 'axios'
import styles from '../../styles/produto.module.css'

function Produto({produto}){
    return(
        <div>
            <header className={styles.header}>
                <h1 className={styles.h1}>SAFARI PRODUTOS</h1>
            </header>
            <section className={styles.section}>
                <div className={styles.container}>
                    <img src={produto.image} className={styles.image} />
                    <div className={styles.text}>
                        <h1 className={styles.title}>{produto.title}</h1>
                        <p>{produto.description}</p>
                        <p className={styles.price}>R${produto.price}</p>
                    </div>
                </div>
            </section>
        </div>
    
        
    )
}

export async function getStaticProps(context){

    const response = await axios.get('https://fakestoreapi.com/products', {params : {id : context.params.id}})
    const produto = await response.data[0]
    return{
        props : {produto}
    }
}

export async function getStaticPaths(){
    const response = await axios.get('https://fakestoreapi.com/products')
    
    const produtos = await response.data
    const paths = produtos.map((produto)=>{
        return{params : {id : String(produto.id)}}
    })
    return{
        paths,
        fallback : true
    }
}

export default Produto