import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarAdmin = () => {
    return (
        <div>
            <div className="flex h-full bg-gray-100 text-gray-900">
                <aside className="flex h-full min-h-screen w-20 flex-col items-center border-r border-gray-200 bg-white">
                    <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-2">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA4CAYAAABOr/BaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgB7ZldSsNAEIBnNosIqdAjxBv0CPEGvYHtgy190lIUfLI+CZaCPkhRHxpPoDew3qBHyBF8aKBiknUXrdJN6A9WiMx8ENjuTJN8kM0kE4QNUbrv+Sp1njMBxCBqtOtQIAQQhKWpwNJUYGkqkJSWUEDcu8sKIpbt+cnB8Wg2Lg+75Th2K3ZOHMfhtHUawgIKKQ1KPioFnjUb6m139uN9ulMFgUP7r44jzNNfAAvgNU0FlqZCIW9kSfq2B39IIaWXlZzfIkuDng9C+HYgTkUwbbVDM3ZvdN2UTtXOUZg8RY2TMayBO+jXUGTKEUyane53zm3/CHUpnjsWwGvU7FzBimwPLjwptmqZQJqOpBFWgGd2TEI8gs/aqFe+U8nL0VXRxNeSBgf3dQ32cyLdnyEeaknPiod6W1laSumpNHvOKATfvcnA0lQo5gvHBvh6I8O8GF/eVGBpKrA0FViaCixNBZamAktTQZpGmekb2cQgQ1gD8+FMCnFuz6NK53toiXrQjcGXxXtT13mNwbmUNBmjcDLHU5As7dkhrIDpYOZ9LNNG9ajRCeCfwWuaCixNBZamAktTgaWpwNJUYGkqsDQVPgCisnKqk80cwwAAAABJRU5ErkJggg==" />
                    </div>
                    <nav className="flex flex-1 flex-col gap-y-4 pt-10">
                        <NavLink to={"/admin"} href="#home" className="group relative rounded-xl p-2 hover:text-blue-600 hover:bg-gray-50">
                            <svg className="h-6 w-6 stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 22L2 22" stroke-width="1.5" stroke-linecap="round"></path>
                                <path d="M2 11L10.1259 4.49931C11.2216 3.62279 12.7784 3.62279 13.8741 4.49931L22 11" stroke-width="1.5" stroke-linecap="round"></path>
                                <path d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5" stroke-width="1.5" stroke-linecap="round"></path>
                                <path d="M4 22V9.5" stroke-width="1.5" stroke-linecap="round"></path>
                                <path d="M20 22V9.5" stroke-width="1.5" stroke-linecap="round"></path>
                                <path d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393C9 14.8787 9 15.5858 9 17V22" stroke-width="1.5"></path>
                                <path d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" stroke-width="1.5"></path>
                            </svg>

                            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                                    <div className="absolute inset-0 -left-1 flex items-center">
                                        <div className="h-2 w-2 rotate-45 bg-white"></div>
                                    </div>
                                    Home <span className="text-gray-400">(H)</span>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to={"/admin/rooms"} href="#roomlist" className="text-gary-400 group relative rounded-xl p-2 hover:text-blue-600 hover:bg-gray-50">
                            <svg className="h-6 w-6 stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 8H17M7 12H17M9 16H15M4 4H20V20H4V4Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>

                            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                                    <div className="absolute inset-0 -left-1 flex items-center">
                                        <div className="h-2 w-2 rotate-45 bg-white"></div>
                                    </div>
                                    Room<span className="text-gray-400">(R)</span>
                                </div>
                            </div>
                        </NavLink>
                    </nav>

                    <div className="flex flex-col items-center gap-y-4 py-10">
                        <a href='https://github.com/BimaAdhityaS'>
                            <button className="mt-2 rounded-full bg-gray-100 group relative">
                                <img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/130433831?v=4" alt="" />
                                <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                                    <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                                        <div className="absolute inset-0 -left-1 flex items-center">
                                            <div className="h-2 w-2 rotate-45 bg-white"></div>
                                        </div>
                                        Bima Adhitya Sukoco
                                    </div>
                                </div>
                            </button>
                        </a>
                        <a href='https://github.com/Mohmmdarif'>
                            <button className="mt-2 rounded-full bg-gray-100 group relative">
                                <img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/90710533?v=4" alt="" />
                                <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                                    <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                                        <div className="absolute inset-0 -left-1 flex items-center">
                                            <div className="h-2 w-2 rotate-45 bg-white"></div>
                                        </div>
                                        Mohammad Arif Fadhillah
                                    </div>
                                </div>
                            </button>
                        </a>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default SidebarAdmin