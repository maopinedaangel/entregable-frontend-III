import React from 'react'
import Item from "./Item"

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado({increment}) {

  let productsData = require("./data.json");

  const listItems = () => productsData.map(item => <Item name={item.producto.nombre} description={item.producto.descripcion} stock={item.stock} key={item.id} increment={increment} /> )

  return (
    <div className='container'>
      {/* renderizamos los Item aquí */}
      {listItems()}
    </div>
  )
}
