// import { orderLine } from '@/models/orderLine';
//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { orderLine, CurrencyEnum, UITextEnum } from '../models/orderLine'
import { QuestionsAndAnswer } from '../models/QuestionsAndAnswer'
import { Opinion } from '../models/opinions'

//import { PackageDays } from '@/models/PackageDays';
//import { data, ExtraData } from './data';
import { Option, PackageDays, ExtraOptions, PackagesEnum } from '../models/PackageDays';
import { MultiLanguageText, UIText } from '../models/UiText';

//const baseURL = 'https://localhost:44343'
const baseURL = 'https://easy.datasyspro.com'





export const uiLangData: { [key: string]: { [lang: string]: MultiLanguageText } } = {}

export const useLanguagesStore = defineStore('Languages', {
  state: () => {
    return {
      dictionary: uiLangData,
      currentLang: UITextEnum.En,//Sp,//"EN"
      currentCurrency: CurrencyEnum.USD,
      baseURL:baseURL
      //{ key: "en" ,value:{lang: "eco", value : "eco" } }]
      //  { [key: string] :  { [lang: string] : string; }; }
    }
  },
  getters: {
    getTranslate: (state) => {
      return function (word: string) {
        try {
          return state.dictionary[word]['Text' + UITextEnum[state.currentLang]];

        }
        catch {
          console.log("word:");
          console.log(word);
          return "";
        }
      }
    },
    getDictionary: async (state) => {
      console.log("get from server")
      const rawResponse = await fetch(baseURL + '/api/UiTextDictionary/Index', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: "include"
      })
      if (rawResponse.ok) {
        state.dictionary = await rawResponse.json();

        console.log(state.dictionary);
      } else {
        console.error('Error:', rawResponse.status);
      }
    },

  }
});




export const opinionsStore = defineStore('Opinions', {
  state: () => {
    return {
    opinionsList: Array<Opinion>(),
    baseURL:baseURL
    }
  },
  getters: {
    getOpinions: async (state) => {
      console.log("get from server")
      const rawResponse = await fetch(baseURL + '/api/OpinionsApp/GetOpinions', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: "include"
      })
      if (rawResponse.ok) {
        state.opinionsList = await rawResponse.json();
      } else {
        console.error('Error:', rawResponse.status);
      }
    },

  }
});





export const QuestionsAndAnswerStore = defineStore('QuestionsAndAnswer', {
  state: () => {
    return {
      QueAndAns: Array<QuestionsAndAnswer>(),
    baseURL:baseURL
    }
  },
  getters: {
    getQueAndAns: async (state) => {
      console.log("get from server")
      const rawResponse = await fetch(baseURL + '/api/QuestionsAndAnswersApp/GetQuestionsAndAnswers', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: "include"
      })
      if (rawResponse.ok) {
        state.QueAndAns = await rawResponse.json();
      } else {
        console.error('Error:', rawResponse.status);
      }
    },

  }
});









