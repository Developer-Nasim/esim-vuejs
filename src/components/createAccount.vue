<script lang="ts">
import 'bulma/css/bulma.css'
import { usePackageStore,useLanguagesStore } from '../stores/counter'

export default {
  data() {
    const store = usePackageStore()
    const Lang = useLanguagesStore();
    return {
      store,
      Lang
    }
  },
  props: ['divName']
}
</script>

<template>
  <form id="myForm">
  <div
    v-if="store.getUpDown == divName || store.currentStep == divName"
    class="content card-content"
    style="padding-left: 30px; padding-right: 30px"
  >
    <div
      class="tabs is-toggle is-fullwidth"
      style="height: 50px; background: #f8f8f8; border-radius: 12px; padding: 10px"
    >
      <ul style="margin-top: -2px">
        <li>
          <a class="unActiv">
            <span>{{Lang.getTranslate("Sign In")}}</span>
          </a>
        </li>
        <li>
          <a class="myActiv">
            <span>{{Lang.getTranslate("Sign Up")}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="columns is-gapless" style="text-align: center; width: 200px; margin-left: 120px">
      <span class="column">
        <img src="@/assets/circle.svg" /><img
          src="@/assets/face.svg"
          style="margin-block: 15px; position: unset; margin-left: -35px"
        />
      </span>
      <span class="column"
        ><img src="@/assets/circle.svg" />
        <img
          src="@/assets/goog.svg"
          style="margin-block: 15px; position: unset; margin-left: -35px"
        />
      </span>
      <span class="column"
        ><img src="@/assets/circle.svg" /><img
          src="@/assets/aple.svg"
          style="margin-block: 15px; position: unset; margin-left: -35px"
        />
      </span>
    </div>
    <div class="field-body fb">
      <div class="field fpading">
        <label>{{Lang.getTranslate("First Name")}}*</label>
        <div class="control">
          <input class="input Rectangle389" type="text" required/>
        </div>
      </div>

      <div class="field fpading">
        <label>{{Lang.getTranslate("Last Name")}}*</label>
        <div class="control">
          <input class="input Rectangle389" type="text" required/>
        </div>
      </div>
    </div>

    <div class="field-body fb">
      <div class="field fpading">
        <label>{{Lang.getTranslate("Phon Number")}}*</label>
        <div class="control">
          <input class="input Rectangle389" type="text" required/>
        </div>
      </div>

      <div class="field fpading">
        <label>{{Lang.getTranslate("Email")}}*</label>
        <div class="control">
          <input class="input Rectangle389" type="Emil" required/>
        </div>
      </div>
    </div>

    <div class="field-body fb">
      <div class="field fpading">
        <label>{{Lang.getTranslate("Password")}}*</label>
        <div class="control">
          <input class="input Rectangle389" type="password" required/>
        </div>
      </div>

    </div>
    <div class="field-body fb">
      <div class="field fpading">
        <label>{{Lang.getTranslate("Adress")}}*</label>
        <div class="control">
          <input class="input Rectangle389" type="text" required/>
        </div>
      </div>

      <div class="field fpading">
        <label>{{Lang.getTranslate("How Did You Hear About Us?")}}</label>
        <div class="control">
          <input class="input Rectangle389" type="text"/>
        </div>
      </div>
    </div>

    <!-- //is-expanded has-icons-left -->
    <div class="field-body fb">
      <div class="field fpading">
        <div class="control">
          <input type="checkbox" />
          {{Lang.getTranslate("remember me")}}
        </div>
      </div>

      <div class="field fpading">
        <div class="control" style="text-align: end; padding-right: 10px">
          <input type="checkbox" />
          {{Lang.getTranslate("Approval of regulations")}}
        </div>
      </div>
    </div>
    <button
      class="button is-dark"
      style="background-color: #646161; width: 470px; border-radius: 12px; margin-left: 10px"
      @click="store.currentSteps()"
    >
    {{Lang.getTranslate("Continue")}}
    </button>
    <br />
    <div style="text-align: center; font-size: 16px; font-weight: 500">{{Lang.getTranslate("Continue as a guest")}}</div>
    <span class="icon">
      <i class="fas fa-home"></i>
    </span>
  </div>
</form>
</template>
<style>
.rounded5 {
  border-radius: 5px !important;
}
.myActiv {
  background: white;
  border-radius: 12px;
  border-color: #dbdbdb0f !important;
}
.unActiv {
  background: rgba(238, 236, 236, 0);
  border-color: #dbdbdb0f !important;
}
.Rectangle389 {
  height: 35px;
  border-radius: 8px;
  border: 0.5px #c0c6c9 solid;
}

.fpading {
  padding-right: 8px;
}

.fb {
  padding: 8px;
}
</style>
