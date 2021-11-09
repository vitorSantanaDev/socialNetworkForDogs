import React from 'react'
import { H1Element } from "../Titles/H1/H1"
const NotFound = () => {
  return (
    <>
      <section className="container mainContainer">
        <H1Element>Error: 404</H1Element>
        <p>Pagina não encontrada</p>
      </section>
    </>
  )
}

export default NotFound
