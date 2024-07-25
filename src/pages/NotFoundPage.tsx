import React from 'react'
import { Link } from 'react-router-dom'

type NotFoundPageProps = Record<string, never>

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return <div className='flex flex-col h-screen items-center justify-center bg-slate-300/50'>
    <h1 className='text-8xl font-semibold'>Page Not Found</h1>
    <h2 className='text-6xl font-bold mt-4 mb-8'>404</h2>
    <Link to={'/'} className='btn btn-primary'>Go Back Home</Link>
  </div>
}

export { NotFoundPage }
