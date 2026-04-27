import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="text-8xl font-bold text-[#0D1F3C]/10 font-['Playfair_Display'] mb-4">404</div>
      <h1 className="text-3xl font-bold text-[#0D1F3C] mb-3">Page Not Found</h1>
      <p className="text-gray-500 text-base mb-8 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-[#C9A84C] text-[#0D1F3C] font-semibold px-7 py-3 rounded hover:bg-[#e2c47a] transition-colors text-sm"
      >
        Back to Home
      </Link>
    </div>
  )
}
