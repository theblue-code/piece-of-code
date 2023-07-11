import Link from "next/link"

export default function About() {
    return (
      <section className="pb-10 bg-gray-900">
        <div className="py-20 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">About</h2>
                {/* <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Us</p> */}
            </div> 
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <Link href="#">
                        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="#" alt="" />
                    </Link>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-white">
                            <Link href="#">Yazan Unis</Link>
                        </h3>
                        <span className="text-gray-400">Full Stack Web Developer</span>
                        <p className="mt-3 mb-4 font-light text-gray-400">I design, develop, maintain fully-fledged and functioning platforms with database.</p>
                        <p className="mt-3 mb-4 font-light text-gray-400">You can find more detailes on my <Link className="text-blue-500 hover:text-blue-700" href="/">personal site</Link></p>
                    </div>
                </div>   
        </div> 
      </section>
    )
}


// "text-center items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
// "text-center flex space-x-4 sm:mt-0"