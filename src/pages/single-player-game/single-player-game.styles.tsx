import styled from 'styled-components'

export const BoardContainer = styled.div`
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
`

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary.contrastText};
`

export const GameStatus = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`
