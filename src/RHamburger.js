import React, {useState, useEffect} from 'react'
import './styles.scss'

function Hamburguer({...props}){
    const [isActive, setIsActive] = useState(false)
    const [classActive, setClassActive] = useState('')

    useEffect(()=> {
        props.state = isActive
    }, [isActive])

    const ToggleClass = () => {
        let state = !isActive
        if(state){
            setClassActive('is-active')
        }else{
            setClassActive('')
        }
        setIsActive(!isActive)
    }

    return (
    <button className={`hamburger ${props.type} ${classActive}`} type="button" onClick={()=> ToggleClass()}>
        <span className="hamburger-box">
            <span className="hamburger-inner"></span>
        </span>
    </button>
      )
}

export default Hamburguer;