import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from 'images/logo.png'

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.primary.contrastText};
  background: ${({ theme }) => theme.colors.primary.dark};
  border: 2px solid rgba(0, 0, 0, 0.7);
`

const MenuDivider = styled.hr`
  height: 2px;
  width: 100%;
  margin: 0;
  background: ${({ theme }) => theme.colors.primary.light};
  border: unset;
`

const Button = styled(Link)`
  width: 100%;
  padding: 12px 8px;
  text-align: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const Title = styled.h1`
  font-size: 4rem;
  margin: 4px 0;
`

function GameSetup(): JSX.Element {
  return (
    <>
      <img src={logo} alt="ship" width="300px" />
      <Title>Battleship</Title>
      <Menu>
        <Button to="/single-player-game">Single Player Game</Button>
        <MenuDivider />
        <Button to="/records">Records</Button>
      </Menu>
    </>
  )
}

export default GameSetup
