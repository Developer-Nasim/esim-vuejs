<script setup>
 
</script> 
<template>

  <div class="orderdetails-wrap">
    <div class="container">
      <div class="simDetails">
        <img src="@\assets\order\bigImg.png" alt="">
        <div>
          <h4>Eco <span>01.09.2023 - 08.09.2023</span></h4>
          <ul>
            <li>
              <span><img src="@\assets\order\location.png" alt=""> israel</span>
            </li>
            <li>
              <span><img src="@\assets\order\call.png" alt=""> +97254485547</span>
              <button type="button">Port an existing number?</button>
            </li>
            <li>
              <span><img src="@\assets\order\global.png" alt=""> 005448523547</span>
            </li>
          </ul>
          <button type="button">Active</button>
        </div>
      </div>
      <p class="reloadMenual">Updated at 5 o'clock <button type="button"><img src="@\assets\order\rotate-right.png" alt=""> Refresh</button></p>
      <div class="simballanceDetails">
        <div>
          <h5><img src="@\assets\transfar.png" alt=""> Data</h5>
          <div class="progs"><div class="innerProg"></div></div>
          <p> <b>5 GB</b> <span>Total <b>10 GB</b></span> </p>
        </div>
        <div>
          <h5><img src="@\assets\call.png" alt=""> local calls</h5>
          <div class="progs"><div class="innerProg"></div></div>
          <p> <b>90 GB</b> <span>Total <b>120 Min</b></span> </p>
        </div>
        <div>
          <h5><img src="@\assets\transfar.png" alt=""> int’l calls</h5>
          <div class="progs"><div class="innerProg"></div></div>
          <p> <b>5 Min</b> <span>Total <b>120 Min</b></span> </p>
        </div>
      </div>
    </div>
  </div>
  <div class="exsOffers"> 
      <div class="extra-offer-packages">
        <h5>Buy extra for the package</h5>
        <ul>
          <li>
            <p><img src="@\assets\order\transfar.png" alt=""> Data</p>
            <label for="#">
              <input type="radio" name="data">
              <div><span>5 G</span><b>+ $10</b></div>
            </label>
            <label for="#">
              <input type="radio" name="data">
              <div><span>5 G</span><b>+ $10</b></div>
            </label>
            <label for="#">
              <input type="radio" name="data">
              <div><span>5 G</span><b>+ $10</b></div>
            </label>
          </li>
          <li>
            <p><img src="@\assets\order\call.png" alt=""> Local calls</p>
            <label for="#">
              <input type="radio" name="call">
              <div><span>5 G</span><b>+ $10</b></div>
            </label> 
            <label for="#">
              <input type="radio" name="call">
              <div><span>5 G</span><b>+ $10</b></div>
            </label>
          </li>
          <li>
            <p><img src="@\assets\order\transfar.png" alt=""> int’l calls</p>
            <label for="#">
              <input type="radio" name="intcall">
              <div><span>5 G</span><b>+ $10</b></div>
            </label>
            <label for="#">
              <input type="radio" name="intcall">
              <div><span>5 G</span><b>+ $10</b></div>
            </label>
            <label for="#">
              <input type="radio" name="intcall">
              <div><span>5 G</span><b>+ $10</b></div>
            </label>
          </li>
        </ul>
        <h5>more extras</h5>
        <ul>
          <li>
            <p>Transferring calls:</p>
            <label for="#">
              <input type="radio" name="trCs">
              <div><span>International numb.</span><b>+ $10</b></div>
            </label> 
          </li> 
          <li>
            <p>Fixed number for life:</p>
            <label for="#">
              <input type="radio" name="trCs2">
              <div><span>israeli number</span><b>+ $10</b></div>
            </label> 
          </li> 
        </ul>
        <div class="endBtns">
          <button type="button">Buy Now</button>
          <button type="button">Add Package</button>
        </div>
      </div>
  </div>
</template>
<style scope>
   .orderdetails-wrap {
    max-width: 1170px;
    margin: auto;
    padding: 80px 0;
    padding-bottom: 15px;
}

.simDetails {
    border-radius: 12px;
    position: relative;
    padding: 30px;
    padding-bottom: 0;
    z-index: 2;
}

.simDetails img {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

.simDetails > div {
    max-width: 500px;
}

.simDetails div h4 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
}

.simDetails div h4 span {
    font-size: 16px;
    line-height: 1;
}

.simDetails div ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.simDetails div ul li {
    display: flex;
    align-items: center;
    gap: 10px;
}

.simDetails div ul li span {
    display: flex;
    align-items: center;
    gap: 5px;
}

.simDetails div ul li button {
    background: #fff;
    padding: 5px 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #2072F9;
}

.simDetails div > button {outline: none;border: none;padding: 8px 30px;background: #0060ff7a;border-radius: 0 10px 0 15px;color: #fff;font-size: 16px;margin-top: 30px;position: relative;left: -30px;}

.simDetails:after {
    content: "";
    position: absolute;
    width: 90%;
    height: 100%;
    background: #2072f933;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 12px;
}

p.reloadMenual {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 16px;
}

p.reloadMenual button {
    padding: 0;
    outline: none;
    display: flex;
    height: fit-content;
    gap: 2px;
    background: none;
    border: none;
    color: #2072F9;
}

.simballanceDetails {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    z-index: 2;
}

.simballanceDetails > div {
    width: 30%;
}

.simballanceDetails div h5 {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 8px;
}

.progs {
    display: block;
    width: 100%;
    position: relative;
    border-radius: 8px;
    background: #E8F1FF;
    overflow: hidden;
}

.progs > div {
    height: 20px;
    display: block;
    background: linear-gradient(90deg, #2072F9, #0962f5);
    transition: .2s;
    width: 80%;
    border-radius: 8px;
}

.simballanceDetails div p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
}

.simballanceDetails div p b {
    font-weight: 700;
}
.extra-offer-packages {
    background: linear-gradient(120deg, #eec16752, #e56e4459);
    border-radius: 12px;
    box-shadow: 2px 0 6.2px 2px #2d75ec26;
    padding: 30px;
    max-width: 1170px;
    margin: auto;
}

.extra-offer-packages h5 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
}

.extra-offer-packages ul {
    display: flex;
    flex-wrap: wrap;
    gap: 3%;
}

.extra-offer-packages ul li {
    width: 30%;
}

.extra-offer-packages ul li p {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
}

.extra-offer-packages ul li label {
    display: block;
    width: 100%;
    position: relative;
    margin-top: 10px;
}

.extra-offer-packages ul li label div {
    position: relative;
    width: 100%;
    background: #fff;
    border: 2px solid #fff;
    border-radius: 12px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.extra-offer-packages ul li label div b {
    font-weight: 600;
}

.extra-offer-packages ul li label input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
}

.extra-offer-packages ul li label input:checked~div {
    background: linear-gradient(120deg, #eec167, #e56e44);
}

.endBtns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    margin-top: 30px;
}

.endBtns button {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    background: linear-gradient(6deg, #0962F5, #2072F9);
    color: #fff;
    border: 1px solid #2072F9;
}
.endBtns button:last-child{
  background: #fff;
  color: #0962F5;
}
.exsOffers {
    padding: 30px;
    position: relative;
    z-index: 2;
}

.exsOffers:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 80%;
    top: 0;
    left: 0;
    z-index: -1;
    background: #F9FBFF;
}




</style>

