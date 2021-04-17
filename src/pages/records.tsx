import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GameStatus } from 'types'
import { get as getSinglePlayerGames } from 'services/singlePlayerGames'

const Title = styled.h2`
  margin: 12px 0;
  color: ${({ theme }) => theme.colors.primary.contrastText};
`

const Table = styled.table`
  margin-top: 8px;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.primary.contrastText};
  border-collapse: collapse;
  text-align: center;

  & th,
  td,
  tr {
    padding: 8px;
    border: 2px solid ${({ theme }) => theme.colors.primary.light};
  }
`

function Records(): JSX.Element {
  const [singlePlayerGames, setSinglePlayerGames] = useState<GameStatus[]>([])

  useEffect(() => {
    const games = getSinglePlayerGames()
    setSinglePlayerGames(games)
  }, [])

  return (
    <>
      <Title>Single Player Games</Title>
      <Table>
        <thead>
          <tr>
            <th>StartTime - EndTime</th>
            <th>Turns</th>
            <th>Accuracy</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {singlePlayerGames.map(({ startTime, endTime, turns, accuracy, status }, idx) => (
            <tr key={idx}>
              <td>
                {startTime} - {endTime}
              </td>
              <td>{turns}</td>
              <td>{accuracy}</td>
              <td>{status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Records
