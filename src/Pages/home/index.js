import React from "react";
import './style.css';
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import btmImg from '../../assets/images/home_bottom_img.png'
import HeaderBar from "../../common/components/header/index";
import HomeCard from './components/card/index'
import HomeTable from './components/table/index'



function Home() {
    const data = [
        { id: 1,  column2: "#2540", column3: "Jordan Smith", column4: "31 July 2022", column5: "$62.00", },
        { id: 2,  column2: "#2540", column3: "Jordan Smith", column4: "31 July 2022", column5: "$62.00", },
        { id: 3,  column2: "#2540", column3: "Jordan Smith", column4: "31 July 2022", column5: "$62.00", },
        { id: 4,  column2: "#2540", column3: "Jordan Smith", column4: "31 July 2022", column5: "$62.00", },
        { id: 5,  column2: "#2540", column3: "Jordan Smith", column4: "31 July 2022", column5: "$62.00", },
      ];
    return (
        // <div className="container">
           
            <div className="content">
                {/* Header here... */}

<HeaderBar showGreetings={true} showWelcome={true} bigText="Hello, Sobuj" smallText = "Welcome Back!"/>
                
                
                <main className="main"> 
                {/* SECTION 1: CARDS */}
                <section className="section1"> 
                <HomeCard text1 ="Total Sales" text2 ="$13.000" text3 ="50% This week" img= {img1}/>
                 <HomeCard text1 ="Total Profit" text2 ="$232.40" text3 ="60% This week" img= {img2}/>
                 <HomeCard text1 ="Total Order" text2 ="600+" text3 ="50% This week" img= {img3}/> 
                 </section>


                <div className="section2"> 
                {/* start */}
                
                <HomeTable data = {data}/>
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



        // </div>
    );
}

export default Home;







