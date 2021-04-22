import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../button'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  max-width: 300px;
  margin-top: 8px;
  padding: 12px;
  color: ${({ theme }) => theme.colors.primary.contrastText};
  background: ${({ theme }) => theme.colors.primary.dark};
  border: 2px solid ${({ theme }) => theme.colors.primary.light};
`

const LevelInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const SubmitButton = styled(Button)`
  align-self: center;
  margin: 8px 0;
`

type LevelName = 'easy' | 'medium' | 'hard' | 'custom'

const attemptsByLevel = {
  easy: Infinity,
  medium: 100,
  hard: 50,
}

type Props = {
  onAttemptsChange: (attempts: number) => void
  onSubmit: () => void
}
function PickAttempts({ onAttemptsChange, onSubmit }: Props): JSX.Element {
  const [level, setLevel] = useState<LevelName>('easy')
  const [attempts, setAttempts] = useState<number>(0)
  const [customLevelAttempts, setCustomLevelAttempts] = useState<number>(100)

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setLevel(e.target.value as LevelName)
  }

  function handleCustomAttemptsChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCustomLevelAttempts(Number(e.target.value))
  }

  useEffect(() => {
    if (level === 'custom') {
      setAttempts(customLevelAttempts)
    } else {
      setAttempts(attemptsByLevel[level])
    }
  }, [customLevelAttempts, level])

  useEffect(() => {
    onAttemptsChange(attempts)
  }, [attempts, onAttemptsChange])

  return (
    <Root>
      <legend>Select Level</legend>
      <LevelInputContainer>
        <input
          type="radio"
          id="custom"
          name="level"
          value={'custom'}
          onChange={handleOnChange}
          checked={level === 'custom'}
        />
        <label htmlFor="custom">Custom</label>
      </LevelInputContainer>
      {level === 'custom' && (
        <LevelInputContainer>
          <label htmlFor="customAttemptsAmount">Attempts ammount:</label>
          <input
            id="customAttemptsAmount"
            name="customAttemptsAmount"
            type="number"
            value={customLevelAttempts}
            onChange={handleCustomAttemptsChange}
          />
        </LevelInputContainer>
      )}

      <LevelInputContainer>
        <input
          type="radio"
          id="easy"
          name="level"
          value={'easy'}
          onChange={handleOnChange}
          checked={level === 'easy'}
        />
        <label htmlFor="easy">Easy (infinite attempts)</label>
      </LevelInputContainer>

      <LevelInputContainer>
        <input
          type="radio"
          id="medium"
          name="level"
          value={'medium'}
          onChange={handleOnChange}
          checked={level === 'medium'}
        />
        <label htmlFor="medium">Medium (100 attempts)</label>
      </LevelInputContainer>

      <LevelInputContainer>
        <input
          type="radio"
          id="hard"
          name="level"
          value={'hard'}
          onChange={handleOnChange}
          checked={level === 'hard'}
        />
        <label htmlFor="hard">Hard (50 attempts)</label>
      </LevelInputContainer>
      <SubmitButton label="Start Game" onClick={onSubmit} />
    </Root>
  )
}

export default PickAttempts
