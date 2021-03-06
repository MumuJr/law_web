import Link from "next/link";
import Image from "next/image";
import logo from "../../public/LOGOS-ANAMARIA-01.png"

export const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center  px-10 pt-16 sm:max-w-xl md:max-w-full bg-light-green-900 ">
            <div className="grid mb-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="sm:col-span-1">
                    <Link href="/">
                        <a
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >

                            <span className="text-xl font-bold tracking-wide text-white uppercase">
                                VIZCAINO BONIFASI LAW
                            </span>
                        </a>
                    </Link>
                    <div className="mt-6 lg:max-w-sm">
                        <p className="text-sm text-white">
                            The information on this site is NOT formal legal advice.

                        </p>
                        <br></br>
                        <p className="text-sm text-white">
                        The choice of lawyer is an important decision and should not be based solely on advertisements. This disclaimer is provided as a requirement of the Missouri Supreme Court. 

                        </p>
                        <br></br>
                        <p className="text-sm text-white">
                            The information on this site and use of this site does NOT create the formation of an attorney-client relationship and is NOT a substitute of the judgment of an attorney.
                        </p>
                        <p className="mt-4 text-sm text-white">
                            Vizcaino Bonifasi Law LLC disclaims any and all liability taken or not taken from use of this website.
                        </p>
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-white underline">
                        Contacts
                    </p>
                    <div className="flex">
                        <p className="mr-1 text-white">Phone:</p>
                        <Link href="/">
                            <a
                                aria-label="Our phone"
                                title="Our phone"
                                className="transition-colors duration-300 text-beige-300 hover:text-white"
                            >
                                (504) 224-9709 / (816) 370-6709
                            </a>
                        </Link>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-white">Email:</p>
                        <Link href="mailto:Anamaria@vizcainobonifasilaw.com">
                            <a

                                aria-label="Our email"
                                title="Our email"
                                className="transition-colors duration-300 text-beige-300 hover:text-white"
                            >
                                Anamaria@vizcainobonifasilaw.com
                            </a>
                        </Link>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-white">Location:</p>
                        <p className="transition-colors duration-300 text-beige-300 hover:text-white">
                            New Orleans, LA & Kansas City, MO
                        </p>
                    </div>
                </div>
                <div>
                    <span className="text-base font-bold tracking-wide text-white underline">
                        Social
                    </span>
                    <div className="flex items-center mt-1 space-x-3">
                        <Link href="/">
                            <a

                                className="text-white transition-colors duration-300 hover:text-beige-300"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                </svg>
                            </a>
                        </Link>
                        <Link href="/">
                            <a

                                className="text-white transition-colors duration-300 hover:text-beige-300"
                            >
                                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                    <circle cx="15" cy="15" r="4" />
                                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                </svg>
                            </a>
                        </Link>
                        <Link href="/">
                            <a

                                className="text-white transition-colors duration-300 hover:text-beige-300"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                </svg>
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/anamaria-vizcaino-95a41289/">
                            <a

                                className="text-white transition-colors duration-300 hover:text-beige-300"
                            >
                                <svg viewBox="0 0 31 30" fill="currentColor" className="h-5">
                                    <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                                </svg>
                            </a>
                        </Link>
                    </div>
                    <p className="mt-4 text-sm text-white">
                        Follow us on social media.
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-white">
                    ?? Copyright 2022 Vizcaino Bonifasi Law. All rights reserved.
                </p>
            </div>
        </div>
    );
};

