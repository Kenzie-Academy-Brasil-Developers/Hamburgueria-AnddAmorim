import { MdClose } from "react-icons/md"
import { CartItemCard } from "./CartItemCard"
import { toast } from "react-hot-toast"
import styles from "./style.module.scss"

export const CartModal = ({ cartList, setCartList, setIsVisible }) => {

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price
   }, 0)

   return (
      <div role="dialog" className={styles.overlayBox}>
         <div className={styles.modalBox}>
            <div className={styles.divCart}>
               <h2 className="heading3">Carrinho de compras</h2>
               <button onClick={() => setIsVisible(false)}
                  aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>

            <div>
               <ul className={styles.ulCart}>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id}
                        product={product}
                        cartList={cartList}
                        setCartList={setCartList}
                     />
                  ))}
               </ul>
            </div>
            <div className={styles.divPrice}>
               <div>
                  <span className="headline">Total</span>
                  <span className={`${styles.span} bodyBold`}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button onClick={() => {
                  setCartList([])
                  toast.success("Produtos removidos com sucesso")
                  localStorage.clear()
                  setIsVisible(false)
               }}>Remover todos
               </button>
            </div>
         </div>
      </div>
   )
}
