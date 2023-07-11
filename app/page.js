import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-gray-900" >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-700">Piece Of Code</h2>
              <div className="font-light text-gray-400 sm:text-xl">Interesting articles in Technology, Programming & Information Security.<br/>Grap a cup of <p className="inline text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">caffee</p> and enjoy with me.</div>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
              <article className="p-6 rounded-lg border shadow-md bg-gray-800 border-gray-700">
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-primary-200 text-primary-800">
                          <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                          Article
                      </span>
                      <span className="text-sm">14 days ago</span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-white"><Link href="/posts/post-0">Things you should know before downloading the new Threads app</Link></h2>
                  <div className="mb-5 font-light text-gray-400">The new Threads app from Instagram is finally available to everyone. On the sixth of July, the application became officially available in the application stores for both Android and iOS, and everyone can download the Threads application and try it.</div>
                  <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                          {/* image avatar */}
                          <span className="font-medium text-white">
                              Yazan Unis
                          </span>
                      </div>
                      <Link href="/posts/post-0" className="inline-flex items-center font-medium text-blue-500 hover:underline">
                          Read more
                          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </Link>
                  </div>
              </article> 
              <article className="p-6 rounded-lg border shadow-md bg-gray-800 border-gray-700">
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                      <span className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-primary-200 text-primary-800">
                          <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                          Article
                      </span>
                      <span className="text-sm">14 days ago</span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-white"><Link href="/posts/post-1">Explain Resemble AI to change the voice with artificial intelligence</Link></h2>
                  <div className="mb-5 font-light text-gray-400">The uses of artificial intelligence are countless, including free and paid ones, and some that are accessible and inaccessible. One of the services that rely on artificial intelligence and has gained quite a bit of popularity in a short time is Resemble AI.</div>
                  <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                          {/* image avatar */}
                          <span className="font-medium text-white">
                              Yazan Unis
                          </span>
                      </div>
                      <Link href="/posts/post-1" className="inline-flex items-center font-medium text-blue-500 hover:underline">
                          Read more
                          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </Link>
                  </div>
              </article>    
              <article className="p-6 rounded-lg border shadow-md bg-gray-800 border-gray-700">
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-primary-200 text-primary-800">
                          <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                          Article
                      </span>
                      <span className="text-sm">14 days ago</span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-white"><Link href="/posts/post-2">How to quickly deploy a static website</Link></h2>
                  <div className="mb-5 font-light text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</div>
                  <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                          {/* image avatar */}
                          <span className="font-medium text-white">
                              Yazan Unis
                          </span>
                      </div>
                      <Link href="#" className="inline-flex items-center font-medium text-blue-500 hover:underline">
                          Read more
                          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </Link>
                  </div>
              </article>    
              <article className="p-6 rounded-lg border shadow-md bg-gray-800 border-gray-700">
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-primary-200 text-primary-800">
                          <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                          Article
                      </span>
                      <span className="text-sm">14 days ago</span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-white"><Link href="/posts/post-2">How to quickly deploy a static website</Link></h2>
                  <div className="mb-5 font-light text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</div>
                  <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                          {/* image avatar */}
                          <span className="font-medium text-white">
                              Yazan Unis
                          </span>
                      </div>
                      <Link href="#" className="inline-flex items-center font-medium text-blue-500 hover:underline">
                          Read more
                          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </Link>
                  </div>
              </article>            
          </div>  
      </div>
    </div>
  )
}
