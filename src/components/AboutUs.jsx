import React from 'react';
import './About.css';
import fontimage from '../Images/fontimage.jpg';
import quote from '../Images/quote.png';
import Group from '../Images/Group.jpg';
import schoolA from '../Images/school-1.jpg';
import schoolB from '../Images/school-2.jpg';

import schoolC from '../Images/school-3.jpg';
import schoolD from '../Images/school-4.jpg';
import schoolE from '../Images/school-5.jpg';
import line from '../Images/Line.png';
import Rectangle from '../Images/Rectangle.jpg';
import Legacy from '../Images/Legacy.png';
import Mission from '../Images/Mission.jpg';
// import schoolF from '../Images/school-6.png';





function AboutUs() {
  return (
    <>
    <div className="about">
      
      {/* Add your About Us content here */}
      <h1 className="first"> ABOUT US </h1>
      <h3 className="first-1"> Our School's History</h3>
      <div className="first-2"><p>Railway Higher Secondary School also known as RHSS. The school was established in 1953. Railway Higher Secondary</p>
      <p> School is a Co-Ed school affiliated to Central Board of Secondary Education (CBSE) .</p></div>
    </div> 
    <div className="font">
    <img src={fontimage} alt="font-image" className="font-1" />
   
</div>
<img src={quote} alt="font-image" className="font-2" />

   {/* <div classname="quote">
   <p class="p1">Exploring our legency</p>
  <p class="p1">Discovering the rich history of </p>
  <p class="p1">Railway highersecondary</p>
  <p class="p1">school Alipurduar junction</p>
   </div> */}
  {/* legecy section */}

  
  

    
    
 
    
  
  
  

 
{/* <img src={line} alt="line-image" className="line"/> */}

{/* <img src={Rectangle} alt="line-image" className="Rectangle"/>
<img src={Legacy} alt="line-image" className="legacy"/> */}

<div>
<h3 className="mission-1">Our mission statement</h3>
<div className="mission-2">
    <p>Dentistry for Children believes that good dental health starts in infancy. Our dedicated pediatric dentists and teen</p>
    <p> dental specialists promote cavity prevention and good dental habits to help create a positive experience at an</p>
    <p> early age and into their adolescent years.</p>
</div>
<img src={Mission} alt="line-image" className="mission-img"/>

</div>
<div className="value">
<h3 className="mission-1">Our Values </h3>
<div className="mission-2">
<p>Dentistry for Children believes that good dental health starts in infancy. Our dedicated pediatric dentists and teen</p>
<p> dental specialists promote cavity prevention and good dental habits to help create a positive experience at an early</p>
<p> age and into their adolescent years.</p>

</div>
</div>



   


    
    
    
    </>
  );
}

export default AboutUs;