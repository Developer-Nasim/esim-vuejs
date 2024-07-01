<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="title-with-img">
    <div class="title-and-desc">
      <div class="before-title">
        <div class="before-title-text">
          <div>{{ Lang.getTranslate('International eSIM') }}</div>
        </div>

        <div class="saparate"></div>

        <div class="before-title-text">
          <div>{{ Lang.getTranslate('Reviews') }}</div>
        </div>
        <div>
          <img src="@\assets\Home\blue-starts.png" />
        </div>
      </div>
      <div>
        <!-- <span class="part1-title-home">{{Lang.getTranslate("The best packages at the best prices")}}</span> -->
        <div class="homeTitle">
          {{ Lang.getTranslate('Stay connected wherever You go') }}
        </div>
        <div class="homeDesc">
          {{
            Lang.getTranslate(
              'With eSIM Israel, forget about extra packages when you return and benefit from an Internet connection throughout your stay.'
            )
          }}
        </div>
      </div>

      <div class="is-israel-btns">
        <button class="is-israel-btn is-checked">
          <span class="howItWorkBtnContent"
            ><span class="howItWorkSpan">{{ Lang.getTranslate('israel') }}</span>
          </span>
        </button>
        <button class="is-israel-btn is-not-checked">
          <span class="howItWorkBtnContent"
            ><span class="howItWorkSpan blue-text">{{ Lang.getTranslate('international') }}</span>
          </span>
        </button>
      </div>
    </div>
    <div>
      <div class="logo-img-div">
        <img src="@\assets\Home\man-with-phone.png" class="logo-img" />
      </div>
    </div>
  </div>
  <div class="chat-icon">
    <img src="@\assets\Home\orange-chat.png" />
  </div>
  <br />
  <div class="programs-with-shaddow">
    <div class="programs">
      <template v-for="(column, index) in dataBase.data" :key="index">
        <template v-if="index % 5 == 0">
          <div :class="'box program' + (index == 0 ? ' first-program' : '')">
            <div class="pack-name-price">
              <p
                :class="
                  PackagesEnum[column.PackageType] == 'Business' ? 'pack-name buis' : 'pack-name'
                "
              >
                {{ PackagesEnum[column.PackageType] }}
              </p>
              <div>
                <lable class="subtitle from">from-</lable><br />
                <label class="pack-price">${{ column.Price }}</label>
              </div>
            </div>
            <!-- <label style="font-size: 15px; text-transform: capitalize; line-height: 33.50px"> to {{column.Days}} days</label> -->
            <ul style="line-height: 2.5">
              <p>15 | 30 | 45 | 60 {{ Lang.getTranslate('to choose') }}</p>
              <div>
                <!--לשנות את הכמות של הבלתי מוגבלים-->
                <div v-for="(value, index) in column.Settings" :key="index">
                  <div v-if="value.Quantity != 0">
                    <img src="@/assets/Home/vorange.png" />
                    &nbsp;&nbsp;
                    <label>{{ value.Quantity }}</label> {{ value.Description }}
                  </div>
                </div>
                <div v-if="column.PackageType == 0">
                  <h4>{{ Lang.getTranslate('Extras') }}</h4>
                  <p>{{ Lang.getTranslate('Up To +20 GB Surfing') }}</p>
                  <p>{{ Lang.getTranslate('Up To +120 Minutes Call') }}</p>
                  <p>{{ Lang.getTranslate('International Call Forwarding') }}</p>
                </div>
              </div>
            </ul>
            <button class="cont-btn" @click="continues(column.Code)">
              {{ Lang.getTranslate('Continue') }}
            </button>
          </div>
        </template>
      </template>
    </div>
  </div>
  <div class="clear-process">
    <span class="clear-process-span">
      {{ Lang.getTranslate('Easy and clear process') }}
    </span>
    <div class="clear-process-imgs">
      <div class="clear-stage">
        <img src="@\assets\Home\process1.png" class="cl-img" />
        <span class="clear-stage-span"> 1. {{ Lang.getTranslate('Buy a package') }}</span>
      </div>
      <div class="clear-stage">
        <img src="@\assets\Home\process1.png" class="cl-img" />
        <span class="clear-stage-span">
          2. {{ Lang.getTranslate('Receiving the eSIM by email') }}</span
        >
      </div>
      <div class="clear-stage">
        <img src="@\assets\Home\process1.png" class="cl-img" />
        <span class="clear-stage-span">
          3. {{ Lang.getTranslate('Clear and simple installation instructions') }}</span
        >
      </div>
      <div class="clear-stage">
        <img src="@\assets\Home\process1.png" class="cl-img" />
        <span class="clear-stage-span">
          4. {{ Lang.getTranslate('Use the selected program with pleasure') }}</span
        >
      </div>
    </div>
  </div>
  <img src="@\assets\Home\man-on-sofa.png" class="sofa-with-man" /> 
  <div class="whyus">
    <div class="whyus-content-are">
      <h1>Why us?</h1>
      <ul>
        <li>
          <img src="@\assets\Home\why.png" alt="">
          <p>We have local expertise</p>
        </li>
        <li>
          <img src="@\assets\Home\why2.png" alt="">
          <p>Match needs As needed by period</p>
        </li>
        <li>
          <img src="@\assets\Home\why3.png" alt="">
          <p>Call forwarding</p>
        </li>
        <li>
          <img src="@\assets\Home\why4.png" alt="">
          <p>significant Savings From using yourIntl Line</p>
        </li>
      </ul>
    </div>
    <img src="@\assets\Home\sofa-with-sut.png" />
  </div> 

  <div class="all-check">
    <div class="check-esim">
      <div class="text-and-phones"><div>
      <div class="check-esim-span-1">
        {{ Lang.getTranslate('Check that your device is eSIM compatible') }}
      </div>
      <div class="check-esim-span-2">
        {{ Lang.getTranslate('Your phone must be eSIM compatible') }}
      </div>
       <button class="check-btn">
        <span class="howItWorkBtnContent"
          ><span class="howItWorkSpan">{{ Lang.getTranslate('to check') }}</span
          ><svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L6 6L1 11" stroke="white" stroke-width="2" stroke-linecap="round" />
          </svg>
        </span>
      </button>
    </div>
    <div class="phones">
      <img src="@\assets\Home\phones.png" style="width: 448px;"/>
    </div>
  </div>
 
    </div>

    <div class="man-looking-div">
      <img src="@\assets\Home\man-is-looking.png" style="width: 324px;"/>
    </div>
 
  </div>


  <div style="background-color: rgba(32, 114, 249, 1.5%);padding-top: 20px;">
    <div class="faqs-div">
      <div class="faqs-title">
        {{ Lang.getTranslate('FAQs') }}
      </div>
      <div class="all-questions">
        <div v-if="queAndAns.QueAndAns.length > 0" class="each-que" style="padding-bottom: 0px">
          <span>{{ Lang.getTranslate(queAndAns.QueAndAns[0].Question) }}</span>
          <span class="oxc-icon" @click="showAnswer(queAndAns.QueAndAns[0].QuestionsAndAnswersId)"
            ><svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2603 9.536H10.4443V16.448H7.72425V9.536H0.94025V7.072H7.72425V0.127998H10.4443V7.072H17.2603V9.536Z"
                fill="url(#paint0_linear_4653_3924)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4653_3924"
                  x1="5.50898"
                  y1="-15"
                  x2="27.2481"
                  y2="-13.1926"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EEC167" />
                  <stop offset="1" stop-color="#E56E44" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div v-for="(data, index) in queAndAns.QueAndAns.slice(0, showAllQuestions ? queAndAns.QueAndAns.length : 5)" :key="index">
          <!-- <svg
            v-if="index != 0"
            width="1050"
            height="1"
            viewBox="0 0 1050 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.8" x2="1050" y2="0.8" stroke="#535353" stroke-width="0.4" />
          </svg> -->
          <hr class="bffaq">
          <div class="each-que">
            <span v-if="index != 0">{{ data.Question }}</span>
            <span class="oxc-icon" @click="showAnswer(data.QuestionsAndAnswersId)" v-if="index != 0"
              ><svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2603 9.536H10.4443V16.448H7.72425V9.536H0.94025V7.072H7.72425V0.127998H10.4443V7.072H17.2603V9.536Z"
                  fill="url(#paint0_linear_4653_3924)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4653_3924"
                    x1="5.50898"
                    y1="-15"
                    x2="27.2481"
                    y2="-13.1926"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EEC167" />
                    <stop offset="1" stop-color="#E56E44" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>

          <div  v-if="showAns && data.QuestionsAndAnswersId == answerId" class="faq-item-content">
            {{ Lang.getTranslate(data.Answer) }}
          </div>


        </div>
      </div>
      <span style="cursor: pointer;" class="see-all" @click="showAllQuestions = !showAllQuestions">{{ Lang.getTranslate(showAllQuestions ? 'Collapse questions' : 'See all questions') }}</span>
      <!-- <span class="see-all">{{ Lang.getTranslate('See all questions') }}</span> -->
    </div>
    <div class="pass-div">
      <img src="@\assets\Home\passangers-orange.png" class="pass-img"/>
    </div>
  </div>
  

  <div class="support">
    <div class="support-wrap">
      <div> 
        <h1>Don't worry! We are here for you</h1>
        <p>If you have difficulty with this process, you can find us in our support chat.</p>
        <button class="lets-talk-btn">
          <span class="howItWorkBtnContent"
            ><span class="howItWorkSpan">{{ Lang.getTranslate("Let's talk") }}</span
            ><svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6 6L1 11" stroke="white" stroke-width="2" stroke-linecap="round" /></svg></span>
        </button> 
      </div>
      <img src="@\assets\Home\support.png" />
    </div>
  </div>
  <div class="opinions">
    <div class="opinion-title">
      <span class="opinion-text">{{ Lang.getTranslate('What Our Customers Have To Say') }} ?</span>
      <div class="opinions-cus">
        <img src="@\assets\Home\previous.png" class="arrow" @click="prev()" />
        <div v-for="i in 3" :key="i" class="customer" v-if="OpinionS.opinionsList.length > 0">
          <div class="cust-title">
            <span>
              <img src="@\assets\Home\5orange-stars.png" />
            </span>
            <span class="cust-name">{{
             OpinionS.opinionsList[(currentIndex + i) % OpinionS.opinionsList.length].CustomerName
             }}</span>
          </div>
          <span class="opi-title">{{ OpinionS.opinionsList[(currentIndex + i) % OpinionS.opinionsList.length].OpinionTitle }}</span>
          <div class="opi-desc">
            {{ OpinionS.opinionsList[(currentIndex + i) % OpinionS.opinionsList.length].OpinionDesc }}
          </div>
        </div>
        <img src="@\assets\Home\next.png" class="arrow" @click="next()" />
      </div>
    </div>
  </div>


  
  <img src="@\assets\Home\man-with-a-suitcase-orange.png" class="man-with-sut-orange" />
 
  <footer> 
    <div class="contact-background">
      <div class="contact-middle">
        <div class="all-contact">
          <div class="contact-column">
            <span>{{ Lang.getTranslate('Logo') }}</span>
            
            <div class="social-medias">
              <p>Follow Us</p>
              <ul>
                <li><a href="#"><img src="#" alt=""><img src="@\assets\fb.png" alt=""></a></li>
                <li><a href="#"><img src="#" alt=""><img src="@\assets\insta.png" alt=""></a></li>
                <li><a href="#"><img src="#" alt=""><img src="@\assets\tw.png" alt=""></a></li>
                <li><a href="#"><img src="#" alt=""><img src="@\assets\tkt.png" alt=""></a></li>
                <li><a href="#"><img src="#" alt=""><img src="@\assets\lkd.png" alt=""></a></li>
              </ul>
            </div>
          </div>
          <div class="contact-column">
            <p>{{ Lang.getTranslate('Contact information') }}</p>
            <ul>
              <li><a href="#">{{ Lang.getTranslate('contact@easyisrael-mobile') }}</a></li>
              <li><a href="#">{{ Lang.getTranslate('97255 508 55') }}</a></li>
              <li><a href="#">{{ Lang.getTranslate('sapir center 6') }}</a></li> 
            </ul> 
          </div> 
          <div class="contact-column">
            <p>{{ Lang.getTranslate('About as') }}</p>
            <ul>
              <li><a href="#">{{ Lang.getTranslate('About easy israel') }}</a></li>
              <li><a href="#">{{ Lang.getTranslate('Why Us?') }}</a></li>
              <li><a href="#">{{ Lang.getTranslate('Contact Us') }}</a></li>
              <li><a href="#">{{ Lang.getTranslate('Blog') }}</a></li>
            </ul> 
          </div>
          <div class="contact-column">
            <p>{{ Lang.getTranslate('Legal') }}</p>
            <ul>
              <li><a href="#">{{ Lang.getTranslate('Terms And Conditions') }}</a></li>
              <li><a href="#">{{ Lang.getTranslate('Privacy Policy') }}</a></li>
              <li><a href="#">{{ Lang.getTranslate('Coocies Policy') }}</a></li>
              <li><a href="#">{{ Lang.getTranslate('Refund Policy') }}</a></li>
            </ul> 
          </div>

        </div>
      </div>
    </div>
    <div class="pay">
      <p>Secure electronic payment site</p>
      <img src="@\assets\Home\payments.png" />
    </div>
  </footer>


