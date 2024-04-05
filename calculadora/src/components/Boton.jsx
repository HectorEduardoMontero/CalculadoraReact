import './boton.css'

const Boton = (params) => {
    const { texto, clase,handleclick}= params
    return <button className={clase} onClick={handleclick} >{texto}</button>

}



export default Boton