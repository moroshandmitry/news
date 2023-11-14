import React from 'react'

interface ILoaderProps {
  loading: boolean
}

const Loader: React.FC<ILoaderProps> = (props) => {
  const { loading = false } = props

  if (loading) {
    return <p>Loading...</p>
  }

  return null
}

export default Loader
