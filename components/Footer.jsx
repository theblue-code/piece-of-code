import Link from "next/link"

export default function Footer() {
  return (
    <footer className="p-4 md:p-8 lg:p-3 bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <ul className="flex justify-center items-center mb-6 text-white">
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6 ">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="mr-4 hover:underline md:mr-6">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="mr-4 hover:underline md:mr-6">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="https://yazanunis.vercel.app"
              target="_blank"
              className="mr-4 hover:underline md:mr-6"
            >
              Personal Site
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-400 sm:text-center">
          © 2023 Developed By{" "}
          <Link
            href="https://yazanunis.vercel.app"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Yazan Unis
          </Link>
        </span>
      </div>
    </footer>
  )
}
