import React from 'react'

interface Props {

}

const Home: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div>index</div>
  )
}

export default React.memo<Props>(Home)
