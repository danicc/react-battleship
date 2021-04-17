import { GameStatus } from 'types'

export function get(): GameStatus[] {
  const singlePlayerGamesPersisted = localStorage.getItem('single-player-games')

  const singlePlayerGames: GameStatus[] = singlePlayerGamesPersisted
    ? JSON.parse(singlePlayerGamesPersisted)
    : []

  return singlePlayerGames
}

export function add({ startTime, endTime, turns, accuracy, status }: GameStatus): void {
  let singlePlayerGames = get()
  singlePlayerGames = [{ startTime, endTime, turns, accuracy, status }].concat(singlePlayerGames)

  localStorage.setItem('single-player-games', JSON.stringify(singlePlayerGames))
}
