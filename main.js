const { createApp } = Vue;

createApp({
  data() {
    return {
      services: [
        {
          icon: 'fa-solid fa-shirt',
          name: 'Custom Shirts',
          description: 'Within 1-2 days',
          price: '$40 - $55'
        },
        {
          icon: 'fa-solid fa-user-tie',
          name: 'Suits & Veston',
          description: 'Within 3-5 days',
          price: '$350 - $380'
        },
        {
          icon: 'fa-solid fa-shirt',
          name: 'Waistcoat',
          description: 'Within 2-3 days',
          price: '$200'
        }
      ],
      contactLinks: [
        {
          icon: 'fa-solid fa-location-dot',
          text: '357/1 Nguyen Dinh Chieu, Ham Tien, Mui Ne',
          href: 'https://g.co/kgs/G3Ya5nd',
          target: '_blank'
        },
        {
          icon: 'fa-solid fa-phone',
          text: 'Call Us: 0397417003',
          href: 'tel:0397417003'
        },
        {
          icon: 'fa-brands fa-facebook',
          text: 'Facebook',
          href: 'https://www.facebook.com/anhtailorvn/',
          target: '_blank'
        }
      ],
      feedbackImages: Array.from({ length: 17 }, (_, i) => ({
        src: `images/feedback/customer (${i + 1}).jpg`,
        alt: `Feedback ${i + 1}`
      }))
    };
  },
  methods: {
    handleImageError(event) {
      const img = event.target;
      const parent = img.parentElement;
      img.style.display = 'none';
      parent.innerHTML = '✂️';
      parent.style.background = 'linear-gradient(135deg, #d4a574, #c19660)';
      parent.style.fontSize = '50px';
      parent.style.color = '#3c2414';
    },
    handleLinkClick(event) {
      const button = event.currentTarget;
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
    }
  },
  mounted() {
    this.$el.style.opacity = '1';
  }
}).mount('#app');

