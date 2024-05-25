
export default function Footer() {
          return (
                    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md">
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
          );
}
