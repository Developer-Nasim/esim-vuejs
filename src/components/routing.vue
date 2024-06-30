<script setup lang="ts">
import 'bulma/css/bulma.css'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import About from './About.vue'
import NotFound from './NotFound.vue'
import Reviews from './Reviews.vue'
import faqs from './faqs.vue'
import LogIn from './LogIn.vue'
import Home from './Home.vue'
import PersonalErea from './PersonalErea.vue'
import Days from './Days.vue'
import preiod from './preiod.vue'
import createAccount from './createAccount.vue'
import PersonalAreaPackage from './PersonalAreaPackage.vue'
import orderLines from './orderLines.vue'
import PaymentSuccessful from './PaymentSuccessful.vue'
import PaymentFailed from './PaymentFailed.vue'
import { userStore, useLanguagesStore } from '../stores/counter'
import { UITextEnum } from '../models/orderLine'
const routes = {
  '/': Home,
  '/about': About,
  '/faqs': faqs,
  '/Reviews': Reviews,
  '/LogIn': LogIn,
  '/PersonalErea': PersonalErea,
  '/Days': Days,
  '/preiod': preiod,
  '/createAccount': createAccount,
  '/PersonalAreaPackage': PersonalAreaPackage,
  '/orderLines': orderLines,
  '/PaymentSuccessful': PaymentSuccessful,
  '/PaymentFailed': PaymentFailed
}

const user = userStore()
var lang = useLanguagesStore()

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => (routes as any)[currentPath.value.slice(1) || '/'] || NotFound)

const showUserOptions = ref(false)

const toggleUserOptions = () => {
  showUserOptions.value = !showUserOptions.value
}

const selectedOption = ref('')

const selectOption = (option: string) => {
  selectedOption.value = option
}

const showUserOptionsLang = ref(false)

const toggleUserOptionsLang = () => {
  showUserOptionsLang.value = !showUserOptionsLang.value
}

const turnOffMenues = () => {
  showUserOptionsLang.value = false
  showUserOptions.value = false
}

const selectedOptionLang = ref('')

const selectOptionLang = (option: string) => {
  selectedOption.value = option
  switch (option) {
    case 'En':
      lang.currentLang = UITextEnum.En
      break
    case 'Fr':
      lang.currentLang = UITextEnum.Fr
      break
    case 'Sp':
      lang.currentLang = UITextEnum.Sp
    default:
      break
  }
  lang.getDictionary
}


const showCarts = ref(false)

const toggleCartBiw = () => {
  showCarts.value = !showCarts.value; 
}



// Function to handle clicks outside specific elements

const handleOutsideClick = (event: MouseEvent) => {
  // alert("hello");
  // const userOptionsElement = document.querySelector('.user-options');
  // const userOptionsLangElement = document.querySelector('.user-options-lang');
  // if (userOptionsElement && !userOptionsElement.contains(event.target as Node)) {
  //   showUserOptions.value = false;
  // }
  // if (userOptionsLangElement && !userOptionsLangElement.contains(event.target as Node)) {
  //   showUserOptionsLang.value = false;
  // }
}

