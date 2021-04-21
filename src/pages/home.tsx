import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Menu } from 'components'
import logo from 'images/logo.png'

const Title = styled.h1`
  font-size: 4rem;
  margin: 4px 0 12px;
`

function Home(): JSX.Element {
  const history = useHistory()

  const menuItems = [
    {
      onClick: () => history.push('/single-player-game'),
      label: 'Single Player Game',
    },
    {
      onClick: () => history.push('/records'),
      label: 'Records',
    },
  ]

  return (
    <>
      <img src={logo} alt="ship" width="300px" />
      <Title>Battleship</Title>
      <Menu items={menuItems} />
    </>
  )
}

export default Home