</template>
<script lang="ts">
import 'bulma/css/bulma.css'
// import router from '@/router';
import { useDataStore, usePackageStore, useLanguagesStore, opinionsStore,QuestionsAndAnswerStore } from '../stores/counter'
import { PackagesEnum, orderLine } from '@/models/orderLine'
import { defineComponent } from 'vue'
import { Opinion } from '@/models/opinions';

export default defineComponent({
  setup() {
    const store = usePackageStore()
    const dataBase = useDataStore()
    const Lang = useLanguagesStore()
    const OpinionS = opinionsStore()
    const queAndAns = QuestionsAndAnswerStore()

    return { store, dataBase, Lang, OpinionS, queAndAns}
  },
  data() {
    return {
      PackagesEnum: PackagesEnum,
      questions: [
        'Quest ce que la eSIM ?',
        'Est ce que tous les appareils sont compatibles avec la eSIM ?',
        'Est ce que la eSIM est payante?',
        'Puis-je conserver ma eSIM et la recharger pour un autre séjour en Israel?',
        'Comment configurer ma eSIM sur iPhone ?'
      ],
      currentIndex: 0,
      showAns: false,
      answerId: 1000,
      showAllQuestions: false,
      lastId: 1000
    }
  },
  prop: ['propName'],
  methods: {
    continues(prop: number) {
      this.store.orders.push(
        new orderLine(
          this.store.currentOrderIndex,
          0,
          this.store.getRandomId(),
          prop,
          new Date(),
          this.Lang.currentLang,
          this.Lang.currentCurrency,
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        )
      )
      this.store.getCurrentOrderIndex()
      //* console.log('Clicked with parameter:', this.store.orders[this.store.currentOrderIndex].CodeNumDays);
      console.log(this.store.currentOrderIndex + '  curr')
      // this.$router.push('/#/Days');
      // router.push('/#/Days');
      //  window.history.pushState({},"" , '/#/Days' );
      window.location.hash = '/Days'
    },
    prev() {
      this.currentIndex = (this.OpinionS.opinionsList.length + this.currentIndex - 1) % this.OpinionS.opinionsList.length
    },
    next() {
      this.currentIndex = (this.OpinionS.opinionsList.length + this.currentIndex + 1) % this.OpinionS.opinionsList.length
    },
    showAnswer(id: number){
      if(id == this.lastId)
        this.showAns = !this.showAns;
      else
        this.showAns = true;
      this.answerId = id;
      this.lastId = id;
    }
  }
})
//this.$emit('prop-clicked', this.propName);

