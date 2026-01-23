<template>
  <div>
    <div id="fb-root"></div>

    <a href="#main-content" class="skip-link">{{ t.skipToContent }}</a>

    <div class="bio-container" id="main-content">
      <div class="language-switcher">
        <button
          class="lang-btn"
          :class="{ active: currentLanguage === 'vi' }"
          :aria-label="t.languageNames.vi"
          @click="switchLanguage('vi')"
        >
          <span
            class="lang-flag"
            :style="{ backgroundImage: 'url(https://flagcdn.com/w20/vn.png)' }"
          ></span>
        </button>
        <button
          class="lang-btn"
          :class="{ active: currentLanguage === 'en' }"
          :aria-label="t.languageNames.en"
          @click="switchLanguage('en')"
        >
          <span
            class="lang-flag"
            :style="{ backgroundImage: 'url(https://flagcdn.com/w20/gb.png)' }"
          ></span>
        </button>
        <button
          class="lang-btn"
          :class="{ active: currentLanguage === 'de' }"
          :aria-label="t.languageNames.de"
          @click="switchLanguage('de')"
        >
          <span
            class="lang-flag"
            :style="{ backgroundImage: 'url(https://flagcdn.com/w20/de.png)' }"
          ></span>
        </button>
        <button
          class="lang-btn"
          :class="{ active: currentLanguage === 'fr' }"
          :aria-label="t.languageNames.fr"
          @click="switchLanguage('fr')"
        >
          <span
            class="lang-flag"
            :style="{ backgroundImage: 'url(https://flagcdn.com/w20/fr.png)' }"
          ></span>
        </button>
        <button
          class="lang-btn"
          :class="{ active: currentLanguage === 'es' }"
          :aria-label="t.languageNames.es"
          @click="switchLanguage('es')"
        >
          <span
            class="lang-flag"
            :style="{ backgroundImage: 'url(https://flagcdn.com/w20/es.png)' }"
          ></span>
        </button>
      </div>

      <div class="profile-image">
        <img
          src="/images/logo-anh-tailor.jpg"
          :alt="logoAlt"
          class="logo-img"
          @error="handleImageError"
        />
      </div>

      <h1 class="brand-name">Anh Tailor | Mui Ne</h1>
      <p class="tagline" style="display: none;">
        Professional Tailoring &amp; Bespoke Suits | May Veston Chuyên Nghiệp |
        Custom Suit Veston Ham Tien Mui Ne
      </p>
      <p class="tagline">{{ t.tagline }}</p>

      <div class="services-section">
        <div style="display: none;">
          <h2>Anh Tailor Services</h2>
          <p>
            Professional tailor shop in Ham Tien, Mui Ne. High-quality custom suit,
            vest, and shirt tailoring services at reasonable prices. Fast completion
            time 2-5 days.
          </p>
          <ul>
            <li>Suits &amp; Veston - $380-$400 USD - 3-5 days</li>
            <li>Custom Shirts - $40-$60 USD - 1-2 days</li>
            <li>Waistcoat - $150-$180 USD - 2-3 days</li>
          </ul>
        </div>
        <h3 class="services-title">{{ t.servicesTitle }}</h3>
        <div class="services-list">
          <div
            class="service-card"
            v-for="service in servicesWithTranslations"
            :key="service.nameKey"
            @mouseenter="pauseServiceAutoPlay"
            @mouseleave="resumeServiceAutoPlay"
          >
            <div class="service-image-wrapper">
              <div class="service-slide-container">
                <img
                  v-for="(image, index) in service.images"
                  :key="index"
                  :src="image"
                  :alt="`${service.name} - Image ${index + 1}`"
                  class="service-product-image"
                  :class="{ active: index === service.currentImageIndex }"
                  :loading="index === 0 ? 'eager' : 'lazy'"
                  @error="handleServiceImageError($event, service)"
                />
              </div>
              <div class="service-image-overlay">
                <i :class="service.icon"></i>
              </div>
              <button
                class="service-slide-nav service-slide-prev"
                :aria-label="t.prevImage"
                @click="prevServiceImage(service)"
              >
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <button
                class="service-slide-nav service-slide-next"
                :aria-label="t.nextImage"
                @click="nextServiceImage(service)"
              >
                <i class="fa-solid fa-chevron-right"></i>
              </button>
              <div class="service-slide-indicators">
                <span
                  v-for="(image, index) in service.images"
                  :key="index"
                  class="service-slide-dot"
                  :class="{ active: index === service.currentImageIndex }"
                  @click="setServiceImageIndex(service, index)"
                ></span>
              </div>
            </div>
            <div class="service-content">
              <div class="service-header">
                <h4 class="service-name">{{ service.name }}</h4>
                <div class="service-time">
                  <i class="fa-solid fa-clock"></i>
                  <span>{{ service.description }}</span>
                </div>
                <div class="service-detail-description">
                  {{ service.detailDescription }}
                </div>
              </div>
              <div class="service-price-wrapper">
                <span class="service-price">{{ service.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="features-section">
        <h2 class="features-title">{{ t.featuresTitle }}</h2>
        <div class="features-grid">
          <div
            class="feature-card"
            v-for="feature in featuresWithTranslations"
            :key="feature.key"
          >
            <div class="feature-icon">
              <i :class="feature.icon"></i>
            </div>
            <h3 class="feature-name">{{ feature.name }}</h3>
          </div>
        </div>
      </div>

      <div class="story-section">
        <h2 class="story-title">{{ t.storyTitle }}</h2>
        <div class="story-content">
          <div class="story-image-wrapper">
            <img
              src="/images/story.jpg"
              :alt="storyImageAlt"
              class="story-image"
              @error="handleStoryImageError"
            />
          </div>
          <div class="story-text">
            <p class="story-paragraph">{{ t.story.paragraph1 }}</p>
            <p class="story-paragraph">{{ t.story.paragraph2 }}</p>
            <p class="story-paragraph">{{ t.story.paragraph3 }}</p>
            <p class="story-paragraph">{{ t.story.paragraph4 }}</p>
          </div>
        </div>
      </div>

      <template v-for="link in contactLinksWithTranslations" :key="link.textKey">
        <a
          v-if="link.textKey !== 'whatsapp'"
          :href="link.href"
          class="link-button"
          :target="link.target"
          :rel="link.target === '_blank' ? 'noopener noreferrer' : null"
          @click="handleLinkClick"
        >
          <span class="link-icon"><i :class="link.icon"></i></span>
          {{ link.text }}
        </a>
        <div v-else class="whatsapp-button-group">
          <a
            :href="link.href"
            class="link-button whatsapp-main"
            :target="link.target"
            :rel="link.target === '_blank' ? 'noopener noreferrer' : null"
            @click="handleLinkClick"
          >
            <span class="link-icon"><i :class="link.icon"></i></span>
            {{ link.text }}
          </a>
          <button
            class="link-button whatsapp-qr-btn"
            :aria-label="t.showWhatsAppQR"
            @click="openWhatsAppQR"
          >
            <i class="fa-solid fa-qrcode"></i>
          </button>
        </div>
      </template>

      <div class="map-section">
        <h3 class="map-title">
          <i class="fa-solid fa-map-location-dot" style="margin-right: 8px;"></i>
          {{ t.mapTitle }}
        </h3>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1234567890!2d108.2778!3d10.9381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTAuOTM4MSAxMDguMjc3OA!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s&q=357/1+Nguyen+Dinh+Chieu,+Ham+Tien,+Mui+Ne"
            width="100%"
            height="400"
            style="border: 0; border-radius: 8px;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            :title="t.mapTitle"
          ></iframe>
          <div class="map-link-wrapper">
            <a
              href="https://maps.app.goo.gl/x7jmcThrXRpDuKQT8"
              target="_blank"
              rel="noopener noreferrer"
              class="map-link-button"
            >
              <i class="fa-solid fa-external-link-alt"></i>
              {{ t.openInGoogleMaps }}
            </a>
          </div>
        </div>
      </div>

      <div class="notice-section">
        <div class="notice-item">
          <i class="fa-solid fa-comment-dots notice-icon"></i>
          <p class="notice-text">{{ t.notice.facebookConsultation }}</p>
        </div>
        <div class="notice-item">
          <i class="fa-solid fa-ruler-combined notice-icon"></i>
          <p class="notice-text">{{ t.notice.remoteOrdering }}</p>
        </div>
      </div>

      <div class="facebook-widget-section">
        <h3 class="facebook-widget-title">
          <i
            class="fa-brands fa-facebook"
            style="color: #1877f2; margin-right: 8px;"
          ></i>
          {{ t.followFacebook }}
        </h3>
        <div class="facebook-widget-container">
          <div
            class="fb-page"
            :data-href="facebookWidget.href"
            :data-tabs="facebookWidget.tabs"
            :data-width="facebookWidget.width"
            :data-height="facebookWidget.height"
            :data-small-header="facebookWidget.smallHeader"
            :data-adapt-container-width="facebookWidget.adaptContainerWidth"
            :data-hide-cover="facebookWidget.hideCover"
            :data-show-facepile="facebookWidget.showFacepile"
            :data-lazy="facebookWidget.lazy"
          >
            <blockquote :cite="facebookWidget.href" class="fb-xfbml-parse-ignore">
              <a :href="facebookWidget.href">{{ facebookWidget.pageName }}</a>
            </blockquote>
          </div>
        </div>
      </div>

      <div class="text-feedback-section">
        <h3 class="feedback-title">{{ t.customerReviews }}</h3>
        <div class="text-feedback-list vertical-scroll">
          <div
            class="text-feedback-item"
            v-for="(feedback, index) in feedbacksWithDates"
            :key="index"
          >
            <div class="feedback-header">
              <div class="feedback-name">{{ feedback.name }}</div>
              <div class="feedback-rating">
                <i
                  v-for="n in 5"
                  :key="n"
                  :class="n <= feedback.rating ? 'fa-solid fa-star' : 'fa-regular fa-star'"
                  class="star-icon"
                ></i>
              </div>
            </div>
            <div class="feedback-content">{{ feedback.content }}</div>
            <div class="feedback-footer">
              <span class="feedback-country">
                <i class="fa-solid fa-globe"></i> {{ feedback.country }}
              </span>
              <span class="feedback-date">
                <i class="fa-solid fa-clock"></i> {{ feedback.date }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="feedback-section">
        <h3 class="feedback-title">{{ t.customerPhotos }}</h3>
        <div class="feedback-gallery vertical-scroll">
          <div
            class="feedback-item"
            v-for="(image, index) in feedbackImagesWithTranslations"
            :key="index"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              loading="lazy"
              @click="openLightbox(index)"
              @error="handleFeedbackImageError($event, index)"
              :aria-label="t.viewCustomerPhoto.replace('{index}', index + 1)"
            />
          </div>
        </div>
      </div>

      <div class="faq-section">
        <h3 class="faq-title">{{ t.faqTitle }}</h3>
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, index) in faqsWithTranslations" :key="index">
            <button
              class="faq-question"
              :aria-expanded="faq.isOpen"
              :aria-controls="`faq-answer-${index}`"
              @click="toggleFaq(index)"
            >
              <span class="faq-icon" :class="{ open: faq.isOpen }">
                <i class="fa-solid fa-plus"></i>
              </span>
              <span class="faq-question-text">{{ faq.question }}</span>
            </button>
            <div
              class="faq-answer"
              :id="`faq-answer-${index}`"
              :class="{ open: faq.isOpen }"
              v-show="faq.isOpen"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="showWhatsAppQR"
        class="whatsapp-qr-overlay"
        @click="closeWhatsAppQR"
      >
        <div class="whatsapp-qr-container" @click.stop>
          <button
            class="whatsapp-qr-close"
            :aria-label="t.close"
            @click="closeWhatsAppQR"
          >
            <i class="fa-solid fa-times"></i>
          </button>
          <div class="whatsapp-qr-content">
            <h3 class="whatsapp-qr-title">{{ t.scanQRCode }}</h3>
            <div class="whatsapp-qr-image-wrapper">
              <img
                :src="whatsAppQR.imageSrc"
                :alt="t.whatsAppQRAlt"
                class="whatsapp-qr-image"
              />
            </div>
            <div class="whatsapp-qr-info">
              <p class="whatsapp-qr-name">{{ whatsAppQR.contactName }}</p>
              <p class="whatsapp-qr-subtitle">{{ t.whatsAppContact }}</p>
            </div>
            <div class="whatsapp-qr-actions">
              <a
                :href="whatsAppQR.link"
                target="_blank"
                rel="noopener noreferrer"
                class="whatsapp-qr-button"
              >
                <i class="fa-brands fa-whatsapp"></i>
                {{ t.openWhatsApp }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="showLightbox" class="lightbox-overlay" @click="closeLightbox">
        <div class="lightbox-container" @click.stop>
          <button
            class="lightbox-close"
            :aria-label="t.close"
            @click="closeLightbox"
          >
            <i class="fa-solid fa-times"></i>
          </button>
          <button
            class="lightbox-nav lightbox-prev"
            :aria-label="t.prevImage"
            @click="prevImage"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button
            class="lightbox-nav lightbox-next"
            :aria-label="t.nextImage"
            @click="nextImage"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
          <div class="lightbox-image-wrapper">
            <img
              :src="feedbackImagesWithTranslations[currentImageIndex].src"
              :alt="feedbackImagesWithTranslations[currentImageIndex].alt"
              class="lightbox-image"
              @load="imageLoaded = true"
              @error="handleLightboxImageError"
            />
            <div v-if="!imageLoaded" class="lightbox-loading">
              <i class="fa-solid fa-spinner fa-spin"></i>
            </div>
          </div>
          <div class="lightbox-counter">
            {{ currentImageIndex + 1 }} / {{ feedbackImagesWithTranslations.length }}
          </div>
        </div>
      </div>

      <div class="footer">
        {{ t.footer }}
      </div>
    </div>

    <button
      class="back-to-top"
      :class="{ visible: showBackToTop }"
      :aria-label="t.backToTop"
      @click="scrollToTop"
    >
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { translations } from "~/translations";

const baseUrl = "https://anhtailor.vn/";

const route = useRoute();
const router = useRouter();

const supportedLanguages = Object.keys(translations);
const resolveLanguage = (lang) =>
  supportedLanguages.includes(lang) ? lang : "en";

const queryLang = typeof route.query.lang === "string" ? route.query.lang : "";
const currentLanguage = ref(resolveLanguage(queryLang || "en"));

const services = ref([
  {
    icon: "fa-solid fa-user-tie",
    nameKey: "suits",
    priceUSD: { min: 380, max: 400 },
    priceVND: { min: "9tr", max: "10tr" },
    images: [
      "https://images.unsplash.com/photo-1515736076039-a3ca66043b27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVzdG9uJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1685606867476-dc5b77a2bf3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVzdG9uJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1529635229076-82fefed713c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZlc3RvbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1647900669139-1a968c4091e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlc3RvbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1592878956815-2feeac767f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZlc3RvbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmVzdG9uJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    currentImageIndex: 0
  },
  {
    icon: "fa-solid fa-shirt",
    nameKey: "shirts",
    priceUSD: { min: 40, max: 60 },
    priceVND: { min: "1tr500k", max: "2tr" },
    images: [
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fFNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fFNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1656453260437-4f4da3ef81dc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    currentImageIndex: 0
  },
  {
    icon: "fa-solid fa-shirt",
    nameKey: "waistcoat",
    priceUSD: { min: 150, max: 180 },
    priceVND: { min: "4tr", max: "5tr" },
    images: [
      "https://images.unsplash.com/photo-1593032288331-711b99d4fa74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVzdHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1593029762624-0c28669f2056?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVzdHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1662833595899-07c57d617f56?q=80&w=769&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1504791635568-fa4993808e0a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1632226390535-2f02c1a93541?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    currentImageIndex: 0
  }
]);

const features = [
  { key: "customDesign", icon: "fa-solid fa-laptop", nameKey: "customDesign" },
  { key: "madeToOrder", icon: "fa-solid fa-ruler-combined", nameKey: "madeToOrder" },
  { key: "premiumFabric", icon: "fa-solid fa-th", nameKey: "premiumFabric" },
  { key: "onlineOrStore", icon: "fa-solid fa-bag-shopping", nameKey: "onlineOrStore" }
];

const contactLinks = [
  {
    icon: "fa-solid fa-location-dot",
    textKey: "address",
    href: "https://g.co/kgs/G3Ya5nd",
    target: "_blank"
  },
  { icon: "fa-solid fa-phone", textKey: "callUs", href: "tel:0345197864" },
  {
    icon: "fa-brands fa-whatsapp",
    textKey: "whatsapp",
    href: "https://wa.me/84345197864",
    target: "_blank"
  },
  {
    icon: "fa-brands fa-facebook",
    textKey: "facebook",
    href: "https://www.facebook.com/anhtailorvn/",
    target: "_blank"
  },
  {
    icon: "fa-brands fa-google",
    textKey: "reviewUs",
    href: "https://g.page/r/Ca9pQceWoUdEEBE/review",
    target: "_blank"
  }
];

const feedbackImages = Array.from({ length: 23 }, (_, i) => ({
  src: `/images/feedback/customer (${i + 1}).jpg`,
  altKey: "customerPhoto",
  index: i + 1
}));

const facebookWidget = {
  href: "https://www.facebook.com/anhtailorvn/",
  tabs: "timeline",
  width: "",
  height: "500",
  smallHeader: false,
  adaptContainerWidth: true,
  hideCover: false,
  showFacepile: true,
  lazy: true,
  pageName: "Anh Tailor"
};

const whatsAppQR = {
  imageSrc: "/images/whatapp.png",
  contactName: "anhtailor",
  link: "https://wa.me/84345197864"
};

const faqs = [
  { questionKey: "question1", answerKey: "answer1" },
  { questionKey: "question2", answerKey: "answer2" },
  { questionKey: "question3", answerKey: "answer3" },
  { questionKey: "question4", answerKey: "answer4" },
  { questionKey: "question5", answerKey: "answer5" },
  { questionKey: "question6", answerKey: "answer6" }
];

const textFeedbacks = [
  {
    name: "Nguyễn Văn An",
    content:
      "Giá rất hợp lý và thời gian may nhanh chỉ 2-3 ngày! Chất lượng áo veston rất tốt, vừa vặn hoàn hảo. Rất đáng tiền!",
    country: "Vietnam",
    rating: 5
  },
  {
    name: "Michael Johnson",
    content:
      "Unbelievable price for such quality! Got my suit ready in just 2 days. The price is very reasonable compared to other tailors. Highly recommend!",
    country: "United States",
    rating: 5
  },
  {
    name: "Sarah Williams",
    content:
      "Amazing value for money! My custom vest was ready in 3 days and the price was so affordable. Quality is excellent. Will definitely return!",
    country: "Australia",
    rating: 5
  },
  {
    name: "James Anderson",
    content:
      "Fast service and great prices! My suit was completed in 2 days. Very affordable compared to back home. Quality is outstanding!",
    country: "Canada",
    rating: 5
  },
  {
    name: "Jean-Pierre Dubois",
    content:
      "Prix très raisonnable et service rapide! Mon costume était prêt en seulement 2-3 jours. Excellent rapport qualité-prix. Je recommande!",
    country: "France",
    rating: 5
  },
  {
    name: "Giovanni Rossi",
    content:
      "Prezzo molto conveniente e tempi rapidi! Il vestito è stato completato in 2-3 giorni. Qualità eccellente a un prezzo giusto. Consiglio!",
    country: "Italy",
    rating: 5
  },
  {
    name: "Maria Garcia",
    content:
      "Precio muy razonable y servicio rápido! Mi traje estuvo listo en solo 2-3 días. Excelente calidad por un precio justo. ¡Recomiendo!",
    country: "Spain",
    rating: 5
  },
  {
    name: "Emma Thompson",
    content:
      "Great prices and super fast! My wedding suit was ready in just 2 days. Very affordable and the quality is perfect. Highly satisfied!",
    country: "United Kingdom",
    rating: 5
  },
  {
    name: "Yuki Tanaka",
    content:
      "価格がとても手頃で、仕立ても早い！2-3日で完成しました。品質も良く、コストパフォーマンスが最高です。おすすめします！",
    country: "Japan",
    rating: 5
  },
  {
    name: "Trần Thị Hoa",
    content:
      "Giá rẻ mà chất lượng tốt! Áo veston may chỉ 2 ngày là xong. Rất hợp lý so với các tiệm khác. Sẽ quay lại!",
    country: "Vietnam",
    rating: 5
  },
  {
    name: "David Brown",
    content:
      "Incredible value! Got my business suit in 3 days at a fraction of the price I would pay at home. Fast service and excellent quality!",
    country: "United States",
    rating: 5
  },
  {
    name: "Lisa Wilson",
    content:
      "So affordable and quick! My blazer was ready in 2 days. The price is very reasonable and the fit is perfect. Great service!",
    country: "Australia",
    rating: 5
  },
  {
    name: "Robert Taylor",
    content:
      "Fast turnaround and fair prices! My waistcoat was completed in 2-3 days. Much cheaper than expected with excellent quality!",
    country: "Canada",
    rating: 5
  },
  {
    name: "Sophie Martin",
    content:
      "Prix excellent et délai très rapide! Mon costume était prêt en 2 jours. Qualité parfaite pour un prix si raisonnable. Parfait!",
    country: "France",
    rating: 5
  },
  {
    name: "Marco Bianchi",
    content:
      "Servizio veloce e prezzi onesti! Il mio vestito è stato completato in 3 giorni. Ottimo rapporto qualità-prezzo. Molto soddisfatto!",
    country: "Italy",
    rating: 5
  },
  {
    name: "Carlos Rodriguez",
    content:
      "Precio muy justo y entrega rápida! Mi traje estuvo listo en 2 días. Calidad excelente a un precio muy razonable. ¡Excelente!",
    country: "Spain",
    rating: 5
  },
  {
    name: "Thomas Wright",
    content:
      "Amazing prices and super fast service! My suit was ready in 2-3 days. Very affordable and the quality exceeded my expectations!",
    country: "United Kingdom",
    rating: 5
  },
  {
    name: "Hiroshi Yamamoto",
    content:
      "手頃な価格で迅速なサービス！2日で完成しました。品質も良く、価格も非常に合理的です。大満足です！",
    country: "Japan",
    rating: 5
  },
  {
    name: "Lê Minh Đức",
    content:
      "Giá cả hợp lý, thời gian may nhanh chóng! Chỉ 2-3 ngày là có áo. Chất lượng tốt, giá rẻ hơn nhiều nơi khác. Rất hài lòng!",
    country: "Vietnam",
    rating: 5
  },
  {
    name: "Jennifer Smith",
    content:
      "Great value and fast delivery! My custom shirt was ready in 2 days. The price is very reasonable and the quality is excellent!",
    country: "United States",
    rating: 5
  },
  {
    name: "Peter Mitchell",
    content:
      "Affordable prices and quick service! Got my suit in 3 days. Much cheaper than I expected with perfect quality. Highly recommend!",
    country: "Australia",
    rating: 5
  },
  {
    name: "Marie Dubois",
    content:
      "Prix très abordable et service express! Mon costume était prêt en 2-3 jours. Excellent rapport qualité-prix. Je reviendrai!",
    country: "France",
    rating: 5
  },
  {
    name: "Alessandro Ferrari",
    content:
      "Prezzi onesti e tempi rapidissimi! Il mio vestito è stato completato in 2 giorni. Qualità eccellente a un prezzo giusto!",
    country: "Italy",
    rating: 5
  },
  {
    name: "Isabella Martinez",
    content:
      "Precio muy razonable y entrega súper rápida! Mi traje estuvo listo en 3 días. Calidad perfecta por un precio justo. ¡Perfecto!",
    country: "Spain",
    rating: 5
  },
  {
    name: "William Harris",
    content:
      "Excellent prices and fast turnaround! My suit was ready in 2 days. Very affordable with outstanding quality. Will definitely return!",
    country: "United Kingdom",
    rating: 5
  },
  {
    name: "Phạm Văn Hùng",
    content:
      "Giá rất rẻ và may nhanh lắm! Chỉ 2 ngày là có áo veston. Chất lượng tốt, giá hợp lý hơn nhiều nơi. Rất hài lòng!",
    country: "Vietnam",
    rating: 5
  },
  {
    name: "Richard Davis",
    content:
      "Super affordable and incredibly fast! Got my suit in 2-3 days. The price is unbeatable for this quality. Highly recommend!",
    country: "United States",
    rating: 5
  },
  {
    name: "Amanda White",
    content:
      "Amazing prices and quick service! My custom blazer was ready in 2 days. Very reasonable price with perfect quality!",
    country: "Australia",
    rating: 5
  },
  {
    name: "Christopher Lee",
    content:
      "Fast service and great value! My suit was completed in 3 days at such an affordable price. Quality exceeded expectations!",
    country: "Canada",
    rating: 5
  },
  {
    name: "Claire Bernard",
    content:
      "Prix incroyablement bas et service rapide! Mon costume était prêt en 2-3 jours. Excellent rapport qualité-prix!",
    country: "France",
    rating: 5
  },
  {
    name: "Luca Romano",
    content:
      "Prezzi fantastici e tempi velocissimi! Il mio vestito è stato completato in 2 giorni. Qualità eccellente a prezzo giusto!",
    country: "Italy",
    rating: 5
  },
  {
    name: "Carmen Lopez",
    content:
      "Precio increíble y servicio súper rápido! Mi traje estuvo listo en 2 días. Calidad perfecta por un precio muy justo!",
    country: "Spain",
    rating: 5
  },
  {
    name: "Oliver Green",
    content:
      "Unbelievable prices and super fast! My wedding suit was ready in 2-3 days. Very affordable with excellent quality!",
    country: "United Kingdom",
    rating: 5
  },
  {
    name: "Sakura Watanabe",
    content:
      "驚くほど安い価格で、仕立ても超速い！2-3日で完成しました。品質も最高で、コストパフォーマンス抜群です！",
    country: "Japan",
    rating: 5
  },
  {
    name: "Hoàng Thị Lan",
    content:
      "Giá rẻ bất ngờ và may cực nhanh! Chỉ 2 ngày là có áo. Chất lượng tốt, giá hợp lý hơn nhiều nơi khác. Tuyệt vời!",
    country: "Vietnam",
    rating: 5
  },
  {
    name: "Daniel Martinez",
    content:
      "Incredible value for money! Got my business suit in 2 days. The price is so reasonable and quality is outstanding!",
    country: "United States",
    rating: 5
  },
  {
    name: "Jessica Taylor",
    content:
      "So cheap and so fast! My custom vest was ready in 3 days. Amazing quality for such an affordable price. Love it!",
    country: "Australia",
    rating: 5
  },
  {
    name: "Ryan Wilson",
    content:
      "Fast turnaround and fair prices! My suit was completed in 2 days. Much cheaper than expected with perfect quality!",
    country: "Canada",
    rating: 5
  },
  {
    name: "Camille Rousseau",
    content:
      "Prix très abordable et délai express! Mon costume était prêt en 2 jours. Qualité parfaite pour un prix si bas!",
    country: "France",
    rating: 5
  },
  {
    name: "Francesco Conti",
    content:
      "Prezzi onestissimi e servizio velocissimo! Il mio vestito è stato completato in 3 giorni. Ottima qualità a prezzo giusto!",
    country: "Italy",
    rating: 5
  },
  {
    name: "Ana Fernandez",
    content:
      "Precio muy económico y entrega rapidísima! Mi traje estuvo listo en 2-3 días. Calidad excelente por precio justo!",
    country: "Spain",
    rating: 5
  },
  {
    name: "George Mitchell",
    content:
      "Excellent prices and lightning fast! My suit was ready in 2 days. Very affordable with outstanding craftsmanship!",
    country: "United Kingdom",
    rating: 5
  },
  {
    name: "Kenji Sato",
    content:
      "信じられないほど安い価格で、仕立ても早い！2日で完成しました。品質も良く、価格も非常に合理的です！",
    country: "Japan",
    rating: 5
  },
  {
    name: "Vũ Đình Tuấn",
    content:
      "Giá cả rất hợp lý, thời gian may nhanh chóng! Chỉ 2-3 ngày là có áo veston. Chất lượng tốt, giá rẻ hơn nhiều nơi!",
    country: "Vietnam",
    rating: 5
  },
  {
    name: "Brian Thompson",
    content:
      "Amazing value and quick delivery! My custom shirt was ready in 2 days. The price is very reasonable for this quality!",
    country: "United States",
    rating: 5
  },
  {
    name: "Sophie Clarke",
    content:
      "Affordable prices and super fast service! Got my suit in 3 days. Much cheaper than I thought with excellent quality!",
    country: "Australia",
    rating: 5
  },
  {
    name: "Matthew Brown",
    content:
      "Fast service and great prices! My waistcoat was completed in 2-3 days. Very affordable with perfect quality!",
    country: "Canada",
    rating: 5
  },
  {
    name: "Isabelle Moreau",
    content:
      "Prix excellent et service ultra rapide! Mon costume était prêt en 2 jours. Qualité parfaite pour un prix si raisonnable!",
    country: "France",
    rating: 5
  },
  {
    name: "Roberto Verdi",
    content:
      "Prezzi fantastici e tempi rapidissimi! Il mio vestito è stato completato in 2 giorni. Qualità eccellente a prezzo giusto!",
    country: "Italy",
    rating: 5
  }
];

const openFaqIndex = ref(null);
const showWhatsAppQR = ref(false);
const showLightbox = ref(false);
const currentImageIndex = ref(0);
const imageLoaded = ref(false);
const showBackToTop = ref(false);
const serviceAutoPlayIntervals = ref([]);

const t = computed(() => translations[currentLanguage.value] || translations.en);

const servicesWithTranslations = computed(() =>
  services.value.map((service) => ({
    ...service,
    name: t.value.services[service.nameKey].name,
    description: t.value.services[service.nameKey].description,
    detailDescription: t.value.services[service.nameKey].detailDescription,
    price: formatPrice(service.priceUSD, service.priceVND)
  }))
);

const contactLinksWithTranslations = computed(() =>
  contactLinks.map((link) => ({
    ...link,
    text: t.value.contact[link.textKey]
  }))
);

const featuresWithTranslations = computed(() =>
  features.map((feature) => ({
    ...feature,
    name: t.value.features[feature.nameKey]
  }))
);

const feedbackImagesWithTranslations = computed(() =>
  feedbackImages.map((image) => ({
    ...image,
    alt: t.value.viewCustomerPhoto.replace("{index}", image.index) + " - Anh Tailor"
  }))
);

const storyImageAlt = computed(() => t.value.storyImageAlt);
const logoAlt = computed(() => t.value.logoAlt);

const feedbacksWithDates = computed(() => {
  const now = new Date();
  const feedbacks = textFeedbacks.map((feedback, index) => {
    const totalFeedbacks = textFeedbacks.length;
    const progress = totalFeedbacks > 1 ? index / (totalFeedbacks - 1) : 0;
    const daysAgo = 1095 * (1 - progress) + 7 * progress;

    const feedbackDate = new Date(now);
    feedbackDate.setDate(feedbackDate.getDate() - Math.round(daysAgo));

    return {
      ...feedback,
      date: formatTimeAgo(feedbackDate)
    };
  });

  return feedbacks.reverse();
});

const faqsWithTranslations = computed(() =>
  faqs.map((faq, index) => ({
    ...faq,
    question: t.value.faq[faq.questionKey],
    answer: t.value.faq[faq.answerKey] || "",
    isOpen: openFaqIndex.value === index
  }))
);

const seoTitle = computed(() => {
  const titles = {
    vi: "Anh Tailor - May Veston Chuyên Nghiệp & Áo Vest Đo May | Ham Tien Mui Ne",
    en: "Anh Tailor - Custom Suit Veston Ham Tien Mui Ne | Quality Tailor",
    de: "Anh Tailor - Professionelles Maßschneidern & Maßanzüge | Ham Tien Mui Ne",
    fr: "Anh Tailor - Couture Professionnelle & Costumes Sur Mesure | Ham Tien Mui Ne",
    es: "Anh Tailor - Sastrería Profesional & Trajes a Medida | Ham Tien Mui Ne"
  };

  return titles[currentLanguage.value] || titles.en;
});

const seoDescription = computed(() => {
  if (currentLanguage.value === "vi") {
    return "Anh Tailor - Tiệm may chuyên nghiệp tại Hàm Tiến, Mũi Né. Dịch vụ may đo veston, áo vest và áo sơ mi chất lượng cao với giá cả hợp lý. Thời gian hoàn thành nhanh 2-5 ngày. Liên hệ: 0345197864";
  }

  const baseDescription = `${t.value.servicesTitle} - ${t.value.tagline}.`;
  const suffix =
    currentLanguage.value === "en"
      ? " Professional tailor shop in Ham Tien, Mui Ne. High-quality custom suit, vest, and shirt tailoring services at reasonable prices. Fast completion time 2-5 days. Contact: 0345197864"
      : "";

  return `${baseDescription}${suffix}`;
});

const canonicalUrl = computed(() => `${baseUrl}?lang=${currentLanguage.value}`);

const ogLocaleMap = {
  vi: "vi_VN",
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES"
};

useHead(() => ({
  htmlAttrs: { lang: currentLanguage.value },
  title: seoTitle.value,
  meta: [
    { name: "description", content: seoDescription.value },
    { property: "og:url", content: canonicalUrl.value },
    { property: "og:title", content: seoTitle.value },
    { property: "og:description", content: seoDescription.value },
    { property: "og:locale", content: ogLocaleMap[currentLanguage.value] || "en_US" },
    {
      property: "og:locale:alternate",
      content: "en_US",
      key: "og:locale:alternate-en"
    },
    {
      property: "og:locale:alternate",
      content: "de_DE",
      key: "og:locale:alternate-de"
    },
    {
      property: "og:locale:alternate",
      content: "fr_FR",
      key: "og:locale:alternate-fr"
    },
    {
      property: "og:locale:alternate",
      content: "es_ES",
      key: "og:locale:alternate-es"
    },
    {
      property: "og:locale:alternate",
      content: "vi_VN",
      key: "og:locale:alternate-vi"
    },
    { name: "twitter:title", content: seoTitle.value },
    { name: "twitter:description", content: seoDescription.value }
  ],
  link: [
    { rel: "canonical", href: canonicalUrl.value },
    { rel: "alternate", hreflang: "vi", href: `${baseUrl}?lang=vi` },
    { rel: "alternate", hreflang: "en", href: `${baseUrl}?lang=en` },
    { rel: "alternate", hreflang: "de", href: `${baseUrl}?lang=de` },
    { rel: "alternate", hreflang: "fr", href: `${baseUrl}?lang=fr` },
    { rel: "alternate", hreflang: "es", href: `${baseUrl}?lang=es` },
    { rel: "alternate", hreflang: "x-default", href: `${baseUrl}?lang=en` }
  ]
}));

watch(
  () => route.query.lang,
  (lang) => {
    if (typeof lang === "string" && translations[lang] && lang !== currentLanguage.value) {
      currentLanguage.value = lang;
    }
  }
);

watch(
  () => currentLanguage.value,
  (lang) => {
    if (import.meta.client) {
      localStorage.setItem("language", lang);
    }
  }
);

const formatTimeAgo = (date) => {
  const now = new Date();
  const diffMs = now - date;
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);
  const timeAgo = t.value.timeAgo;

  if (diffYears > 0) {
    const remainingMonths = Math.floor((diffDays % 365) / 30);
    if (remainingMonths > 0) {
      return `${diffYears} ${
        diffYears > 1 ? timeAgo.years : timeAgo.year
      } ${remainingMonths} ${
        remainingMonths > 1 ? timeAgo.months : timeAgo.month
      } ${timeAgo.ago}`;
    }
    return `${diffYears} ${diffYears > 1 ? timeAgo.years : timeAgo.year} ${timeAgo.ago}`;
  }
  if (diffMonths > 0) {
    const remainingDays = diffDays % 30;
    if (remainingDays > 7) {
      const weeks = Math.floor(remainingDays / 7);
      return `${diffMonths} ${
        diffMonths > 1 ? timeAgo.months : timeAgo.month
      } ${weeks} ${weeks > 1 ? timeAgo.weeks : timeAgo.week} ${timeAgo.ago}`;
    }
    return `${diffMonths} ${diffMonths > 1 ? timeAgo.months : timeAgo.month} ${timeAgo.ago}`;
  }
  if (diffDays > 0) {
    if (diffDays >= 7) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} ${weeks > 1 ? timeAgo.weeks : timeAgo.week} ${timeAgo.ago}`;
    }
    return `${diffDays} ${diffDays > 1 ? timeAgo.days : timeAgo.day} ${timeAgo.ago}`;
  }
  if (diffHours > 0) {
    return `${diffHours} ${diffHours > 1 ? timeAgo.hours : timeAgo.hour} ${timeAgo.ago}`;
  }
  if (diffMinutes > 0) {
    return `${diffMinutes} ${diffMinutes > 1 ? timeAgo.minutes : timeAgo.minute} ${timeAgo.ago}`;
  }
  return timeAgo.justNow;
};

const formatPrice = (priceUSD, priceVND) => {
  if (currentLanguage.value === "vi") {
    if (priceVND) {
      if (priceVND.min === priceVND.max) {
        return `${priceVND.min} VNĐ`;
      }
      return `${priceVND.min} - ${priceVND.max} VNĐ`;
    }
    return "";
  }

  if (priceUSD.min === priceUSD.max) {
    return `$${priceUSD.min} (USD)`;
  }
  return `$${priceUSD.min} - $${priceUSD.max} (USD)`;
};

const switchLanguage = (lang) => {
  if (!translations[lang]) return;
  currentLanguage.value = lang;
  router.replace({ query: { ...route.query, lang } });
};

const handleImageError = (event) => {
  const img = event.target;
  const parent = img.parentElement;
  img.style.display = "none";
  parent.innerHTML = "✂️";
  parent.style.background = "linear-gradient(135deg, #d4a574, #c19660)";
  parent.style.fontSize = "50px";
  parent.style.color = "#3c2414";
};

const handleServiceImageError = (event, service) => {
  const img = event.target;
  const wrapper = img.closest(".service-image-wrapper");
  if (wrapper) {
    img.style.display = "none";
    const overlay = wrapper.querySelector(".service-image-overlay");
    if (overlay) {
      overlay.style.display = "flex";
      overlay.style.background = "linear-gradient(135deg, #3c2414, #5d4037)";
    }
  }
};

const nextServiceImage = (service) => {
  const originalService = services.value.find((item) => item.nameKey === service.nameKey);
  if (originalService) {
    originalService.currentImageIndex =
      (originalService.currentImageIndex + 1) % originalService.images.length;
  }
};

const prevServiceImage = (service) => {
  const originalService = services.value.find((item) => item.nameKey === service.nameKey);
  if (originalService) {
    originalService.currentImageIndex =
      (originalService.currentImageIndex - 1 + originalService.images.length) %
      originalService.images.length;
  }
};

const setServiceImageIndex = (service, index) => {
  const originalService = services.value.find((item) => item.nameKey === service.nameKey);
  if (originalService) {
    originalService.currentImageIndex = index;
  }
};

const handleLinkClick = (event) => {
  const button = event.currentTarget;
  button.style.transform = "scale(0.95)";
  setTimeout(() => {
    button.style.transform = "";
  }, 150);
};

const openLightbox = (index) => {
  currentImageIndex.value = index;
  showLightbox.value = true;
  imageLoaded.value = false;
  if (import.meta.client) {
    document.body.style.overflow = "hidden";
  }
};

const closeLightbox = () => {
  showLightbox.value = false;
  if (import.meta.client) {
    document.body.style.overflow = "";
  }
};

const nextImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value + 1) % feedbackImagesWithTranslations.value.length;
  imageLoaded.value = false;
};

const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + feedbackImagesWithTranslations.value.length) %
    feedbackImagesWithTranslations.value.length;
  imageLoaded.value = false;
};

const handleKeydown = (event) => {
  if (!showLightbox.value) return;
  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowRight") {
    nextImage();
  } else if (event.key === "ArrowLeft") {
    prevImage();
  }
};

const handleFeedbackImageError = (event) => {
  const img = event.target;
  img.style.display = "none";
  const parent = img.parentElement;
  if (parent) {
    parent.innerHTML = `<div class="image-error-placeholder"><i class="fa-solid fa-image"></i><span>${t.value.imageNotLoaded}</span></div>`;
  }
};

const handleLightboxImageError = (event) => {
  const img = event.target;
  const wrapper = img.closest(".lightbox-image-wrapper");
  if (wrapper) {
    wrapper.innerHTML = `<div class="lightbox-error"><i class="fa-solid fa-exclamation-triangle"></i><p>${t.value.imageNotLoaded}</p></div>`;
  }
};

const handleStoryImageError = (event) => {
  const img = event.target;
  const wrapper = img.closest(".story-image-wrapper");
  if (wrapper) {
    img.style.display = "none";
    wrapper.innerHTML = `<div class="story-image-placeholder"><i class="fa-solid fa-image"></i><span>${t.value.imageNotLoaded}</span></div>`;
  }
};

const scrollToTop = () => {
  if (!import.meta.client) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300;
};

const startServiceAutoPlay = () => {
  stopServiceAutoPlay();
  services.value.forEach((service) => {
    const intervalId = setInterval(() => {
      const originalService = services.value.find((item) => item.nameKey === service.nameKey);
      if (originalService) {
        originalService.currentImageIndex =
          (originalService.currentImageIndex + 1) % originalService.images.length;
      }
    }, 3000);
    serviceAutoPlayIntervals.value.push(intervalId);
  });
};

const stopServiceAutoPlay = () => {
  serviceAutoPlayIntervals.value.forEach((intervalId) => {
    clearInterval(intervalId);
  });
  serviceAutoPlayIntervals.value = [];
};

const pauseServiceAutoPlay = () => {
  stopServiceAutoPlay();
};

const resumeServiceAutoPlay = () => {
  startServiceAutoPlay();
};

const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index;
};

const openWhatsAppQR = () => {
  showWhatsAppQR.value = true;
  if (import.meta.client) {
    document.body.style.overflow = "hidden";
  }
};

const closeWhatsAppQR = () => {
  showWhatsAppQR.value = false;
  if (import.meta.client) {
    document.body.style.overflow = "";
  }
};

let debouncedHandleScroll;

onMounted(() => {
  if (import.meta.client) {
    const storedLang = localStorage.getItem("language");
    if (!queryLang && storedLang && translations[storedLang]) {
      currentLanguage.value = storedLang;
      router.replace({ query: { ...route.query, lang: storedLang } });
    } else if (queryLang && translations[queryLang]) {
      localStorage.setItem("language", queryLang);
    } else if (!queryLang) {
      router.replace({ query: { ...route.query, lang: currentLanguage.value } });
    }

    window.addEventListener("keydown", handleKeydown);
    debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
    handleScroll();
    startServiceAutoPlay();
  }
});

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener("keydown", handleKeydown);
    if (debouncedHandleScroll) {
      window.removeEventListener("scroll", debouncedHandleScroll);
    }
  }
  stopServiceAutoPlay();
});
</script>
