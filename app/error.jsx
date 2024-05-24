'use client'
import Button from './components/button'

export default function Error({error, reset}) {
  return (
    <article>
      <h1>Oh no! Something went wrong</h1>
      <Button onClick={reset}>Try again</Button>
      <pre>{error.message}</pre>
    </article>
  )
}
