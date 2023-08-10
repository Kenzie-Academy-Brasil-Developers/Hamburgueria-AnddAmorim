import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss"

export const Header = ({setIsVisible, cartList}) => {
   const [value, setValue] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault()
      setValue("")
   }
   return (
      <header className={styles.header}>
         <div className={`${styles.divContainer} container`}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
         <div className={styles.divHeader}>
            <button onClick={() => setIsVisible(true)}>
                <MdShoppingCart size={21} />
                <span>{cartList.length}</span>
            </button>
            <form className={`${styles.form} body`} onSubmit={handleSubmit}>
               <input placeholder="Digitar Pesquisa"
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                required/>
               <button type="submit" className={styles.button}>
                  <div className={styles.divButton}>
                 <MdSearch size={21} />
                  </div>
               </button>
            </form>
         </div>
         </div>
         
      </header>
   )
}
