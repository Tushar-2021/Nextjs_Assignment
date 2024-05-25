import React from 'react';
import Image from 'next/image';
import PlatUi from '../../assets/platUi.jpg';

const Footer = () => {
  return (
    <>
      {/* Desktop Footer */}
      <footer className="hidden md:block bg-black">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="" className="flex flex-col items-center">
                <Image src={PlatUi} className="h-8 me-3" alt="Logo" />
                <span className="self-center text-sm font-semibold whitespace-nowrap">Copyright 2024 PlatUi</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Company</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline">Home</a>
                  </li>
                  <li>
                    <a href="" className="hover:underline">About US</a>
                  </li>
                  <li>
                    <a href="" className="hover:underline">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline">Github</a>
                  </li>
                  <li>
                    <a href="" className="hover:underline">Discord</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 PlatUi™. All Rights Reserved.</span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-white dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .29a10.4 10.4 0 0 0-3.292 20.258c.521.096.712-.226.712-.504v-1.78c-2.892.63-3.486-1.415-3.486-1.415-.474-1.2-1.158-1.518-1.158-1.518-.946-.638.071-.638.071-.638a2.31 2.31 0 0 1 1.648 1.158c.856 1.43 2.23 1.016 2.784.791.096-.63.353-1.015.641-1.294-2.892-.322-5.936-1.446-5.936-6.419 0-1.416.508-2.571 1.366-3.476a4.51 4.51 0 0 1 .123-3.477s1.092-.353 3.645 1.292a12.55 12.55 0 0 1 3.292-.441 11.908 11.908 0 0 1 3.292.441c2.553-1.645 3.645-1.292 3.645-1.292.405 1.08.143 2.307-.145 3.476a4.765 4.765 0 0 1 1.37 3.476c0 4.92-3.065 6.097-5.985 6.419.365.34.697 1.001.697 1.955v2.786c0 .286.177.607.723.504A10.4 10.4 0 0 0 10 .29Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Github account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="md:hidden fixed bottom-0 left-0 w-full bg-yellow-600 text-white p-4">
        <div className="flex justify-around items-center py-2">
          <a href="/home" className="flex flex-col items-center text-gray-700 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9-9 9-9-9z" />
            </svg>
            <span className="text-sm">Home</span>
          </a>
          <a href="/product" className="flex flex-col items-center text-gray-700 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12l-3-3-3 3m0 0l3 3 3-3m-3 3V3" />
            </svg>
            <span className="text-sm">Product</span>
          </a>
          <a href="/community" className="flex flex-col items-center text-gray-700 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25a4.5 4.5 0 119 0m-9 0a4.5 4.5 0 119 0M7.5 8.25h9M12 12v9m0-9l-3.75 6M12 12l3.75 6" />
            </svg>
            <span className="text-sm">Community</span>
          </a>
          <a href="/resources" className="flex flex-col items-center text-gray-700 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75L12 3.75m0 0v0a8.25 8.25 0 018.25 8.25h0M12 3.75v0a8.25 8.25 0 00-8.25 8.25h0m8.25-8.25h0v0m0 0V21M4.5 12H19.5M3 12c0 2.5 1 4.5 2.5 6 1.5 1.5 3.5 2.5 6 2.5s4.5-1 6-2.5c1.5-1.5 2.5-3.5 2.5-6M3 12a8.25 8.25 0 0116.5 0" />
            </svg>
            <span className="text-sm">Resources</span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
