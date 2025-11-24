import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import LogoVPN from "../../public/assets/Logo.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-50 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex items-center justify-between py-3 sm:py-4">
          <div className="flex items-center">
            <Link href="/">
              <a
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActiveLink(null);
                }}
                className="cursor-pointer"
              >
                <LogoVPN className="h-8 w-auto" />
              </a>
            </Link>
          </div>
          <ul className="hidden lg:flex text-black-500 items-center text-sm">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-3 py-2 mx-1 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "px-3 py-2 mx-1 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Feature
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "px-3 py-2 mx-1 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Pricing
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-3 py-2 mx-1 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Testimonial
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={
                "px-3 py-2 mx-1 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "services"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Services
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="locations"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("locations");
              }}
              className={
                "px-3 py-2 mx-1 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "locations"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Locations
            </LinkScroll>
            {/* More Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setMoreMenuOpen(true)}
                onMouseLeave={() => setMoreMenuOpen(false)}
                className={
                  "px-3 py-2 mx-1 cursor-pointer animation-hover inline-block relative flex items-center" +
                  (moreMenuOpen
                    ? " text-orange-500 "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                More
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${moreMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {moreMenuOpen && (
                <div
                  onMouseEnter={() => setMoreMenuOpen(true)}
                  onMouseLeave={() => setMoreMenuOpen(false)}
                  className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-xl py-3 min-w-[320px] z-50 border border-gray-100"
                >
                  <div className="grid grid-cols-2 gap-1">
                    <LinkScroll
                      to="how-it-works"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      onSetActive={() => {
                        setActiveLink("how-it-works");
                        setMoreMenuOpen(false);
                      }}
                      className="flex items-center px-4 py-2.5 text-sm text-black-500 hover:text-orange-500 hover:bg-orange-50 transition-all rounded-md mx-1"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        />
                      </svg>
                      How It Works
                    </LinkScroll>
                    <LinkScroll
                      to="faq"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      onSetActive={() => {
                        setActiveLink("faq");
                        setMoreMenuOpen(false);
                      }}
                      className="flex items-center px-4 py-2.5 text-sm text-black-500 hover:text-orange-500 hover:bg-orange-50 transition-all rounded-md mx-1"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      FAQ
                    </LinkScroll>
                    <LinkScroll
                      to="blog"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      onSetActive={() => {
                        setActiveLink("blog");
                        setMoreMenuOpen(false);
                      }}
                      className="flex items-center px-4 py-2.5 text-sm text-black-500 hover:text-orange-500 hover:bg-orange-50 transition-all rounded-md mx-1"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                      Blog
                    </LinkScroll>
                    <LinkScroll
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      onSetActive={() => {
                        setActiveLink("contact");
                        setMoreMenuOpen(false);
                      }}
                      className="flex items-center px-4 py-2.5 text-sm text-black-500 hover:text-orange-500 hover:bg-orange-50 transition-all rounded-md mx-1"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Contact
                    </LinkScroll>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <LinkScroll
                      to="download"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      onSetActive={() => {
                        setActiveLink("download");
                        setMoreMenuOpen(false);
                      }}
                      className="flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition-all rounded-md mx-1"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download
                    </LinkScroll>
                  </div>
                </div>
              )}
            </div>
          </ul>
          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-black-600 hover:text-orange-500 hover:bg-gray-100 transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>
      </header>
      {/* Mobile Navigation Dropdown */}
      <div
        className={`fixed lg:hidden inset-0 z-40 bg-gray-300 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-110' : 'opacity-0 pointer-events-none'
          }`}
        onClick={closeMobileMenu}
      >
        <nav
          className={`fixed left-0 right-0 w-full bg-white z-40 ${mobileMenuOpen ? '' : 'pointer-events-none'
            }`}
          style={{
            top: scrollActive ? '64px' : '80px'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu content trượt xuống từ chân header */}
          <div
            className={`transform transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
              }`}
            style={{
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
              maxHeight: scrollActive ? 'calc(100vh - 64px)' : 'calc(100vh - 80px)',
              overflowY: 'auto'
            }}
          >
            <div className="flex flex-col bg-white-500">
              <ul className="flex flex-col flex-1 py-2">
                <li>
                  <LinkScroll
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("about");
                    }}
                    onClick={closeMobileMenu}
                    className={
                      "px-6 py-3.5 text-black-600 hover:text-orange-500 hover:bg-orange-100 transition-all flex items-center active:bg-orange-100 " +
                      (activeLink === "about"
                        ? " text-orange-500 bg-orange-100 border-r-4 border-orange-500 font-medium"
                        : "")
                    }
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    About
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    activeClass="active"
                    to="feature"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("feature");
                    }}
                    onClick={closeMobileMenu}
                    className={
                      "px-6 py-3.5 text-black-600 hover:text-orange-500 hover:bg-orange-100 transition-all flex items-center " +
                      (activeLink === "feature"
                        ? " text-orange-500 bg-orange-100 border-r-4 border-orange-500 font-medium"
                        : "")
                    }
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    Feature
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    activeClass="active"
                    to="pricing"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("pricing");
                    }}
                    onClick={closeMobileMenu}
                    className={
                      "px-6 py-3.5 text-black-600 hover:text-orange-500 hover:bg-orange-100 transition-all flex items-center " +
                      (activeLink === "pricing"
                        ? " text-orange-500 bg-orange-100 border-r-4 border-orange-500 font-medium"
                        : "")
                    }
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Pricing
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    activeClass="active"
                    to="testimoni"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("testimoni");
                    }}
                    onClick={closeMobileMenu}
                    className={
                      "px-6 py-3.5 text-black-600 hover:text-orange-500 hover:bg-orange-100 transition-all flex items-center " +
                      (activeLink === "testimoni"
                        ? " text-orange-500 bg-orange-100 border-r-4 border-orange-500 font-medium"
                        : "")
                    }
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Testimonial
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("services");
                    }}
                    onClick={closeMobileMenu}
                    className={
                      "px-6 py-3.5 text-black-600 hover:text-orange-500 hover:bg-orange-100 transition-all flex items-center " +
                      (activeLink === "services"
                        ? " text-orange-500 bg-orange-100 border-r-4 border-orange-500 font-medium"
                        : "")
                    }
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Services
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    activeClass="active"
                    to="locations"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("locations");
                    }}
                    onClick={closeMobileMenu}
                    className={
                      "px-6 py-3.5 text-black-600 hover:text-orange-500 hover:bg-orange-100 transition-all flex items-center " +
                      (activeLink === "locations"
                        ? " text-orange-500 bg-orange-100 border-r-4 border-orange-500 font-medium"
                        : "")
                    }
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Locations
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    activeClass="active"
                    to="how-it-works"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("how-it-works");
                    }}
                    onClick={closeMobileMenu}
                    className={
                      "px-6 py-3.5 text-black-600 hover:text-orange-500 hover:bg-orange-100 transition-all flex items-center " +
                      (activeLink === "how-it-works"
                        ? " text-orange-500 bg-orange-100 border-r-4 border-orange-500 font-medium"
                        : "")
                    }
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                    How It Works
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    activeClass="active"
                    to="faq"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("faq");
                    }}
                    onClick={closeMobileMenu}
                    className={
                      "px-6 py-3.5 text-black-600 hover:text-orange-500 hover:bg-orange-100 transition-all flex items-center " +
                      (activeLink === "faq"
                        ? " text-orange-500 bg-orange-100 border-r-4 border-orange-500 font-medium"
                        : "")
                    }
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    FAQ
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    activeClass="active"
                    to="blog"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("blog");
                    }}
                    onClick={closeMobileMenu}
                    className={
                      "px-6 py-3.5 text-black-600 hover:text-orange-500 hover:bg-orange-100 transition-all flex items-center " +
                      (activeLink === "blog"
                        ? " text-orange-500 bg-orange-100 border-r-4 border-orange-500 font-medium"
                        : "")
                    }
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                    Blog
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("contact");
                    }}
                    onClick={closeMobileMenu}
                    className={
                      "px-6 py-3.5 text-black-600 hover:text-orange-500 hover:bg-orange-100 transition-all flex items-center " +
                      (activeLink === "contact"
                        ? " text-orange-500 bg-orange-100 border-r-4 border-orange-500 font-medium"
                        : "")
                    }
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact
                  </LinkScroll>
                </li>
                <li>
                  <LinkScroll
                    activeClass="active"
                    to="download"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("download");
                    }}
                    onClick={closeMobileMenu}
                    className={
                      "px-6 py-3.5 text-black-600 hover:text-orange-500 hover:bg-orange-100 transition-all flex items-center " +
                      (activeLink === "download"
                        ? " text-orange-500 bg-orange-100 border-r-4 border-orange-500 font-medium"
                        : "")
                    }
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download
                  </LinkScroll>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
