import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Sidepane from "../sidePane/Sidepane";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Disclosure as="nav" className="bg-white-800 static">
      {({ open }) => (
        <>
          <div className="mx-auto max-w gap-5 px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={isOpenHandle}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <button
                  type="button"
                  className="relative rounded-full bg-white-800 p-1 text-black-400 hover:text-gray- focus:outline-none  sm:hidden"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">Aasha</div>
              </div>
              <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-white-800 p-1 text-black-400 hover:text-gray- focus:outline-none hidden sm:block "
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  className="relative rounded-full bg-white-800 p-1 text-black-400   hover:text-gray- focus:outline-none "
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">User</span>
                  <UserIcon className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  className="relative rounded-full bg-white-800 p-1 text-black-400 hover:text-gray-focus:outline-none "
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Shopping</span>
                  <ShoppingBagIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
          {isOpen && <Sidepane isOpen={isOpen} isOpenHandle={isOpenHandle} />}
        </>
      )}
    </Disclosure>
  );
}
