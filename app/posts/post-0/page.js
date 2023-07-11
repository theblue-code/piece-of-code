import Link from "next/link"
import threads from '../../../public/assets/images/threads.jpg'
import Image from "next/image"

export default function Post1() {
    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Things you should know before downloading the new Threads app
                    </h2>
                    {/* Post Title */}
                    <div>
                        By
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-500 uppercase rounded-full bg-teal-accent-400">
                            Yazan Unis
                        </p>
                    </div>
                    <br />
                    <p className="text-base text-gray-700 md:text-lg">
                        If you decide to download the Threadz app, you must have an account on the Instagram platform in advance, because there is absolutely no other way to register an account on the platform. 
                        You cannot create an account via Google mail, phone number, or even your Facebook account, because Threads is linked to Instagram. If you have an Instagram account ready, be glad because the Threads app pulls all the information (username, name, description, profile picture...) directly and creates your account in Threads ready.
                    </p>
                    <p className="text-base text-gray-600 md:text-lg">
                        One of the worst negatives about Threads is its close association with the Instagram platform from account creation to deletion. It was indicated in the application's usage policy that deleting an account in Threads requires deleting your Instagram account. 
                        Having to delete your account on Instagram will directly delete your account on Threads. If you created an account in Threads and you no longer want to use it, you can disable the account and not access it, and others cannot follow you on it, but to permanently delete it, this can only be done by deleting your Instagram account.
                    </p>
                    <p className="text-base text-gray-600 md:text-lg">
                        Do not expect to post anything on the Threads platform. 
                        In fact, many people were banned from the platform on their first day on Threads. 
                        Fortunately, if you are banned on Threads, your Instagram account is not affected.
                        Like the politics of Instagram and Facebook, there are things that you should not share and posts that you should not put up on the platform: political posts, posts about misrepresenting scientific information, especially medical, fake news, practicing extremist ideas, and of course publishing nude content.
                    </p>
                </div>
                {/* <div className="mx-auto lg:max-w-2xl">
                    <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                        <Image className="w-full" src="" width={200} height={200} />
                        <img
                            className="w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                            src=""
                            alt=""
                        />
                    </div>
                </div> */}
            </div>
        </>
    )
}