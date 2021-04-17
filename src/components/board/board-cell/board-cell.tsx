import React from 'react'
import styled from 'styled-components'
import { Cell } from 'types'

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  cursor: pointer;
  user-select: none;
  color: ${({ color }) => color};
`

type Props = {
  idx: number
  cell: Cell
  onClick: (idx: number) => void
}

function BoardCell({ idx, cell, onClick }: Props): JSX.Element {
  function handleClick() {
    onClick(idx)
  }

  if (cell.enabled) {
    return <Root data-testid="enabled" onClick={handleClick}></Root>
  }

  const shotStatus = cell.value === 0 ? 'x' : '✓'
  return <Root color={shotStatus === 'x' ? 'red' : 'green'}>{shotStatus}</Root>
}

export default BoardCell
