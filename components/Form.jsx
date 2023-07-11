"use client"
import emailjs from "emailjs-com"
import { useState, useRef } from "react"

export default function Form() {
  const [toast, setToast] = useState(false)

  const form = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    setToast(true)
    event.target.reset()
    setTimeout(() => setToast(false), 2000)
    emailjs
      .sendForm(
        "service_7t49xz", // "service_7t49xzf"
        "template_p9em75w",
        form.current, // form.current
        "xQZPoku1oyv5U4L62"
      )
      .then(
        (result) => {
          console.log("send")
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
          placeholder="Your Name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
          placeholder="Your Email"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
          placeholder="Let us know how we can help you"
        ></textarea>
      </div>
      <div className="text-center sm:text-left">
        <button
          type="submit"
          className="py-3 px-3 text-sm font-medium text-gray-300 rounded-lg bg-primary-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-blue-600 hover:bg-primary-700 focus:ring-primary-800"
        >
          Send message
        </button>
      </div>
      <br />
      {toast && (
        <div
          id="toast-simple"
          className="flex w-full p-4 space-x-4 text-gray-500 rounded-lg shadow text-gray-400 bg-gray-800"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-blue-500"
            focusable="false"
            data-prefix="fas"
            data-icon="paper-plane"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
            ></path>
          </svg>
          <div className="pl-4 text-sm font-normal">
            Message sent successfully.
          </div>
        </div>
      )}
    </form>
  )
}
