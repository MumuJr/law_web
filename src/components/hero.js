import Image from "next/image";
import profilePic from "../../public/002.jpg";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex py-8 md:py-16 lg:py-0 lg:px-10 lg:flex-col  ">
      <div className="flex w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
        <div className=" mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <div className="mb-5 font-sans font-bold text-lg tracking-tight text-gray-900 sm:leading-none text-center">
            Anamaria Vizcaino
            <br className="hidden md:block" />
            <div className="text-lg">J.D. &nbsp; | &nbsp; M.B.A.</div>
          </div>
          <div className="lg:hidden py-4">
            <Image
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 sm:h-96 lg:h-full lg:w-3/4"
              src={profilePic}
              alt="Ana Maria Vizcaino"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-left">
            Anamaria Vizcaino throughout her studies and career has focused on
            the immigrant community.
            <br />
            <br />
            Prior to founding Vizcaino Bonifasi Law LLC, she worked as a
            nonprofit attorney representing unaccompanied minors in various
            types of immigration cases. She has worked in removal defense and
            represented clients in detention centers.
            <br />
            <br />
            In her spare time, Anamaria has volunteered at various nonprofits
            serving the immigrant community in Boston, Miami, and New Orleans.
            <br />
            <br />
            Anamaria’s aim is to serve the immigrant community with dignity,
            respect, and compassion. As a child of immigrant parents from
            Guatemala, she understands the stress and difficulty of navigating
            the immigration landscape.
            <br />
            <br />
            She knows that diligent representation and constant clear
            communication is crucial for her clients as they go through the
            process.
          </p>
          <div className="mb-10 text-center md:mb-16 lg:mb-20">
            <Link href="#contact">
              <a className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-light-green-900 hover:bg-beige-300 focus:shadow-outline focus:outline-none">
                Contact
              </a>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-2 text-sm text-gray-600 md:mb-2">Follow us</div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Link href="/">
                  <a className="text-light-green-900 transition-colors duration-300 hover:text-beige-300">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="flex items-center">
                <Link href="/">
                  <a className="text-light-green-900 transition-colors duration-300 hover:text-beige-300">
                    <svg
                      viewBox="0 0 30 30"
                      fill="currentColor"
                      className="h-6"
                    >
                      <circle cx="15" cy="15" r="4" />
                      <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="flex items-center">
                <Link href="/">
                  <a className="text-light-green-900 transition-colors duration-300 hover:text-beige-300">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="flex items-center">
                <Link href="/">
                  <a className="text-light-green-900 transition-colors duration-300 hover:text-beige-300">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6"
                    >
                      <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="flex items-center">
                <Link href="https://www.linkedin.com/in/anamaria-vizcaino-95a41289/">
                  <a className="text-light-green-900 transition-colors duration-300 hover:text-beige-300">
                    <svg
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="h-6"
                    >
                      <path
                        d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
         
        </div>
        <div className=" md:w-full lg:max-w-full xs:hidden lg:block">
        <Image
        className="object-contain w-full rounded shadow-lg lg:rounded-none lg:shadow-none lg:h-full"
          src={profilePic}
          alt="Ana Maria Vizcaino"      
        />
      </div>
      </div>
    </div>
  );
};
