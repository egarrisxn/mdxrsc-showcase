import Button from './components/button'
import Link from './components/link'

export default function NotFound() {
  return (
    <article>
      <h1>PAGE NOT FOUND</h1>
      <Button>
        <Link href='/'>Home</Link>
      </Button>
    </article>
  )
}
