import React from 'react'
import styled from 'styled-components'

const Root = styled.button`
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.primary.contrastText};
  background-color: ${({ theme }) => theme.colors.primary.dark};
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  box-shadow: 5px 8px 15px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  outline: none;
`
type Props = {
  className?: string
  label: string
  onClick: () => void
}

function Button({ className, label, onClick }: Props): JSX.Element {
  return (
    <Root className={className} onClick={onClick}>
      {label}
    </Root>
  )
}

export default Button
