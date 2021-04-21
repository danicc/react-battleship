import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  color: ${({ theme }) => theme.colors.primary.contrastText};
  background: ${({ theme }) => theme.colors.primary.dark};
  border: 2px solid ${({ theme }) => theme.colors.primary.light};
`

const MenuButton = styled.button`
  width: 100%;
  padding: 12px 8px;
  text-align: center;
  color: inherit;
  background: inherit;
  cursor: pointer;
  outline: none;
  border: unset;

  &:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary.light};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.action.hover};
  }
`

type MenuItem = {
  onClick: () => void
  label: string
}

type Props = {
  items: MenuItem[]
}

function Menu({ items }: Props): JSX.Element {
  return (
    <Root>
      {items.map(({ label, onClick }, idx) => (
        <MenuButton key={`${label}-${idx}`} onClick={onClick}>
          {label}
        </MenuButton>
      ))}
    </Root>
  )
}

export default Menu
