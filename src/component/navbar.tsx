'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'bg-blue-600 text-white px-3 py-2 rounded-md transition'
      : 'text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition';

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-blue-600">
              CAR-BUD
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/modals" className={navLinkClass}>
              Models
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
          </nav>

          {/* Right Icons */}
          <div className="hidden md:flex gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0415 26.25H18.9582V23.3333H16.0415V26.25ZM17.4998 2.91666C9.44984 2.91666 2.9165 9.44999 2.9165 17.5C2.9165 25.55 9.44984 32.0833 17.4998 32.0833C25.5498 32.0833 32.0832 25.55 32.0832 17.5C32.0832 9.44999 25.5498 2.91666 17.4998 2.91666ZM17.4998 29.1667C11.0686 29.1667 5.83317 23.9312 5.83317 17.5C5.83317 11.0687 11.0686 5.83332 17.4998 5.83332C23.9311 5.83332 29.1665 11.0687 29.1665 17.5C29.1665 23.9312 23.9311 29.1667 17.4998 29.1667ZM17.4998 8.74999C14.2769 8.74999 11.6665 11.3604 11.6665 14.5833H14.5832C14.5832 12.9792 15.8957 11.6667 17.4998 11.6667C19.104 11.6667 20.4165 12.9792 20.4165 14.5833C20.4165 17.5 16.0415 17.1354 16.0415 21.875H18.9582C18.9582 18.5937 23.3332 18.2292 23.3332 14.5833C23.3332 11.3604 20.7228 8.74999 17.4998 8.74999Z"
                  fill="black"
                />
              </svg>
            </button>
            <Link to="/profile">
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5001 2.91666C9.45008 2.91666 2.91675 9.44999 2.91675 17.5C2.91675 25.55 9.45008 32.0833 17.5001 32.0833C25.5501 32.0833 32.0834 25.55 32.0834 17.5C32.0834 9.44999 25.5501 2.91666 17.5001 2.91666ZM10.7188 26.9792C12.6292 25.6083 14.9626 24.7917 17.5001 24.7917C20.0376 24.7917 22.3709 25.6083 24.2813 26.9792C22.3709 28.35 20.0376 29.1667 17.5001 29.1667C14.9626 29.1667 12.6292 28.35 10.7188 26.9792ZM26.4542 24.9667C23.9897 23.0417 20.8834 21.875 17.5001 21.875C14.1167 21.875 11.0105 23.0417 8.54591 24.9667C6.85425 22.9396 5.83341 20.3437 5.83341 17.5C5.83341 11.0542 11.0542 5.83332 17.5001 5.83332C23.9459 5.83332 29.1667 11.0542 29.1667 17.5C29.1667 20.3437 28.1459 22.9396 26.4542 24.9667Z"
                    fill="black"
                  />
                  <path
                    d="M17.5001 8.74999C14.6855 8.74999 12.3959 11.0396 12.3959 13.8542C12.3959 16.6687 14.6855 18.9583 17.5001 18.9583C20.3147 18.9583 22.6042 16.6687 22.6042 13.8542C22.6042 11.0396 20.3147 8.74999 17.5001 8.74999ZM17.5001 16.0417C16.2897 16.0417 15.3126 15.0646 15.3126 13.8542C15.3126 12.6437 16.2897 11.6667 17.5001 11.6667C18.7105 11.6667 19.6876 12.6437 19.6876 13.8542C19.6876 15.0646 18.7105 16.0417 17.5001 16.0417Z"
                    fill="black"
                  />
                </svg>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={navLinkClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/models"
              onClick={() => setIsOpen(false)}
              className={navLinkClass}
            >
              Models
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={navLinkClass}
            >
              About Us
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}
