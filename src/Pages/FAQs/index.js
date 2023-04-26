

import React from 'react'
import HeaderBar from '../../common/components/header'
import styles from './styles.module.css';
import Accordion from './components/accordion';
import faqs from '../../assets/images/faqs.png'

export default function FAQs() {
  const data = [
    { id: 1, title: "Why is the moon sometimes out during the day?", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum pretium mollis. Suspendisse convallis vitae ipsum id maximus. Phasellusnon purus gravida, ullamcorper ex ut, tristique turpis. In a euismod tellus.",  },
    { id: 2, title: "WWhat is the most important immediate action?", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum pretium mollis. Suspendisse convallis vitae ipsum id maximus. Phasellusnon purus gravida, ullamcorper ex ut, tristique turpis. In a euismod tellus.",  },
    { id: 3, title: "Where does it come from?", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum pretium mollis. Suspendisse convallis vitae ipsum id maximus. Phasellusnon purus gravida, ullamcorper ex ut, tristique turpis. In a euismod tellus.",  },
    { id: 4, title: "What is the most likely cause of his red eye?", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum pretium mollis. Suspendisse convallis vitae ipsum id maximus. Phasellusnon purus gravida, ullamcorper ex ut, tristique turpis. In a euismod tellus.",  },
    { id: 5, title: "How many variations exist?", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum pretium mollis. Suspendisse convallis vitae ipsum id maximus. Phasellusnon purus gravida, ullamcorper ex ut, tristique turpis. In a euismod tellus.",  },
    { id: 6, title: "What is the most investigation?", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum pretium mollis. Suspendisse convallis vitae ipsum id maximus. Phasellusnon purus gravida, ullamcorper ex ut, tristique turpis. In a euismod tellus.",  },
    { id: 7, title: "When can be used?", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum pretium mollis. Suspendisse convallis vitae ipsum id maximus. Phasellusnon purus gravida, ullamcorper ex ut, tristique turpis. In a euismod tellus.",  },
  
  ];  return (
    <div className={styles.content}>
    {/* Header here... */}

<HeaderBar showGreetings={true} showWelcome={false} bigText="FAQs" />
    
    
    <main className={styles.main}> 
    {/* SECTION 1: CARDS */}
    <section className={styles.section1}> 
    
    <p>Home &gt; <span> FAQs</span></p> 
     </section>


  <div className={styles.Containing2And3}>
  <section className={styles.section2}>
    <p>Frequently Asked Questions</p> 
   <br/>
   <br/>

 
    {/* start */}
    <Accordion data = {data} />


    
    
    {/* end */}
     </section>
    <section className={styles.section3}> 
  <img src={faqs} alt='questions'/>
     </section>
  </div>
    </main>
</div>

  )
}
