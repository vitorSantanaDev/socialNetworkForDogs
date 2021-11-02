import styled from "styled-components";

export const MobileButton = styled.button`
  background-color: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  transition: ease-in-out 0.2s;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
  }

  &:focus,
  &:hover,
  &.mobileMenuActive {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 3px #fb1;
    color: #fb1;
  }

  &.mobileMenuActive {
    &::after {
      transform: rotate(90deg);
      width: 4px;
      height: 4px;
      box-shadow: 0 8px currentColor, 0 -8px currentColor;
      transition: ease-in-out 0.2s;
    }
  }
`;

export const NavElement = styled.nav`
  &.navMenu {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;

    a,
    button {
      background-color: #eee;
      border-radius: 0.2rem;
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid transparent;
      transition: ease-in-out 0.2s;
      cursor: pointer;

      &:hover,
      &:focus {
        background-color: #fff;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
        outline: none;
      }

      &.active {
        background: #fff;
        box-shadow: 0 0 0 3px #fea;
        border-color: #fb1;
      }
    }

    a {
      &.active svg > * {
        fill: #fb1;
      }
    }
  }

  &.navMobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 0 1rem;
    background-color: #FFF;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: .2rem;
    transform: translateX(-10px);
    opacity: 0;
    transition: ease-in-out .2s;
    pointer-events: none;
    
    a, button {
      display: flex;
      align-items: center;
      background: none;
      width: 100%;
      border: none;
      border-bottom: 1px solid #eee;
      padding: .5rem 0; 
      cursor: pointer;

      &:hover svg > *{
        fill: #fb1;
      }

      svg {
        margin-right: .5rem;
      }
    }
    
    button {
      border-bottom: none;
    }

    &.mobileMenuActive {
      transition: ease-in-out .3s;
      transform: initial;
      pointer-events: initial;
      z-index: 1000;
      opacity: 1;
    }
  }
`;
