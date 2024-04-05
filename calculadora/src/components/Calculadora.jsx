import { useState } from 'react'
import Boton from './Boton'
import './Calculadora.css'
import { Switch } from './Switch'


const Calculadora = () => {

    const [data, setData] = useState({ operacion:'',resultado:''})

    const escritura = (event) => {
        const valor = event.target.innerText
        const esOpreracion = valor =='+'||valor =='-'||valor =='*'||valor =='/'||valor =='%'




        if (data.operacion.length >= 10) return
        if (valor == '+/-' && data.operacion == '') return
         if (valor=='%' && data.operacion.includes('%')) return



        if (data.operacion.includes('Error')) {
            setData({...data,operacion:valor})

        } else if(data.resultado!==''&& data.operacion==''&& esOpreracion) {
               setData({ ...data,operacion:`${data.resultado}` +valor})

        }else if (valor == '+/-' && data.operacion !== '') {

            if (data.operacion.slice(0, 1) == '-') {
                setData({ ...data, operacion: `${data.operacion.slice(1,data.operacion.length)}` })
            }
            else {
                 setData({ ...data, operacion: `-${data.operacion}` })
            }

        } else {
              setData({ ...data,operacion:`${data.operacion}` +valor})
        }

    }
    const eliminar = () => {

        setData({...data, operacion:data.operacion.slice(0,data.operacion.length -1)})
    }
    const limpiar = () => {
        setData({operacion:'',resultado:''})
    }
    const resultado = () => {


        try {
            let resultado = ''
            if (data.operacion.includes('%')) {

                const valores = data.operacion.split('%')
                resultado = eval(`${valores[1]}*(${valores[0]}/100)`)
            } else {
              resultado=  eval(data.operacion)
            }
            setData({...data,resultado,operacion:''})
     } catch (error) {

         setData({...data,operacion:'Error'})

     }
    }


  return (
      <main>
          <Switch />
          <span className='resultado' clase='gris' >{ data.resultado}</span>
          <span className='display' clase='gris'>{ data.operacion}</span>
          <Boton texto='C' clase='gris' handleclick={ limpiar} />
          <Boton texto='+/-' clase='gris'handleclick={ escritura}  />
          <Boton texto='%' clase='gris' handleclick={ escritura} />
          <Boton texto='/' clase='operacion' handleclick={ escritura} />
          <Boton texto='7' clase='numero' handleclick={ escritura} />
          <Boton texto='8' clase='numero' handleclick={ escritura} />
          <Boton texto='9' clase='numero' handleclick={ escritura} />
          <Boton texto='*' clase='operacion'  handleclick={ escritura}/>
          <Boton texto='4' clase='numero' handleclick={ escritura} />
          <Boton texto='5' clase='numero' handleclick={ escritura} />
          <Boton texto='6' clase='numero' handleclick={ escritura} />
          <Boton texto='-' clase='operacion'  handleclick={ escritura}/>
          <Boton texto='1' clase='numero'  handleclick={ escritura}/>
          <Boton texto='2' clase='numero' handleclick={ escritura} />
          <Boton texto='3' clase='numero' handleclick={ escritura} />
          <Boton texto='+' clase='operacion' handleclick={ escritura} />
          <Boton texto='.' clase='numero'  handleclick={ escritura} />
          <Boton texto='0' clase='numero' handleclick={ escritura} />
          <Boton texto='←' clase='numero' handleclick={ eliminar} />
          <Boton texto='=' clase='operacion' handleclick={ resultado} />

    </main>
  )
}

export default Calculadora