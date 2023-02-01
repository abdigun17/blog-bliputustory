import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import Dropdown from '@/Components/Dropdown';


export default function ResponsiveNavigation() {
    //auth digunakan pada saa user melakukan login
    //dan usePage digunakan karena kita tidak berada pada pages, 
    //apabila ada didalam pages, tidak perlu menambahkan usepage
    const {auth} = usePage().props;
    return (
        <nav className="border-b border-gray-800 bg-black px-4 py-4 lg:hidden">
            <div className="flex items-center justify-between">
                <Link className="text-xl font-semibold text-white" href="/">
                    {import.meta.env.VITE_APP_NAME}
                </Link>
                <Dropdown
                    toggleAnimate={false}
                    label={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    }
                >
                    <Dropdown.Link href={'/'}>Home</Dropdown.Link>
                    <Dropdown.Link href={'/articles'}>
                        Articles
                    </Dropdown.Link>
                    {auth.user ? 
                        <>
                            <Dropdown.Link href={route('dashboard')}>
                                Dashboard
                            </Dropdown.Link>
                            <Dropdown.Link href={'#'}>My profile</Dropdown.Link>
                            <Dropdown.Link href={'#'}>Settings</Dropdown.Link>
                           
                            <Dropdown.Link href={'#'}>
                                My articles
                            </Dropdown.Link>
                            <Dropdown.Link href={'#'}>
                                New article
                            </Dropdown.Link>
                            <Dropdown.Devider />
                            <Dropdown.Link
                                href={route('logout')}
                                method="POST"
                                as="button"
                            >
                                Logout
                            </Dropdown.Link>
                        </>
                    : 
                        <>
                        <Dropdown.Devider />
                            <Dropdown.Link href={route('login')}>
                                Login
                            </Dropdown.Link>
                            <Dropdown.Link href={route('register')}>
                                Register
                            </Dropdown.Link>
                        </>
                    }
                    
                </Dropdown>
            </div>
        </nav>
    );
}