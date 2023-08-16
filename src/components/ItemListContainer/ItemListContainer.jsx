import { useState, useEffect } from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import ItemCount from "../ItemCount/ItemCount"
import {useParams} from "react-router-dom"
import data from '../../data.json';

const ItemListContainer = () => {
  const {CategoryName} = useParams()

  const [items, setItems] = useState([])

  useEffect(() => {
    const productosFiltered = data.filter(
      (productos) => productos.category === CategoryName
    )

    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(CategoryName ? productosFiltered : "products")
      }, 500)
    })

    task
      .then((res) => {
        setItems(res)
      })
      .catch((err) => {
        console.log("se rechazo")
      })

  }, [CategoryName])

  return (
    <div className="light">
      <ItemCount initial={1} stock={7} />
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer