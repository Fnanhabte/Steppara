import React from 'react'
import img1 from '../assets/kids/a80c1f165903723.640f809246d69.jpg';
import img2 from '../assets/kids/5431630112_15_1_1.jpg';
import img3 from '../assets/kids/8675610620_6_1_1.jpg';
import img4 from '../assets/kids/8675610620_6_3_1.jpg';
import img5 from '../assets/kids/9252600250_6_1_1.jpg';
import img6 from '../assets/kids/9252600250_6_2_1.jpg';
import img7 from '../assets/kids/8675610400_6_3_1.jpg';
import img8 from '../assets/kids/8675610400_15_1_1.jpg';
import img9 from '../assets/kids/6462603250_15_1_1_2.jpg';
import img10 from '../assets/kids/6462603250_15_1_1.jpg';
import img11 from '../assets/kids/8675610400_1_1_1_3.jpeg';
import img12 from '../assets/kids/8675610400_1_1_1.jpg';
import img17 from '../assets/kids/3402607250_1_1_1.jpg';
import img18 from '../assets/kids/5431630112_15_1_1.jpg';
import img22 from '../assets/kids/2675610620_1_1_1.jpg';
import img23 from '../assets/kids/2548606400_1_1_1.jpg';
import img24 from '../assets/kids/2548606400_6_1_1.jpg';
import img25 from '../assets/kids/2548606400_6_3_1.jpg';
import img26 from '../assets/kids/2548606630_6_1_1.jpg';
import img27 from '../assets/kids/2548606630_6_3_1.jpg';
import img28 from '../assets/kids/2662130800_6_1_1.jpg';
import img29 from '../assets/kids/2335602250_6_1_1.jpg';
import img30 from '../assets/kids/2335602250_6_2_1.jpg';
import img31 from '../assets/kids/2335602250_6_3_1.jpg';
import img32 from '../assets/kids/2335602250_15_1_1.jpeg';
import img34 from '../assets/kids/1469536330_1_1_1.jpg';
import img36 from '../assets/kids/1451032400_6_3_1.jpg';
import img37 from '../assets/kids/1451032400_6_1_1.jpg';
import img38 from '../assets/kids/1451032052_6_3_1.jpg';
import img39 from '../assets/kids/1451032052_6_1_1.jpg';
import img40 from '../assets/kids/1165668712_6_3_1.jpg';
import img41 from '../assets/kids/1165668712_6_1_1.jpg';
import img42 from '../assets/kids/1165668712_1_1_1.jpg';
import img43 from '../assets/kids/1165668712_1_1_1_5.jpeg';
import img44 from '../assets/kids/1165668712_1_1_1_4.jpeg';
import img45 from '../assets/kids/1165668692_6_3_1.jpg';
import img46 from '../assets/kids/1165668692_6_1_1.jpg';
import img47 from '../assets/kids/1165668692_1_1_1.jpg';
import img48 from '../assets/kids/1165664046_1_1_1.jpg';
import img49 from '../assets/kids/0653632712_6_5_1.jpg';
import img50 from '../assets/kids/0653632712_6_1_1.jpg';
import img51 from '../assets/kids/0653632712_6_2_1.jpg';

