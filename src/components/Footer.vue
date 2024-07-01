 
<template>
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