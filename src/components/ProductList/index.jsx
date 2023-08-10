import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss"

export const ProductList = ({productList, cartList, setCartList}) => {
   
   return (
      <ul className= {`${styles.cardBox} container`}>
         {productList.map((product) => (
            <ProductCard key={product.id} 
            product={product}
            cartList={cartList}
            setCartList={setCartList} />
         ))}
      </ul>
   )
}
