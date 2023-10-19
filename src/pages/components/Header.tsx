import React from 'react'
import Styles from './Header.module.css'
import Image from 'next/image'
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineCalendar, AiOutlineDown, AiOutlineClose } from "react-icons/ai"
import { RxHamburgerMenu, RxPerson } from "react-icons/rx"
import { MdOutlineDiscount } from "react-icons/md"

const Header = () => {
  const listHeader = [
    "ตั๋วเครื่องบิน + ที่พัก",
    "ที่พัก",
    "ตั๋วเครื่องบิน",
    "คูปองส่วนลด + ข้อเสนอพิเศษ",
    "บริการรับส่งสนามบิน",
    "กิจกรรม",
  ]

  const HeaderMain = () => {
    return (
      <nav className={Styles.container_navbar}>
        <div className={Styles.header_left}>
          <div className={Styles.header_left_logo}>
            <a href='#' className={Styles.heading_a}>
              <Image 
              src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" 
              alt="logo"
              width={89}
              height={37}/>
            </a>
          </div>
          <ul className={Styles.heading_ul}>
            {listHeader.map((item, index) => (
              <li key={index} className={Styles.heading_li}><a href='#' className={Styles.heading_a}>{item}</a></li>
            ))}
          </ul>
        </div>
        <div className={Styles.header_right}>
          <div className={Styles.heading_right_thai}>
            <Image
            src="https://cdn6.agoda.net/images/mobile/flag-th@2x.png"
            alt='thai'
            width={26}
            height={20}/>
          </div>
          <div className={Styles.heading_right_bath}>
            <span>฿</span>
          </div>
          <button className={Styles.heading_right_button}>
            เข้าสู่ระบบ
          </button>
          <button className={Styles.heading_right_button}>
            สร้างบัญชีผู้ใช้
          </button>
          <div className={Styles.header_right_cart}>
            <AiOutlineShoppingCart/>
          </div>
          <button className={Styles.heading_right_button}>
            <RxHamburgerMenu/>
          </button>
        </div>
      </nav>
    )
  }

  const Navbar = () => {
    return(
      <nav className={Styles.container_navbarmain}>
        <div className={Styles.navbar_box}>
          <div className={Styles.navbar_logo}>
            <AiOutlineSearch/>
          </div>
          <div className={Styles.navbar_1_des}>
            <span>พัทยา</span>
            <span className={Styles.navbar_1_des_2}>ที่พักว่าง 3,471 แห่ง</span>
          </div>
        </div>
        <div className={Styles.navbar_box}>
          <div className={Styles.navber_flex_box}>
            <div className={Styles.navbar_logo}>
              <AiOutlineCalendar/>
            </div>
            <div className={Styles.navbar_2_des}>
              <span>1 ต.ค. 2023</span>
              <span className={Styles.navbar_2_des_2}>อาทิตย์</span>
            </div>
          </div>
          <div className={Styles.navbar_line}></div>
          <div className={Styles.navber_flex_box}>
            <div className={Styles.navbar_logo}>
            <AiOutlineCalendar/>
            </div>
            <div className={Styles.navbar_2_des}>
              <span>2 ต.ค. 2023</span>
              <span className={Styles.navbar_2_des_2}>จันทร์</span>
            </div>
          </div>
        </div>
        <div className={Styles.navbar_box}>
            <div className={Styles.navbar_logo}>
              <RxPerson/>
            </div>
            <div className={Styles.navbar_2_des}>
              <span>ผู้ใหญ่ 2 คน</span>
              <span className={Styles.navbar_2_des_2}>1 ห้อง</span>
            </div>
            <div className={Styles.navbar_logo_small}>
              <AiOutlineDown/>
            </div>
        </div>
        <div className={Styles.navbar_box_button}>
        <button className={Styles.navbar_button}>
          ค้นหา
        </button>
        </div>
      </nav>
    );
  }

  const Ads1 = () => {
    return(
      <div className={Styles.container_ads}>
        <div className={Styles.ads_flex}>
          <div className={Styles.ads_logo}>
            <MdOutlineDiscount/>
          </div>
          <div className={Styles.ads_des}>
            <span className={Styles.ads_des_1}>อยากจองในราคาถูกลงไหม</span>
            <span className={Styles.ads_des_2}>ไปที่หน้าเพจส่วนลดใหม่ของเราได้เลย! เรามีส่วนลดและข้อเสนอมากมายให้เลือก</span>
          </div>
          <button className={Styles.ads_btn}>ไปที่หน้าส่วนลด</button>
          <div className={Styles.ads_logo}>
            <AiOutlineClose/>
          </div>
        </div>
      </div>
    );
  }

  return(
    <div>
      <div className={Styles.container_header}>
      <HeaderMain/>
      <Navbar/>
      <Ads1/>
      </div>
    </div>
  );
}

export default Header