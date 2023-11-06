import React from 'react';
import './Last.css';
import About from '../Images/About-pro.jpg';


function Last(){
    return(

<>

<div class="flex-container">
  <div class="row">
    <div class="item-row-a">They talk about us</div>
    <div class="item-row-b"><img src={About} alt="Example" /></div>
  </div>
  <div class="row">
    <div class="item-row-c"></div>
    <div class="item-row-d">
        <h3>
        Does the school hold PTM on regular basis?
        </h3>
        <div>
            <p>Yes, the school and parents together can only support the child to grow in </p><p>a desired way. Hence it holds PTMs regularly and welcome parent’s</p> 
            <p>suggestions.</p>
        </div>
        <div>
        <h3>Subhranil Maity</h3>

CEO oF CREASUNX
        </div>
    </div>
  </div>
</div>
</>
    );
}

export default Last;