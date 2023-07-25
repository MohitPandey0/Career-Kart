import React from 'react'

export default function header() {
    return (
        <header className="header-nav "> 
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light p-0"><button className="navbar-toggler d-inline-flex d-lg-none" type="button" aria-label="Toggle navigation"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="14" y2="12"></line><line x1="4" y1="18" x2="18" y2="18"></line></svg></button>
                            <a
                                className="navbar-brand d-flex mb-0 me-0" href="/"><img alt="Tushi" fetchpriority="high" width="110" height="43" decoding="async" data-nimg="1" className="img-fluid" style="color:transparent" srcSet="/_next/image?url=%2Fimages%2Flogo.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogo.png&amp;w=256&amp;q=75 2x"
                                    src="/_next/image?url=%2Fimages%2Flogo.png&amp;w=256&amp;q=75" /></a>
                            <div className="d-block d-lg-none"><button className="search-toggle" aria-label="Search Toggle"><svg width="28" height="28" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 15.5L19 19" stroke="currentColor" stroke-linecap="square" stroke-linejoin="square"></path><path d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z" stroke="currentColor" stroke-linecap="square" stroke-linejoin="square"></path></svg></button>
                                <div
                                    className="color-scheme-toggler ms-2 d-inline-block"><svg className="sun-icon" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 105.5a152.4 152.4 0 0 0-152.2 152.2c0 83.9 68.3 152.2 152.2 152.2 83.9 0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0 263.5c-61.4 0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4 0 111.4 50 111.4 111.4 0 61.4-50 111.4-111.4 111.4zM256 74.8c11.3 0 20.4-9.1 20.4-20.4v-23a20.4 20.4 0 1 0-40.8 0v23c0 11.3 9.1 20.4 20.4 20.4zM256 437.2a20.4 20.4 0 0 0-20.4 20.4v22.9a20.4 20.4 0 1 0 40.8 0v-22.9c0-11.2-9.1-20.4-20.4-20.4zM480.6 235.6h-23a20.4 20.4 0 1 0 0 40.8h23a20.4 20.4 0 1 0 0-40.8zM54.4 235.6h-23a20.4 20.4 0 1 0 0 40.8h22.9c11.3 0 20.4-9.1 20.4-20.4a20.3 20.3 0 0 0-20.3-20.4zM400.4 82.8 384.1 99a20.4 20.4 0 1 0 28.9 28.9l16.2-16.2a20.4 20.4 0 0 0-28.8-28.9zM99 384.1l-16.2 16.2a20.4 20.4 0 1 0 28.9 28.9l16.2-16.2A20.4 20.4 0 1 0 99 384.1zM413 384.1a20.4 20.4 0 1 0-28.9 28.9l16.2 16.2a20.4 20.4 0 1 0 28.9-28.9L413 384.1zM99 127.9A20.4 20.4 0 1 0 127.9 99l-16.2-16.2a20.4 20.4 0 1 0-28.9 28.9L99 127.9z" fill="currentColor"></path></svg>
                                    <svg
                                        className="moon-icon" height="24px" width="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 172.2 172.2" enable-background="new 0 0 172.151 172.151">
                                        <path d="M95 27.9a3.6 3.6 0 0 0-4.8 4.4 62.8 62.8 0 0 1-83.9 78.3 3.6 3.6 0 0 0-4.8 4.5 69.4 69.4 0 0 0 66 47c17.8-.1 34.6-6.7 47.7-18.9a69.4 69.4 0 0 0 22.1-48.6A69.4 69.4 0 0 0 95 27.9zm35.2 66.4a62.3 62.3 0 0 1-64.9 60.5 62.3 62.3 0 0 1-54-34.8 70 70 0 0 0 88-82 62.5 62.5 0 0 1 31 56.3zM47.4 31.4a3.6 3.6 0 0 0 5 0l5.1-5.1 5.2 5a3.6 3.6 0 0 0 5 0 3.6 3.6 0 0 0 0-5l-5.1-5 5-5a3.6 3.6 0 1 0-5-5l-5 4.9-5-5a3.6 3.6 0 1 0-5 5l5 5-5.2 5.1a3.6 3.6 0 0 0 0 5zM171.1 65.6l-5.1-5.1 5-5a3.6 3.6 0 1 0-5-5l-5 5-5-5a3.6 3.6 0 1 0-5 5l5 5-5.2 5a3.6 3.6 0 1 0 5 5.1l5.2-5.1 5 5.1a3.6 3.6 0 0 0 5.1 0 3.6 3.6 0 0 0 0-5z"></path>
                                        <path d="m6 95.6 5.2-5.1 5.1 5a3.6 3.6 0 0 0 5 0 3.6 3.6 0 0 0 0-5l-5-5 5-5a3.6 3.6 0 1 0-5.1-5.1l-5 5-5-5a3.6 3.6 0 1 0-5 5l5 5L1 90.5a3.6 3.6 0 1 0 5 5z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="collapse navbar-collapse" id="navHeader">
                                <div className="w-100 d-block d-lg-none mb-4 ms-1 sticky-top bg-white animate"><button className="navbar-toggler opacity-50" type="button" aria-label="Toggle navigation"><svg xmlns="http://www.w3.org/2000/svg" className="menu-close" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div>
                                <ul
                                    className="navbar-nav ms-auto animate">
                                    <li className="nav-item dropdown
                          active
                        "><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item active" href="/">Home</a></li>
                                            <li><a className="dropdown-item " href="/home-2">Home Minimal</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item "><a className="nav-link" href="/featured">Featured</a></li>
                                    <li className="nav-item "><a className="nav-link" href="/blog">Latest</a></li>
                                    <li className="nav-item "><a className="nav-link" href="/about">About</a></li>
                                    <li className="nav-item dropdown
                          
                        "><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item " href="/blog/archive">Archive</a></li>
                                            <li><a className="dropdown-item " href="/author">Author</a></li>
                                            <li><a className="dropdown-item " href="/author/ann-monika">Author Single</a></li>
                                            <li><a className="dropdown-item " href="/blog/elements">Elements</a></li>
                                            <li><a className="dropdown-item " href="/tags">Tags</a></li>
                                            <li><a className="dropdown-item " href="/categories">Categories</a></li>
                                            <li><a className="dropdown-item " href="/tags/lifestyle">Tag Single</a></li>
                                            <li><a className="dropdown-item " href="/categories/tech">Category Single</a></li>
                                            <li><a className="dropdown-item " href="/privacy">Privacy</a></li>
                                            <li><a className="dropdown-item " href="/terms-of-service">Terms of service</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item "><a className="nav-link" href="/contact">Contact</a></li>
                                </ul>
                                <ul className="list-unstyled social-links d-flex flex-wrap d-lg-none align-items-center mt-auto w-100 animate">
                                    <li className="fw-medium flex-grow-1 flex-shrink-1 mb-1" style="flex-basis:100%;margin-left:12px">Social links:</li>
                                    <li><a className="is-hoverable" href="https://facebook.com/" title="Facebook" target="_blank" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path></svg></a></li>
                                    <li><a className="is-hoverable" href="https://twitter.com/" title="Twitter" target="_blank" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg></a></li>
                                    <li><a className="is-hoverable" href="https://linkedin.com/" title="Linkedin" target="_blank" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg></a></li>
                                    <li><a className="is-hoverable" href="https://github.com/" title="Github" target="_blank" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a></li>
                                </ul>
                                <div className="navbar-right d-none d-lg-block"><button className="search-toggle ms-2" aria-label="Search Toggle"><svg width="30" height="30" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 15.5L19 19" stroke="currentColor" stroke-linecap="square" stroke-linejoin="square"></path><path d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z" stroke="currentColor" stroke-linecap="square" stroke-linejoin="square"></path></svg></button>
                                    <div
                                        className="color-scheme-toggler ms-3 d-inline-block"><svg className="sun-icon" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 105.5a152.4 152.4 0 0 0-152.2 152.2c0 83.9 68.3 152.2 152.2 152.2 83.9 0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0 263.5c-61.4 0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4 0 111.4 50 111.4 111.4 0 61.4-50 111.4-111.4 111.4zM256 74.8c11.3 0 20.4-9.1 20.4-20.4v-23a20.4 20.4 0 1 0-40.8 0v23c0 11.3 9.1 20.4 20.4 20.4zM256 437.2a20.4 20.4 0 0 0-20.4 20.4v22.9a20.4 20.4 0 1 0 40.8 0v-22.9c0-11.2-9.1-20.4-20.4-20.4zM480.6 235.6h-23a20.4 20.4 0 1 0 0 40.8h23a20.4 20.4 0 1 0 0-40.8zM54.4 235.6h-23a20.4 20.4 0 1 0 0 40.8h22.9c11.3 0 20.4-9.1 20.4-20.4a20.3 20.3 0 0 0-20.3-20.4zM400.4 82.8 384.1 99a20.4 20.4 0 1 0 28.9 28.9l16.2-16.2a20.4 20.4 0 0 0-28.8-28.9zM99 384.1l-16.2 16.2a20.4 20.4 0 1 0 28.9 28.9l16.2-16.2A20.4 20.4 0 1 0 99 384.1zM413 384.1a20.4 20.4 0 1 0-28.9 28.9l16.2 16.2a20.4 20.4 0 1 0 28.9-28.9L413 384.1zM99 127.9A20.4 20.4 0 1 0 127.9 99l-16.2-16.2a20.4 20.4 0 1 0-28.9 28.9L99 127.9z" fill="currentColor"></path></svg>
                                        <svg
                                            className="moon-icon" height="24px" width="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 172.2 172.2" enable-background="new 0 0 172.151 172.151">
                                            <path d="M95 27.9a3.6 3.6 0 0 0-4.8 4.4 62.8 62.8 0 0 1-83.9 78.3 3.6 3.6 0 0 0-4.8 4.5 69.4 69.4 0 0 0 66 47c17.8-.1 34.6-6.7 47.7-18.9a69.4 69.4 0 0 0 22.1-48.6A69.4 69.4 0 0 0 95 27.9zm35.2 66.4a62.3 62.3 0 0 1-64.9 60.5 62.3 62.3 0 0 1-54-34.8 70 70 0 0 0 88-82 62.5 62.5 0 0 1 31 56.3zM47.4 31.4a3.6 3.6 0 0 0 5 0l5.1-5.1 5.2 5a3.6 3.6 0 0 0 5 0 3.6 3.6 0 0 0 0-5l-5.1-5 5-5a3.6 3.6 0 1 0-5-5l-5 4.9-5-5a3.6 3.6 0 1 0-5 5l5 5-5.2 5.1a3.6 3.6 0 0 0 0 5zM171.1 65.6l-5.1-5.1 5-5a3.6 3.6 0 1 0-5-5l-5 5-5-5a3.6 3.6 0 1 0-5 5l5 5-5.2 5a3.6 3.6 0 1 0 5 5.1l5.2-5.1 5 5.1a3.6 3.6 0 0 0 5.1 0 3.6 3.6 0 0 0 0-5z"></path>
                                            <path d="m6 95.6 5.2-5.1 5.1 5a3.6 3.6 0 0 0 5 0 3.6 3.6 0 0 0 0-5l-5-5 5-5a3.6 3.6 0 1 0-5.1-5.1l-5 5-5-5a3.6 3.6 0 1 0-5 5l5 5L1 90.5a3.6 3.6 0 1 0 5 5z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="menu-overlay "></div>
            <div className="search-overlay "></div>
            <div className="search-block overflow-auto bg-body is-hidden">
                <div data-toggle="search-close"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div><input
                    type="text" placeholder="Type to search blog.." aria-label="search-query" value="" />
                <div className="mt-4 pt-2 is-hidden popular-topics">
                    <div className="section-title mb-3 pb-1">
                        <p className="title h4 mb-0">Popular topics</p>
                    </div>
                    <ul className="taxonomy-lists list-unstyled d-flex flex-wrap gap-2">
                        <li className="d-inline-block"><a className="border-0 pe-0 d-inline-flex align-items-center" href="/tags">All Topice<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="9 6 15 12 9 18"></polyline></svg></a></li>
                    </ul>
                </div>
                <div className="mt-4 pt-2 is-hidden recent-posts">
                    <div className="post-meta">
                        <div className="section-title mb-3 pb-1">
                            <p className="title h4 mb-0">Recent posts</p>
                        </div>
                        <div className="row gy-4"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}