// other component options
</script>

<style scoped>
body {
  background: linear-gradient(270deg, rgba(255, 214, 1, 0.08) 0%, rgba(66, 227, 158, 0.08) 100.7%);
}
.container{
  max-width:1170px
}
.programs-with-shaddow {
  height: 543px;
  position: relative;
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 1124px;
}
.phones {
 width: 50%;
}
.text-and-phones div:first-child{
  width: 45%;
}
.phones img{
  width: 100% !important;
}
.text-and-phones div:first-child div {
    width: 100% !important;
}
.text-and-phones div button{
  position:unset;
  margin-top: 30px;
}
.text-and-phones div:first-child   .check-esim-span-1 {
    margin-bottom: 15px;
    margin-top:120px
}
.cust-name {
  color: var(--3, #8a8a8a);
  font-family: Modern Era;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  display: grid;
  align-content: space-around;
}
.cust-title {
  display: flex;
  justify-content: space-between;
}
.arrow {
  width: 40px;
  height: 40px;
  align-self: center;
  cursor: pointer;
}
.opi-title {
  color: #535353;
  font-family: Modern Era;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
}
.opi-desc {
  color: #535353;
  font-family: Modern Era;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.023%;
  text-transform: capitalize;
}
.customer {
  border: 0.4px solid #8a8a8a;
  width: 292px;
  border-radius: 12px;
  height: 299px;
  padding: 20px;
}
.is-israel-btns {
  top: 30px;
  position: relative;
  width: 360px;
  display: flex;
  justify-content: space-between;
}
.opinions-cus {
  display: flex;
    justify-content: space-between;
    padding-top: 50px;
}
.opinions {
  width: 1124px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 191px;
}
.pay {
  justify-content: center;
    padding-bottom: 40px;
    gap:30px
}
.opinion-text {
  font-family: Modern Era;
  font-size: 48px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;
}
.opinion-question-mark {
  background: -webkit-linear-gradient(91.41deg, #e42f77 8.92%, #ef4a79 80.16%, #f85d7c 89.38%);
  font-size: 38px;

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.opinion-title {
  font-family: Modern Era;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;

  font-family: Modern Era;
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
}
.contact {
  
}
.help-desc {
  width: calc(100vw * -0.05 + 564px);
  font-family: Modern Era;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  background: var(--Linear, linear-gradient(270deg, #2072f9 0%, #0962f5 94.53%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.help-title {
  background: var(--Linear, linear-gradient(270deg, #2072f9 0%, #0962f5 94.53%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Modern Era;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
}
.support {
  width: 1124px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  position: relative;
}
.support-text {
  /* top: 415px; */
  bottom: 18%;
  position: absolute;
  left: calc(100vw * 0.44 - 430px);
}
.support-wrap {
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    padding: 73px 65px;
    background: #F2BBA3;
    z-index: 3;
}

.support-wrap:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(91deg, #F2BBA3, #f6dbb1, #f6dbb126);
}

.support-wrap > img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 60%;
    height: 100%;
    object-fit: cover;
}

.support-wrap > div {
    position: relative;
    z-index: 5;
    max-width: 530px;
}
.support-wrap > div button.lets-talk-btn {
    position: unset;
    margin-top: 50px;
}
.support-wrap > div h1 {
    font-size: 48px;
    line-height: 1.3;
    margin-bottom: 10px;
}

.support-wrap > div p {
    font-size: 20px;
    line-height: 1.5;
}
.man-with-a-suitcase {
  width: 26.5vw;
  top: 12.5vw;
  position: absolute;
  left: calc(100vw * 0.88 - 425px);
}
.buildings-background {
  /* top: 4212px;
    position: absolute; */
  /* left: -111px; */
  height: inherit;
}
.see-all {
  background: var(--Linear, linear-gradient(270deg, #2072f9 0%, #0962f5 94.53%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: right;
    font-family: Modern Era;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    display: block;
}
button{
  cursor: pointer
}
.each-que {
  padding-top: 28px;
  padding-bottom: 28px;
  color: #535353;
  text-align: left;
  font-family: Modern Era;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
}
 
.all-questions .faq-item-content{
  padding-bottom: 35px;
  padding-top:0
}
hr.bffaq {
    display: block;
    width: 95%;
    margin: 0;
}
span.oxc-icon {
    cursor: pointer;
}
.faqs-div {
  width: 1124px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 70px;
}
.faqs-title {
  font-family: Modern Era;
  font-size: 48px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;
  margin-bottom:30px
}
.big-cloud {
  top: 2770px;
  position: absolute;
  left: -144px;
}
.small-cloud {
  top: 2880px;
  position: absolute;
  left: 147px;
  width: 143px;
}
.passengers {
  top: 2796px;
  position: absolute;
  left: calc(100vw * 1.07 - 527px);
  width: 455px;
}
.airport {
  top: calc(100vw * -0.044 + 2495px);
  position: absolute;
  left: calc(100vw * 0.46 - 289px);
  width: 76px;
}
.why-us {
  width: 100vw;
}
.airplan {
  top: calc(100vw * -0.026 + 2448.5px);
  position: absolute;
  left: calc(100vw * 0.46 - 440.4px);
  width: 217.3px;
}
.check-esim {
  width: 1124px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  position: relative;
}
.check-esim-span-1 {
  font-family: Modern Era;
    font-size: 39px;
    font-style: normal;
    line-height: normal;
    width: 451px;
}
.check-esim-span-2 {
  font-family: Modern Era;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.small-shadow {
  bottom: 0px;
  position: absolute;
}
.sofa-with-man {
      margin-bottom: -6px;
}
.sofa-img {
  position: absolute;
  right: 0px;
}
.sofa-shadow {
  position: absolute;
  left: calc(100vw * 0.6 - 1.81px);
  z-index: -1;
  top: calc(100vw * 0.08 + 1999px);
  width: calc(100vw * 0.3 + 299px);

  /* היה אמור להיות ועוד 0.08 ולא 0.12 למה? */
}
.suitcase {
  top: calc(100vw * 0.07 + 1986px);
  position: absolute;
  width: calc(100vw * 0.09 + 90.36px);
  left: calc(100vw * 0.64 + 39.6px);
}
.cl-img {
  border: solid 3px black;
  border-radius: 18px;
}
.clear-process-span {
  font-family: Modern Era;
  font-size: 32px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.clear-process-imgs {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.clear-process {
  margin-top: 150px;
  width: 1124px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.clear-stage-span {
  text-align: center;
  font-family: Modern Era;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  color: #535353;
}
.clear-stage {
  display: grid;
  width: 184px;
  gap: 12px;
}
.programs {
  display: flex;
  justify-content: space-between;
  max-width: 1070px;
  margin:auto;
  margin-top: 100px;
}
.first-program::after {
  background-image: url('/img/blue-shadow.png');
    content: ' ';
    width: 160px;
    height: 150px;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    display: block;
    bottom: -55px;
    left: -64px;
    z-index: -2;
} 
.program {
  width: 32%;
  border-radius: 16px;
  border: 0.4px solid var(--3, #e9e9e9);
  background: var(--white, #fff);
  height: 543px;
  box-shadow: 0px 0px 6px 0px #0022d226;
  position: relative;
  z-index: 10;
  padding: 34px 20px;
}
.program:before{
  content:"";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 16px;
  height: 100%;
  z-index: -1;
  background:#fff
}
.chat-icon {
  top: calc(100vw * -0.126 + 1114px);
  left: calc(100vw * 0.99 - 129px);
  position: absolute;
  z-index: 1;
}
.part1-title-home {
  background: var(--Linear, linear-gradient(270deg, #2072f9 0%, #0962f5 94.53%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Modern Era;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
}
.shadow-div {
  left: calc(100vw * 0.6 + 66.5px);
  position: absolute;
  top: calc(100vw * -0.09 + 160.6px);
  /* width: calc(100vw *0.32 + 392.3px); */
  /* left: calc(100vw *0.5 + 150.5px);
    position: absolute;
    top: calc(100vw *-0.09 + 80.6px); */
}
.shaow-img {
  width: calc(100vw * 0.32 + 392px);
}
.eco-color {
  background: -webkit-linear-gradient(91.41deg, #e42f77 8.92%, #ef4a79 80.16%, #f85d7c 89.38%);
}
.eco-color-btn {
  border-radius: 24px;
  background: var(--Linear, linear-gradient(91deg, #e42f77 8.92%, #ef4a79 80.16%, #f85d7c 89.38%));
}
.medium-color {
  background: linear-gradient(269.68deg, #2072f9 0%, #0962f5 94.53%);
}
.medium-color-btn {
  border-radius: 24px;
  background: var(--Linear, linear-gradient(270deg, #2072f9 0%, #0962f5 94.53%));
}
.business-color {
  background: linear-gradient(265.34deg, #41c18a 9.2%, #4bde9f 92.94%);
}
.business-color-btn {
  border-radius: 24px;
  background: var(--Linear, linear-gradient(265deg, #41c18a 9.2%, #4bde9f 92.94%));
}
.cont-btn {
  color: white;
  font-size: 18px;
  width: 88%;
  height: 47px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  border-radius: 15px;
  border: none;
  bottom: 32px;
  position: absolute;
  background: linear-gradient(269.68deg, #2072f9 0%, #0962f5 94.53%);
}
.eco-text {
  font-size: 1.5em;
  font-weight: bold;
  /* background: -webkit-linear-gradient(91.41deg, #E42F77 8.92%, #EF4A79 80.16%, #F85D7C 89.38%); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.medium-text {
  font-size: 1.5em;
  font-weight: bold;
  /* background: linear-gradient(269.68deg, #2072F9 0%, #0962F5 94.53%); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.business-text {
  font-size: 1.5em;
  font-weight: bold;
  /* background: linear-gradient(265.34deg, #41C18A 9.2%, #4BDE9F 92.94%); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.homeTitle {
  font-family: Modern Era;
  font-size: 67px;
  font-weight: 400;
  line-height: 70px;
  text-align: left;
  color: #000000;
  width: 580px;
  margin: 10px 0;
}

.homeDesc {
  width: 516px;
  height: 40px;
  /* top: 453px; */
  /* left: 399px; */
  /* gap: 0px; */
  font-family: Modern Era;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.5px;
  text-align: left;
}

.check-btn {
  width: 167px;
    height: 49px;
    border-radius: 12px;
    background: #2072f9;
    border: none;
    top: 170px;
    position: absolute;
}
.howItWorkBtn {
  width: 167px;
  height: 49px;
  top: 418px;
  left: 348px;
  border-radius: 12px;
  /* border-color: #2D75EC;
background: #2D75EC; */
  border-radius: 12px;
  background: var(--Linear, linear-gradient(91deg, #e42f77 8.92%, #ef4a79 80.16%, #f85d7c 89.38%));
  border: none;
}
.howItWorkSpan {
  /* width: 90px;
height: 24px;
top: 428px;
left: 374px; */
  font-family: Modern Era;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
}

.blue-text {
  color: #0962f5;
  border: 0962F5 2px;
}
.is-israel-btn {
  width: 167px;
  height: 49px;
  top: 418px;
  left: 348px;
  border-radius: 12px;
  border-radius: 12px;
  border: none;
}

.is-checked {
  background: linear-gradient(269.68deg, #2072f9 0%, #0962f5 94.53%);
}
.is-not-checked {
  background: white;
  border: solid 1px #0962f5;
}
.howItWorkBtnContent {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
.reviews-text {
  color: var(--, #535353);
  font-family: Modern Era;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}

.title-with-img {
  display: flex;
  gap: 100px;
  max-width: 1170px;
  margin: auto;
}
.before-title {
  display: flex;
  gap: 30px;
}

.logo-img-div {
  margin-top: 30%;
}
.logo-img {
  /* width: calc(100vw * 0.5 - 274px); */
}
.title-and-desc {
  margin-top: calc(100vw * 0.03 + 116px); 
}

.before-title-text {
  font-family: Modern Era;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.5px;
}

.saparate {
  border: solid 1px;
}
.pack-name-price {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6%;
  align-items: flex-end;
}
.pack-name {
  font-family: Modern Era;
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
}
.pack-price {
  font-family: Modern Era;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  text-align: right;
}

.from {
  font-family: Modern Era;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  color: #767676;
}

.buis {
  background: linear-gradient(100.28deg, #eec167 28.89%, #e56e44 113.11%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.all-check {
}

.man-with-sut-orange {
  margin-top: -140px;
}

.dont-worry-img {
  
}
.man-looking-div{
  margin-top: -180px;
  margin-bottom: -6px
}
.text-and-phones{
  display: flex;
    justify-content: space-between;
}

.pass-img{
  position: absolute;
    right: 0px;
}
.pass-div{
  position: relative;
  height: 200px;
}

.lets-talk-btn{
  width: 167px;
    height: 49px;
    border-radius: 12px;
    background: #2072f9;
    border: none;
    position: absolute;
    left: 59px;
    bottom: 55px;
}

.all-contact{
  display: flex;
    justify-content: space-between;
}
.contact-column{
 position: relative
}

.contact-middle{
  width: 1124px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 70px;
    margin-bottom: 70px;
}

.contact-background{
  background-color: rgba(32, 114, 249, 1.5%);
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 40px;
}



hr.bffaq {
    display: block;
    width: 95%;
    margin: 0;
}

span.oxc-icon {
    cursor: pointer;
}

.all-questions > div .each-que {}

.contact-column p {
    font-size: 16px;
    margin-bottom: 15px;
}

.contact-column > ul li {
    display: block;
    width: 100%;
}

.contact-column > ul li a {
    display: block;
    color: #2D2D2D;
    margin-bottom: 10px;
}

.contact-column ul li a:hover {
    background: no-repeat;
    color: #337ab7;
}

.social-medias {
    margin-top: 80px;
}

.social-medias ul {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}
.whyus {
    background: rgba(32, 114, 249, 1.5%);
}

.whyus-content-are {
    padding-top: 150px;
    padding-bottom: 90px;
    max-width: 1140px;
    margin: auto;
}

.whyus-content-are ul {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
}

.whyus-content-are ul li {
    width: 13%;
    text-align: center;
}

.whyus-content-are ul li img {
    display: block;
    margin: auto;
    width: auto;
    height: 100px;
    margin-bottom: 10px;
}

.whyus > img {
    display: block;
    margin-left: auto;
    margin-right: 0;
}
</style>
