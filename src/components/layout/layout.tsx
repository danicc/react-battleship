import React from 'react'
import styled from 'styled-components'
import { useLocation, useHistory } from 'react-router-dom'
import { Button } from '../button'

const Root = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 12px;
  margin: 0 auto;
  background-image: linear-gradient(-185deg, rgba(53, 114, 188, 0.7), rgba(31, 66, 108, 0.55));
`

const MainContent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainMenuButton = styled(Button)`
  position: absolute;
  top: 8px;
  left: 8px;
`

type Props = {
  children: React.ReactNode
}
function Layout({ children }: Props): JSX.Element {
  const location = useLocation()
  const history = useHistory()
  const isInHome = location.pathname === '/'

  function handleOnMainMenuClick() {
    history.push('/')
  }

  return (
    <Root>
      {!isInHome && <MainMenuButton label="Main Menu" onClick={handleOnMainMenuClick} />}
      <MainContent>{children}</MainContent>
    </Root>
  )
}

export default Layout
