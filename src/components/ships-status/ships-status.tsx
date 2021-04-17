import React from 'react'
import styled from 'styled-components'
import { Ship } from 'types'

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`

type InfoContainerProps = {
  alive: boolean
}

const InfoContainer = styled.p<InfoContainerProps>`
  min-width: 100px;
  padding: 8px 12px;
  font-size: 0.9rem;
  background-color: ${({ alive }) => (alive ? 'rgb(22 116 22)' : 'rgb(221 34 47)')};
`

type Props = {
  ships: Ship[]
}

function ShipsStatus({ ships }: Props): JSX.Element {
  return (
    <Root>
      {ships.map(({ name, lives }: Ship) => (
        <InfoContainer key={name} data-testid={name} alive={lives > 0}>
          Ship {name}
          <br />
          Lives left: {lives}
        </InfoContainer>
      ))}
    </Root>
  )
}

export default ShipsStatus
