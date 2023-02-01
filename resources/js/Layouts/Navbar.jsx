import React from 'react'
import { Link, usePage } from '@inertiajs/react';
import NavLink from './NavLink';
import Dropdown from '@/Components/Dropdown';
import ResponsiveNavigation from '@/Components/ResponsiveNavigation';

export default function Navbar() {
    //dan usePage digunakan karena kita tidak berada pada pages, 
    //apabila ada didalam pages, tidak perlu menambahkan usepage
    const {auth} = usePage().props;
  return (
    <>
            <ResponsiveNavigation />
            <nav className="hidden border-b border-dashed border-gray-700 bg-gray-800 py-4 shadow lg:block">
                <div className="mx-auto max-w-screen-2xl px-4">
                    <div className="flex items-center justify-between">
                        <Link
                            href={route('home')}
                            className="mr-3 text-lg font-semibold capitalize text-white"
                        >
                            Inertia
                        </Link>

                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <NavLink
                                    href={route('home')}
                                    active={route().current('home')}
                                >
                                    Home
                                </NavLink>
                                
                            </div>
                            <div className="flex items-center">
                            {auth.user ? 
                                <>
                                    <div className="flex items-center">
                                        <Dropdown label="Putu Abdi Njing">
                                            <Dropdown.Link
                                                href={route('dashboard')}
                                            >
                                                Dashboard
                                            </Dropdown.Link>
                                            <Dropdown.Link href={'#'}>
                                                My profile
                                            </Dropdown.Link>
                                            <Dropdown.Link href={'#'}>
                                                Settings
                                            </Dropdown.Link>
                                            <Dropdown.Link href={'#'}>
                                                New article
                                            </Dropdown.Link>
                                            <Dropdown.Devider />
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
                                        </Dropdown>
                                    </div>
                                </>
                                :
                                <>
                                    <Dropdown.Devider />
                                    <div className="flex items-center">
                                        <NavLink href={route('login')}>
                                            Login
                                        </NavLink>
                                        <NavLink href={route('register')}>
                                            Register
                                        </NavLink>
                                    </div>
                                </>
                            }
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    </>
  )
}