export const useDataStore = defineStore('Data', {
  state: () => {
    return {
      data: Array<PackageDays>(),
      ExtraDAta: Array<ExtraOptions>()
    }
  },
  getters: {
    getDaysByCode(state): PackageDays | null | undefined {
      console.log('enter getDaysByCode');

      const StoreOrder = usePackageStore()
      console.log(StoreOrder.currentOrderIndex);
      //alert(StoreOrder.orders[StoreOrder.currentOrderIndex].CodeNumDays);
      return state.data.find(x => x.Code === StoreOrder.orders[StoreOrder.currentOrderIndex].CodeNumDays)
    },
    getPackageDurtion: async (state) => {
      console.log("get from server")
      const rawResponse = await fetch(baseURL + '/api/PackagesData/Index', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: "include"

      })
      if (rawResponse.ok) {
        state.data = await rawResponse.json();

        console.log(state.data);
      } else {
        console.error('Error:', rawResponse.status);
      }
    },
    getExtraOption: async (state) => {
      console.log("get extra from server")
      const rawResponse = await fetch(baseURL + '/api/ExtraOptionDate/Index', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: "include"

      })
      if (rawResponse.ok) {
        state.ExtraDAta = await rawResponse.json();
        console.log(state.ExtraDAta); // or do something else with the data
      } else {
        console.error('Error:', rawResponse.status);
      }
      //alert(rawResponse+"res")

    },
    getESuffringByCode(state): Option | null | undefined {
      console.log('enter getESurffingByCode');
      const StoreOrder = usePackageStore()
      //alert(StoreOrder.orders[0].AddCodeSurfing +"store getESuffringByCode ");
      const index = Object.values(state.ExtraDAta).findIndex(f => f.OptionValues?.find(i => i.Code == StoreOrder.orders[StoreOrder.currentOrderIndex].AddCodeSurfing));
      //alert(index+"in store getESuffringByCode")
      return state.ExtraDAta[index]?.OptionValues.find(i => i.Code == StoreOrder.orders[StoreOrder.currentOrderIndex].AddCodeSurfing); // state.ExtraDAta.find((x) => x.Options.find(index=> index.Code=== StoreOrder.orders[0].AddCodeSurfing))
    },

    getMinitilByCode(state): Option | null | undefined {
      console.log('enter getMinitilByCode');
      const StoreOrder = usePackageStore()
      //alert(StoreOrder.orders[0].EMinutesToisrael);
      const index = Object.values(state.ExtraDAta).findIndex(f => f.OptionValues?.find(i => i.Code == StoreOrder.orders[StoreOrder.currentOrderIndex].EMinutesToisrael));
      return state.ExtraDAta[index]?.OptionValues.find(i => i.Code == StoreOrder.orders[StoreOrder.currentOrderIndex].EMinutesToisrael);
    },

    getMent23CoByCode(state): Option | null | undefined {
      console.log('enter getMent23CoByCode');
      const StoreOrder = usePackageStore()
      //alert(StoreOrder.orders[0].EMinutesTo23Countries);
      const index = Object.values(state.ExtraDAta).findIndex(f => f.OptionValues?.find(i => i.Code == StoreOrder.orders[StoreOrder.currentOrderIndex].EMinutesTo23Countries));
      return state.ExtraDAta[index]?.OptionValues.find(i => i.Code == StoreOrder.orders[StoreOrder.currentOrderIndex].EMinutesTo23Countries);
    },

    getIntNumberByCode(state): Option | null | undefined {
      console.log('enter getIntNumberByCode');
      const StoreOrder = usePackageStore()
      //alert(StoreOrder.orders[0].TransferringCalls);
      const index = Object.values(state.ExtraDAta).findIndex(f => f.OptionValues?.find(i => i.Code == StoreOrder.orders[StoreOrder.currentOrderIndex].TransferringCalls));
      return state.ExtraDAta[index]?.OptionValues.find(i => i.Code == StoreOrder.orders[StoreOrder.currentOrderIndex].TransferringCalls);
    },

    getIsrNumberByCode(state): Option | null | undefined {
      console.log('enter getIsrNumberByCode');
      const StoreOrder = usePackageStore()
      //alert(StoreOrder.orders[0].FixedNumberForLife);
      const index = Object.values(state.ExtraDAta).findIndex(f => f.OptionValues?.find(i => i.Code == StoreOrder.orders[StoreOrder.currentOrderIndex].FixedNumberForLife));
      //alert(index+"in")//*
      return state.ExtraDAta[index]?.OptionValues.find(i => i.Code == StoreOrder.orders[StoreOrder.currentOrderIndex].FixedNumberForLife);
    }


  }
});


