import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center">404 Not Found</h2>
      <p className="text-xl my-[50px] sm:text-2xl lg:text-3xl lg:my-[25px] text-center">Такой страницы не существует</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}