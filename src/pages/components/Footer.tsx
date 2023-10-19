import React from 'react'
import Styles from './Footer.module.css'
import Image from 'next/image'

const List_1 = [
  "ขอความช่วยเหลือ",
  "คำถามที่พบบ่อย",
  "นโยบายความเป็นส่วนตัว",
  "นโยบายเกี่ยวกับคุ้กกี้",
  "ข้อกำหนดการใช้งาน",
  "จัดการการตั้งค่าคุกกี้"
]

const Footer = () => {
  return (
    <div className={Styles.container_ft}>
      <div className={Styles.ft_1_flex}>
        <div>
          <h6 className={Styles.ft_1_topic}>ความช่วยเหลือ</h6>
          <ul className={Styles.ft_1_box}>
            {List_1.map((item, index) => (
              <li className={Styles.ft_1_li} key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className={Styles.ft_1_topic}>ความช่วยเหลือ</h6>
          <ul className={Styles.ft_1_box}>
            {List_1.map((item, index) => (
              <li className={Styles.ft_1_li} key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className={Styles.ft_1_topic}>ความช่วยเหลือ</h6>
          <ul className={Styles.ft_1_box}>
            {List_1.map((item, index) => (
              <li className={Styles.ft_1_li} key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className={Styles.ft_1_topic}>ความช่วยเหลือ</h6>
          <ul className={Styles.ft_1_box}>
            {List_1.map((item, index) => (
              <li className={Styles.ft_1_li} key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className={Styles.ft_1_topic}>ความช่วยเหลือ</h6>
          <ul className={Styles.ft_1_box}>
            {List_1.map((item, index) => (
              <li className={Styles.ft_1_li} key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={Styles.ft_2_flex}>
        <div className={Styles.ft_2_text}>
          <span>Copyright © 2005 – 2023 Agoda Company Pte. Ltd. สงวนลิขสิทธิ์ตามกฎหมาย</span>
          <span>Agoda เป็นส่วนหนึ่งของ Booking Holdings Inc. ผู้ให้บริการการท่องเที่ยวออนไลน์และบริการที่เกี่ยวข้องชั้นนำระดับโลก</span>
        </div>
        <div className={Styles.ft_2_logo}>
         <Image src={"https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"} alt='agoda' width={144} height={48}/> 
         <Image src={"https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"} alt='agoda' width={144} height={48}/> 
         <Image src={"https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"} alt='agoda' width={144} height={48}/> 
         <Image src={"https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"} alt='agoda' width={144} height={48}/> 
         <Image src={"https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"} alt='agoda' width={144} height={48}/> 
        </div>
      </div>
    </div>
  )
}

export default Footer