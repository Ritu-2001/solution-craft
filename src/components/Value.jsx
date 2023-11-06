import React from 'react';
import './Value.css';
import Box1 from '../Images/Box-1.jpg';
import Box2 from '../Images/Box-2.jpg';
import Box3 from '../Images/Box-3.jpg';
import Box4 from '../Images/Box-4.jpg';
import Box5 from '../Images/Box-5.jpg';
import choice1 from '../Images/choice1.png';
import choice2 from '../Images/choice2.png';
import choice3 from '../Images/choice3.png';
import choice4 from '../Images/choice4.png';
import choice5 from '../Images/choice5.png';
    import Ellipse1 from '../Images/Ellipse 1.jpg';
    import Ellipse2 from '../Images/Ellipse 2.jpg';
    import Ellipse3 from '../Images/Ellipse 3.jpg';





function Value(){
    return (
<>
<div classname="Box">
    

    
   <div class="row">
  <div class="Box-1">
  {/* <img src={Box1} alt="school-image" className="Box-image-1"  /> */}
  <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 200 200" fill="none">
  <rect x="1" y="1" width="198" height="198" fill="white" stroke="black" stroke-width="2"/>
  <path d="M163.13 36H36V163.13H163.13V36Z" fill="white"/>
  <g opacity="0.1">
    <path opacity="0.1" d="M163.12 160.12V163.12H160.12" stroke="#FFC700" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M154.35 163.12H41.8799" stroke="#FFC700" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M39 163.12H36V160.12" stroke="#FFC700" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M36 154.35V41.8799" stroke="#FFC700" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M36 39V36H39" stroke="#FFC700" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M44.7598 36H157.24" stroke="#FFC700" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M160.12 36H163.12V39" stroke="#FFC700" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M163.12 44.7598V157.24" stroke="#FFC700" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
  </g>
  <path d="M99 116.338C97.0535 116.347 95.1327 115.875 93.3952 114.962C91.6578 114.049 90.153 112.72 89.0046 111.085L81 115.868C81.3046 116.234 81.6652 116.544 82.0673 116.786L96.3113 125.327C97.1438 125.769 98.0652 126 99 126C99.9348 126 100.856 125.769 101.689 125.327L115.933 116.786C116.335 116.544 116.695 116.234 117 115.868L109.016 111C107.874 112.654 106.37 114.001 104.628 114.929C102.887 115.857 100.957 116.34 99 116.338Z" fill="#000745"/>
  <path d="M86.4673 103.449C86.4746 100.412 87.6548 97.485 89.7823 95.2261C91.9098 92.9672 94.8355 91.5353 98 91.2041V82C97.5199 82.0952 97.058 82.2604 96.6306 82.4898L81.7815 90.6531C80.9744 91.1681 80.3033 91.8543 79.8208 92.6581C79.3382 93.4618 79.0573 94.3611 79 95.2857V111.612C79.0066 112.083 79.0858 112.551 79.2353 113L87.58 108.408C86.8503 106.847 86.4713 105.158 86.4673 103.449Z" fill="#000745"/>
  <path d="M116.365 90.6474L102.297 82.4895C101.893 82.2602 101.455 82.0951 101 82V91.1776C102.911 91.3955 104.745 92.0617 106.353 93.1229C107.962 94.184 109.3 95.6103 110.26 97.2869C111.221 98.9635 111.776 100.844 111.882 102.776C111.989 104.708 111.642 106.638 110.872 108.411L118.777 113C118.919 112.551 118.994 112.084 119 111.613V95.2974C118.949 94.3699 118.684 93.4671 118.227 92.6601C117.769 91.8531 117.132 91.1641 116.365 90.6474Z" fill="#000745"/>
  <path d="M126.612 82.4711L103.388 69.0403C102.027 68.3562 100.524 68 99 68C97.4762 68 95.9736 68.3562 94.6116 69.0403L71.3884 82.4711C70.1137 83.3027 69.0524 84.4228 68.29 85.7409C67.5277 87.059 67.0858 88.5381 67 90.0587V116.92C67.0842 118.444 67.5253 119.927 68.2876 121.248C69.0499 122.57 70.1121 123.694 71.3884 124.529L94.6116 137.96C95.9736 138.644 97.4762 139 99 139C100.524 139 102.027 138.644 103.388 137.96L126.612 124.529C127.888 123.694 128.95 122.57 129.712 121.248C130.475 119.927 130.916 118.444 131 116.92V90.0587C130.914 88.5381 130.472 87.059 129.71 85.7409C128.948 84.4228 127.886 83.3027 126.612 82.4711ZM123.63 113.83C123.562 115.001 123.22 116.139 122.633 117.154C122.046 118.169 121.23 119.032 120.249 119.674L102.359 130.015C101.314 130.543 100.16 130.818 98.9895 130.818C97.8188 130.818 96.6644 130.543 95.6195 130.015L77.7507 119.674C76.7702 119.032 75.9537 118.169 75.3667 117.154C74.7796 116.139 74.4383 115.001 74.3701 113.83V93.1695C74.4383 91.9988 74.7796 90.8605 75.3667 89.8458C75.9537 88.831 76.7702 87.9681 77.7507 87.3263L95.5984 76.9853C96.6434 76.457 97.7977 76.1817 98.9685 76.1817C100.139 76.1817 101.294 76.457 102.339 76.9853L120.228 87.3263C121.213 87.9658 122.033 88.8277 122.624 89.8426C123.215 90.8574 123.559 91.997 123.63 93.1695V113.83Z" fill="#000745"/>
  <path d="M90 103.5C90 105.181 90.5278 106.824 91.5167 108.222C92.5056 109.62 93.9113 110.71 95.5559 111.353C97.2004 111.996 99.01 112.165 100.756 111.837C102.502 111.509 104.105 110.699 105.364 109.51C106.623 108.322 107.48 106.807 107.827 105.158C108.174 103.509 107.996 101.8 107.315 100.247C106.634 98.694 105.48 97.3665 104 96.4325C102.52 95.4985 100.78 95 99 95C96.6131 95 94.3239 95.8955 92.6361 97.4896C90.9482 99.0837 90 101.246 90 103.5Z" fill="#000745"/>
</svg>
  
  </div>
  <div class="Box-1">
   {/* <img src={Box1} alt="group-image"  className="Box-image-2"/>  */}
   <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 200 200" fill="none">
  <rect x="1" y="1" width="198" height="198" fill="white" stroke="black" stroke-width="2"/>
  <path d="M163.13 36H36V163.13H163.13V36Z" fill="white"/>
  <g opacity="0.1">
    <path opacity="0.1" d="M163.12 160.12V163.12H160.12" stroke="#20263C" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M154.36 163.12H41.8799" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M39 163.12H36V160.12" stroke="#20263C" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M36 154.35V41.8799" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M36 39V36H39" stroke="#20263C" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M44.77 36H157.24" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M160.12 36H163.12V39" stroke="#20263C" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M163.12 44.7598V157.24" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
  </g>
  <path d="M120.56 107.02C119.545 105.896 118.684 104.642 118 103.29C116.919 101.172 115.426 99.2914 113.607 97.7595C111.788 96.2276 109.681 95.0751 107.41 94.3701C105.424 93.7561 103.346 93.4955 101.27 93.6001C102.781 93.5138 104.269 94.0016 105.435 94.966C106.602 95.9303 107.361 97.2998 107.56 98.8001C108.106 102.042 109.543 105.068 111.71 107.54C113.877 110.012 116.688 111.833 119.83 112.8C123.423 113.904 127.273 113.845 130.83 112.63C126.868 111.984 123.245 110.005 120.56 107.02Z" fill="#000745"/>
  <path d="M94.9197 93.7999C95.3814 95.8283 96.1936 97.7606 97.3197 99.5099C96.4974 98.2397 96.1809 96.7075 96.4327 95.2155C96.6844 93.7234 97.4862 92.3799 98.6797 91.4499C101.215 89.3531 103.118 86.5938 104.177 83.4793C105.236 80.3648 105.41 77.0174 104.68 73.8099C103.846 70.1406 101.867 66.8314 99.0297 64.3599C100.442 68.136 100.523 72.2813 99.2597 76.1099C98.7759 77.5553 98.1034 78.9305 97.2597 80.1999C95.9643 82.194 95.0818 84.4277 94.6644 86.7688C94.247 89.1099 94.3032 91.5109 94.8297 93.8299L94.9197 93.7999Z" fill="#000745"/>
  <path d="M104.47 99.9199C103.789 101.273 102.623 102.318 101.204 102.847C99.7854 103.375 98.2192 103.348 96.8197 102.77C93.7356 101.614 90.3908 101.339 87.1592 101.974C83.9275 102.61 80.9363 104.132 78.5198 106.37C75.7645 108.933 73.8945 112.305 73.1797 116C75.7436 112.888 79.2923 110.743 83.2397 109.92C84.7227 109.616 86.2377 109.499 87.7497 109.57C90.1214 109.693 92.4936 109.339 94.7264 108.53C96.9591 107.721 99.0072 106.473 100.75 104.86C102.275 103.444 103.54 101.772 104.49 99.9199H104.47Z" fill="#000745"/>
</svg>
  </div>
  <div class="Box-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 200 200" fill="none">
  <rect x="1" y="1" width="198" height="198" fill="white" stroke="black" stroke-width="2"/>
  <path d="M163.13 36H36V163.13H163.13V36Z" fill="white"/>
  <g opacity="0.1">
    <path opacity="0.1" d="M163.12 160.12V163.12H160.12" stroke="#20263C" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M154.35 163.12H41.8799" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M39 163.12H36V160.12" stroke="#20263C" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M36 154.36V41.8799" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M36 39V36H39" stroke="#20263C" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M44.7598 36H157.24" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M160.12 36H163.12V39" stroke="#20263C" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M163.12 44.77V157.24" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
  </g>
  <path d="M117.671 79.0528C113.755 75.1365 108.766 72.4693 103.334 71.3885C97.9028 70.3077 92.2727 70.8619 87.1561 72.981C82.0395 75.1001 77.6662 78.689 74.5893 83.2936C71.5124 87.8983 69.8701 93.312 69.8701 98.8501C69.8701 104.388 71.5124 109.802 74.5893 114.407C77.6662 119.011 82.0395 122.6 87.1561 124.719C92.2727 126.838 97.9028 127.392 103.334 126.312C108.766 125.231 113.755 122.564 117.671 118.647C122.921 113.396 125.87 106.275 125.87 98.8501C125.87 91.4249 122.921 84.3037 117.671 79.0528ZM77.1726 89.3746C78.5835 86.2452 80.6741 83.4695 83.2925 81.2495C85.9108 79.0295 88.991 77.4209 92.309 76.5408C95.6271 75.6607 99.0996 75.5312 102.474 76.1617C105.848 76.7922 109.04 78.1668 111.816 80.1856C104.944 79.5365 96.3399 83.0492 89.3654 90.011C86.7331 92.639 84.503 95.6411 82.7472 98.9201C80.3591 96.0789 78.4738 92.8506 77.1726 89.3746ZM92.6108 121.855C87.2964 120.431 82.6638 117.159 79.545 112.626C76.4262 108.094 75.0255 102.598 75.5945 97.1255C78.4835 103.4 85.7763 109.102 95.3472 111.647C98.9202 112.617 102.618 113.046 106.318 112.92C105.061 116.398 103.223 119.639 100.884 122.504C98.1079 122.784 95.3043 122.556 92.6108 121.829V121.855ZM110.035 95.2419C109.091 91.6528 107.624 88.2221 105.682 85.0601C109.321 84.4123 113.043 84.3865 116.691 84.9837C118.324 87.244 119.527 89.785 120.242 92.4801C121.668 97.7953 121.152 103.445 118.787 108.414C116.421 113.383 112.361 117.345 107.336 119.589C111.307 113.976 112.58 104.775 110.035 95.2419Z" fill="#000745"/>
</svg>
  </div>
  <div class="Box-1">
   {/* <img src={Box2} alt="group-image"  className="Box-image-4"/>  */}
   <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 200 200" fill="none">
  <rect x="1" y="1" width="198" height="198" fill="white" stroke="black" stroke-width="2"/>
  <path d="M163.63 36H36.5V163.13H163.63V36Z" fill="white"/>
  <g opacity="0.1">
    <path opacity="0.1" d="M163.62 160.12V163.12H160.62" stroke="#20263C" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M154.85 163.12H42.3799" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M39.5 163.12H36.5V160.12" stroke="#20263C" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M36.5 154.36V41.8799" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M36.5 39V36H39.5" stroke="#20263C" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M45.27 36H157.74" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M160.62 36H163.62V39" stroke="#20263C" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M163.62 44.77V157.24" stroke="#20263C" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
  </g>
  <path d="M36 160.12V163.6H36.98V160.12H36Z" fill="#20263C"/>
  <path d="M36 160.12V163.6H36.98V160.12H36Z" fill="#20263C"/>
  <path d="M101.61 89.9602C99.0879 89.9546 96.6551 90.8928 94.7899 92.5902C95.0356 92.866 95.174 93.2209 95.1799 93.5902C95.1799 93.7959 95.1392 93.9996 95.0602 94.1895C94.9812 94.3794 94.8654 94.5518 94.7194 94.6968C94.5735 94.8418 94.4004 94.9565 94.2099 95.0343C94.0195 95.1121 93.8156 95.1515 93.6099 95.1502C93.3435 95.1504 93.0817 95.0815 92.8499 94.9502C91.7146 96.8783 91.2482 99.1275 91.5233 101.348C91.7984 103.568 92.7995 105.636 94.3709 107.229C95.9424 108.821 97.9961 109.85 100.213 110.155C102.429 110.46 104.685 110.024 106.628 108.915C108.571 107.806 110.093 106.086 110.958 104.022C111.823 101.959 111.981 99.667 111.409 97.504C110.836 95.3409 109.565 93.4276 107.793 92.0615C106.021 90.6954 103.847 89.9532 101.61 89.9502V89.9602ZM101.61 103.38C100.963 103.38 100.33 103.188 99.7921 102.828C99.2542 102.469 98.8351 101.957 98.5879 101.359C98.3407 100.761 98.2765 100.103 98.4035 99.4686C98.5305 98.834 98.8429 98.2513 99.3012 97.7944C99.7595 97.3375 100.343 97.0269 100.978 96.9018C101.613 96.7768 102.271 96.843 102.868 97.092C103.466 97.341 103.976 97.7617 104.334 98.3008C104.692 98.8398 104.882 99.473 104.88 100.12C104.88 100.549 104.795 100.974 104.631 101.37C104.466 101.766 104.225 102.126 103.922 102.429C103.618 102.732 103.257 102.972 102.861 103.135C102.464 103.298 102.039 103.381 101.61 103.38Z" fill="#000745"/>
  <path d="M126.69 109.59L105.39 72.7C103.31 69.1 99.9099 69.1 97.8399 72.7L76.4999 109.59C74.4199 113.18 76.1199 116.13 80.2799 116.13H122.91C127.07 116.16 128.77 113.21 126.69 109.59ZM101.61 111.24C99.6211 111.239 97.6686 110.707 95.9553 109.696C94.2421 108.686 92.8304 107.236 91.8671 105.496C90.9037 103.756 90.4237 101.79 90.477 99.8017C90.5303 97.8135 91.1148 95.8759 92.1699 94.19C92.0891 94.0039 92.0482 93.8029 92.0499 93.6C92.0499 93.1863 92.2143 92.7895 92.5069 92.4969C92.7994 92.2043 93.1962 92.04 93.6099 92.04C93.703 92.0297 93.7969 92.0297 93.8899 92.04C95.2039 90.7766 96.8077 89.8549 98.5609 89.3558C100.314 88.8566 102.163 88.7953 103.945 89.1772C105.728 89.5591 107.389 90.3726 108.784 91.5462C110.178 92.7198 111.264 94.2177 111.945 95.9086C112.626 97.5994 112.881 99.4315 112.689 101.244C112.497 103.057 111.863 104.795 110.843 106.305C109.823 107.816 108.447 109.053 106.838 109.908C105.228 110.763 103.433 111.21 101.61 111.21V111.24Z" fill="#000745"/>
</svg>
  </div>
  <div class="Box-1">
   {/* <img src={Box2} alt="group-image"  className="Box-image-5"/>  */}
   <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 200 200" fill="none">
  <rect x="1" y="1" width="198" height="198" fill="white" stroke="black" stroke-width="2"/>
  <path d="M163.13 36H36V163.13H163.13V36Z" fill="white"/>
  <g opacity="0.1">
    <path opacity="0.1" d="M163.12 160.12V163.12H160.12" stroke="#000745" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M154.35 163.12H41.8799" stroke="#000745" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M39 163.12H36V160.12" stroke="#000745" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M36 154.35V41.8799" stroke="#000745" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M36 39V36H39" stroke="#000745" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M44.77 36H157.24" stroke="#000745" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
    <path opacity="0.1" d="M160.12 36H163.12V39" stroke="#000745" stroke-miterlimit="10"/>
    <path opacity="0.1" d="M163.12 44.7598V157.24" stroke="#000745" stroke-miterlimit="10" stroke-dasharray="5.77 5.77"/>
  </g>
  <path d="M94.6899 99.5899C94.6899 100.567 94.9799 101.523 95.5232 102.336C96.0664 103.148 96.8386 103.781 97.7418 104.155C98.6451 104.528 99.6388 104.626 100.597 104.434C101.556 104.243 102.436 103.771 103.127 103.08C103.817 102.388 104.287 101.507 104.476 100.548C104.666 99.5886 104.567 98.595 104.191 97.6925C103.816 96.79 103.181 96.0192 102.367 95.4776C101.554 94.936 100.597 94.648 99.6199 94.6499C98.3115 94.6526 97.0576 95.1742 96.1333 96.1004C95.209 97.0265 94.6899 98.2815 94.6899 99.5899Z" fill="#000745"/>
  <path d="M99.6197 115.03C98.6427 115.03 97.6876 115.319 96.8752 115.862C96.0628 116.405 95.4297 117.177 95.0558 118.079C94.6819 118.982 94.584 119.975 94.7747 120.934C94.9653 121.892 95.4358 122.772 96.1266 123.463C96.8175 124.154 97.6977 124.624 98.656 124.815C99.6143 125.005 100.607 124.908 101.51 124.534C102.413 124.16 103.184 123.527 103.727 122.714C104.27 121.902 104.56 120.947 104.56 119.97C104.56 118.66 104.039 117.403 103.113 116.477C102.186 115.55 100.93 115.03 99.6197 115.03Z" fill="#000745"/>
  <path d="M114.78 94.6499C113.803 94.6499 112.848 94.9396 112.035 95.4825C111.223 96.0253 110.59 96.7968 110.216 97.6995C109.842 98.6021 109.744 99.5954 109.935 100.554C110.125 101.512 110.596 102.392 111.287 103.083C111.978 103.774 112.858 104.244 113.816 104.435C114.774 104.626 115.768 104.528 116.67 104.154C117.573 103.78 118.344 103.147 118.887 102.334C119.43 101.522 119.72 100.567 119.72 99.5899C119.72 98.2798 119.199 97.0232 118.273 96.0968C117.346 95.1704 116.09 94.6499 114.78 94.6499Z" fill="#000745"/>
  <path d="M99.6199 83.88C100.597 83.882 101.554 83.5939 102.367 83.0523C103.181 82.5107 103.816 81.7399 104.191 80.8374C104.567 79.9349 104.666 78.9413 104.476 77.9824C104.287 77.0235 103.817 76.1423 103.127 75.4504C102.436 74.7586 101.556 74.2871 100.597 74.0957C99.6388 73.9042 98.6451 74.0015 97.7418 74.3751C96.8386 74.7487 96.0664 75.3818 95.5232 76.1944C94.9799 77.007 94.6899 77.9625 94.6899 78.94C94.6899 80.2484 95.209 81.5034 96.1333 82.4296C97.0576 83.3557 98.3115 83.8773 99.6199 83.88Z" fill="#000745"/>
  <path d="M89.2998 99.0201C89.2998 98.043 89.0101 97.0879 88.4673 96.2755C87.9245 95.4632 87.153 94.83 86.2503 94.4561C85.3476 94.0822 84.3544 93.9844 83.3961 94.175C82.4378 94.3656 81.5576 94.8361 80.8667 95.527C80.1759 96.2178 79.7054 97.098 79.5148 98.0563C79.3242 99.0146 79.422 100.008 79.7959 100.911C80.1698 101.813 80.803 102.585 81.6153 103.128C82.4277 103.67 83.3828 103.96 84.3598 103.96C85.67 103.96 86.9265 103.44 87.853 102.513C88.7794 101.587 89.2998 100.33 89.2998 99.0201Z" fill="#000745"/>
  <path d="M110.86 106.32C109.093 104.542 108.101 102.137 108.101 99.6299C108.101 97.123 109.093 94.7179 110.86 92.9399C111.549 92.2482 112.017 91.368 112.206 90.4103C112.395 89.4525 112.296 88.4603 111.922 87.5587C111.548 86.6572 110.914 85.8868 110.102 85.3449C109.29 84.8029 108.336 84.5137 107.36 84.5137C106.384 84.5137 105.429 84.8029 104.617 85.3449C103.805 85.8868 103.172 86.6572 102.798 87.5587C102.423 88.4603 102.324 89.4525 102.513 90.4103C102.702 91.368 103.171 92.2482 103.86 92.9399C104.748 93.8194 105.452 94.8662 105.933 96.0196C106.414 97.173 106.662 98.4103 106.662 99.6599C106.662 100.909 106.414 102.147 105.933 103.3C105.452 104.454 104.748 105.5 103.86 106.38C103.171 107.071 102.702 107.952 102.513 108.909C102.324 109.867 102.423 110.859 102.798 111.761C103.172 112.663 103.805 113.433 104.617 113.975C105.429 114.517 106.384 114.806 107.36 114.806C108.336 114.806 109.29 114.517 110.102 113.975C110.914 113.433 111.548 112.663 111.922 111.761C112.296 110.859 112.395 109.867 112.206 108.909C112.017 107.952 111.549 107.071 110.86 106.38V106.32Z" fill="#000745"/>
  <path d="M96.6402 109.2C96.6349 107.903 96.1257 106.659 95.2202 105.73C93.453 103.952 92.4611 101.547 92.4611 99.04C92.4611 96.5331 93.453 94.1281 95.2202 92.35C95.9092 91.6584 96.3777 90.7781 96.5667 89.8204C96.7558 88.8627 96.6568 87.8704 96.2823 86.9689C95.9079 86.0673 95.2747 85.297 94.4627 84.755C93.6508 84.2131 92.6964 83.9238 91.7202 83.9238C90.744 83.9238 89.7897 84.2131 88.9777 84.755C88.1658 85.297 87.5326 86.0673 87.1581 86.9689C86.7837 87.8704 86.6847 88.8627 86.8737 89.8204C87.0628 90.7781 87.5313 91.6584 88.2202 92.35C89.1064 93.2294 89.8098 94.2755 90.2898 95.428C90.7698 96.5805 91.0169 97.8166 91.0169 99.065C91.0169 100.314 90.7698 101.55 90.2898 102.702C89.8098 103.855 89.1064 104.901 88.2202 105.78C87.6515 106.358 87.2336 107.066 87.0035 107.844C86.7734 108.621 86.738 109.443 86.9006 110.237C87.0632 111.031 87.4187 111.773 87.9358 112.397C88.4529 113.022 89.1156 113.509 89.8656 113.817C90.6156 114.124 91.4297 114.243 92.2362 114.161C93.0427 114.08 93.8168 113.801 94.4902 113.35C95.1636 112.899 95.7156 112.289 96.0975 111.574C96.4795 110.859 96.6796 110.061 96.6802 109.25L96.6402 109.2Z" fill="#000745"/>
</svg>
  </div>
  </div>
  <div class="row">
  {/* <div class="Box-1">
  <img src={Box1} alt="school-image" className="Box-image-1"  />
  
  </div> */}
  </div>
  <div class="row">
  <div class="Box-1">
   <img src={choice1} alt="group-image"  className="choice-image-1"/> 
  </div>
  <div class="Box-1">
   <img src={choice2} alt="group-image"  className="choice-image-2"/> 
  </div>
  <div class="Box-1">
   <img src={choice3} alt="group-image"  className="choice-image-3"/> 
  </div>
  <div class="Box-1">
   <img src={choice4} alt="group-image"  className="choice-image-4"/> 
  </div>
  <div class="Box-1">
   <img src={choice5} alt="group-image"  className="choice-image-5"/> 
  </div>
  </div>
  </div>
  
  
   {/* <img src={Line2} alt="group-image"  className="line1"/>  */}
  {/* <img src={Line2} alt="group-image"  className="line2"/>
  <img src={Line2} alt="group-image"  className="line3"/> 
  <img src={Line2} alt="group-image"  className="line4"/> 
  <img src={Line2} alt="group-image"  className="line5"/> 
  <img src={Line2} alt="group-image"  className="line6"/>   */}


  {/* <div class="row">
  <div class="Box-1">
  <img src={Box3} alt="school-image" className="left-image"/>
  </div>
  <div class="Box-2">
  <img src={Box4} alt="font-image" className="right-image" />
  </div>
  </div>
  </div> */}



<h3 className="mission-1">Managing community</h3>
<div className="mission-2">
<p>Dentistry for Children believes that good dental health starts in infancy. Our dedicated pediatric dentists and teen </p>
<p> dental specialists promote cavity prevention and good dental habits to help create a positive experience at an</p>
<p> early age and into their adolosent years;</p>
</div>
<div>
<div class="container">
        <div class="box">
            <p className="main">Principal</p>
            <div className="submain">
                <p>Lorem ipsum dolor sit amet, </p>
                <p>consectetur adipiscing elit. Sed</p>
                <p>euismod, diam eget varius bibendum</p>
                <p>velit elit</p>
            </div>
            <div className="contact">
            <p>Contact details : 923423423</p>
            <p>Mail id : xyz@gmail.com</p>
            </div>
            </div>
            
        
        <img src={Ellipse1} alt="school-image" className="Box-image-1"  />
        <div className="profile-1">
            <p className="school-1">Kenny Omega</p>
            <p className="school-2">9.96(CBSE 12th)</p>
        </div>
        
    </div>
    <div class="container">
    <div class="box">
        <p className="main">Teachers</p>
        <div className="submain">
        <p>Lorem ipsum dolor sit amet, </p>
        <p>consectetur adipiscing elit. Sed</p>
        <p>euismod, diam eget varius bibendum</p>
        <p>velit elit</p>

        </div>
        <div className="contact">
            <p>Contact details : 923423423</p>
            <p>Mail id : xyz@gmail.com</p>
            </div>
        </div>
            
        
        <img src={Ellipse1} alt="school-image" className="Box-image-1"  />
        <div className="profile-1">
            <p className="school-1">Kenny Omega</p>
            <p className="school-2">9.96(CBSE 12th)</p>
        </div>
        
        
        <img src={Ellipse1} alt="school-image" className="Box-image-2"  /><div className="profile-2">
           
            <p className="school-1">Kenny Omega</p>
            <p className="school-2">9.96(CBSE 12th)</p>
            
        </div>

        <img src={Ellipse1} alt="school-image" className="Box-image-3"  />
        <div className="profile-1">
            <p className="school-1">Kenny Omega</p>
            <p className="school-2">9.96(CBSE 12th)</p>
        </div>
        
    </div>
    <div class="container">
    <div class="box">
    <p className="main">Staffs</p>
        <div className="submain">
        <p>Lorem ipsum dolor sit amet, </p>
        <p>consectetur adipiscing elit. Sed</p>
        <p>euismod, diam eget varius bibendum</p>
        <p>velit elit</p>
        </div>
        <div className="contact">
            <p>Contact details : 923423423</p>
            <p>Mail id : xyz@gmail.com</p>
            </div>
        </div>

        
        
        
        <img src={Ellipse1} alt="school-image" className="Box-image-1"  />
        <div className="profile-1">
            <p className="school-1">Kenny Omega</p>
            <p className="school-2">9.96(CBSE 12th)</p>
        </div>
        <img src={Ellipse1} alt="school-image" className="Box-image-2"  />
        <div className="profile-2">
            <p className="school-1">Kenny Omega</p>
            <p className="school-2">9.96(CBSE 12th)</p>
        </div>
        
    </div>
    <div class="container">
    <div class="box">

    <p className="main">Others</p>
        <div className="submain">
        <p>Lorem ipsum dolor sit amet, </p>
        <p>consectetur adipiscing elit. Sed</p>
        <p>euismod, diam eget varius bibendum</p>
        <p>velit elit</p>
        </div>
<div className="contact">
            <p>Contact details : 923423423</p>
            <p>Mail id : xyz@gmail.com</p>
            </div>        
        </div>
            
        
        <img src={Ellipse1} alt="school-image" className="Box-image-1"  />
        <div className="profile-1">
            <p className="school-1">Kenny Omega</p>
            <p className="school-2">9.96(CBSE 12th)</p>
        </div>
        
        
        
        <img src={Ellipse1} alt="school-image" className="Box-image-2"  />
        <div className="profile-2">
            <p className="school-1">Kenny Omega</p>
            <p className="school-2">9.96(CBSE 12th)</p>
        </div>
        <img src={Ellipse1} alt="school-image" className="Box-image-3"  />
        <div className="profile-1">
            <p className="school-1">Kenny Omega</p>
            <p className="school-2">9.96(CBSE 12th)</p>
        </div>
        
    </div>
    


</div>

<div className="communitys">

<div className="community">
    <h3>
        100+
    </h3>
    <div class="com-1">
        <p>Number of Community</p>
        <p>members</p>
        </div>
    </div>
    <div className="community">
    <h3> 50+</h3>
    <div class="com-2">
        <p>number of posts</p>
        <p>by our community members</p>
        </div>
        </div>
    <div className="community">
    <h3>
 40+
    </h3>
    
        <p>Numbers of events</p>
        <p>by our community members</p>
    

</div>
</div>





</>

    );
}
export default Value;