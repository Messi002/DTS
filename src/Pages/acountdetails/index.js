

import React from 'react'
import HeaderBar from '../../common/components/header'
import styles from './styles.module.css';
import photo from '../../assets/images/userImg.png'
import TextAndData from './components/textAndData';


export default function AccountDetails() {

  const data = [
  
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
