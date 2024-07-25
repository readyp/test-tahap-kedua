import React from 'react'

type NotFoundPageProps = Record<string, never>

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return <div>NotFoundPage Works!</div>
}

export { NotFoundPage }
