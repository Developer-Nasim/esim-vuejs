<script setup>
import { ref } from 'vue';
    const item = ref('account')
    const handleIitem = (val) => {  
        item.value = val 
    }
</script> 
<template>
<div class="Profile-wrap">
    <div class="container"> 
        <nav>
            <p>Profile</p>
            <ul>
                <li><button type="button" :class="{ active: item === 'account' }" @click="handleIitem('account')"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M9 9.5625C6.6225 9.5625 4.6875 7.6275 4.6875 5.25C4.6875 2.8725 6.6225 0.9375 9 0.9375C11.3775 0.9375 13.3125 2.8725 13.3125 5.25C13.3125 7.6275 11.3775 9.5625 9 9.5625ZM9 2.0625C7.245 2.0625 5.8125 3.495 5.8125 5.25C5.8125 7.005 7.245 8.4375 9 8.4375C10.755 8.4375 12.1875 7.005 12.1875 5.25C12.1875 3.495 10.755 2.0625 9 2.0625Z" fill="#2D2D2D" /><path d="M15.4426 17.0625C15.1351 17.0625 14.8801 16.8075 14.8801 16.5C14.8801 13.9125 12.2401 11.8125 9.00011 11.8125C5.76011 11.8125 3.12012 13.9125 3.12012 16.5C3.12012 16.8075 2.86512 17.0625 2.55762 17.0625C2.25012 17.0625 1.99512 16.8075 1.99512 16.5C1.99512 13.2975 5.13761 10.6875 9.00011 10.6875C12.8626 10.6875 16.0051 13.2975 16.0051 16.5C16.0051 16.8075 15.7501 17.0625 15.4426 17.0625Z" fill="#2D2D2D" /></svg> account information</button></li>
                <li><button type="button" :class="{ active: item === 'cards' }" @click="handleIitem('cards')"> <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.25 10.02H1.5C1.1925 10.02 0.9375 9.76502 0.9375 9.45752C0.9375 9.15002 1.1925 8.89502 1.5 8.89502H14.25C14.5575 8.89502 14.8125 9.15002 14.8125 9.45752C14.8125 9.76502 14.5575 10.02 14.25 10.02Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M11.415 16.3126H4.33502C1.76252 16.3126 0.9375 15.4951 0.9375 12.9526V7.7101C0.9375 5.6926 1.39502 4.5001 3.72002 4.3651C3.91502 4.3576 4.11752 4.3501 4.33502 4.3501H11.415C13.9875 4.3501 14.8125 5.1676 14.8125 7.7101V13.0726C14.7825 15.5251 13.9575 16.3126 11.415 16.3126ZM4.33502 5.4751C4.13252 5.4751 3.94502 5.4826 3.77252 5.4901C2.43002 5.5726 2.0625 5.8576 2.0625 7.7101V12.9526C2.0625 14.8726 2.37752 15.1876 4.33502 15.1876H11.415C13.35 15.1876 13.665 14.8876 13.6875 13.0651V7.7101C13.6875 5.7901 13.3725 5.4751 11.415 5.4751H4.33502Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M14.25 13.635C14.1075 13.635 13.965 13.5825 13.8675 13.485C13.755 13.38 13.6875 13.23 13.6875 13.0725V7.71C13.6875 5.79 13.3725 5.475 11.415 5.475H4.33502C4.13252 5.475 3.94502 5.4825 3.77252 5.49C3.62252 5.4975 3.47249 5.4375 3.35999 5.3325C3.24749 5.2275 3.1875 5.0775 3.1875 4.92C3.2175 2.475 4.04252 1.6875 6.58502 1.6875H13.665C16.2375 1.6875 17.0625 2.505 17.0625 5.0475V10.29C17.0625 12.3075 16.605 13.5 14.28 13.635C14.2725 13.635 14.2575 13.635 14.25 13.635ZM4.33502 4.35H11.415C13.9875 4.35 14.8125 5.1675 14.8125 7.71V12.45C15.6825 12.2925 15.9375 11.8425 15.9375 10.29V5.0475C15.9375 3.1275 15.6225 2.8125 13.665 2.8125H6.58502C4.87502 2.8125 4.43252 3.045 4.33502 4.35Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M5.2202 13.9199H3.93018C3.62268 13.9199 3.36768 13.6649 3.36768 13.3574C3.36768 13.0499 3.62268 12.7949 3.93018 12.7949H5.2202C5.5277 12.7949 5.7827 13.0499 5.7827 13.3574C5.7827 13.6649 5.5352 13.9199 5.2202 13.9199Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M9.41252 13.9199H6.83252C6.52502 13.9199 6.27002 13.6649 6.27002 13.3574C6.27002 13.0499 6.52502 12.7949 6.83252 12.7949H9.41252C9.72002 12.7949 9.97502 13.0499 9.97502 13.3574C9.97502 13.6649 9.72752 13.9199 9.41252 13.9199Z"
                    fill="#2D2D2D"
                  />
                </svg> saved cards</button></li>
                <li><button type="button" :class="{ active: item === 'orders' }" @click="handleIitem('orders')"> <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0002 17.2916H8.00016C4.34183 17.2916 2.7085 15.6583 2.7085 11.9999V7.99992C2.7085 4.34159 4.34183 2.70825 8.00016 2.70825H12.0002C15.6585 2.70825 17.2918 4.34159 17.2918 7.99992V11.9999C17.2918 15.6583 15.6585 17.2916 12.0002 17.2916ZM8.00016 3.95825C5.01683 3.95825 3.9585 5.01659 3.9585 7.99992V11.9999C3.9585 14.9833 5.01683 16.0416 8.00016 16.0416H12.0002C14.9835 16.0416 16.0418 14.9833 16.0418 11.9999V7.99992C16.0418 5.01659 14.9835 3.95825 12.0002 3.95825H8.00016Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M11.2502 14.7916H8.75016C6.3335 14.7916 5.2085 13.6666 5.2085 11.2499V8.74992C5.2085 6.33325 6.3335 5.20825 8.75016 5.20825H11.2502C13.6668 5.20825 14.7918 6.33325 14.7918 8.74992V11.2499C14.7918 13.6666 13.6668 14.7916 11.2502 14.7916ZM8.75016 6.45825C7.01683 6.45825 6.4585 7.01659 6.4585 8.74992V11.2499C6.4585 12.9833 7.01683 13.5416 8.75016 13.5416H11.2502C12.9835 13.5416 13.5418 12.9833 13.5418 11.2499V8.74992C13.5418 7.01659 12.9835 6.45825 11.2502 6.45825H8.75016Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M6.6748 3.95841C6.3248 3.95841 6.0498 3.67508 6.0498 3.33341V1.66675C6.0498 1.32508 6.33314 1.04175 6.6748 1.04175C7.01647 1.04175 7.2998 1.32508 7.2998 1.66675V3.33341C7.2998 3.67508 7.01647 3.95841 6.6748 3.95841Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M10 3.95841C9.65833 3.95841 9.375 3.67508 9.375 3.33341V1.66675C9.375 1.32508 9.65833 1.04175 10 1.04175C10.3417 1.04175 10.625 1.32508 10.625 1.66675V3.33341C10.625 3.67508 10.3417 3.95841 10 3.95841Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M13.3335 3.95841C12.9918 3.95841 12.7085 3.67508 12.7085 3.33341V1.66675C12.7085 1.32508 12.9918 1.04175 13.3335 1.04175C13.6752 1.04175 13.9585 1.32508 13.9585 1.66675V3.33341C13.9585 3.67508 13.6752 3.95841 13.3335 3.95841Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M18.3332 7.29175H16.6665C16.3248 7.29175 16.0415 7.00841 16.0415 6.66675C16.0415 6.32508 16.3248 6.04175 16.6665 6.04175H18.3332C18.6748 6.04175 18.9582 6.32508 18.9582 6.66675C18.9582 7.00841 18.6832 7.29175 18.3332 7.29175Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M18.3332 10.625H16.6665C16.3248 10.625 16.0415 10.3417 16.0415 10C16.0415 9.65833 16.3248 9.375 16.6665 9.375H18.3332C18.6748 9.375 18.9582 9.65833 18.9582 10C18.9582 10.3417 18.6832 10.625 18.3332 10.625Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M18.3332 13.9583H16.6665C16.3248 13.9583 16.0415 13.6749 16.0415 13.3333C16.0415 12.9916 16.3248 12.7083 16.6665 12.7083H18.3332C18.6748 12.7083 18.9582 12.9916 18.9582 13.3333C18.9582 13.6749 18.6832 13.9583 18.3332 13.9583Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M13.3335 18.9584C12.9918 18.9584 12.7085 18.6751 12.7085 18.3334V16.6667C12.7085 16.3251 12.9918 16.0417 13.3335 16.0417C13.6752 16.0417 13.9585 16.3251 13.9585 16.6667V18.3334C13.9585 18.6751 13.6752 18.9584 13.3335 18.9584Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M10.0083 18.9584C9.66663 18.9584 9.3833 18.6751 9.3833 18.3334V16.6667C9.3833 16.3251 9.66663 16.0417 10.0083 16.0417C10.35 16.0417 10.6333 16.3251 10.6333 16.6667V18.3334C10.6333 18.6751 10.35 18.9584 10.0083 18.9584Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M6.6748 18.9584C6.33314 18.9584 6.0498 18.6751 6.0498 18.3334V16.6667C6.0498 16.3251 6.33314 16.0417 6.6748 16.0417C7.01647 16.0417 7.2998 16.3251 7.2998 16.6667V18.3334C7.2998 18.6751 7.01647 18.9584 6.6748 18.9584Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M3.33317 7.29175H1.6665C1.32484 7.29175 1.0415 7.01675 1.0415 6.66675C1.0415 6.31675 1.32484 6.04175 1.6665 6.04175H3.33317C3.67484 6.04175 3.95817 6.32508 3.95817 6.66675C3.95817 7.00841 3.68317 7.29175 3.33317 7.29175Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M3.33317 10.625H1.6665C1.32484 10.625 1.0415 10.3417 1.0415 10C1.0415 9.65833 1.32484 9.375 1.6665 9.375H3.33317C3.67484 9.375 3.95817 9.65833 3.95817 10C3.95817 10.3417 3.68317 10.625 3.33317 10.625Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M3.33317 13.9583H1.6665C1.32484 13.9583 1.0415 13.6749 1.0415 13.3333C1.0415 12.9916 1.32484 12.7083 1.6665 12.7083H3.33317C3.67484 12.7083 3.95817 12.9916 3.95817 13.3333C3.95817 13.6749 3.68317 13.9583 3.33317 13.9583Z"
                    fill="#2D2D2D"
                  />
                </svg> orders</button></li>
                <li><button type="button" :class="{ active: item === 'contact' }" @click="handleIitem('contact')">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99996 19.0082C9.42496 19.0082 8.88329 18.7165 8.49996 18.2082L7.24996 16.5415C7.22496 16.5082 7.12496 16.4665 7.08329 16.4582H6.66663C3.19163 16.4582 1.04163 15.5165 1.04163 10.8332V6.6665C1.04163 2.98317 2.98329 1.0415 6.66663 1.0415H13.3333C17.0166 1.0415 18.9583 2.98317 18.9583 6.6665V10.8332C18.9583 14.5165 17.0166 16.4582 13.3333 16.4582H12.9166C12.85 16.4582 12.7916 16.4915 12.75 16.5415L11.5 18.2082C11.1166 18.7165 10.575 19.0082 9.99996 19.0082ZM6.66663 2.2915C3.68329 2.2915 2.29163 3.68317 2.29163 6.6665V10.8332C2.29163 14.5998 3.58329 15.2082 6.66663 15.2082H7.08329C7.50829 15.2082 7.99163 15.4498 8.24996 15.7915L9.49996 17.4582C9.79163 17.8415 10.2083 17.8415 10.5 17.4582L11.75 15.7915C12.025 15.4248 12.4583 15.2082 12.9166 15.2082H13.3333C16.3166 15.2082 17.7083 13.8165 17.7083 10.8332V6.6665C17.7083 3.68317 16.3166 2.2915 13.3333 2.2915H6.66663Z" fill="#292D32"/>
                    <path d="M9.99996 10.0002C9.53329 10.0002 9.16663 9.62516 9.16663 9.16683C9.16663 8.7085 9.54163 8.3335 9.99996 8.3335C10.4583 8.3335 10.8333 8.7085 10.8333 9.16683C10.8333 9.62516 10.4666 10.0002 9.99996 10.0002Z" fill="#292D32"/>
                    <path d="M13.3333 10.0002C12.8667 10.0002 12.5 9.62516 12.5 9.16683C12.5 8.7085 12.875 8.3335 13.3333 8.3335C13.7917 8.3335 14.1667 8.7085 14.1667 9.16683C14.1667 9.62516 13.8 10.0002 13.3333 10.0002Z" fill="#292D32"/>
                    <path d="M6.66671 10.0002C6.20004 10.0002 5.83337 9.62516 5.83337 9.16683C5.83337 8.7085 6.20837 8.3335 6.66671 8.3335C7.12504 8.3335 7.50004 8.7085 7.50004 9.16683C7.50004 9.62516 7.13337 10.0002 6.66671 10.0002Z" fill="#292D32"/>
                    </svg>
                    contact us</button></li>
                <li><button type="button"> <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.57011 1.29739L6.66761 1.29739C9.99761 1.29739 11.6026 2.60989 11.8801 5.54989C11.9101 5.85739 11.6851 6.13489 11.3701 6.16489C11.0701 6.19489 10.7851 5.96239 10.7551 5.65489C10.5376 3.29989 9.42761 2.42239 6.66011 2.42239L6.56261 2.42239C3.51011 2.42239 2.43011 3.50239 2.43011 6.55489L2.43011 11.4449C2.43011 14.4974 3.51011 15.5774 6.56261 15.5774L6.66011 15.5774C9.44261 15.5774 10.5526 14.6849 10.7551 12.2849C10.7926 11.9774 11.0551 11.7449 11.3701 11.7749C11.6851 11.7974 11.9101 12.0749 11.8876 12.3824C11.6326 15.3674 10.0201 16.7024 6.66761 16.7024L6.57011 16.7024C2.88761 16.7024 1.31261 15.1274 1.31261 11.4449L1.31261 6.55489C1.31261 2.87239 2.88761 1.29739 6.57011 1.29739Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M6.75016 8.4375L15.2852 8.4375C15.5927 8.4375 15.8477 8.6925 15.8477 9C15.8477 9.3075 15.5927 9.5625 15.2852 9.5625L6.75016 9.5625C6.44266 9.5625 6.18766 9.3075 6.18766 9C6.18766 8.6925 6.44266 8.4375 6.75016 8.4375Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M13.6124 5.92512C13.7549 5.92512 13.8974 5.97762 14.0099 6.09012L16.5224 8.60262C16.7399 8.82012 16.7399 9.18012 16.5224 9.39762L14.0099 11.9101C13.7924 12.1276 13.4324 12.1276 13.2149 11.9101C12.9974 11.6926 12.9974 11.3326 13.2149 11.1151L15.3299 9.00012L13.2149 6.88512C12.9974 6.66762 12.9974 6.30762 13.2149 6.09012C13.3199 5.97762 13.4699 5.92512 13.6124 5.92512Z"
                    fill="#2D2D2D"
                  />
                </svg> logout</button></li>
            </ul>
        </nav>
        <div class="profile-contents">
            <div class="accountinfos" v-if="item === 'account'">
                <h1>Account information</h1>
                <p>You can delete your account permanently. *Note that this process can take a while and can't be undone after completion.</p>
                <button type="button" class="redThinBtn">Save Card</button>
            </div>
            <div class="saved-cards" v-if="item === 'cards'">
                <h1>Saved Cars</h1>
                <p>When you add a new card, you’ll see your saved card details here.</p>
                <button type="button">Save Card</button>
            </div>
            <div class="page-orders" v-if="item === 'orders'">
                <h1>Orders</h1>
                <div class="single_order_item">
                    <div class="order-left-wrap">
                        <img src="@\assets\order\order.png" alt="">
                        <div>
                            <h5>eco eSIM</h5>
                            <p>7 days - Validity <br> 1GB - Data</p>
                        </div>
                    </div>
                    <div class="order-right-wrap">
                        <p>07 Sep 2023, 15:44</p>
                        <h4>US$4.50</h4>
                    </div>
                </div>
            </div>
            <div class="page-contact" v-if="item === 'contact'">
                <h1>Contact Us</h1>
                <p>We're here for you, <br> and our team would be happy to help with any questions or issues you might have.</p>
                <form action="#">
                    <select name="#" id="">
                        <option value="#">Technical Support</option>
                        <option value="#">Technical Support 1</option>
                        <option value="#">Technical Support 2</option>
                    </select>
                    <input type="text" placeholder="first name">
                    <input type="text" placeholder="last name (Optional)">
                    <input type="text" placeholder="email">

                    <div class="confirm">
                        <label class="checkbox" for="ckb2">
                            <input type="checkbox" id="ckb2">
                            <span class="checkmark"></span> 
                        </label> 
                        <span class="confirm-text">Send me news and offers</span>
                    </div>

  
                    <input type="text" placeholder="phone number">
                    <input type="text" placeholder="Device Model (Optional)">
                    <input type="text" placeholder="eSIM ICCID (Optional)">
                    <input type="text" placeholder="massage">
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
</div> 
</template>
<style scope>
    .Profile-wrap {
    max-width: 1170px;
    margin: 100px auto;
}

