import React from 'react'

const Todo = ({todo, index, deleteTodo, cambioCantidad, cantidad}) => {
    return (
        <>
            <div className="list">
                <h3>{todo}</h3> <input type="text" className="cantidad" onChange={() => cambioCantidad(index)} /> <button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
                <p className="precio">{cantidad}</p>
            </div>
            <hr/>
        </>
    )
}
export default Todo