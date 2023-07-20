import React from 'react'
import video from "../assets/woman/Banner.mp4"
import video2 from "../assets/woman/beauty.mp4"
import {Link} from "react-router-dom"
import Woman from './Woman'
import Men from './Men'
import Kids from './Kids'
import Myhome from './Myhome'
import Beauty from './Beauty'

export default function Home() {
  return (
    <div>
      <div className="body-grid-wrapper1" id="grid1">
        <div className="mobile-menu" id="menu">
          <div className="mobile-cancel-menu">
            <span className="hideMenu" id="hideMenu"></span>
          </div>
          <div className="menu mobile" id="mobile">
            <div className="menu-lists">
              <span className="cancel rotate1"></span>
              <span className="cancel rotate4"></span>
              <div className="cover-cancel" id="closeSideLinks"></div>
            </div>
            <ul data-mobile="men">
              <div className="Men">
                <li><Link to="/men" element={<Men/>}>Men</Link></li>
                <li>
                  <Link to="/woman" element={<Woman/>}>Woman</Link>
                </li>
                <li>
                  <Link to="/kids" element={<Woman/>}>KIDS</Link>
                </li>
                <li>
                  <Link to="/home" element={<Woman/>}>HOME</Link>
                </li>
                <li>
                  <Link to="/woman" element={<Woman/>}>MASSIMO DUTTI</Link>
                </li>
                <li>
                  <Link to="/woman" element={<Woman/>}>LOG IN</Link>
                </li>
                <li>
                  <Link to="/woman" element={<Woman/>}>HELP</Link>
                </li>
                <li>
                  <Link to="/woman" element={<Woman/>}>INFO</Link>
                </li>

              </div>
            </ul>
          </div>
        </div>

        <main id="main_header">
          <header id="header">
            <div className="header-wrapper"></div>
          </header>

          <div className="video-wrapper" id="videoCover">
            <video src={video} muted preload="auto" autoPlay loop playsInline webkitPlaysInline id="video"></video>
          </div>
        </main>

        <aside id="aside_body">
          <div className="audio-input">
            <div className="pause"></div>
            <div className="play"></div>
          </div>
        </aside>

        <section id="section1_images" className="section1-media">
          <div className="slide section-slide1">
            <div className="list-wrapper1">
              <div className="menu-wrapper-one">
                <span className="MENU-one"></span>
                <span className="MENU-one"></span>
                <span className="MENU-one"></span>
                <div className="cover" id="openSideLInks"></div>
              </div>
              <ul className="Menu-bar" id="menu-Bar">
                <li><Link to="/men" element={<Men/>}>Men</Link></li>
                <li>
                  <Link to="/woman" element={<Woman/>}>Woman</Link>
                </li>
                <li>
                  <Link to="/kids" element={<Kids/>}>KIDS</Link>
                </li>
                <li>
                  <Link to="/home-products" element={<Myhome/>}>HOME</Link>
                </li>
                <li>
                  <Link to="/beauty" element={<Beauty/>}>BEAUTY</Link>
                </li>
                <li>
                  <Link to="/woman" element={<Woman/>}>LOG IN</Link>
                </li>
                <li>
                  <Link to="/woman" element={<Woman/>}>HELP</Link>
                </li>
                <li>
                  <Link to="/woman" element={<Woman/>}>INFO</Link>
                </li>
              </ul>
              <ul className="logo">
                <li>
                  <div className="logo-steppara">
                    <Link to="/" id='logo'></Link>
                  </div>
                </li>
              </ul>
              <div className="router-home">
                <div className="list-names">
                  <span className="names-list" id="names-tag"></span>
                </div>
                <span className="right-slide" id="slide-right"></span>
              </div>
            </div>
            <div className="galley-wrapper">
              <a href="../public2/index.html">
                <div className="slideimg1 gallery-1"></div>
              </a>
            </div>
          </div>

          <div className="slide section-slide2">
            <div className="galley-wrapper">
              <div className="slideimg2 gallery-2">
                <div className="gif-video-woman1" id="videoWrap2">
                  <video muted preload="autox" autoPlay loop playsInline webkitPlaysInline id="men-video1"></video>
                </div>
              </div>
            </div>
          </div>

          <div className="slide section-slide3">
            <div className="galley-wrapper">
              <div className="slideimg3 gallery-3"></div>
            </div>
          </div>
          <div className="slide section-slide4">
            <div className="galley-wrapper">
              <div className="slideimg4 gallery-4">
                <div className="gif-video-woman3" id="videoWrap3">
                  <video src={video2} muted preload="auto" autoPlay loop playsInline webkitPlaysInline id="beauty-video3"></video>
                </div>
              </div>
            </div>
          </div>

          <div className="slide section-slide5">
            <div className="galley-wrapper">
              <div className="slideimg5 gallery-5"></div>
            </div>
          </div>

          <div className="slide section-slide6">
            <div className="galley-wrapper">
              <div className="slideimg6 gallery-6"></div>
            </div>
          </div>

          <div className="slide section-slide7">
            <div className="galley-wrapper">
              <div className="slideimg7 gallery-7"></div>
            </div>
          </div>

          <div className="slide section-slide8">
            <div className="galley-wrapper">
              <div className="slideimg9 gallery-8"></div>
            </div>
          </div>
          <footer className="slide section-slide9" id="TOP">
            <div className="footer-wrapper">
              <div className="slideimg footer" id="grain1">
                <div className="footer1 animate">
                  <h1 className="infinit-words">
                    My secret is simple <span className="spin">&#10042;</span> I shop at Steppara &mdash; My secret is simple <span className="spin">&#10042;</span> I shop at Steppara &mdash; My secret is simple <span className="spin">&#10042;</span> I shop at Steppara &mdash; My secret is simple <span className="spin">&#10042;</span> I shop at Steppara &mdash; My secret is simple <span className="spin">&#10042;</span> I shop at Steppara &mdash; My secret is simple <span className="spin">&#10042;</span> I shop at Steppara.
                  </h1>
                </div>

                <div className="footer1 copyright">
                  <ul data-signup="signup">
                    <li>SIGN UP FOR OUR NEWSLETTER</li>
                  </ul>
                  <ul data-social="social">
                    <li>facebook</li>
                    <li>instagram</li>
                    <li>twitter</li>
                    <li>youtube</li>
                  </ul>
                  <ul data-copyright="copyright">
                    <li>SIGN UP FOR OUR NEWSLETTER</li>
                    <li>DO NOT SELL OR SHARE MY INFORMATION</li>
                    <li>COOKIES AND AD PREFERENCES</li>
                    <li>PRIVACY AND COOKIES POLICY</li>
                    <li>TERMS OF USE</li>
                    <li>back home &mdash; double tap</li>
                  </ul>
                    <div className="yearLogo">
                  <span className="year">© 2023 STEPPARA America, Inc. All Rights Reserved</span>
                </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>

  )
}