// Adding and removing the event listener
onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
})
</script>
<!-- @mousedown="turnOffMenues" -->
<template>
  <nav class="navbar is-transparent" >
    <div id="navbarBasicExample" class="navbar-menu max1170px" style="color: gray" >
      <div class="navbar-start cmenu">
        <a href="#" class="logo"><img src="@\assets\logo.png" /></a>
        <div> 
          <a class="navbar-item" href="#/about">About Us</a>
          <a class="navbar-item" href="#/faqs">FAQs</a>
          <a class="navbar-item" href="#/Reviews">Reviews</a>
        </div>
      </div>

      <div class="navbar-end-our">
        <a class="navbar-item">my eSIMs</a> |
        <a class="navbar-item" @click="toggleUserOptions">{{ user.firstName }} aa &nbsp;
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1.09814L6 6.16857L1 1.09814"
              stroke="#2D2D2D"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg> 
          <!-- Conditionally render the user options -->
          <div v-if="showUserOptions" class="user-options">
            <a
              class="user-option"
              :class="{ selected: selectedOption === 'account info' }"
              @click="selectOption('account info')"
              href="#/PersonalErea"
            >
              <span class="text-with-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 9.5625C6.6225 9.5625 4.6875 7.6275 4.6875 5.25C4.6875 2.8725 6.6225 0.9375 9 0.9375C11.3775 0.9375 13.3125 2.8725 13.3125 5.25C13.3125 7.6275 11.3775 9.5625 9 9.5625ZM9 2.0625C7.245 2.0625 5.8125 3.495 5.8125 5.25C5.8125 7.005 7.245 8.4375 9 8.4375C10.755 8.4375 12.1875 7.005 12.1875 5.25C12.1875 3.495 10.755 2.0625 9 2.0625Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M15.4426 17.0625C15.1351 17.0625 14.8801 16.8075 14.8801 16.5C14.8801 13.9125 12.2401 11.8125 9.00011 11.8125C5.76011 11.8125 3.12012 13.9125 3.12012 16.5C3.12012 16.8075 2.86512 17.0625 2.55762 17.0625C2.25012 17.0625 1.99512 16.8075 1.99512 16.5C1.99512 13.2975 5.13761 10.6875 9.00011 10.6875C12.8626 10.6875 16.0051 13.2975 16.0051 16.5C16.0051 16.8075 15.7501 17.0625 15.4426 17.0625Z"
                    fill="#2D2D2D"
                  />
                </svg>

                <span> account information</span></span
              >
            </a>
            <a
              class="user-option"
              :class="{ selected: selectedOption === 'saved cards' }"
              @click="selectOption('saved cards')"
              href="#/SavedCards"
            >
              <span class="text-with-icon">
                <svg
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
                </svg>

                <span>saved cards</span></span
              >
            </a>
            <a
              class="user-option"
              :class="{ selected: selectedOption === 'my orders' }"
              @click="selectOption('my orders')"
              href="#/orderLines"
            >
              <span class="text-with-icon">
                <svg
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
                </svg>

                <span> orders</span></span
              >
            </a>
            <a
              class="user-option redColor"
              :class="{ selected: selectedOption === 'logout' }"
              @click="selectOption('logout')"
              href="#/logout"
            >
              <span class="text-with-icon">
                <svg
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
                </svg>

                <span> logout</span></span
              >
            </a>
          </div>
        </a>
        |

        <div class="navbar-item top_cart_items">
          <span class="active" @click="toggleCartBiw"><img src="@\assets\bag.png" alt=""></span>
          <div class="all_top_cart_items" :class="{'show': showCarts == true}" >
            <div class="citm-top"> 
              <h4>cart <button type="button" @click="toggleCartBiw"><img src="@\assets\close.png" alt=""></button></h4>
              <div class="citem">
                <h4>Echo</h4>
                <p>13 jul 2023 - 20 jul 2023<br>
                  at 6:00 o'clock
                </p>
                <p>15 days<br>
                  10 gigabytes<br>60 minutes
                </p>
                <h5>$ 39.9</h5>
              </div>
            </div>
            <div class="citm-bottom">
              <h4>
                <span>subtotal</span>
                <span>$ 39.9</span>
              </h4>
              <a href="#">Checkout</a>
            </div>
          </div>
        </div>

        <a class="navbar-item" @click="toggleUserOptionsLang">
          En &nbsp;
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1.09814L6 6.16857L1 1.09814"
              stroke="#2D2D2D"
              stroke-width="1.5"
              stroke-linecap="round"/>
          </svg> 
          <!-- Conditionally render the user options -->
          <div v-if="showUserOptionsLang" class="user-options">
            <a
              class="user-option"
              :class="{ selected: selectedOptionLang === 'En' }"
              @click="selectOptionLang('En')"
            >
              <span class="text-with-icon">
                <svg
                  width="21"
                  height="15"
                  viewBox="0 0 21 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4779_6901)">
                    <rect width="21" height="15" fill="#1A47B8" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.23397 0H0V2.5L18.7539 15L21 15V12.5L2.23397 0Z"
                      fill="white"
                    />
                    <path
                      d="M0.745098 0L21 13.5354V15H20.2724L0 1.45056V0H0.745098Z"
                      fill="#F93939"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 0H21V2.5C21 2.5 8.0098 10.8281 2 15H0V12.5L19 0Z"
                      fill="white"
                    />
                    <path d="M21 0H20.3218L0 13.5471V15H0.745098L21 1.46151V0Z" fill="#F93939" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.63708 0H13.3804V4.62682H21V10.3701H13.3804V15H7.63708V10.3701H0V4.62682H7.63708V0Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.8421 0H12.1579V5.76923H21V9.23077H12.1579V15H8.8421V9.23077H0V5.76923H8.8421V0Z"
                      fill="#F93939"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4779_6901">
                      <rect width="21" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span>En</span>
              </span>
            </a>
            <a
              class="user-option"
              :class="{ selected: selectedOptionLang === 'Fr' }"
              @click="selectOptionLang('Fr')"
            >
              <span class="text-with-icon">
                <svg
                  width="21"
                  height="15"
                  viewBox="0 0 21 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4779_10757)">
                    <rect width="21" height="15" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H7V15H0V0Z" fill="#1A47B8" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 0H21V15H14V0Z"
                      fill="#F93939"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4779_10757">
                      <rect width="21" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span> Fr</span>
              </span>
            </a>
            <a
              class="user-option"
              :class="{ selected: selectedOptionLang === 'Sp' }"
              @click="selectOptionLang('Sp')"
            >
              <span class="text-with-icon">
                <svg
                  width="21"
                  height="15"
                  viewBox="0 0 21 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4779_10758)">
                    <rect width="21" height="15" fill="#F93939" />
                    <path
                      d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                      fill="#F93939"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 4H21V11H0V4Z"
                      fill="#FFDA2C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 6.22204V8.74204C9 9.44204 8.328 10.002 7.5 10.002H5.5C4.674 10 4 9.43704 4 8.74004V6.22004C4 5.64804 4.448 5.17004 5.064 5.01504C5.25 4.49504 5.822 4.96104 6.5 4.96104C7.182 4.96104 7.75 4.49804 7.936 5.01604C8.55 5.17504 9 5.65404 9 6.22204Z"
                      fill="#D4AF2C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 7H10V10H9V7ZM3 7H4V10H3V7Z"
                      fill="#CBCBCB"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 9H10V10H9V9ZM3 9H4V10H3V9Z"
                      fill="#1A47B8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 6H10V7H9V6ZM3 6H4V7H3V6Z"
                      fill="#D4AF2C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 6H6V7.5H5V6ZM7 8H8V9.5H7V8Z"
                      fill="#AF010D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 6H8V7.5H7V6Z"
                      fill="#AE6A3E"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 8H6V9.5H5V8Z"
                      fill="#FFDA2C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 6L5 5H8L7 6H6Z"
                      fill="#AF010D"
                    />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4H7V5H6V4Z" fill="#D4AF2C" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4779_10758">
                      <rect width="21" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span> Sp</span>
              </span>
            </a>
          </div>
        </a>
        |


        <a class="navbar-item" href="#/LogIn"> Log In</a>

        <div class="has-dropdown is-hoverable"></div>
      </div>
    </div>
  </nav>

  <component :is="currentView" @mousedown="turnOffMenues" />
