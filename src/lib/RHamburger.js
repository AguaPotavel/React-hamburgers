import React, { useState, useEffect } from "react"
import { HamburgerContainer, HamburgerBox, HamburgerInner } from "./styles"

function Hamburger({ ...props }) {
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
      color={props.color}
    >
      <HamburgerBox className={`${props.type}`}>
        <HamburgerInner
          className={`${props.type} ${classActive}`}
          color={props.color}
        ></HamburgerInner>
      </HamburgerBox>
    </HamburgerContainer>
  )
}

export default Hamburger
