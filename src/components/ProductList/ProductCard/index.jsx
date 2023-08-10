import { useEffect, useState } from "react";
import styles from "./style.module.scss"
import { toast } from "react-hot-toast";

export const ProductCard = ({ product, cartList, setCartList }) => {

  useEffect(() => {
    if(cartList.length > 0){
      
      localStorage.setItem("@cartlist", JSON.stringify(cartList))
    }
  }, [cartList])


  const addItemToCart = () => {
    const ItemInCart = cartList.some((item) => item.id === product.id)
    if (ItemInCart) {
      toast.success("Olá, já estou no carrinho!")
    } else {
      const storeCartList = JSON.parse(localStorage.getItem("@cartlist"))
      setCartList(storeCartList ? storeCartList : [])
      setCartList((prevCartList) => [...prevCartList, product])
      toast.success("Produto adicionado com sucesso")
    }
  }


  return (
    <li key={product.id} className={styles.card}>
      <div className={styles.divImg}>
        <img src={product.img} alt={product.name} />
      </div>
      <div className={styles.divItens}>
        <h3 className="heading3">{product.name}</h3>
        <span className="caption">{product.category}</span>
        <span className="bodyBold">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={() => addItemToCart()} className="bodyBold">Adicionar</button>
      </div>
    </li>
  )
}