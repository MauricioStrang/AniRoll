//Page for random testing of function and component behaviours


import styles from './testPage.module.css'



const testPage = async() => {


    const getApiProducts = async()=>{
        const res = await fetch('https://dummyjson.com/products')
        return res.json()
    }
    
    const apiData = await getApiProducts();

    const getAppProducts = async()=>{
        const res = await fetch('http://localhost:3000/api/')
        return res.json()
    }
    
    const appData = await getAppProducts();
    

    return (
        <div className={styles.container}>
            <h1>API PRODUCTS</h1>
            <div>
                <ul className={styles.list}>
                    {apiData.products.map( ( item, index )=>(
                            <li key={index}>
                                <img src={item.thumbnail} alt={item.title} />
                                <div>
                                    {item.title} <span>${item.price}</span>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
            <h1>OWN APP PRODUCTS</h1>
            <div>
                <ul className={styles.list}>
                    {appData.products.map( ( item, index )=>(
                            <li key={index}>
                                <img src={item.thumbnail} alt={item.title} />
                                <div>
                                    {item.title} <span>${item.price}</span>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>           
  );
};

export default testPage;