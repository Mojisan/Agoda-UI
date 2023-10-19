import React from 'react'
import Styles from './Sidebar.module.css'
import { MdLocationOn, MdKeyboardArrowDown, MdFamilyRestroom, MdPets } from "react-icons/md"
import { AiOutlineSearch, AiOutlineTransaction,  } from "react-icons/ai"
import { SlLocationPin } from "react-icons/sl"
import { VscSettings } from "react-icons/vsc"
import { HiOutlineUserGroup } from "react-icons/hi"
import { GiHandBag } from "react-icons/gi"

const List_1 = ["สปา/ซาวน่า",
                "ห้องออกกำลังกาย/ฟิตเนส",
                "สระว่ายน้ำ",
                "รวมอาหารเช้า",
                "ยกเลิกการจองฟรี",
                "ไม่ต้องใช้บัตรเครดิตในการจอง"
               ]

const List_2 = ["คอนโด/อพาร์ตเมนต์ (774)",
                "เซอร์วิส อพาร์ตเมนต์ (130)",
                "โรงแรม (1072)",
                "รีสอร์ต (163)",
                "เกสต์เฮาส์/เบด แอนด์ เบรคฟาสต์ (98)",
                "โมเต็ล (2)",
                "โฮสเทล (30)",
                "โฮมสเตย์ (4)"
]

const List_3 = ["ที่พักใส่ใจความยั่งยืนด้านการเดินทาง",
]

const List_line = () => {
  return(
    <div className={Styles.ft_line}></div>
  );
}

const Filter_1 = () => {
  return(
    <div className={Styles.ft_grid}>
      <div className={Styles.ft1_map_bg}>
        <MdLocationOn/>
        <span className={Styles.ft1_map_des}>ค้นหาที่พักบนแผนที่</span>
      </div>
      <div className={Styles.ft1_search}>
        <AiOutlineSearch/>
        <input type="text" placeholder='ใส่คำค้นหา' className={Styles.ft1_search_input}/>
      </div>
      <div>
        <h5>ราคาต่อคืน</h5>
        {/* <input type="range" id="slider" name="slider" min="0" max="100"/> */}
        <div className={Styles.ft1_price_flex}>
          <div className={Styles.ft1_price_box}>
            <h6>ราคาเริ่มต้น</h6>
            <input type='number' className={Styles.ft1_price_input}/>
          </div>
          <div className={Styles.ft1_price_box}>
            <h6>สูงสุด</h6>
            <input type='number' className={Styles.ft1_price_input}/>
          </div>
        </div>
      </div>
    </div>
  );
}

const Filter_2 = () => {
  return(
    <div className={Styles.ft_grid}>
      <h5>ตัวกรองยอดนิยมสำหรับที่พักในพัทยา</h5>
      <ul className={Styles.ft_cb_grid}>
      {List_1.map((item, index) => (
        <li key={index} className={Styles.ft_cb_size}>
          <input type='checkbox'/> 
          <span className={Styles.ft_cb_des}>{item}</span>
        </li>
      ))}
      </ul>
    </div>
  );
}

const Filter_3 = () => {
  return(
    <div className={Styles.ft_grid}>
      <h5>มองหาที่พักแบบใดเป็นพิเศษอยู่หรือเปล่า?</h5>
      <div>
        <button className={Styles.ft_button_2}>
          <span className={Styles.ft_icon_2_rp}><HiOutlineUserGroup/></span>
          <span>เหมาะกับการเข้าพักเป็นกลุ่ม</span>
        </button>
        <button className={Styles.ft_button_2}>
          <span className={Styles.ft_icon_2_rp}><MdFamilyRestroom/></span>
          <span>เหมาะกับครอบครัว</span>
        </button>
        <button className={Styles.ft_button_2}>
          <span className={Styles.ft_icon_2_rp}><GiHandBag/></span>
          <span>เหมาะกับการทำงานนอกสถานที่</span>
        </button>
        <button className={Styles.ft_button_2}>
          <span className={Styles.ft_icon_2_rp}><MdPets/></span>
          <span>นำสัตว์เลี้ยงเข้าพักได้</span>
        </button>
      </div>
    </div>
  );
}

const Filter_4 = () => {
  return(
    <div className={Styles.ft_grid}>
      <h5>ตัวกรองยอดนิยมสำหรับที่พักในพัทยา</h5>
      <ul className={Styles.ft_cb_grid}>
        {List_2.map((item, index) => (
          <li key={index} className={Styles.ft_cb_size}>
          <input type='checkbox'/> 
          <span className={Styles.ft_cb_des}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Filter_5 = () => {
  return(
    <div className={Styles.ft_grid}>
      <h5>การเดินทางแบบยั่งยืน</h5>
      <ul className={Styles.ft_cb_grid}>
        {List_3.map((item, index) => (
          <li key={index} className={Styles.ft_cb_size}>
          <input type='checkbox'/> 
          <span className={Styles.ft_cb_des}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 

const Filter_Rp = () => {
  return(
    <div className={Styles.ft_rp}>
      <div className={Styles.ft_1_rp}>
        <div className={Styles.ft_bar_rp}>
          <button className={Styles.ft_button_rp}>
            <span>พัทยา (3473)</span>
            <span className={Styles.ft_icon_rp}><AiOutlineSearch/></span>
          </button>
        </div>
        <button className={Styles.ft_button_icon_rp}>
          <AiOutlineTransaction/>
          <span className={Styles.ft_des_button_rp}>THB</span>
        </button>
        <button className={Styles.ft_button_icon_rp}>
          <SlLocationPin/>
          <span className={Styles.ft_des_button_rp}>แผนที่</span>
        </button>
      </div>
      <div className={Styles.ft_2_rp}>
        <button className={Styles.ft_button_2_rp}>
          <span className={Styles.ft_icon_2_rp}><VscSettings/></span>
          <span>กรองผล</span>
        </button>
        <button className={Styles.ft_button_2_rp}>
          <span>เรียงผลการค้นหา</span>
          <span className={Styles.ft_icon_2_rp}><MdKeyboardArrowDown/></span>
        </button>
        <button className={Styles.ft_button_2_rp}>
          <span>บ้านและอพาร์ตเมนต์</span>
        </button>
        <button className={Styles.ft_button_2_rp}>
          <span>ข้อเสนออัปเกรด</span>
        </button>
        <button className={Styles.ft_button_2_rp}>
          <span>อาหารเช้า</span>
        </button>
      </div>
    </div>
  );
}

const Sidebar = () => {
  return (
    <div className={Styles.container_ft}>
      <Filter_Rp/>
      <Filter_1/>
      <List_line/>
      <Filter_2/>
      <List_line/>
      <Filter_3/>
      <List_line/>
      <Filter_4/>
      <List_line/>
      <Filter_5/>
    </div>
  )
}

export default Sidebar