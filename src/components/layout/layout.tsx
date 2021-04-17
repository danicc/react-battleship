import React from 'react'
import styled from 'styled-components'
import { useLocation, Link } from 'react-router-dom'

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

const MainMenuButton = styled(Link)`
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.primary.contrastText};
  background-color: ${({ theme }) => theme.colors.primary.dark};
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  box-shadow: 5px 8px 15px 0px rgba(0, 0, 0, 0.5);
`

type Props = {
  children: React.ReactNode
}
function Layout({ children }: Props): JSX.Element {
  const location = useLocation()
  const isInHome = location.pathname === '/'
  return (
    <Root>
      {!isInHome && <MainMenuButton to="/"> Main Menu</MainMenuButton>}
      <MainContent>{children}</MainContent>
    </Root>
  )
}

export default Layout
