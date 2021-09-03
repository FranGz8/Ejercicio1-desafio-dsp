import React from 'react'

import Producto from '../productos.json'

const Todo = ({ cantidad, index, deleteTodo, cambioCantidad}) => {
    return (
        <>
            <div className="list">
                <h3>{Producto[index]['nombre']}</h3>
                <input type="number" className="cantidad" min='1' value={cantidad} onChange={e => cambioCantidad(e.target.value, index)} />
                <button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
                <br /><p className="precio">{Producto[index]['precio']}</p> 
            </div>
            <hr/>
        </>
    )
}
export default Todo