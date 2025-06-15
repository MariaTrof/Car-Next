import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto py-8 text-center min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Страница не найдена</p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        На главную
      </Link>
    </div>
  )
}