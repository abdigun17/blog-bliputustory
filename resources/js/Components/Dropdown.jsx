import { useState, createContext, useContext, Fragment } from 'react';
import { Link } from '@inertiajs/react';
import clsx from 'clsx';
import { Menu, Transition } from '@headlessui/react';

const DropDownContext = createContext();

const Dropdown = ({ toggleAnimate = true, label, children }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <Menu as="div" className="relative">
            {({ open }) => (
                <>
                    <Menu.Button
                        className={clsx(
                            'flex items-center gap-x-2 text-gray-400',
                            open && 'text-white'
                        )}
                    >
                        {label}
                        {toggleAnimate && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={clsx(
                                    'h-4 w-4 transition duration-200',
                                    open && 'rotate-180'
                                )}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 top-9 w-60 space-y-1 overflow-hidden rounded-lg border border-gray-700 bg-gray-800 px-4 py-5 shadow-sm">
                            {children}
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
};

const Trigger = ({ children }) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div onClick={toggleOpen}>{children}</div>

            {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>}
        </>
    );
};

const Content = ({ align = 'right', width = '48', contentClasses = 'py-1 bg-white', children }) => {
    const { open, setOpen } = useContext(DropDownContext);

    let alignmentClasses = 'origin-top';

    if (align === 'left') {
        alignmentClasses = 'origin-top-left left-0';
    } else if (align === 'right') {
        alignmentClasses = 'origin-top-right right-0';
    }

    let widthClasses = '';

    if (width === '48') {
        widthClasses = 'w-48';
    }

    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div
                    className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
                    onClick={() => setOpen(false)}
                >
                    <div className={`rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses}>{children}</div>
                </div>
            </Transition>
        </>
    );
};

const DropdownLink = ({ isActive = false, children, ...props }) => {
    return (
        <Menu.Item>
            {({ active }) => (
                <Link className="block w-full text-left" {...props}>
                    <div
                        className={clsx(
                            (active || isActive) ? 'bg-blue-700 text-white' : 'text-gray-400',
                            'inline-block rounded-lg px-2 py-1 text-left text-sm font-medium'
                        )}
                    >
                        {children}
                    </div>
                </Link>
            )}
        </Menu.Item>
    );
};

const Devider = () => {
    return (
        <div className='h-px w-full ml-2 my-2 block bg-gradient-to-r from-gray-700 via-transparent to-transparent' />
    )
}

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Devider = Devider;
Dropdown.Link = DropdownLink;


export default Dropdown;
