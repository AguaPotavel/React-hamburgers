import styled from "styled-components"

export const HamburgerContainer = styled.button`
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    opacity: 0.7;
  }

  &.is-active:hover {
    opacity: 0.7;
  }

  &.is-active {
    .hamburguer-inner,
    .hamburguer-inner::after,
    .hamburguer-inner::before {
      background-color: #000;
    }
  }
`

export const HamburgerBox = styled.span`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;

  &.hamburger--3dx {
    perspective: 80px;
  }
`

export const HamburgerInner = styled.span`
  display: block;
  top: 50%;
  margin-top: -2px;
  width: 40px;
  height: 4px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;

  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
    top: -10px;
  }

  &::after {
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
    bottom: -10px;
  }

  &.hamburger--3dx {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);

    &::after {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &::before {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &.is-active {
      background-color: transparent !important;
      transform: rotateY(180deg);

      &::after {
        transform: translate3d(0, -10px, 0) rotate(-45deg);
      }

      &::before {
        transform: translate3d(0, 10px, 0) rotate(45deg);
      }
    }
  }
`
