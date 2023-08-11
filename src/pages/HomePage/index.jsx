import { useEffect, useState } from "react"
import { CartModal } from "../../components/CartModal"
import { Header } from "../../components/Header"
import { ProductList } from "../../components/ProductList"
import { api } from "../../assets/services/api"

export const HomePage = () => {
   const [productList, setProductList] = useState([])
   const [cartList, setCartList] = useState([])
   const [isVisible, setIsVisible] = useState(false)
   const [search, setSearch] = useState("")

   // useEffect montagem - carrega os produtos da API e joga em productList CHECK
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva
   useEffect(() => {
      const itemCart = JSON.parse(localStorage.getItem("@cartlist"))
      if (itemCart) {
         setCartList(itemCart)
      }
   }, [])

   useEffect(() => {
      const getFood = async () => {
         try {
            const { data } = await api.get("/products")
            setProductList(data)
         } catch (error) {
            console.log(error)
         }
      }
      getFood()
   }, [])

   const filterProducts = productList.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()))

   const renderSearch = search ? filterProducts : productList
   return (
      <>
         <Header
            setIsVisible={setIsVisible}
            cartList={cartList}
            setSearch={setSearch}
         />

         <main>
            <ProductList
               productList={renderSearch}
               setCartList={setCartList}
               cartList={cartList}
            />

            {isVisible ? <CartModal cartList={cartList}
               setIsVisible={setIsVisible}
               setCartList={setCartList} /> : null}
         </main>
      </>
   )
}