.Profile-wrap .container {
    display: flex;
    justify-content: flex-start;
    gap: 50px;
}

.Profile-wrap nav > p {
    margin-bottom: 20px;
    padding-left: 20px;
}

.Profile-wrap nav li {
    display: block;
}
.Profile-wrap .container nav {
    width: 30%;
}

.Profile-wrap .container .profile-contents {
    width: 60%;
}
.Profile-wrap nav li a,.Profile-wrap nav li button {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    padding: 10px 20px;
    transition: .2s;
    color: #2D2D2D;
    border-radius: 10px;
    min-width: 300px;
    background: transparent;
    border: none;
    outline: none;
}

.Profile-wrap nav li a.active,.Profile-wrap nav li button.active {
    background: #F6F6F6;
}
.Profile-wrap nav li:last-child{
    margin-top: 20px; 
}
.Profile-wrap nav li:last-child button,.Profile-wrap nav li:last-child button svg path{
    color: #FA4A4A;
    fill: #FA4A4A;
}
.profile-contents h1 {
    font-size: 48px;
    margin-bottom: 10px;
}

.profile-contents p {
    margin-bottom: 20px;
}

.profile-contents button {
    border: 1px solid #2072F9;
    border-radius: 5px;
    padding: 10px 40px;
    color: #fff;
    background: linear-gradient(90deg,#2072F9,#0962F5);
}
.profile-contents button.redThinBtn {
    border: 1px solid #FA4A4A; 
    color: #FA4A4A;
    background: transparent;
}
.page-contact form button {
    width: 100%;
}
.profile-contents {
    padding-top: 20px;
}

.single_order_item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #5353531c;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.order-left-wrap {
    display: flex;
    align-items: center;
    gap: 20px;
}

.order-left-wrap img {
    min-width: 135px;
    max-width: 135px;
    border-radius: 5px;
}

.order-left-wrap h5 {
    font-weight: 500;
    line-height: 2;
}

.order-left-wrap p {
    line-height: 2;
    margin: 0;
}

.order-right-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
}

.order-right-wrap p {
    margin: 0;
    opacity: .5;
}

.order-right-wrap h4 {
    font-weight: 600;
    color: #535353;
}

.page-contact form select, .page-contact form input {
    display: block;
    width: 100%;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #E1E1E1;
}

.page-contact form  .confirm {
    margin-bottom: 15px;
}
</style>

