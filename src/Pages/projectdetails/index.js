
import React from 'react'
import HeaderBar from '../../common/components/header'
import styles from './styles.module.css';
import user1 from '../../assets/images/user1.jpg'
import user2 from '../../assets/images/user2.jpg'
import user3 from '../../assets/images/user3.jpg'
import {RiLoader3Line} from 'react-icons/ri';


export default function ProjectDetails() {

  return (
    <div className={styles.content}>
    {/* Header here... */}

<HeaderBar showGreetings={false} showWelcome={false} bigText="Hello, Sobuj" smallText = "Welcome Back!"/>
    
    
    <main className={styles.main}> 
    {/* SECTION 1 */}
    <section className={styles.section1}> 
 <p>Projects &gt; <span>Project Details</span></p> 
 <p>Create Component <span>Button Web</span></p> 
 <br/>
 <br/>

<div className={styles.section__main_info}>
  <div className={styles.leftSide}>Status:</div>
  <div className={styles.rightSide + ' ' + styles.textColor} >Completed</div>
</div>

<div className={styles.section__main_info}>
  {/* 
margin-right:auto,
align-items:center
justify-contents: space-between
*/}
  <div className={styles.leftSide}>Team:</div>
  <div className={styles.rightSide + ' ' + styles.devTeam}>
    <img src={user1} alt='dev team' className={styles.devPhoto}/>
    <img src={user2} alt='dev team' className={styles.devPhoto}/>
    <img src={user3} alt='dev team' className={styles.devPhoto}/>
  </div>
</div>

<div className={styles.section__main_info}>
  <div className={styles.leftSide}>Due Date:</div>
  <div className={styles.rightSide}>Nov 30, 2022</div>
</div>

<div  className={styles.section__main_info}>
  <div className={styles.leftSide}>Label:</div>
  <div className={styles.rightSide}>
  <div className={styles.section1__main_label}>Urgent</div>
  <div className={styles.section1__main_label}>Design System</div>

  <div className={styles.section1__main_label}>UI / UX</div>

  <div className={styles.section1__main_label}>Add Label +</div>

  </div>
</div>
 
     </section>


    <section className={styles.section2}> 
    {/* start */}
    <p>Description</p>

    <div className={styles.section2__box}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum 
    pretium mollis. Suspendisse convallis vitae ipsum id maximus. Phasellus non
     purus gravida, ullamcorper ex ut, tristique turpis. In a euismod tellus. 
     Donec vel lorem a elit maximus semper. Pellentesque metus dui, feugiat et 
     mauris sed, efficitur rhoncus sem. Vestibulum rhoncus placerat
      venenatis. Nullam porta malesuada commodo. Aenean imperdiet 
      velit ultricies, egestas nulla at, commodo purus. Pellentesque
       placerat quam sed est scelerisque eleifend. Proin nec dapibus magna.
        Curabitur pretium turpis ut velit eleifend, vitae tincidunt velit scelerisque.
    </div>
    
    
    {/* end */}
     </section>
    <section className={styles.section3}> 
  
  <div className={styles.section3__box + ' ' + styles.box1}>
  <RiLoader3Line className={styles.section3__icon}/>
<span>percentage completion</span>
  </div>


  <div className={styles.section3__box + ' ' + styles.box2}>
  <RiLoader3Line className={styles.section3__icon}/>
  <span>Overall progress</span>

  </div>
     </section>
    </main>
</div>

  )
}


