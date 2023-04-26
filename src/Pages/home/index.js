import {useState} from "react";
import './style.css';
import { BsTrash,BsEye } from 'react-icons/bs';
import {  BiDotsHorizontalRounded } from 'react-icons/bi';
import {  HiDotsVertical } from 'react-icons/hi'
import {RiLoader3Line} from 'react-icons/ri';
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import btmImg from '../../assets/images/home_bottom_img.png'
import HeaderBar from "../../common/components/header/index";



function Home() {
    const data = [
        { id: 1, column1: "Data 1", column2: "Data 2", column3: "Data 3", column4: "Data 4", column5: "Data 5", column6: "Data 6", column7: "Data 7" },
        { id: 2, column1: "Data 1", column2: "Data 2", column3: "Data 3", column4: "Data 4", column5: "Data 5", column6: "Data 6", column7: "Data 7" },
        { id: 3, column1: "Data 1", column2: "Data 2", column3: "Data 3", column4: "Data 4", column5: "Data 5", column6: "Data 6", column7: "Data 7" },
        { id: 4, column1: "Data 1", column2: "Data 2", column3: "Data 3", column4: "Data 4", column5: "Data 5", column6: "Data 6", column7: "Data 7" },
        { id: 5, column1: "Data 1", column2: "Data 2", column3: "Data 3", column4: "Data 4", column5: "Data 5", column6: "Data 6", column7: "Data 7" },
      ];
    return (
        <div className="container">
           
            <div className="content">
                {/* Header here... */}

<HeaderBar showGreetings={true} showWelcome={true} bigText="Hello, Sobuj" smallText = "Welcome Back!"/>
                <main className="main"> 
                {/* SECTION 1: CARDS */}
                <section className="section1"> 
             <Card text1 ="Total Sales" text2 ="$13.000" text3 ="50% This week" img= {img1} />
             <Card text1 ="Total Profit" text2 ="$232.40" text3 ="60% This week" img= {img2} />
             <Card text1 ="Total Order" text2 ="600+" text3 ="50% This week" img= {img3} />
                
                 </section>
                <div className="section2"> 
                {/* start */}
                
                <Table data={data} />
                <a href="###" className="table-button">View More  &gt;</a>   

                
                
                {/* end */}
                 </div>
                <div className="section3"> 
                <div className="bottom">
                    <div className="bottom__left-section">
                        <p>How Can We Help You?</p>
                        <p className="text2" >Please get in touch and our expert support team will </p>
                        <p className="text2" style={{lineHeight:"1px"}}>answer all your questions.</p>
                        <button>Contact Us</button>
                    </div>
                    <div className="bottom__right-section">
                        <img src={btmImg} alt="bottom_img"/>
                    </div>
                </div>
                 </div>
                </main>
            </div>



        </div>
    );
}

export default Home;






const Card = (props) =>{
    return (
        <div className="card">
        <div className="card__left-section">
           <div className="card__left-section_img">
            <img src= {props.img} alt="card_image" style={{width:'1.5rem', height: "1.5rem"}}/>
           </div>
           <p >{props.text1}</p>
           <p>{props.text2}</p>
           <p>{props.text3}</p>
        </div>
        <div className="card__right-section">
                <div className="card__right-section-more"> 
                    <HiDotsVertical style={{color:" #A7A7A7"}}/>
                </div>
            <RiLoader3Line className="card__right-section-icon"/>
        </div>
    </div>
    );
}

// this is the table here
const Table = ({ data }) => {
    const [checkedItems, setCheckedItems] = useState({});
    const [allChecked, setAllChecked] = useState(false);
  
    const handleCheck = (id) => {
      setCheckedItems({
        ...checkedItems,
        [id]: !checkedItems[id],
      });
    };

    const handleCheckAll = () => {
        setAllChecked(!allChecked);
        if (!allChecked) {
          const newCheckedItems = {};
          data.forEach((item) => {
            newCheckedItems[item.id] = true;
          });
          setCheckedItems(newCheckedItems);
        } else {
          setCheckedItems({});
        }
      }

    return (
        
      <table className="table">
        <thead className="table__head">
          <tr className="table__head-row">
        
                <th  className="table__head-box">
                <input type="checkbox" checked={allChecked} onChange={handleCheckAll} className="checkbox-green"  id="check-all"/> 
                <label htmlFor="check-all"></label>          
                     </th>
       
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
            <th>Column 6</th>
        
          </tr>
        </thead>
        <tbody className="table__body">
          {data.map((item, index) => (
           
            // <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#F5F5F5 grey" : "#ffffff white" }}>
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#F5F5F5" : "#ffffff"}}>
              <td>
              <input type="checkbox" id={`check-${item.id}`} className="checkbox-green" checked={checkedItems[item.id]} onChange={() => handleCheck(item.id)} />                <label htmlFor={`check-${item.id}`}></label>
              </td>
              <td>{item.column2}</td>
              <td>{item.column3}</td>
              <td>{item.column4}</td>
              <td>{item.column5}</td>
              <td><div className={checkedItems[item.id] ? "table__body-completed" : "table__body-uncompleted"}>Completed</div></td>
              <td className="table_body-row-icon"><BsEye /><BsTrash style={{marginLeft:"5px", marginRight:"5px"}}/><BiDotsHorizontalRounded/></td>
            </tr>
          ))}
         
        </tbody>
      </table>
      
    );
  };