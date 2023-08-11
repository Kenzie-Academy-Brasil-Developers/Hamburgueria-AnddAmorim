import { toast } from "react-hot-toast"
import { MdDelete } from "react-icons/md"
import styles from "./style.module.scss"

export const CartItemCard = ({ product, cartList, setCartList }) => {

   const removeItem = () => {
      const removeItemList = cartList.filter((item) => {
         return item.id !== product.id
      })
      setCartList(removeItemList)
   }


   return (
      <li className={styles.mainList}>
         <div>
            <div>
               <img src={product.img} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <button onClick={() => {
               removeItem()
               toast.success("O produto foi removido com sucesso!")
            }}
               aria-label="delete"
               title="Remover item">
               <MdDelete size={21} />
            </button>
         </div>
      </li>
   )
}