import React, {useState} from 'react';
import Todo from '../components/Todo';
import Producto from '../productos.json';




const Form = () => {

    const [todo, setTodo]=useState({})
    const [total, setTotal]=useState(0)
    const [cantidad1, setCantidad1]=useState(0)
    const [todos, setTodos] = useState([])

    const handleChange = e => {
        setTodo({[e.target.name]: e.target.options[e.target.selectedIndex].text})
    }


    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === ''){
            alert('Debe seleccionar un producto')
            return
        }
        else{
            Producto.map((nomPro)=>{
                if(nomPro.nombre === todo.todo){
                    setCantidad1(nomPro.precio)
                    return(
                            //obtengo el valor del precio del producto
                            alert('precio: '+nomPro.precio)
                        )
                }
                return(null)
            })
            setTodos([...todos,todo])            
        }
    }

    
    
    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }

    const cambioCantidad = indice2 =>{
        alert('entrando en cambio cantidad '+indice2)

        

        alert('nombre de indice: '+todos[indice2]);
        //setTotal(total+e.target.value)
    }

    return (
        <>
            <form onSubmit={e=>e.preventDefault()}>
                <select name="todo" className="selectProducto" onChange={handleChange}>
                    <option selected disabled="true">Seleccion de producto</option>
                    {
                    Producto.map((nomProducto)=> (<option value={nomProducto.id}>{nomProducto.nombre}</option>) )
                    }
                </select>
                <button onClick={handleClick} className="btnAgregar">Agregar</button>
            </form>   

            {
                todos.map((value, index) => (<Todo todo={value.todo} key={index} index={index}  cambioCantidad={cambioCantidad} cantidad={cantidad1}  deleteTodo={deleteTodo}/>))

            }   
            <div>
                <p>TOTAL: {total}</p>
            </div>
        </>
    )
}
export default Form
