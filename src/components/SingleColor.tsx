import { type FC, useState } from 'react'

type SingleColorProps = {
  rgb: number[]
  weight: number
  hex: string
  index: number
  base: number
}

const SingleColor: FC<SingleColorProps> = props => {
  const [alert, setAlert] = useState(false)
  const { rgb, weight, hex, index, base } = props

  return (
    <article
      className={`color ${index > base - 1 ? 'color-light' : ''}`}
      style={{ backgroundColor: `rgb(${rgb.join(',')})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hex).catch(() => {})
        setTimeout(() => {
          setAlert(false)
        }, 3000)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
      {alert ? <p className='alert'>copied to clipboard</p> : null}
    </article>
  )
}

export { SingleColor }
