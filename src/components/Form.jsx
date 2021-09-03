import React, {useEffect, useState} from 'react';
import Todo from '../components/Todo';
import Producto from '../productos.json';




const Form = () => {

    const [todo, setTodo]=useState(null)
    const [total, setTotal]=useState(0)
    const [todos, setTodos] = useState([])

    const handleChange = e => {
        if (e.target.selectedIndex) {
            let index = e.target.selectedIndex - 1
            setTodo({
                id: index,
                cantidad: 1 
            })
        }
    }

    const handleClick = e => {
        if(!todo){
            alert('Debe seleccionar un producto')
            return
        } else {
            let error = false
            todos.forEach(old_todo => {
                if (old_todo['id'] == todo['id']) {
                    error = true
                    alert('Item ya agregado')
                    return;
                }
            })
            if(!error) setTodos([...todos, todo])
        }
    }

    const deleteTodo = index => {
        const newTodos = []
        todos.forEach(todo => {
            if(todo['id'] != index) newTodos.push(todo)
        })
        setTodos(newTodos)
    }

    const cambioCantidad = (value, key) =>{
        let new_todos = []
        let num = parseInt(value)
        if(isNaN(num) && value != '') {
            alert('Debe ingresar un numero valido')
        }else if(num <= 0) {
            alert('La cantidad debe ser mayor a cero')
            value = 1
        }
        todos.forEach(todo => {
            if(todo['id'] == key){
                todo['cantidad'] = value
            }
            new_todos.push(todo)
        })
        setTodos(new_todos)
    }

    useEffect(() => {
        let total = 0
        todos.forEach(todo => {
            let cantidad = parseInt(todo['cantidad'])
            if (!isNaN(cantidad)) {
                total += (parseFloat(Producto[todo['id']]['precio']) * cantidad)
            }
        })
        setTotal(total)
    })

    return (
        <>
            <form onSubmit={e=>e.preventDefault()}>
                <select name="todo" onChange={handleChange}>
                    <option selected disabled="true">Seleccion de producto</option>
                    {
                        Producto.map((nomProducto)=> (<option value={nomProducto.id}>{nomProducto.nombre}</option>) )
                    }
                </select>
                <button onClick={handleClick}>Agregar</button>
            </form>
            {
                todos.map((todo) => (<Todo index={todo['id']} cantidad={todo['cantidad']} deleteTodo={deleteTodo} cambioCantidad={cambioCantidad} />))
            }
            <div>
                <p>TOTAL: {total}</p>
            </div>
        </>
    )
}
export default Form
