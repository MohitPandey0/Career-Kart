"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import Link from "next/link";
const page = () => {
  const toggleColorScheme = () => {
    try {
      const d = document.documentElement;
      const c = d.classList;
      if (c.contains('light')) {
        c.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        c.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
      }
    } catch (error) {}
  };

  useEffect(() => {
    try {
      const d = document.documentElement;
      const c = d.classList;
      c.remove('light', 'dark');
      const e = localStorage.getItem('theme');
      if ('system' === e || (!e && false)) {
        const t = '(prefers-color-scheme: dark)';
        const m = window.matchMedia(t);
        if (m.media !== t || m.matches) {
          d.style.colorScheme = 'dark';
          c.add('dark');
        } else {
          d.style.colorScheme = 'light';
          c.add('light');
        }
      } else if (e) {
        c.add(e || '');
      } else {
        c.add('light');
      }
      if (e === 'light' || e === 'dark' || !e) d.style.colorScheme = e || 'light';
    } catch (error) {}
  }, []);


  return (
    <>
      <div id="__next">

        <main className="__className_6829d8 d-flex flex-column bg-body">
          <header className="header-nav ">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <button
                      className="navbar-toggler d-inline-flex d-lg-none"
                      type="button"
                      aria-label="Toggle navigation"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1={4} y1={6} x2={20} y2={6} />
                        <line x1={4} y1={12} x2={14} y2={12} />
                        <line x1={4} y1={18} x2={18} y2={18} />
                      </svg>
                    </button>
                    <a className="navbar-brand d-flex mb-0 me-0" href="/">
                      <img
                        alt="Hello"
                        srcSet="/image.png"
                        src="/image.png"
                        width={110}
                        height={43}
                        decoding="async"
                        data-nimg={1}
                        className="img-fluid"
                        style={{ color: "transparent" }}
                      />
                    </a>
                    <div className="d-block d-lg-none">
                     
                      <div className="color-scheme-toggler ms-2 d-inline-block">
                   
                        <svg
                          className="sun-icon"
                          height="24px"
                          width="24px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M256 105.5a152.4 152.4 0 0 0-152.2 152.2c0 83.9 68.3 152.2 152.2 152.2 83.9 0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0 263.5c-61.4 0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4 0 111.4 50 111.4 111.4 0 61.4-50 111.4-111.4 111.4zM256 74.8c11.3 0 20.4-9.1 20.4-20.4v-23a20.4 20.4 0 1 0-40.8 0v23c0 11.3 9.1 20.4 20.4 20.4zM256 437.2a20.4 20.4 0 0 0-20.4 20.4v22.9a20.4 20.4 0 1 0 40.8 0v-22.9c0-11.2-9.1-20.4-20.4-20.4zM480.6 235.6h-23a20.4 20.4 0 1 0 0 40.8h23a20.4 20.4 0 1 0 0-40.8zM54.4 235.6h-23a20.4 20.4 0 1 0 0 40.8h22.9c11.3 0 20.4-9.1 20.4-20.4a20.3 20.3 0 0 0-20.3-20.4zM400.4 82.8 384.1 99a20.4 20.4 0 1 0 28.9 28.9l16.2-16.2a20.4 20.4 0 0 0-28.8-28.9zM99 384.1l-16.2 16.2a20.4 20.4 0 1 0 28.9 28.9l16.2-16.2A20.4 20.4 0 1 0 99 384.1zM413 384.1a20.4 20.4 0 1 0-28.9 28.9l16.2 16.2a20.4 20.4 0 1 0 28.9-28.9L413 384.1zM99 127.9A20.4 20.4 0 1 0 127.9 99l-16.2-16.2a20.4 20.4 0 1 0-28.9 28.9L99 127.9z"
                            fill="currentColor"
                          />
                        </svg>
                        <svg
                          className="moon-icon"
                          height="24px"
                          width="24px"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          viewBox="0 0 172.2 172.2"
                          enableBackground="new 0 0 172.151 172.151"
                        >
                          <path d="M95 27.9a3.6 3.6 0 0 0-4.8 4.4 62.8 62.8 0 0 1-83.9 78.3 3.6 3.6 0 0 0-4.8 4.5 69.4 69.4 0 0 0 66 47c17.8-.1 34.6-6.7 47.7-18.9a69.4 69.4 0 0 0 22.1-48.6A69.4 69.4 0 0 0 95 27.9zm35.2 66.4a62.3 62.3 0 0 1-64.9 60.5 62.3 62.3 0 0 1-54-34.8 70 70 0 0 0 88-82 62.5 62.5 0 0 1 31 56.3zM47.4 31.4a3.6 3.6 0 0 0 5 0l5.1-5.1 5.2 5a3.6 3.6 0 0 0 5 0 3.6 3.6 0 0 0 0-5l-5.1-5 5-5a3.6 3.6 0 1 0-5-5l-5 4.9-5-5a3.6 3.6 0 1 0-5 5l5 5-5.2 5.1a3.6 3.6 0 0 0 0 5zM171.1 65.6l-5.1-5.1 5-5a3.6 3.6 0 1 0-5-5l-5 5-5-5a3.6 3.6 0 1 0-5 5l5 5-5.2 5a3.6 3.6 0 1 0 5 5.1l5.2-5.1 5 5.1a3.6 3.6 0 0 0 5.1 0 3.6 3.6 0 0 0 0-5z" />
                          <path d="m6 95.6 5.2-5.1 5.1 5a3.6 3.6 0 0 0 5 0 3.6 3.6 0 0 0 0-5l-5-5 5-5a3.6 3.6 0 1 0-5.1-5.1l-5 5-5-5a3.6 3.6 0 1 0-5 5l5 5L1 90.5a3.6 3.6 0 1 0 5 5z" />
                        </svg>
                      </div>
                    </div>

                    <div className="collapse navbar-collapse" id="navHeader">
                      <div className="w-100 d-block d-lg-none mb-4 ms-1 sticky-top bg-white animate">
                        <button
                          className="navbar-toggler opacity-50"
                          type="button"
                          aria-label="Toggle navigation"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="menu-close"
                            width={32}
                            height={32}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </button>
                      </div>
                      <ul className="navbar-nav ms-auto animate">
                        <li className="nav-item dropdown active ">
                          <Link
                            className="nav-link dropdown-toggle"
                            href="/"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Home
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item active" href="/">
                                Home
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item " href="/minimal">
                                Home Minimal
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item ">
                          <Link href="/featured" className="nav-link">
                            Featured
                          </Link>
                        </li>
                        <li className="nav-item ">
                          <Link href="/latest" className="nav-link">
                            Latest
                          </Link>
                        </li>
                        <li className="nav-item ">
                          <Link className="nav-link" href="/about">
                            About
                          </Link>
                        </li>
                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle"
                            href="/"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Pages
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item " href="/archive">
                                Archive
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item " href="/author">
                                Author
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item " href="/authorsingle">
                                Author Single
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item " href="/elements">
                                Elements
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item " href="/tags">
                                Tags
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item " href="/categories">
                                Categories
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item " href="/tagsingle">
                                Tag Single
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item " href="/catsingle">
                                Category Single
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item " href="/privacy">
                                Privacy
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item " href="/terms">
                                Terms of Service
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item ">
                          <a className="nav-link" href="/contact">
                            Contact
                          </a>
                        </li>
                      </ul>
                      <ul className="list-unstyled social-links d-flex flex-wrap d-lg-none align-items-center mt-auto w-100 animate">
                        <li
                          className="fw-medium flex-grow-1 flex-shrink-1 mb-1"
                          style={{ flexBasis: "100%", marginLeft: 12 }}
                        >
                          Social links:
                        </li>
                        <li>
                          <a
                            className="is-hoverable"
                            href="https://facebook.com/"
                            title="Facebook"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              height={16}
                              width={16}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            className="is-hoverable"
                            href="https://twitter.com/"
                            title="Twitter"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              height={16}
                              width={16}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            className="is-hoverable"
                            href="https://linkedin.com/"
                            title="Linkedin"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              height={16}
                              width={16}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            className="is-hoverable"
                            href="https://github.com/"
                            title="Github"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              height={16}
                              width={16}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                      <div className="navbar-right d-none d-lg-block">
                      

                        <div className="color-scheme-toggler ms-3 d-inline-block" onClick={toggleColorScheme}>                                              
                          <svg
                            className="sun-icon"
                            height="24px"
                            width="24px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              d="M256 105.5a152.4 152.4 0 0 0-152.2 152.2c0 83.9 68.3 152.2 152.2 152.2 83.9 0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0 263.5c-61.4 0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4 0 111.4 50 111.4 111.4 0 61.4-50 111.4-111.4 111.4zM256 74.8c11.3 0 20.4-9.1 20.4-20.4v-23a20.4 20.4 0 1 0-40.8 0v23c0 11.3 9.1 20.4 20.4 20.4zM256 437.2a20.4 20.4 0 0 0-20.4 20.4v22.9a20.4 20.4 0 1 0 40.8 0v-22.9c0-11.2-9.1-20.4-20.4-20.4zM480.6 235.6h-23a20.4 20.4 0 1 0 0 40.8h23a20.4 20.4 0 1 0 0-40.8zM54.4 235.6h-23a20.4 20.4 0 1 0 0 40.8h22.9c11.3 0 20.4-9.1 20.4-20.4a20.3 20.3 0 0 0-20.3-20.4zM400.4 82.8 384.1 99a20.4 20.4 0 1 0 28.9 28.9l16.2-16.2a20.4 20.4 0 0 0-28.8-28.9zM99 384.1l-16.2 16.2a20.4 20.4 0 1 0 28.9 28.9l16.2-16.2A20.4 20.4 0 1 0 99 384.1zM413 384.1a20.4 20.4 0 1 0-28.9 28.9l16.2 16.2a20.4 20.4 0 1 0 28.9-28.9L413 384.1zM99 127.9A20.4 20.4 0 1 0 127.9 99l-16.2-16.2a20.4 20.4 0 1 0-28.9 28.9L99 127.9z"
                              fill="currentColor"
                            />
                          </svg>
                          <svg
                            className="moon-icon"
                            height="24px"
                            width="24px"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x={0}
                            y={0}
                            viewBox="0 0 172.2 172.2"
                            enableBackground="new 0 0 172.151 172.151"
                          >
                            <path d="M95 27.9a3.6 3.6 0 0 0-4.8 4.4 62.8 62.8 0 0 1-83.9 78.3 3.6 3.6 0 0 0-4.8 4.5 69.4 69.4 0 0 0 66 47c17.8-.1 34.6-6.7 47.7-18.9a69.4 69.4 0 0 0 22.1-48.6A69.4 69.4 0 0 0 95 27.9zm35.2 66.4a62.3 62.3 0 0 1-64.9 60.5 62.3 62.3 0 0 1-54-34.8 70 70 0 0 0 88-82 62.5 62.5 0 0 1 31 56.3zM47.4 31.4a3.6 3.6 0 0 0 5 0l5.1-5.1 5.2 5a3.6 3.6 0 0 0 5 0 3.6 3.6 0 0 0 0-5l-5.1-5 5-5a3.6 3.6 0 1 0-5-5l-5 4.9-5-5a3.6 3.6 0 1 0-5 5l5 5-5.2 5.1a3.6 3.6 0 0 0 0 5zM171.1 65.6l-5.1-5.1 5-5a3.6 3.6 0 1 0-5-5l-5 5-5-5a3.6 3.6 0 1 0-5 5l5 5-5.2 5a3.6 3.6 0 1 0 5 5.1l5.2-5.1 5 5.1a3.6 3.6 0 0 0 5.1 0 3.6 3.6 0 0 0 0-5z" />
                            <path d="m6 95.6 5.2-5.1 5.1 5a3.6 3.6 0 0 0 5 0 3.6 3.6 0 0 0 0-5l-5-5 5-5a3.6 3.6 0 1 0-5.1-5.1l-5 5-5-5a3.6 3.6 0 1 0-5 5l5 5L1 90.5a3.6 3.6 0 1 0 5 5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="menu-overlay " />
            <div className="search-overlay " />
            <div className="search-block overflow-auto bg-body is-hidden">
              <div data-toggle="search-close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={29}
                  height={29}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Type to search blog.."
                aria-label="search-query"
                defaultValue=""
              />
              <div className="mt-4 pt-2 is-hidden popular-topics">
                <div className="section-title mb-3 pb-1">
                  <p className="title h4 mb-0">Popular topics</p>
                </div>
                <ul className="taxonomy-lists list-unstyled d-flex flex-wrap gap-2">
                  <li className="d-inline-block">
                    <a
                      className="border-0 pe-0 d-inline-flex align-items-center"
                      href="/tags"
                    >
                      All Topice
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-2 is-hidden recent-posts">
                <div className="post-meta">
                  <div className="section-title mb-3 pb-1">
                    <p className="title h4 mb-0">Recent posts</p>
                  </div>
                  <div className="row gy-4" />
                </div>
              </div>
            </div>
          </header> 

{/* <ColorSchemesExample/> */}
          

          
          <section className="mb-auto">
            <section className="banner bg-white overflow-hidden">
              <div className="container">
                <div className="row">
                  <div className="col-12 position-relative text-center">
                    <h1 className="title display-4 d-inline mb-0">
                      <svg
                        className="shape text-primary"
                        width={46}
                        height={50}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 46A91.9 91.9 0 0 0 2 43.8c-1-.1-1.8.5-1.9 1.5-.1.9.6 1.7 1.4 1.8a87 87 0 0 1 12.7 2.3c.9.3 1.8-.2 2.1-1.1.3-1-.3-1.9-1.1-2.1ZM28.1 29c-7-7-14.7-13.2-21.5-20.5-.6-.7-1.7-.7-2.3 0-.7.6-.8 1.6-.1 2.3C11 18 18.8 24.2 25.7 31.3c.7.7 1.7.7 2.4 0 .6-.6.7-1.7 0-2.3ZM41 1.8l.7 12.1c0 1 .8 1.7 1.7 1.6 1 0 1.6-.8 1.6-1.7l-.6-12.2c0-1-.8-1.6-1.8-1.6-.8 0-1.6.9-1.5 1.8Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>
                        Latest News <br /> Updates and Tips
                      </span>
                    </h1>
                    <p className="lead mt-4 mb-0">
                      Welcome to the blog, writen by professionals; It's connect
                      people.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="featured-posts section">
              <div className="container">
                <div className="row align-items-center section-title">
                  <div className="col-sm-7">
                    <h2 className="h3 mb-0 title">Featured Posts</h2>
                  </div>
                  <div className="col-sm-5 text-end d-none d-sm-block">
                    <a href="/featured" className="text-link lead active">
                      <span>Featured Posts</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={21}
                        width={21}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1={17} y1={7} x2={7} y2={17} />
                        <polyline points="8 7 17 7 17 16" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="row gy-5 gx-md-5">
                  <div className="col-lg-4 col-md-6 order-0">
                    <article className="bg-white d-flex flex-column h-100">
                      <div className="post-image">
                        <a
                          className="d-block"
                          title="The nine-to-five Is Dead. Here’s What to Replace It With"
                          href="#"
                        >
                          <img
                            alt="The nine-to-five Is Dead. Here’s What to Replace It With"
                            srcSet="https://source.unsplash.com/random/384x248/?job"
                            src="https://source.unsplash.com/random/384x248/?job"
                            width={368}
                            height={238}
                            decoding="async"
                            data-nimg={1}
                            className="transition bg-light d-inline-block w-100 h-auto blur"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </a>
                      </div>
                      <div className="p-4 pb-0 ">
                        <ul className="post-meta list-inline mb-3 ">
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={5} width={16} height={16} rx={2} />
                              <line x1={16} y1={3} x2={16} y2={7} />
                              <line x1={8} y1={3} x2={8} y2={7} />
                              <line x1={4} y1={11} x2={20} y2={11} />
                              <rect x={8} y={15} width={2} height={2} />
                            </svg>
                            Jun 28, 2022
                          </li>
                          <li className="list-inline-item">•</li>
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={4} width={16} height={16} rx={1} />
                              <path d="M12 7v5l3 3" />
                              <path d="M4 12h1" />
                              <path d="M19 12h1" />
                              <path d="M12 19v1" />
                            </svg>
                            02
                            {/* */}min read
                          </li>
                        </ul>
                        <div className="position-relative">
                          <h3 className="h4 post-title mb-2 line-clamp clamp-2">
                            <a
                              className="text-link stretched-link"
                              title="The nine-to-five Is Dead. Here’s What to Replace It With"
                              href="#"
                            >
                              The nine-to-five Is Dead. Here’s What to Replace
                              It With
                            </a>
                          </h3>
                          <p className="mb-0 line-clamp clamp-3">
                            Without even reducing the 40-hour work week. Time is
                            money, right?
                          </p>
                        </div>
                      </div>
                      <div className="post-author d-flex mt-auto p-4">
                        <div className="flex-shrink-0">
                          <a
                            className="is-hoverable"
                            title="Read all posts by - Alexander Hipp"
                            href="#"
                          >
                            <span className="d-inline-block rounded-circle">
                              <img
                                alt="Alexander Hipp"
                                srcSet="https://source.unsplash.com/random/800x800/?women"
                                src="https://source.unsplash.com/random/800x800/?women"
                                width={42}
                                height={42}
                                decoding="async"
                                data-nimg={1}
                                className="transition bg-light d-inline-block w-auto"
                                loading="lazy"
                                style={{ color: "transparent" }}
                              />
                            </span>
                          </a>
                        </div>

                        <div className="flex-grow-1 ms-3">
                          <p className="mb-0 lh-base small">Written by</p>
                          <a
                            className="text-link"
                            title="Read all posts by - Alexander Hipp"
                            href="#"
                          >
                            Alexander Hipp
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-4 col-md-12 order-2 order-lg-1">
                    <div className="row gx-0 gx-md-5 gx-lg-0 gy-5">
                      <div className="col-lg-12 col-md-6">
                        <article className="bg-white d-flex flex-column h-100">
                          <div className="p-4 pb-0 ">
                            <ul className="post-meta list-inline mb-3 ">
                              <li className="list-inline-item">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="me-1 align-bottom"
                                  width={18}
                                  height={18}
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <rect
                                    x={4}
                                    y={5}
                                    width={16}
                                    height={16}
                                    rx={2}
                                  />
                                  <line x1={16} y1={3} x2={16} y2={7} />
                                  <line x1={8} y1={3} x2={8} y2={7} />
                                  <line x1={4} y1={11} x2={20} y2={11} />
                                  <rect x={8} y={15} width={2} height={2} />
                                </svg>
                                Jun 21, 2022
                              </li>
                              <li className="list-inline-item">•</li>
                              <li className="list-inline-item">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="me-1 align-bottom"
                                  width={18}
                                  height={18}
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <rect
                                    x={4}
                                    y={4}
                                    width={16}
                                    height={16}
                                    rx={1}
                                  />
                                  <path d="M12 7v5l3 3" />
                                  <path d="M4 12h1" />
                                  <path d="M19 12h1" />
                                  <path d="M12 19v1" />
                                </svg>
                                02
                                {/* */}min read
                              </li>
                            </ul>
                            <div className="position-relative">
                              <h3 className="h4 post-title mb-2 line-clamp clamp-2">
                                <a
                                  className="text-link stretched-link"
                                  title="Why the security engineers loves working in fosec"
                                  href="#"
                                >
                                  Why the security engineers loves working in
                                  fosec
                                </a>
                              </h3>
                              <p className="mb-0 line-clamp clamp-2">
                                Working in cybersecurity means you’re constantly
                                playing a game of catch-up. Every day you learn
                                something new, but your work is also never
                                finished.
                              </p>
                            </div>
                          </div>
                          <div className="post-author mt-auto p-4 pt-3">
                            <a
                              className="is-hoverable"
                              title="Read all posts by - Anil Vugels"
                              href="#"
                            >
                              <span className="d-inline-block">
                                <img
                                  alt="Anil Vugels"
                                  srcSet="https://source.unsplash.com/random/800x800/?girl"
                                  src="https://source.unsplash.com/random/800x800/?girl"
                                  width={26}
                                  height={26}
                                  decoding="async"
                                  data-nimg={1}
                                  className="transition bg-light d-inline-block w-auto"
                                  loading="lazy"
                                  style={{ color: "transparent" }}
                                />
                              </span>
                            </a>
                            <span className="ms-3 me-2">by</span>
                            <a
                              className="text-link"
                              title="Read all posts by - Anil Vugels"
                              href="#"
                            >
                              Anil Vugels
                            </a>
                          </div>
                        </article>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <article className="bg-white d-flex flex-column h-100">
                          <div className="p-4 pb-0 ">
                            <ul className="post-meta list-inline mb-3 ">
                              <li className="list-inline-item">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="me-1 align-bottom"
                                  width={18}
                                  height={18}
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <rect
                                    x={4}
                                    y={5}
                                    width={16}
                                    height={16}
                                    rx={2}
                                  />
                                  <line x1={16} y1={3} x2={16} y2={7} />
                                  <line x1={8} y1={3} x2={8} y2={7} />
                                  <line x1={4} y1={11} x2={20} y2={11} />
                                  <rect x={8} y={15} width={2} height={2} />
                                </svg>
                                Apr 9, 2022
                              </li>
                              <li className="list-inline-item">•</li>
                              <li className="list-inline-item">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="me-1 align-bottom"
                                  width={18}
                                  height={18}
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <rect
                                    x={4}
                                    y={4}
                                    width={16}
                                    height={16}
                                    rx={1}
                                  />
                                  <path d="M12 7v5l3 3" />
                                  <path d="M4 12h1" />
                                  <path d="M19 12h1" />
                                  <path d="M12 19v1" />
                                </svg>
                                02
                                {/* */}min read
                              </li>
                            </ul>
                            <div className="position-relative">
                              <h3 className="h4 post-title mb-2 line-clamp clamp-2">
                                <a
                                  className="text-link stretched-link"
                                  title="There Are Zero Bridges Across The Amazon. Here Is Why"
                                  href="#"
                                >
                                  There Are Zero Bridges Across The Amazon. Here
                                  Is Why
                                </a>
                              </h3>
                              <p className="mb-0 line-clamp clamp-2">
                                Here is a fun fact to stick in the back of your
                                mind for trivia night or to use as an
                                interesting ice breaker: the Amazon River has no
                                bridges....
                              </p>
                            </div>
                          </div>
                          <div className="post-author mt-auto p-4 pt-3">
                            <a
                              className="is-hoverable"
                              title="Read all posts by - Alexander Hipp"
                              href="#"
                            >
                              <span className="d-inline-block">
                                <img
                                  alt="Alexander Hipp"
                                  srcSet="https://source.unsplash.com/random/800x800/?boy"
                                  src="https://source.unsplash.com/random/800x800/?boy"
                                  width={26}
                                  height={26}
                                  decoding="async"
                                  data-nimg={1}
                                  className="transition bg-light d-inline-block w-auto"
                                  loading="lazy"
                                  style={{ color: "transparent" }}
                                />
                              </span>
                            </a>

                            <span className="ms-3 me-2">by</span>
                            <a
                              className="text-link"
                              title="Read all posts by - Alexander Hipp"
                              href="#"
                            >
                              Alexander Hipp
                            </a>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 order-1 order-lg-2">
                    <article className="bg-white d-flex flex-column h-100">
                      <div className="post-image">
                        <a
                          className="d-block"
                          title="The Power of Visualization in the 21st century"
                          href="/blog/the-power-of-visualization-in-the-21st-century"
                        >
                          <img
                            alt="The Power of Visualization in the 21st century"
                            srcSet="https://source.unsplash.com/random/384x248/?job"
                            src="https://source.unsplash.com/random/384x248/?job"
                            width={368}
                            height={238}
                            decoding="async"
                            data-nimg={1}
                            className="transition bg-light d-inline-block w-100 h-auto blur"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </a>
                      </div>
                      <div className="p-4 pb-0 ">
                        <ul className="post-meta list-inline mb-3 ">
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={5} width={16} height={16} rx={2} />
                              <line x1={16} y1={3} x2={16} y2={7} />
                              <line x1={8} y1={3} x2={8} y2={7} />
                              <line x1={4} y1={11} x2={20} y2={11} />
                              <rect x={8} y={15} width={2} height={2} />
                            </svg>
                            Dec 5, 2020
                          </li>
                          <li className="list-inline-item">•</li>
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={4} width={16} height={16} rx={1} />
                              <path d="M12 7v5l3 3" />
                              <path d="M4 12h1" />
                              <path d="M19 12h1" />
                              <path d="M12 19v1" />
                            </svg>
                            01
                            {/* */}min read
                          </li>
                        </ul>
                        <div className="position-relative">
                          <h3 className="h4 post-title mb-2 line-clamp clamp-2">
                            <a
                              className="text-link stretched-link"
                              title="The Power of Visualization in the 21st century"
                              href="/blog/the-power-of-visualization-in-the-21st-century"
                            >
                              The Power of Visualization in the 21st century
                            </a>
                          </h3>
                          <p className="mb-0 line-clamp clamp-3">
                            While futurists and fundraisers used to make bullish
                            predictions about artificial general intelligence,
                            they’ve become quieter lately. Peter Thiel...
                          </p>
                        </div>
                      </div>
                      <div className="post-author d-flex mt-auto p-4">
                        <div className="flex-shrink-0">
                          <a
                            className="is-hoverable"
                            title="Read all posts by - Ann Monika"
                            href="#_next\data\teTP8JYjegWY5kx87__gL\en\author\ann-monika.json"
                          >
                            <span className="d-inline-block rounded-circle">
                              <img
                                alt="Ann Monika"
                                srcSet="https://source.unsplash.com/random/800x800/?man"
                                src="https://source.unsplash.com/random/800x800/?man"
                                width={42}
                                height={42}
                                decoding="async"
                                data-nimg={1}
                                className="transition bg-light d-inline-block w-auto"
                                loading="lazy"
                                style={{ color: "transparent" }}
                              />
                            </span>
                          </a>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <p className="mb-0 lh-base small">Written by</p>
                          <a
                            className="text-link"
                            title="Read all posts by - Ann Monika"
                            href="#_next\data\teTP8JYjegWY5kx87__gL\en\author\ann-monika.json"
                          >
                            Ann Monika
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="d-block d-sm-none mt-5 pt-3">
                  <div className="text-center">
                    <a className="text-link lead active" href="/featured">
                      <span>Featured Posts</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={21}
                        width={21}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1={17} y1={7} x2={7} y2={17} />
                        <polyline points="8 7 17 7 17 16" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="section bg-white">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    <div className="section-title text-center">
                      <h2 className="h3 mb-2 title">Browse by Category</h2>
                      <p className="mb-0">
                        Select a category to see more related content
                      </p>
                    </div>
                    <div className="row row g-3 taxonomy-lists">
                      <div className="col-md-4 col-6">
                        <a
                          className="bg-body text-dark px-3 py-2 d-flex lead"
                          href="/catsingle"
                        >
                          <div className="flex-grow-1">
                            <span className="text-black">
                              Tech{/* */}{" "}
                              <small>
                                ({/* */}3{/* */})
                              </small>
                            </span>
                          </div>
                          <div className="flex-shrink-0 ms-2 icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="opacity-25 small"
                              height={20}
                              width={20}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {" "}
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />{" "}
                              <line x1={5} y1={12} x2={19} y2={12} />{" "}
                              <line x1={13} y1={18} x2={19} y2={12} />{" "}
                              <line x1={13} y1={6} x2={19} y2={12} />
                            </svg>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-6">
                        <a
                          className="bg-body text-dark px-3 py-2 d-flex lead"
                          href="/categories/health"
                        >
                          <div className="flex-grow-1">
                            <span className="text-black">
                              Health{/* */}{" "}
                              <small>
                                ({/* */}2{/* */})
                              </small>
                            </span>
                          </div>
                          <div className="flex-shrink-0 ms-2 icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="opacity-25 small"
                              height={20}
                              width={20}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {" "}
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />{" "}
                              <line x1={5} y1={12} x2={19} y2={12} />{" "}
                              <line x1={13} y1={18} x2={19} y2={12} />{" "}
                              <line x1={13} y1={6} x2={19} y2={12} />
                            </svg>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-6">
                        <a
                          className="bg-body text-dark px-3 py-2 d-flex lead"
                          href="/categories/culture"
                        >
                          <div className="flex-grow-1">
                            <span className="text-black">
                              Culture{/* */}{" "}
                              <small>
                                ({/* */}1{/* */})
                              </small>
                            </span>
                          </div>
                          <div className="flex-shrink-0 ms-2 icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="opacity-25 small"
                              height={20}
                              width={20}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {" "}
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />{" "}
                              <line x1={5} y1={12} x2={19} y2={12} />{" "}
                              <line x1={13} y1={18} x2={19} y2={12} />{" "}
                              <line x1={13} y1={6} x2={19} y2={12} />
                            </svg>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-6">
                        <a
                          className="bg-body text-dark px-3 py-2 d-flex lead"
                          href="/categories/geography"
                        >
                          <div className="flex-grow-1">
                            <span className="text-black">
                              Geography{/* */}{" "}
                              <small>
                                ({/* */}1{/* */})
                              </small>
                            </span>
                          </div>
                          <div className="flex-shrink-0 ms-2 icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="opacity-25 small"
                              height={20}
                              width={20}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {" "}
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />{" "}
                              <line x1={5} y1={12} x2={19} y2={12} />{" "}
                              <line x1={13} y1={18} x2={19} y2={12} />{" "}
                              <line x1={13} y1={6} x2={19} y2={12} />
                            </svg>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-6">
                        <a
                          className="bg-body text-dark px-3 py-2 d-flex lead"
                          href="/categories/artwork"
                        >
                          <div className="flex-grow-1">
                            <span className="text-black">
                              Artwork{/* */}{" "}
                              <small>
                                ({/* */}1{/* */})
                              </small>
                            </span>
                          </div>
                          <div className="flex-shrink-0 ms-2 icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="opacity-25 small"
                              height={20}
                              width={20}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {" "}
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />{" "}
                              <line x1={5} y1={12} x2={19} y2={12} />{" "}
                              <line x1={13} y1={18} x2={19} y2={12} />{" "}
                              <line x1={13} y1={6} x2={19} y2={12} />
                            </svg>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4 col-6">
                        <a
                          className="bg-body text-dark px-3 py-2 d-flex lead"
                          href="/categories/business"
                        >
                          <div className="flex-grow-1">
                            <span className="text-black">
                              Business{/* */}{" "}
                              <small>
                                ({/* */}1{/* */})
                              </small>
                            </span>
                          </div>
                          <div className="flex-shrink-0 ms-2 icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="opacity-25 small"
                              height={20}
                              width={20}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {" "}
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />{" "}
                              <line x1={5} y1={12} x2={19} y2={12} />{" "}
                              <line x1={13} y1={18} x2={19} y2={12} />{" "}
                              <line x1={13} y1={6} x2={19} y2={12} />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="text-center mt-5">
                      <a className="text-link lead active" href="/categories">
                        <span>All Categories</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={21}
                          width={21}
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={17} y1={7} x2={7} y2={17} />
                          <polyline points="8 7 17 7 17 16" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <div className="row align-items-center section-title">
                  <div className="col-sm-7">
                    <h2 className="h3 mb-0 title">Recent Posts</h2>
                  </div>
                  <div className="col-sm-5 text-end d-none d-sm-block">
                    <a className="text-link lead active" href="/blog">
                      <span>All Posts</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={21}
                        width={21}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1={17} y1={7} x2={7} y2={17} />
                        <polyline points="8 7 17 7 17 16" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="row gy-5 gx-md-5">
                  <div className="col-lg-4 col-md-6">
                    <article className="bg-white d-flex flex-column h-100">
                      <div className="post-image">
                        <a
                          className="d-block"
                          title="What Do You Do When You Know You’re Not Fine?"
                          href="/blog/what-do-you-do-when-you-know-youre-not-fine"
                        >
                          <img
                            alt="What Do You Do When You Know You’re Not Fine?"
                            srcSet="https://source.unsplash.com/random/384x248/?cars"
                            src="https://source.unsplash.com/random/384x248/?cars"
                            width={368}
                            height={238}
                            decoding="async"
                            data-nimg={1}
                            className="transition bg-light d-inline-block w-100 h-auto blur"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </a>
                      </div>
                      <div className="p-4 pb-0 ">
                        <ul className="post-meta list-inline mb-3 ">
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={5} width={16} height={16} rx={2} />
                              <line x1={16} y1={3} x2={16} y2={7} />
                              <line x1={8} y1={3} x2={8} y2={7} />
                              <line x1={4} y1={11} x2={20} y2={11} />
                              <rect x={8} y={15} width={2} height={2} />
                            </svg>
                            Jul 2, 2022
                          </li>
                          <li className="list-inline-item">•</li>
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={4} width={16} height={16} rx={1} />
                              <path d="M12 7v5l3 3" />
                              <path d="M4 12h1" />
                              <path d="M19 12h1" />
                              <path d="M12 19v1" />
                            </svg>
                            02
                            {/* */}min read
                          </li>
                        </ul>
                        <div className="position-relative">
                          <h3 className="h4 post-title mb-2 line-clamp clamp-2">
                            <a
                              className="text-link stretched-link"
                              title="What Do You Do When You Know You’re Not Fine?"
                              href="/blog/what-do-you-do-when-you-know-youre-not-fine"
                            >
                              What Do You Do When You Know You’re Not Fine?
                            </a>
                          </h3>
                          <p className="mb-0 line-clamp clamp-3">
                            Something was wrong with me. But what? Most of the
                            physicians I’ve seen in my life made me feel like
                            they didn’t care about me or my problems.
                          </p>
                        </div>
                      </div>
                      <div className="post-author d-flex mt-auto p-4">
                        <div className="flex-shrink-0">
                          <a
                            className="is-hoverable"
                            title="Read all posts by - Robert Britt"
                            href="/author/robert-britt"
                          >
                            <span className="d-inline-block rounded-circle">
                              <img
                                alt="Robert Britt"
                                srcSet="https://source.unsplash.com/random/800x800/?man"
                                src="https://source.unsplash.com/random/800x800/?man"
                                width={42}
                                height={42}
                                decoding="async"
                                data-nimg={1}
                                className="transition bg-light d-inline-block w-auto "
                                loading="lazy"
                                style={{ color: "transparent" }}
                              />
                            </span>
                          </a>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <p className="mb-0 lh-base small">Written by</p>
                          <a
                            className="text-link"
                            title="Read all posts by - Robert Britt"
                            href="/author/robert-britt"
                          >
                            Robert Britt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <article className="bg-white d-flex flex-column h-100">
                      <div className="post-image">
                        <a
                          className="d-block"
                          title="The nine-to-five Is Dead. Here’s What to Replace It With"
                          href="#_next\data\teTP8JYjegWY5kx87__gL\en\blog\the-nine-to-five-is-dead-heres-what-to-replace-it-with.json"
                        >
                          <img
                            alt="The nine-to-five Is Dead. Here’s What to Replace It With"
                            srcSet="https://source.unsplash.com/random/384x248/?job"
                            src="https://source.unsplash.com/random/384x248/?job"
                            width={368}
                            height={238}
                            decoding="async"
                            data-nimg={1}
                            className="transition bg-light d-inline-block w-100 h-auto blur"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </a>
                      </div>
                      <div className="p-4 pb-0 ">
                        <ul className="post-meta list-inline mb-3 ">
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={5} width={16} height={16} rx={2} />
                              <line x1={16} y1={3} x2={16} y2={7} />
                              <line x1={8} y1={3} x2={8} y2={7} />
                              <line x1={4} y1={11} x2={20} y2={11} />
                              <rect x={8} y={15} width={2} height={2} />
                            </svg>
                            Jun 28, 2022
                          </li>
                          <li className="list-inline-item">•</li>
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={4} width={16} height={16} rx={1} />
                              <path d="M12 7v5l3 3" />
                              <path d="M4 12h1" />
                              <path d="M19 12h1" />
                              <path d="M12 19v1" />
                            </svg>
                            02
                            {/* */}min read
                          </li>
                        </ul>
                        <div className="position-relative">
                          <h3 className="h4 post-title mb-2 line-clamp clamp-2">
                            <a
                              className="text-link stretched-link"
                              title="The nine-to-five Is Dead. Here’s What to Replace It With"
                              href="#_next\data\teTP8JYjegWY5kx87__gL\en\blog\the-nine-to-five-is-dead-heres-what-to-replace-it-with.json"
                            >
                              The nine-to-five Is Dead. Here’s What to Replace
                              It With
                            </a>
                          </h3>
                          <p className="mb-0 line-clamp clamp-3">
                            Without even reducing the 40-hour work week. Time is
                            money, right?
                          </p>
                        </div>
                      </div>
                      <div className="post-author d-flex mt-auto p-4">
                        <div className="flex-shrink-0">
                          <a
                            className="is-hoverable"
                            title="Read all posts by - Alexander Hipp"
                            href="#_next\data\teTP8JYjegWY5kx87__gL\en\author\alexander-hipp.json"
                          >
                            <span className="d-inline-block rounded-circle">
                              <img
                                alt="Alexander Hipp"
                                srcSet="https://source.unsplash.com/random/800x800/?man"
                                src="https://source.unsplash.com/random/800x800/?man"
                                width={42}
                                height={42}
                                decoding="async"
                                data-nimg={1}
                                className="transition bg-light d-inline-block w-auto"
                                loading="lazy"
                                style={{ color: "transparent" }}
                              />
                            </span>
                          </a>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <p className="mb-0 lh-base small">Written by</p>
                          <a
                            className="text-link"
                            title="Read all posts by - Alexander Hipp"
                            href="#_next\data\teTP8JYjegWY5kx87__gL\en\author\alexander-hipp.json"
                          >
                            Alexander Hipp
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <article className="bg-white d-flex flex-column h-100">
                      <div className="post-image">
                        <a
                          className="d-block"
                          title="Why the security engineers loves working in fosec"
                          href="#_next\data\teTP8JYjegWY5kx87__gL\en\blog\why-the-security-engineers-loves-working-in-fosec.json"
                        >
                          <img
                            alt="Why the security engineers loves working in fosec"
                            srcSet="https://source.unsplash.com/random/384x248/?security"
                            src="https://source.unsplash.com/random/384x248/?security"
                            width={368}
                            height={238}
                            decoding="async"
                            data-nimg={1}
                            className="transition bg-light d-inline-block w-100 h-auto blur"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </a>
                      </div>
                      <div className="p-4 pb-0 ">
                        <ul className="post-meta list-inline mb-3 ">
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={5} width={16} height={16} rx={2} />
                              <line x1={16} y1={3} x2={16} y2={7} />
                              <line x1={8} y1={3} x2={8} y2={7} />
                              <line x1={4} y1={11} x2={20} y2={11} />
                              <rect x={8} y={15} width={2} height={2} />
                            </svg>
                            Jun 21, 2022
                          </li>
                          <li className="list-inline-item">•</li>
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={4} width={16} height={16} rx={1} />
                              <path d="M12 7v5l3 3" />
                              <path d="M4 12h1" />
                              <path d="M19 12h1" />
                              <path d="M12 19v1" />
                            </svg>
                            02
                            {/* */}min read
                          </li>
                        </ul>
                        <div className="position-relative">
                          <h3 className="h4 post-title mb-2 line-clamp clamp-2">
                            <a
                              className="text-link stretched-link"
                              title="Why the security engineers loves working in fosec"
                              href="#_next\data\teTP8JYjegWY5kx87__gL\en\blog\why-the-security-engineers-loves-working-in-fosec.json"
                            >
                              Why the security engineers loves working in fosec
                            </a>
                          </h3>
                          <p className="mb-0 line-clamp clamp-3">
                            Working in cybersecurity means you’re constantly
                            playing a game of catch-up. Every day you learn
                            something new, but your work is also never finished.
                          </p>
                        </div>
                      </div>
                      <div className="post-author d-flex mt-auto p-4">
                        <div className="flex-shrink-0">
                          <a
                            className="is-hoverable"
                            title="Read all posts by - Anil Vugels"
                            href="#"
                          >
                            <span className="d-inline-block rounded-circle">
                              <img
                                alt="Anil Vugels"
                                srcSet="https://source.unsplash.com/random/800x800/?man"
                                src="https://source.unsplash.com/random/800x800/?man"
                                width={42}
                                height={42}
                                decoding="async"
                                data-nimg={1}
                                className="transition bg-light d-inline-block w-auto "
                                loading="lazy"
                                style={{ color: "transparent" }}
                              />
                            </span>
                          </a>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <p className="mb-0 lh-base small">Written by</p>
                          <a
                            className="text-link"
                            title="Read all posts by - Anil Vugels"
                            href="#"
                          >
                            Anil Vugels
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <article className="bg-white d-flex flex-column h-100">
                      <div className="post-image">
                        <a
                          className="d-block"
                          title="There Are Zero Bridges Across The Amazon. Here Is Why"
                          href="#_next\data\teTP8JYjegWY5kx87__gL\en\blog\there-are-zero-bridges-across-the-amazon-here-is-why.json"
                        >
                          <img
                            alt="There Are Zero Bridges Across The Amazon. Here Is Why"
                            srcSet="https://source.unsplash.com/random/384x248/?amazon"
                            src="https://source.unsplash.com/random/384x248/?amazon"
                            width={368}
                            height={238}
                            decoding="async"
                            data-nimg={1}
                            className="transition bg-light d-inline-block w-100 h-auto blur"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </a>
                      </div>
                      <div className="p-4 pb-0 ">
                        <ul className="post-meta list-inline mb-3 ">
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={5} width={16} height={16} rx={2} />
                              <line x1={16} y1={3} x2={16} y2={7} />
                              <line x1={8} y1={3} x2={8} y2={7} />
                              <line x1={4} y1={11} x2={20} y2={11} />
                              <rect x={8} y={15} width={2} height={2} />
                            </svg>
                            Apr 9, 2022
                          </li>
                          <li className="list-inline-item">•</li>
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={4} width={16} height={16} rx={1} />
                              <path d="M12 7v5l3 3" />
                              <path d="M4 12h1" />
                              <path d="M19 12h1" />
                              <path d="M12 19v1" />
                            </svg>
                            02
                            {/* */}min read
                          </li>
                        </ul>
                        <div className="position-relative">
                          <h3 className="h4 post-title mb-2 line-clamp clamp-2">
                            <a
                              className="text-link stretched-link"
                              title="There Are Zero Bridges Across The Amazon. Here Is Why"
                              href="#_next\data\teTP8JYjegWY5kx87__gL\en\blog\there-are-zero-bridges-across-the-amazon-here-is-why.json"
                            >
                              There Are Zero Bridges Across The Amazon. Here Is
                              Why
                            </a>
                          </h3>
                          <p className="mb-0 line-clamp clamp-3">
                            Here is a fun fact to stick in the back of your mind
                            for trivia night or to use as an interesting ice
                            breaker: the Amazon River has no bridges....
                          </p>
                        </div>
                      </div>
                      <div className="post-author d-flex mt-auto p-4">
                        <div className="flex-shrink-0">
                          <a
                            className="is-hoverable"
                            title="Read all posts by - Alexander Hipp"
                            href="#_next\data\teTP8JYjegWY5kx87__gL\en\author\alexander-hipp.json"
                          >
                            <span className="d-inline-block rounded-circle">
                              <img
                                alt="Alexander Hipp"
                                srcSet="https://source.unsplash.com/random/800x800/?man"
                                src="https://source.unsplash.com/random/800x800/?man"
                                width={42}
                                height={42}
                                decoding="async"
                                data-nimg={1}
                                className="transition bg-light d-inline-block w-auto "
                                loading="lazy"
                                style={{ color: "transparent" }}
                              />
                            </span>
                          </a>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <p className="mb-0 lh-base small">Written by</p>
                          <a
                            className="text-link"
                            title="Read all posts by - Alexander Hipp"
                            href="#_next\data\teTP8JYjegWY5kx87__gL\en\author\alexander-hipp.json"
                          >
                            Alexander Hipp
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <article className="bg-white d-flex flex-column h-100">
                      <div className="post-image">
                        <a
                          className="d-block"
                          title="Msoft's smart fabric that can detect objects and gestures"
                          href="/blog/msofts-smart-fabric-that-can-detect-objects-and-gestures"
                        >
                          <img
                            alt="Msoft's smart fabric that can detect objects and gestures"
                            srcSet="https://source.unsplash.com/random/384x248/?fabric"
                            src="https://source.unsplash.com/random/384x248/?fabric"
                            width={368}
                            height={238}
                            decoding="async"
                            data-nimg={1}
                            className="transition bg-light d-inline-block w-100 h-auto blur"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </a>
                      </div>
                      <div className="p-4 pb-0 ">
                        <ul className="post-meta list-inline mb-3 ">
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={5} width={16} height={16} rx={2} />
                              <line x1={16} y1={3} x2={16} y2={7} />
                              <line x1={8} y1={3} x2={8} y2={7} />
                              <line x1={4} y1={11} x2={20} y2={11} />
                              <rect x={8} y={15} width={2} height={2} />
                            </svg>
                            Nov 16, 2021
                          </li>
                          <li className="list-inline-item">•</li>
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={4} width={16} height={16} rx={1} />
                              <path d="M12 7v5l3 3" />
                              <path d="M4 12h1" />
                              <path d="M19 12h1" />
                              <path d="M12 19v1" />
                            </svg>
                            02
                            {/* */}min read
                          </li>
                        </ul>
                        <div className="position-relative">
                          <h3 className="h4 post-title mb-2 line-clamp clamp-2">
                            <a
                              className="text-link stretched-link"
                              title="Msoft's smart fabric that can detect objects and gestures"
                              href="/blog/msofts-smart-fabric-that-can-detect-objects-and-gestures"
                            >
                              Msoft's smart fabric that can detect objects and
                              gestures
                            </a>
                          </h3>
                          <p className="mb-0 line-clamp clamp-3">
                            About eight or ten years ago, I was excited about
                            smart fabric and connected textiles — especially
                            about what the next generation could be once...
                          </p>
                        </div>
                      </div>
                      <div className="post-author d-flex mt-auto p-4">
                        <div className="flex-shrink-0">
                          <a
                            className="is-hoverable"
                            title="Read all posts by - Ann Monika"
                            href="#_next\data\teTP8JYjegWY5kx87__gL\en\author\ann-monika.json"
                          >
                            <span className="d-inline-block rounded-circle">
                              <img
                                alt="Ann Monika"
                                srcSet="https://source.unsplash.com/random/800x800/?man"
                                src="https://source.unsplash.com/random/800x800/?man"
                                width={42}
                                height={42}
                                decoding="async"
                                data-nimg={1}
                                className="transition bg-light d-inline-block w-auto "
                                loading="lazy"
                                style={{ color: "transparent" }}
                              />
                            </span>
                          </a>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <p className="mb-0 lh-base small">Written by</p>
                          <a
                            className="text-link"
                            title="Read all posts by - Ann Monika"
                            href="#_next\data\teTP8JYjegWY5kx87__gL\en\author\ann-monika.json"
                          >
                            Ann Monika
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <article className="bg-white d-flex flex-column h-100">
                      <div className="post-image">
                        <a
                          className="d-block"
                          title="Can You Build Muscle When You’re Older?"
                          href="/blog/can-you-build-muscle-when-youre-older"
                        >
                          <img
                            alt="Can You Build Muscle When You’re Older?"
                            srcSet="https://source.unsplash.com/random/384x248/?muscle"
                            src="https://source.unsplash.com/random/384x248/?muscle"
                            width={368}
                            height={238}
                            decoding="async"
                            data-nimg={1}
                            className="transition bg-light d-inline-block w-100 h-auto blur"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </a>
                      </div>
                      <div className="p-4 pb-0 ">
                        <ul className="post-meta list-inline mb-3 ">
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={5} width={16} height={16} rx={2} />
                              <line x1={16} y1={3} x2={16} y2={7} />
                              <line x1={8} y1={3} x2={8} y2={7} />
                              <line x1={4} y1={11} x2={20} y2={11} />
                              <rect x={8} y={15} width={2} height={2} />
                            </svg>
                            Sep 13, 2021
                          </li>
                          <li className="list-inline-item">•</li>
                          <li className="list-inline-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-1 align-bottom"
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <rect x={4} y={4} width={16} height={16} rx={1} />
                              <path d="M12 7v5l3 3" />
                              <path d="M4 12h1" />
                              <path d="M19 12h1" />
                              <path d="M12 19v1" />
                            </svg>
                            02
                            {/* */}min read
                          </li>
                        </ul>
                        <div className="position-relative">
                          <h3 className="h4 post-title mb-2 line-clamp clamp-2">
                            <a
                              className="text-link stretched-link"
                              title="Can You Build Muscle When You’re Older?"
                              href="/blog/can-you-build-muscle-when-youre-older"
                            >
                              Can You Build Muscle When You’re Older?
                            </a>
                          </h3>
                          <p className="mb-0 line-clamp clamp-3">
                            The answer is a strong yes, and here’s why you
                            should start now. If you are over age 30 and not
                            working to counter the natural effects of aging,...
                          </p>
                        </div>
                      </div>
                      <div className="post-author d-flex mt-auto p-4">
                        <div className="flex-shrink-0">
                          <a
                            className="is-hoverable"
                            title="Read all posts by - Robert Britt"
                            href="/author/robert-britt"
                          >
                            <span className="d-inline-block rounded-circle">
                              <img
                                alt="Robert Britt"
                                srcSet="https://source.unsplash.com/random/800x800/?man"
                                src="https://source.unsplash.com/random/800x800/?man"
                                width={42}
                                height={42}
                                decoding="async"
                                data-nimg={1}
                                className="transition bg-light d-inline-block w-auto "
                                loading="lazy"
                                style={{ color: "transparent" }}
                              />
                            </span>
                          </a>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <p className="mb-0 lh-base small">Written by</p>
                          <a
                            className="text-link"
                            title="Read all posts by - Robert Britt"
                            href="/author/robert-britt"
                          >
                            Robert Britt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-12 text-center pt-4 mt-5">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <a
                          className="page-link page-link-previous bg-transparent rounded-0 px-0 border-0 text-dark text-link text-uppercase fw-medium"
                          aria-label="Pagination Arrow"
                          href="/blog/page/0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={22}
                            width={22}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="15 6 9 12 15 18" />
                          </svg>{" "}
                          <span>Previous</span>
                        </a>
                      </li>
                      <li className="page-item page-count" title="Page 1 of 2">
                        <span className="current-page">1</span>
                        <span className="total-page">2</span>
                      </li>
                      <li className="page-item ">
                        <a
                          className="page-link bg-transparent rounded-0 px-0 border-0 text-dark text-link active text-uppercase fw-medium"
                          aria-label="Pagination Arrow"
                          href="/blog/page/2"
                        >
                          <span>Next</span>{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={22}
                            width={22}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="9 6 15 12 9 18" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="section bg-white">
              <div className="container">
                <div className="row align-items-center section-title">
                  <div className="col-sm-7">
                    <h2 className="h3 mb-0 title">Top Authors</h2>
                  </div>
                  <div className="col-sm-5 text-end d-none d-sm-block">
                    <a className="text-link lead active" href="/author">
                      <span>All Authors</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={21}
                        width={21}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1={17} y1={7} x2={7} y2={17} />
                        <polyline points="8 7 17 7 17 16" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="row gy-5 gx-md-5">
                  <div className="col-lg-4 col-md-6">
                    <a
                      className="bg-body text-dark p-3 d-flex is-hoverable"
                      title="Ann Monika"
                      href="#_next\data\teTP8JYjegWY5kx87__gL\en\author\ann-monika.json"
                    >
                      <div className="flex-shrink-0 me-3">
                        <img
                          alt="Ann Monika"
                          srcSet="https://source.unsplash.com/random/800x800/?girl"
                          src="https://source.unsplash.com/random/800x800/?girl"
                          width={90}
                          height={90}
                          decoding="async"
                          data-nimg={1}
                          className="transition bg-light d-inline-block shadow img-fluid "
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column h-100">
                          <div>
                            <h3 className="h4 text-dark mb-1 line-clamp clamp-1">
                              Ann Monika
                            </h3>
                            <p className="mb-2 lh-1 line-clamp clamp-1">
                              Director of Operations
                            </p>
                          </div>
                          <p className="fw-medium mt-auto mb-0 small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-2"
                              style={{ transform: "translateY(-2px)" }}
                              height={16}
                              width={16}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z" />
                              <path d="M16 5l3 3" />
                              <path d="M9 7.07a7.002 7.002 0 0 0 1 13.93a7.002 7.002 0 0 0 6.929 -5.999" />
                            </svg>
                            <span className="text-black">03</span>
                            {/* */}Published posts
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a
                      className="bg-body text-dark p-3 d-flex is-hoverable"
                      title="Robert Britt"
                      href="/author/robert-britt"
                    >
                      <div className="flex-shrink-0 me-3">
                        <img
                          alt="Robert Britt"
                          srcSet="https://source.unsplash.com/random/800x800/?man"
                          src="https://source.unsplash.com/random/800x800/?man"
                          width={90}
                          height={90}
                          decoding="async"
                          data-nimg={1}
                          className="transition bg-light d-inline-block shadow img-fluid "
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column h-100">
                          <div>
                            <h3 className="h4 text-dark mb-1 line-clamp clamp-1">
                              Robert Britt
                            </h3>
                            <p className="mb-2 lh-1 line-clamp clamp-1">
                              Content Specialist
                            </p>
                          </div>
                          <p className="fw-medium mt-auto mb-0 small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-2"
                              style={{ transform: "translateY(-2px)" }}
                              height={16}
                              width={16}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z" />
                              <path d="M16 5l3 3" />
                              <path d="M9 7.07a7.002 7.002 0 0 0 1 13.93a7.002 7.002 0 0 0 6.929 -5.999" />
                            </svg>
                            <span className="text-black">02</span>
                            {/* */}Published posts
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a
                      className="bg-body text-dark p-3 d-flex is-hoverable"
                      title="Alexander Hipp"
                      href="#_next\data\teTP8JYjegWY5kx87__gL\en\author\alexander-hipp.json"
                    >
                      <div className="flex-shrink-0 me-3">
                        <img
                          alt="Alexander Hipp"
                          srcSet="https://source.unsplash.com/random/800x800/?boy"
                          src="https://source.unsplash.com/random/800x800/?boy"
                          width={90}
                          height={90}
                          decoding="async"
                          data-nimg={1}
                          className="transition bg-light d-inline-block shadow img-fluid "
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column h-100">
                          <div>
                            <h3 className="h4 text-dark mb-1 line-clamp clamp-1">
                              Alexander Hipp
                            </h3>
                            <p className="mb-2 lh-1 line-clamp clamp-1">
                              Director and Chief Evangelist
                            </p>
                          </div>
                          <p className="fw-medium mt-auto mb-0 small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-2"
                              style={{ transform: "translateY(-2px)" }}
                              height={16}
                              width={16}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z" />
                              <path d="M16 5l3 3" />
                              <path d="M9 7.07a7.002 7.002 0 0 0 1 13.93a7.002 7.002 0 0 0 6.929 -5.999" />
                            </svg>
                            <span className="text-black">02</span>
                            {/* */}Published posts
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="d-block d-sm-none mt-5 pt-3">
                  <div className="text-center">
                    <a className="text-link lead active" href="/author">
                      <span>All Authors</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={21}
                        width={21}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1={17} y1={7} x2={7} y2={17} />
                        <polyline points="8 7 17 7 17 16" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="post-of-the-month"
              style={{
                backgroundImage:
                  "url(https://th.bing.com/th/id/OIP.wdkLi0wAUuLf5gdNFincPwHaEd?pid=ImgDet&rs=1)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-10 mx-auto text-center">
                    <div className="mb-5 pb-4">
                      <h2 className="text-uppercase h6 text-black bg-white mb-0 d-inline-block px-3 py-2 lh-1">
                        POST OF THE MONTH
                      </h2>
                    </div>
                    <ul className="post-meta list-inline mb-4 text-light">
                      <li className="list-inline-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-1 align-bottom"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <rect x={4} y={5} width={16} height={16} rx={2} />
                          <line x1={16} y1={3} x2={16} y2={7} />
                          <line x1={8} y1={3} x2={8} y2={7} />
                          <line x1={4} y1={11} x2={20} y2={11} />
                          <rect x={8} y={15} width={2} height={2} />
                        </svg>
                        Jun 28, 2022
                      </li>
                      <li className="list-inline-item">•</li>
                      <li className="list-inline-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-1 align-bottom"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <rect x={4} y={4} width={16} height={16} rx={1} />
                          <path d="M12 7v5l3 3" />
                          <path d="M4 12h1" />
                          <path d="M19 12h1" />
                          <path d="M12 19v1" />
                        </svg>
                        02
                        {/* */}min read
                      </li>
                    </ul>
                    <h3 className="h2 post-title mb-4 position-relative">
                      <a
                        className="text-white text-link stretched-link"
                        href="#_next\data\teTP8JYjegWY5kx87__gL\en\blog\the-nine-to-five-is-dead-heres-what-to-replace-it-with.json"
                      >
                        The nine-to-five Is Dead. Here’s What to Replace It With
                      </a>
                    </h3>
                    <div className="post-author">
                      <a
                        className="is-hoverable"
                        title="Read all posts by - Alexander Hipp"
                        href="#_next\data\teTP8JYjegWY5kx87__gL\en\author\alexander-hipp.json"
                      >
                        <img
                          alt="Alexander Hipp"
                          srcSet="https://source.unsplash.com/random/384x248/?man"
                          src="https://source.unsplash.com/random/384x248/?man"
                          width={26}
                          height={26}
                          decoding="async"
                          data-nimg={1}
                          className="transition bg-light d-inline-block w-auto me-3 "
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </a>
                      <span className="text-light me-1">by </span>
                      <a
                        className="text-link text-white"
                        title="Read all posts by - Alexander Hipp"
                        href="#_next\data\teTP8JYjegWY5kx87__gL\en\author\alexander-hipp.json"
                      >
                        Alexander Hipp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <footer className="bg-white">
            <div className="line-bg">
              <div className="newsletter-block border-bottom">
                <div className="container">
                  <div className="row gy-5 align-items-center justify-content-center text-center text-md-start">
                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-10">
                      <div className="pe-0 pe-xl-4">
                        <h2 className="mb-3 lh-sm">
                          Subscribe to our monthly newsletter
                        </h2>
                        <p className="mb-0">
                          Stay up-to-date about latest tech and new world.
                          Unsubscribe at anytime!
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6">
                      <div className="ps-0 ps-xl-4">
                        <div id="mc_embed_signup">
                          <form
                            action="#"
                            method=""
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            target="_blank"
                          >
                            <div
                              id="mc_embed_signup_scroll"
                              className="input-group"
                            >
                              <input
                                type="text"
                                name="NAME"
                                className="form-control w-100"
                                id="mce-NAME"
                                placeholder="Full Name"
                                aria-label="Name"
                                autoComplete="new-name"
                              />
                              <input
                                type="email"
                                name="EMAIL"
                                className="form-control w-100 required email"
                                id="mce-EMAIL"
                                placeholder="Your email address *"
                                aria-label="Subscription"
                                autoComplete="new-email"
                                required=""
                              />
                              <div id="mce-responses" className="clear">
                                <div
                                  className="response"
                                  id="mce-error-response"
                                  style={{ display: "none" }}
                                />
                                <div
                                  className="response"
                                  id="mce-success-response"
                                  style={{ display: "none" }}
                                />
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "-5000px",
                                }}
                                aria-hidden="true"
                              >
                                <input
                                  type="text"
                                  name="b_92641572a6c6ec43da15feed0_d28bb2454f"
                                  tabIndex={-1}
                                />
                              </div>
                              <div className="input-group-append w-100">
                                <button
                                  type="submit"
                                  name="subscribe"
                                  id="mc-embedded-subscribe"
                                  className="input-group-text w-100 mb-0"
                                  aria-label="Subscription Button"
                                >
                                  Subscribe Now
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ms-auto"
                                    height={21}
                                    width={21}
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    />
                                    <line x1={17} y1={7} x2={7} y2={17} />
                                    <polyline points="8 7 17 7 17 16" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                <div className="row gy-3 align-items-center">
                  <div className="col-lg-4 order-2 order-lg-1 text-center text-lg-start">
                    <p className="mb-0 copyright-text">
                      © 2023 Hello. All rights reserved.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1">
                    <ul className="list-unstyled">
                      <li className="d-inline-block mx-3">
                        <a className="text-link" href="/terms">
                          Terms of Service
                        </a>
                      </li>
                      <li className="d-inline-block mx-3">
                        <a className="text-link" href="/privacy">
                          Privacy policy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 order-0 order-lg-2">
                    <ul className="list-unstyled social-links d-flex align-items-center justify-content-center justify-content-lg-end">
                      <li className="me-2 fw-medium">Follow Us:</li>
                      <li className="ms-1">
                        <a
                          className="is-hoverable"
                          href="https://facebook.com/"
                          title="Facebook"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            height={16}
                            width={16}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                        </a>
                      </li>
                      <li className="ms-1">
                        <a
                          className="is-hoverable"
                          href="https://twitter.com/"
                          title="Twitter"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            height={16}
                            width={16}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </a>
                      </li>
                      <li className="ms-1">
                        <a
                          className="is-hoverable"
                          href="https://linkedin.com/"
                          title="Linkedin"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            height={16}
                            width={16}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                        </a>
                      </li>
                      <li className="ms-1">
                        <a
                          className="is-hoverable"
                          href="https://github.com/"
                          title="Github"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            height={16}
                            width={16}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default page