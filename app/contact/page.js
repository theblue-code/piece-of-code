"use client"

import Form from "@/components/Form"

export default function Contact() {
    return (
        <section className="bg-gray-900">

            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                </p>
                    {/* <div className="text-center m-3">
                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">You can send us a message directly</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
                    </div> */}
                <Form />
            </div>
        </section>
    )
}