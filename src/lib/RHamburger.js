import React, { useState, useEffect } from "react"
import { HamburgerContainer, HamburgerBox, HamburgerInner } from "./styles"

function Hamburguer({ ...props }) {
  const [isActive, setIsActive] = useState(false)
  const [classActive, setClassActive] = useState("")

  useEffect(() => {
    props.state = isActive
  }, [isActive])

  const ToggleClass = () => {
    let state = !isActive
    if (state) {
      console.log(state)
      setClassActive("is-active")
    } else {
      setClassActive("")
    }
    setIsActive(!isActive)
  }

  return (
    <HamburgerContainer
      className={`${props.type} ${classActive}`}
      type="button"
      onClick={() => ToggleClass()}
    >
      <HamburgerBox className={`${props.type}`}>
        <HamburgerInner
          className={`${props.type} ${classActive}`}
        ></HamburgerInner>
      </HamburgerBox>
    </HamburgerContainer>
  )
}

export default Hamburguer
