import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">You must add '/blog' to the end of the url</h1>
        <Link
          href="/"
          className="inline-block bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
        >
          or you can click here
        </Link>
      </div>
    </div>
  )
}

