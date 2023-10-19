import React from 'react'
import Styles from './Main.module.css'
import Image from 'next/image';
import { AiFillStar, AiFillFlag } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'
import { ST } from 'next/dist/shared/lib/utils';

const List_Feed = [
  {
    pic: "https://pix8.agoda.net/hotelImages/5828735/-1/f3f901ea4d8f9279b1978d94212d59e6.jpg?ce=0&s=450x450",
    src: [
      "https://pix8.agoda.net/hotelImages/5828735/-1/3f797225e71a71abbfabd1b3187e2b6f.jpg?ca=7&ce=1&s=100x100",
      "https://pix8.agoda.net/hotelImages/5828735/-1/29ff1b45145021fa57c49076d05cc58c.jpg?ca=7&ce=1&s=100x100",
      "https://pix8.agoda.net/hotelImages/582/5828735/5828735_19062610090076817808.jpg?ca=9&ce=1&s=100x100",
      "https://pix8.agoda.net/hotelImages/5828735/-1/2d2acdada771080d7b6e316222cb14e1.jpg?ca=7&ce=1&s=100x100"
    ],
    alt: "Hotel1",
    name: "เซ็นเตอร์พอยต์ ไพรม์ โฮเต็ล พัทยา (SHA Extra Plus) (Centre Point Prime Hotel Pattaya (SHA Extra Plus))",
    year: 2021,
    /* rate: 5, */
    location: "นาเกลือ/บางละมุง, พัทยา - 2.7 กม. จากใจกลางเมือง",
    filter: ["อาหารเช้า", "ฟิตเนสเซนเตอร์"],
    latest: 3,
    grade: "ดีเยี่ยม",
    review: "14,357",
    score: "8.7",
    vacant: 1,
    price: "1,384"
  },
  {
    pic: "https://pix8.agoda.net/hotelImages/5828735/-1/f3f901ea4d8f9279b1978d94212d59e6.jpg?ce=0&s=450x450",
    src: [
      "https://pix8.agoda.net/hotelImages/5828735/-1/3f797225e71a71abbfabd1b3187e2b6f.jpg?ca=7&ce=1&s=100x100",
      "https://pix8.agoda.net/hotelImages/5828735/-1/29ff1b45145021fa57c49076d05cc58c.jpg?ca=7&ce=1&s=100x100",
      "https://pix8.agoda.net/hotelImages/582/5828735/5828735_19062610090076817808.jpg?ca=9&ce=1&s=100x100",
      "https://pix8.agoda.net/hotelImages/5828735/-1/2d2acdada771080d7b6e316222cb14e1.jpg?ca=7&ce=1&s=100x100"
    ],
    alt: "Hotel1",
    name: "เซ็นเตอร์พอยต์ ไพรม์ โฮเต็ล พัทยา (SHA Extra Plus) (Centre Point Prime Hotel Pattaya (SHA Extra Plus))",
    year: 2021,
    /* rate: 5, */
    location: "นาเกลือ/บางละมุง, พัทยา - 2.7 กม. จากใจกลางเมือง",
    filter: ["อาหารเช้า", "ฟิตเนสเซนเตอร์"],
    latest: 3,
    grade: "ดีเยี่ยม",
    review: "14,357",
    score: "8.7",
    vacant: 1,
    price: "1,384"
  },
]

const List_Card = [
  {
    topic : "วันเข้าพักที่เลือก",
    date : "20 ต.ค. - 21 ต.ค.",
    day : "ศ. - ส.",
    price : "1,415",
  },
  {
    topic : "พักวันนี้ราคาถูกกว่า!",
    date : "25 ต.ค. - 26 ต.ค.",
    day : "พ. - พฤ.",
    price : "1,311"
  },
  {
    topic : "วันเข้าพักที่เลือก",
    date : "20 ต.ค. - 21 ต.ค.",
    day : "ศ. - ส.",
    price : "1,415",
  },
  {
    topic : "พักวันนี้ราคาถูกกว่า!",
    date : "25 ต.ค. - 26 ต.ค.",
    day : "พ. - พฤ.",
    price : "1,311"
  },
]

/* const Rate_Star = (rate:number) => {
  let textRate:string = "";
  for(let i = 1; i <= rate; i++) {
    textRate += <AiFillStar/>
  }

  return textRate;
} */

const Resize_Pic = (src:string, alt:string) => {
  return(
    <div>
      <Image src={src} className={Styles.fd_pic1_more} alt={alt} width={280} height={180}/>
      <Image src={src} className={Styles.fd_pic1_992} alt={alt} width={210} height={135}/>
      <Image src={src} className={Styles.fd_pic1_768} alt={alt} width={240} height={190}/>
      <Image src={src} className={Styles.fd_pic1_576} alt={alt} width={180} height={190}/>
    </div>
  );
}
const Resize_SmPic = (src:string, alt:string) => {
  return(
    <div>
      <Image src={src} className={Styles.fd_pic1_more} alt={alt} width={70} height={45}/>
      <Image src={src} className={Styles.fd_pic1_992} alt={alt} width={52.5} height={33}/>
    </div>
  );
}

