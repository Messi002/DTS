

import React from 'react'
import HeaderBar from '../../common/components/header'
import styles from './styles.module.css';
import photo from '../../assets/images/userImg.png'
import TextAndData from './components/textAndData';


export default function AccountDetails() {

  const data = [
    { id: 1, title: "company Name", content: "IT Staffing Agency", },
    { id: 2, title: "Email Address", content: "ISoumitro Sobuj@gmail.com", },
    { id: 3, title: "contact number", content: "+316 12 34 56 78", },
    { id: 4, title: "Address", content: "1368 Hayhurst lane.", },
    { id: 5, title: "Country", content: "United states", },
    { id: 6, title: "City", content: "Mcallen", },
    { id: 7, title: "State", content: " New york", },
    { id: 8, title: "Zip code", content: "11357", },
  ];
  return (
    <div className={styles.content}>
    {/* Header here... */}

<HeaderBar showGreetings={true} showWelcome={false} bigText="Account Details" />
    
    
    <main className={styles.main}> 
    {/* SECTION 1 */}
    <section className={styles.section1}> 
<div>
<img src={photo} alt="user" className={styles.section1__user_photo} />


</div>
<div>
<span className={styles.section1__user_name}>Soumitro Sobuj</span>
<br/>
 <span className={styles.section1__user_desc}>Lorem ipsum dolor</span>
                           
</div>
                                
 
     </section>


    <div className={styles.section2}> 
    {/* start */}
    
<TextAndData data = {data}/>

    
    
    {/* end */}
     </div>
    <div className={styles.section3}> 
  
     </div>
    </main>
</div>

  )
}