export const userStore = defineStore({//user
  id: 'users',
  state: () => (
    {
      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      remenberMe: false,
      aprovalForRegultion: false,
      howDidYouHearAboutUs: ""
    })
  ,
  getters:{
    async getUserLogedIn(){
      const rawResponse = await fetch(baseURL + '/api/User/GetUserLogin', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: "include"

      })
      if (rawResponse.ok) {
        var userLogedin = await rawResponse.json();
       
        this.userId = userLogedin.Id;
        this.firstName = userLogedin.FirstName;
        this.lastName = userLogedin.LastName;
        this.email = userLogedin.Email;
        this.phone = userLogedin.Phone;
        this.address = userLogedin.Address;
        this.password = userLogedin.Password;
        this.remenberMe = userLogedin.RemenberMe;
        this.aprovalForRegultion = userLogedin.AprovalForRegultion;
        this.howDidYouHearAboutUs = userLogedin.HowDidYouHearAboutUs;


        // alert(this.firstName);
      } else {
        // console.error('Error:', rawResponse.status);
      }
    }
  },
  actions: {
    async addNewUser() {
      console.log('enter addNewUser');
      console.log(this);
      debugger;
      const rawResponse = await fetch(baseURL + '/api/Order/AddNewUser', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify({
          firstName:this.firstName ,
          lastName:this.lastName ,
          email:this.email ,
          phone:this.phone ,
          address:this.address ,
          password:this.password ,
          remenberMe:this.remenberMe ,
          aprovalForRegultion:this.aprovalForRegultion ,
          howDidYouHearAboutUs:this.howDidYouHearAboutUs ,
        })
      });
      const id =await rawResponse.json();
      console.log(rawResponse);
      return id;
    },
    async loginUser(email: string) {
      alert("email" + email);
      const rawResponse = await fetch(baseURL + '/api/User/LoginUser?email=' + email, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: "include",
        // body: JSON.stringify(email)
      });
    },

    

  },
  // persist: false,//true

})



export const usePackageStore = defineStore({//cart
  id: 'packages',
  state: () => {
    return {
      orders: [] as orderLine[],//ordeline
      count: 1,
      upDown: 0,
      currentStep: 1,
      back: false,
      showBackImage:false,
      currentField: 0,
      currentOrderIndex: -1,
      RandomCartId: "",
      viewingLineIndex: -1,
      addOnLineSelection:  new orderLine(0,0,"",0, new Date(),UITextEnum.En,CurrencyEnum.USD,"","","","","","","")
    }


  },
  // persist: false,//true
  getters: {
    //var cart=state.orders.find(x=>x.RandomCartId!=null)?.RandomCartId;
    getDays: (state) => state.orders[state.currentOrderIndex].CodeNumDays,
    currentSteps: (state) => {
      return function () {
        state.currentStep++;
        state.showBackImage=state.currentStep==4;
        
      }
    },
    getCurrentOrderIndex: (state) => {
      return function () {
        state.currentOrderIndex++
      }
    },
    // getDaysPrice:  (state) => state.orders[0].CodeNumDays,
    getDaysCode: (state) => state.orders[state.currentOrderIndex].CodeNumDays,
    getRandomId: (state) => {
      return function () {
        if (state.RandomCartId == "")
          state.RandomCartId = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
            (Number(c) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & 15) >> Number(c) / 4).toString(16)
          );
        console.log(state.RandomCartId + " :random")
        return state.RandomCartId
      }
    },
    getCodeDays: (state) => {
      return state.orders[state.currentOrderIndex].CodeNumDays
    },



    getcurrentStep: (state) => state.currentStep,
    getUpDown: (state) => state.upDown,
    addMoreOne: (state) => state.count++,
    subMoreOne: (state) => state.count--
  },

  // state: () => (([orderLine])),
  // getters: {
  //   namePackage: function (state){
  //     return state[0].prototype.Package.toString()
  //   },
  //   getDays:  (state) => state[0].prototype.NumDays
  // },


  actions: {
    async sendOrderLine() {
      const userInformation = userStore().$state;


      console.log("firstName: " + userStore().firstName);

      const rawResponse = await fetch(baseURL + '/api/Order/Insert', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.orders),//[this.currentOrderIndex]
        credentials: "include"
      })
      console.log(rawResponse);
    },
    async checkOutOrderLine() {
      const rawResponse = await fetch(baseURL + '/api/Order/CheckOut', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.orders[this.currentOrderIndex]),
        credentials: "include"
      })
      console.log(rawResponse);
    },
    async getIFrameLink(){
      const rawResponse = await fetch(baseURL + '/api/PaymentIframe/GetIFrameLink', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.orders[this.currentOrderIndex]),
        credentials: "include"
      })
      var rawJson = await rawResponse.json();
      return rawJson;
    },
    increment() {

    },
    openfield(currentField: number) {
      if (this.currentStep == currentField) {
        if (this.currentStep == 3) {
          this.currentSteps()
        }
      }
      else {
        if (this.currentField == currentField) {
          //this.currentField=currentField;
          if (this.upDown < 0)
            this.upDown *= -1;
          else
            this.upDown = (currentField * -1);
        }
        else {
          this.currentField = currentField;
          this.upDown = currentField;

        }
      }
    },


  },
})