const Filter_Bar = () => {
  return(
    <div className={Styles.ft_bar}>
      <div className={Styles.ft_bar_des}>
        <span>เรียงผลตาม</span>
      </div>
      <div className={Styles.ft_bar_btn_flex}>
        <button className={Styles.ft_bar_btn}>
          <span>ที่พักแนะนำตรงใจ</span>
        </button>
        <div className={Styles.ft_bar_line}></div>
        <button className={Styles.ft_bar_btn}>
          <span>คะแนนรีวิวดีที่สุด</span>
        </button>
        <div className={Styles.ft_bar_line}></div>
        <button className={Styles.ft_bar_btn}>
          <span>ราคาต่ำสุดก่อน</span>
        </button>
        <div className={Styles.ft_bar_line}></div>
        <button className={Styles.ft_bar_btn}>
          <span>ระยะทาง</span>
        </button>
      </div>
    </div>
  );
}

const Feed = () => {
  return(
    <div className={Styles.fd_container}>
      {List_Feed.map((items, index) => (
        <div className={Styles.fd_box} key={index}>
          <div className={Styles.fd_gal}>
            <div className={Styles.fd_pic1}>
              {Resize_Pic(items.pic, items.alt)}
            </div>
            <div className={Styles.fd_src}>
              {items.src.map((item, i) => (
                <div key={i}>
                  {Resize_SmPic(item, items.alt)}
                </div>
              ))}
            </div>
          </div>
          <div className={Styles.fd_des}>
            <div className={Styles.fd_head}>
              <h3 className={Styles.fd_h_year}>{items.year}</h3>
              <h3>{items.name}</h3>
            </div>
            <div className={Styles.fd_arc2}>
              {/* {Rate_Star(items.rate)} */}
              <div className={Styles.fd_loc}>
                <FaLocationDot/>
                <span className={Styles.fd_loc_text}> {items.location}</span>
              </div>
            </div>
            <div className={Styles.fd_arc2}>
              <span className={Styles.fd_des_arc2}>ที่พักนี้มีบริการ</span>
              <div className={Styles.fd_box_flex_arc2}>
                {items.filter.map((item, i) => (
                  <div key={i} className={Styles.fd_box_arc2}>
                    {item}
                  </div>
                ))}
              </div>
              <div className={Styles.fd_latest}>
                <AiFillFlag/>
                <span className={Styles.fd_latest_text}>ฮอตสุดๆ มีคนจองล่าสุดเมื่อ {items.latest} ชั่วโมงก่อน</span>
              </div>
            </div>
          </div>
          <div className={Styles.fd_right}>
            <div className={Styles.fd_des_flex}>
              <div className={Styles.fd_des_flex2}>
                <span className={Styles.fd_grade}>{items.grade}</span>
                <span className={Styles.fd_review}>{items.review} รีวิว</span>
              </div>
              <div className={Styles.fd_score}>
                {items.score}
              </div>
            </div>
            <div className={Styles.fd_des_flex3}>
              <span className={Styles.fd_vacant}>ราคานี้เหลืออีก {items.vacant} ห้อง</span>
              <span className={Styles.fd_price}>฿ {items.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const Card = () => {
  return(
    <div className={Styles.cd_container}>
      <h3 className={Styles.cd_head}>ถ้าวันเข้าพักไม่ตายตัว ลองดูวันเข้าพักอื่นๆ เหล่านี้: 1 คืน ในพัทยา</h3>
      <div className={Styles.cd_flex}>
        {List_Card.map((item, index) => (
          <button key={index} className={Styles.cd_btn}>
            <div className={Styles.cd_topic}>
              <h6 className={Styles.cd_topic_text}>{item.topic}</h6>
            </div>
            <div className={Styles.cd_arc}>
              <span className={Styles.cd_date}>{item.date}</span>
              <span className={Styles.cd_day}>{item.day}</span>
              <span className={Styles.cd_price}>฿ {item.price}</span>
              <span className={Styles.cd_des}>ราคาเฉลี่ยต่อคืน</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

const NextPage = () => {
  return(
    <div className={Styles.np_container}>
      <button className={Styles.np_btn}>ย้อนกลับ</button>
      <span className={Styles.np_des}>หน้า 1 จาก 36</span>
      <button className={Styles.np_btn}>ถัดไป</button>
    </div>
  );
}

const Main = () => {
  return (
    <div className={Styles.container_main}>
      <Filter_Bar/>
      <Feed/>
      <Card/>
      <Feed/>
      <NextPage/>
    </div>
  )
}

export default Main