</template>

<style scoped>
.max1170px{
  max-width:1170px;
  margin:auto
}
.all_top_cart_items {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    background: #fff;
    height: 100vh;
    overflow: auto;
    padding: 24px;
    border: 1px solid #DEDEDE;
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-content: space-between;
  margin-right: -500px;
  transition: .2s;
}
.all_top_cart_items.show{
  margin-right: -500px;
  margin-right: 0;
}
.all_top_cart_items > div {
    width: 100%;
}
.citm-top > h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid #D9D9D9;
    font-size: 24px;
    margin-bottom: 10px;
}

.citm-top > h4 button {
    background: none;
    border: none;
    padding: 0;
    line-height: 1;
    margin: 0;
    cursor: pointer;
}

.citem {
    padding: 20px 0;
    border-bottom: 1px solid #D9D9D9;
}

.citem h4 {
    font-size: 20px;
    font-weight: 700;
    color: #535353;
    margin-bottom: 10px;
}

.citem  p {
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 15px;
    color: #535353;
}

.citem  h5 {
    text-align: right;
    color: #535353;
    font-size: 20px;
}
.navbar-item.top_cart_items > span {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.navbar-item.top_cart_items > span.active {
    position: relative;
    z-index: 2;
}

.navbar-item.top_cart_items > span.active:after {
    content: "";
    position: absolute;
    width: 7px;
    height: 7px;
    background: #FF0000;
    bottom: -1px;
    right: 1px;
    border-radius: 50%;
}
.citm-bottom h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    color: #535353;
    font-size: 20px;
    padding-top: 15px;
    border-top: 1px solid #D9D9D9;
}

.citm-bottom a {
    display: block;
    width: 100%;
    padding: 13px;
    text-align: center;
    color: #fff;
    background: linear-gradient(90deg, #2072F9, #0962F5);
    border-radius: 22px;
    font-size: 18px;
    font-weight: 600;
    transition: .2s;
}

.citm-bottom a:hover {
    background: linear-gradient(90deg, #2072F9, #0962F5);
}
.text-with-icon {
  display: flex;
  gap: 5px;
  font-size: 16px;
}
.user-option {
  width: 250px;
  align-content: center;
  padding: 10px 20px;
  padding-left: 12px;
  border-radius: 8px;
  text-align: left;
  color: black;
}

.user-option.selected {
  background-color: #FAFAFA; /* Blue background when selected */
  color: black;
}
.user-option.redColor, .user-option.redColor svg path{
  color: #E41849;
  fill: #E41849;
}
.navbar {
  background-color: rgba(0, 0, 0, 0) !important;
  min-height: auto;
  padding-top: 30px
}
.navbar-start.cmenu {
    display: flex;
    align-items: center;
}

.navbar-start.cmenu a.logo {
    margin-right: 32px;
    padding-right: 17px;
    border-right: 2px solid #2D2D2D;
    display: flex;
    align-items: center;
}

.navbar-start.cmenu > div {
    display: flex;
    flex-wrap: wrap;
}
.user-options {
  display: grid;
  position: absolute;
  top: 30px;
  border: 1.2px solid #8a8a8a4a;
  border-radius: 7px;
  padding: 12px;
  right: 0px;
  background: #fff;
  box-shadow: 0 0 6px 0 #0022d230;
  transition: .2s;
}

.navbar-end-our {
  display: flex;
  align-items: baseline;
  align-items: center;
}

.navbar-item {
  color: black !important;
  padding: 0 0.75rem;
  line-height: 1;
} 
a:hover {
  background: unset;
}
</style>
 