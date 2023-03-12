import { type FormEvent, useState, type FC } from 'react'
import Values from 'values.js'

import { SingleColor } from './SingleColor'
import '../styles/colorGenerator.css'

type ColorGeneratorProps = {
  base: number
  defaultColor: string
}

const ColorGenerator: FC<ColorGeneratorProps> = props => {
  const { base, defaultColor } = props
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values(defaultColor).all(base))

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setList(new Values(color).all(10))
      setError(false)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <>
      <section className='container'>
        <h1>Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={e => {
              setColor(e.target.value)
            }}
            placeholder={defaultColor}
            maxLength={7}
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            className={`${error ? 'error' : undefined}`}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          const { rgb, weight, hex } = color

          return (
            <SingleColor
              rgb={rgb}
              weight={weight}
              hex={hex}
              key={index}
              index={index}
              base={base}
            />
          )
        })}
      </section>
    </>
  )
}

export { ColorGenerator }
