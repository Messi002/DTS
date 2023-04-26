import {useState} from "react";
import { BsTrash,BsEye } from 'react-icons/bs'
import {  BiDotsHorizontalRounded } from 'react-icons/bi';
import './style.css';



export default function HomeTable(props) {
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
          props.data.forEach((item) => {
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
   
        <th>Order Id</th>
        <th>Name</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Action</th>
    
      </tr>
    </thead>
    <tbody className="table__body">
      {props.data.map((item, index) => (
       
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
  )
}