export default function Kids() {
  return (
    <div className='kids-section'>
       <div id="menu">
      <div class="mobile-cancel-menu">
         <span class="hideMenu" id="hideMenu"></span>
      </div>
      <div class="menu-lists">
        <span class="cancel rotate1"></span>
        <span class="cancel rotate4"></span>
        <div class="cover-cancel" id="closeSideLinks"></div>
      </div>
      <div class="menu mobile" id="mobile">

         {/* <ul data-mobile="women">
            <div class="Woman" id="menu-links">
               <li><a href="../public/index.html"  class="li" target="_self">RETURN HOME</a></li>
               <li><a href="../public3/index.html"  class="li" target="_self">MEN</a></li>
               <li><a href="../public2/index.html"  class="li" target="_self">WOMAN</a></li>
               <li><a href="../public4/index.html"  class="li" target="_self">KIDS</a></li>
               <li><a href="../public5/index.html" class="li" target="_self">HOME</a></li>
               <li><a href="#"  class="li">MASSIMO DUTTI</a></li>
               <li><a href="../public6/index.html"  class="li">BEAUTY</a></li>
               <li> <a href="#"  class="li">LOG IN</a></li>
               <li><a href="#"  class="li">HELP</a></li>
               <li><a href="#"  class="li">INFO</a></li>
            </div>
         </ul> */}
      </div>

   </div>
   <section id="section1">
   <header>
            <nav class="nav-wrapper">
               <ul data-nav="menu">
                  <li id="showMENU">
                     <span class="MENU"></span>
                     <span class="MENU"></span>
                     <span class="MENU"></span>
                     <div class="cover" id="openSideLInks"></div>
                  </li>
               </ul>
               <ul data-nav="logo">
                  <a href="../public/index.html" target="_self" id="def">
                     <li></li>
                     {/* <p id="textdef">
                        <span class="para">PARA <small>(/'steppara')</small></span>
                        <span class="noun">[noun]</span><br>
                        The word is constructed from Greek <small>(παρά-),</small> meaning " beyond, or better. Fashion is a state of mind, not a size range.
                     </p> */}
                  </a>
               </ul>

               <ul data-nav="links">
                  <li class="log">LOG IN</li>
                  <span class="off" id="off"></span>
                  <li data-light="icon" id="light" class="active">
                  </li>
                  <li data-bag="icon"></li>
               </ul>
            </nav>
      </header>
      <div class="steppara-banner" id="banner"></div>
      <div class="cloth-info">
        <p>
         keeping up with your kids' fashion evolution is a daunting task, indeed. Not only is their personal style constantly changing as they get older, but their body is growing so quickly that new clothes are an almost constant need. Whether you're shopping for your tweens, teens, toddlers or infants, finding the best deals and styles can be overwhelming, but there are plenty of great options if you know where to look.
        </p>
        <span>
         STEPPARA online collection of KIDS has every occasion covered.
        </span>
      </div>
      <div class="sec-1">
         <div class="img-wrap">
            <img src={img1} alt="STEPPARA/kids" class="img-sec1" />
         </div>
      </div>
      <div class="sec-1">
         <div class="img-wrap">
            <img src={img2} alt="STEPPARA/kids" class="img-sec1" />
         </div>
      </div>
      <main id="main-content-column">
  <div class="cloth-section">
    <div class="col1 woman-new">
      <div class="kids H-scroll addtocart">
        <img src={img1} alt="STEPPARA/JEANS" class="img" />
        <img src={img2} alt="STEPPARA/JEANS" class="img" />
        <img src={img3} alt="STEPPARA/JEANS" class="img" />
      </div>
      <div class="cloth-name-price">
        <span class="name">TEXTURED TIE-DYE TOP</span>
        <span class="clors"></span>
        <span class="price">17.90 USD</span>
      </div>
    </div>
    <div class="col1 woman-new">
      <div class="kids H-scroll addtocart">
        <img src={img4} alt="STEPPARA/JEANS" class="img" />
        <img src={img5} alt="STEPPARA/JEANS" class="img" />
        <img src={img6} alt="STEPPARA/JEANS" class="img" />
      </div>
      <div class="cloth-name-price">
        <span class="name">TEXTURED TIE-DYE TOP</span>
        <span class="clors"></span>
        <span class="price">17.90 USD</span>
      </div>
    </div>
    <div class="col1 woman-new">
      <div class="kids H-scroll addtocart">
        <img src={img7} alt="STEPPARA/JEANS" class="img" />
        <img src={img8} alt="STEPPARA/JEANS" class="img" />
        <img src={img9} alt="STEPPARA/JEANS" class="img" />
      </div>
      <div class="cloth-name-price">
        <span class="name">LOOSE FIT JEANS</span>
        <span class="price">35.90 USD</span>
      </div>
    </div>
    <div class="col1 woman-new">
      <div class="kids H-scroll addtocart">
        <img src={img10} alt="STEPPARA/JEANS" class="img" />
        <img src={img11} alt="STEPPARA/JEANS" class="img" />
        <img src={img12} alt="STEPPARA/JEANS" class="img" />
      </div>
      <div class="cloth-name-price">
        <span class="name">PRINTED SKORT</span>
        <span class="price">22.90 USD</span>
      </div>
    </div>
  </div>
</main>

<div class="sec-1">
  <div class="img-wrap-3">
    <img src={img32} alt="STEPPARA/kids" class="img-sec1" />
  </div>
</div>
<div class="sec-1">
  <div class="img-wrap-3">
    <img src={img18} alt="STEPPARA/kids" class="img-sec1" />
  </div>
</div>

<div id="content-column">
  <div class="cloth-section">
    <div class="col1 woman-new">
      <div class="kids H-scroll addtocart">
        <img src={img23} alt="STEPPARA/JEANS" class="img" />
        <img src={img24} alt="STEPPARA/JEANS" class="img" />
        <img src={img25} alt="STEPPARA/JEANS" class="img" />
      </div>
      <div class="cloth-name-price">
        <span class="name">PRINT JUMPSUIT</span>
        <span class="clors"></span>
        <span class="price">35.90 USD</span>
      </div>
    </div>
    <div class="col1 woman-new">
      <div class="kids H-scroll addtocart">
        <img src={img26} alt="STEPPARA/JEANS" class="img" />
        <img src={img27} alt="STEPPARA/JEANS" class="img" />
        <img src={img28} alt="STEPPARA/JEANS" class="img" />
      </div>
      <div class="cloth-name-price">
        <span class="name">KIDS/ STRAPPY LEATHER SAND</span>
        <span class="clors"></span>
        <span class="price">55.90 USD</span>
      </div>
    </div>
    <div class="col1 woman-new">
      <div class="kids H-scroll addtocart">
        <img src={img29} alt="STEPPARA/JEANS" class="img" />
        <img src={img30} alt="STEPPARA/JEANS" class="img" />
        <img src={img31} alt="STEPPARA/JEANS" class="img" />
      </div>
      <div class="cloth-name-price">
        <span class="name">PRINT JUMPSUIT</span>
        <span class="price">32.90 USD</span>
      </div>
    </div>
    <div class="col1 woman-new">
      <div class="kids H-scroll addtocart">
        <img src={img50} alt="STEPPARA/JEANS" class="img" />
        <img src={img51} alt="STEPPARA/JEANS" class="img" />
        <img src={img49} alt="STEPPARA/JEANS" class="img" />
      </div>
      <div class="cloth-name-price">
        <span class="name">KIDS/ CROCHET BUCKET HAT</span>
        <span class="price">22.90 USD</span>
      </div>
    </div>
  </div>
</div>

<div id="content-column">
  <div class="cloth-section">
    <div class="col1 woman-new">
      <div class="kids H-scroll addtocart">
        <img src={img45} alt="STEPPARA/JEANS" class="img" />
        <img src={img46} alt="STEPPARA/JEANS" class="img" />
        <img src={img47} alt="STEPPARA/JEANS" class="img" />
      </div>
      <div class="cloth-name-price">
        <span class="name">RUCHED FLORAL TOP</span>
        <span class="clors"></span>
        <span class="price">25.90 USD</span>
      </div>
    </div>
    <div class="col1 woman-new">
      <div class="kids H-scroll addtocart">
        <img src={img42} alt="STEPPARA/JEANS" class="img" />
        <img src={img41} alt="STEPPARA/JEANS" class="img" />
        <img src={img40} alt="STEPPARA/JEANS" class="img" />
      </div>
      <div class="cloth-name-price">
        <span class="name">RUCHED FLORAL TOP</span>
        <span class="clors"></span>
        <span class="price">25.90 USD</span>
      </div>
    </div>
    <div class="col1 woman-new">
      <div class="kids H-scroll addtocart">
        <img src={img36} alt="STEPPARA/JEANS" class="img" />
        <img src={img37} alt="STEPPARA/JEANS" class="img" />
        <img src={img38} alt="STEPPARA/JEANS" class="img" />
      </div>
      <div class="cloth-name-price">
        <span class="name">FLOWY LINEN PANTS</span>
        <span class="price">35.90 USD</span>
      </div>
    </div>
    <div class="col1 woman-new">
      <div class="kids H-scroll addtocart">
        <img src={img39} alt="STEPPARA/JEANS" class="img" />
        <img src={img38} alt="STEPPARA/JEANS" class="img" />
        <img src={img37} alt="STEPPARA/JEANS" class="img" />
      </div>
      <div class="cloth-name-price">
        <span class="name">FLOWY LINEN PANTS</span>
        <span class="price">35.90 USD</span>
      </div>
    </div>
  </div>
</div>

<div class="sec-2">
  <div class="img-wrap-3">
    <img src={img44} alt="STEPPARA/kids" class="img-sec1" />
    <img src={img43} alt="STEPPARA/kids" class="img-sec1" />
    <img src={img17} alt="STEPPARA/kids" class="img-sec1" />
  </div>
</div>
<div class="sec-3">
  <div class="img-wrap-3">
    <img src={img34} alt="STEPPARA/kids" class="img-sec1" />
    <img src={img22} alt="STEPPARA/kids" class="img-sec1" />
    <img src={img48} alt="STEPPARA/kids" class="img-sec1" />
  </div>
</div>
   </section>
   <div class="footer1 animate">
               <h1 class="infinit-words">
                  Steppara's collection of women's outerwear presents trends and timeless pieces to complement and enhance any outfit throughout the year. In fact, they can even take on the most important role in the look, as they are the most visible piece of clothing and therefore make the most important first impression.Steppara's collection of women's outerwear presents trends and timeless pieces to complement and enhance any outfit throughout the year. In fact, they can even take on the most important role in the look, as they are the most visible piece of clothing and therefore make the most important first impression.
               </h1>
            </div>

   <footer class="slide section-slide10" id="TOP">
      <div class="footer-wrapper">
         <div class="slide1 footer" id="grain1">

            <div class="footer1 copyright">
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
                     <li>COOKIES AND AD PREFERANCES</li>
                     <li>PRIVACY AND COOKIES POLICY</li>
                     <li>TERMS OF USE</li>
                     <li> back home &mdash; double tap</li>
                  </ul>
            </div>
            <div class="yearLogo">
               <span class="year">© 2023 STEPPARA America, Inc. All Rights Reserved</span>
            </div>
         </div>
      </div>
   </footer>
    </div>
  )
}
