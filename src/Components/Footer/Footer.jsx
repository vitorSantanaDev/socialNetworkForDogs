import React from 'react'
import { FooterElement } from './styled'
import { ReactComponent as Dogs } from '../../Assets/dogs-footer.svg'

const Footer = () => {
  return (
    <FooterElement> 
      <Dogs />
      <p>Dogs. Alguns direitos reservados</p>
    </FooterElement>
  )
}

export default Footer
