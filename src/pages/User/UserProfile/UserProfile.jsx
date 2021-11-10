import React from 'react'
import { useParams } from 'react-router'
import Feed from "../../../Components/Feed/Feed"
import Head from '../../../Components/Helper/Head/Head'
import { H1Element } from '../../../Components/Titles/H1/H1'

const UserProfile = () => {
  const { user } = useParams()

  return (
    <section className="container mainContainer">
      <Head title={user}/>
      <H1Element>{user}</H1Element>
      <Feed user={user}/>
    </section>
  )
}

export default UserProfile
