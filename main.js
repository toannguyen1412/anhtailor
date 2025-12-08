const { createApp } = Vue;

createApp({
  data() {
    return {
      currentLanguage: localStorage.getItem('language') || 'en',
      translations: {
        vi: {
          tagline: 'May Veston Chuyên Nghiệp & Áo Vest Đo May',
          featuresTitle: 'MUA SẮM QUẦN ÁO VÀ MAY ĐO THEO YÊU CẦU',
          servicesTitle: 'Dịch Vụ & Giá Cả',
          priceLabel: 'Bắt đầu từ',
          customerReviews: 'Đánh Giá Khách Hàng',
          customerPhotos: 'Ảnh Khách Hàng',
          backToTop: 'Lên đầu trang',
          close: 'Đóng',
          prevImage: 'Ảnh trước',
          nextImage: 'Ảnh sau',
          skipToContent: 'Bỏ qua đến nội dung chính',
          footer: '© 2025 Anh Tailor – Tinh Hoa Trong Từng Đường May',
          services: {
            suits: {
              name: 'Veston & Áo Vest',
              description: 'Trong vòng 3-5 ngày',
              detailDescription: 'Áo veston và blazer cao cấp được may đo chuyên nghiệp. Vừa vặn hoàn hảo cho đám cưới, công việc và các dịp đặc biệt.'
            },
            shirts: {
              name: 'Áo Sơ Mi May Đo',
              description: 'Trong vòng 1-2 ngày',
              detailDescription: 'Áo sơ mi may đo thủ công theo số đo của bạn. Vải cao cấp và vừa vặn hoàn hảo cho công việc hoặc trang phục chính thức.'
            },
            waistcoat: {
              name: 'Áo Ghi Lê',
              description: 'Trong vòng 2-3 ngày',
              detailDescription: 'Áo ghi lê và vest thanh lịch bằng vải cao cấp. Bổ sung hoàn hảo cho bộ vest chính thức của bạn.'
            }
          },
          contact: {
            address: '357/1 Nguyễn Đình Chiểu, Hàm Tiến, Mũi Né',
            callUs: 'Gọi: 0397417003',
            whatsapp: 'WhatsApp: 0397417003',
            facebook: 'Facebook'
          },
          notice: {
            facebookConsultation: 'Khách hàng Việt Nam có thể gọi điện trực tiếp cho tôi. Khách hàng nước ngoài vui lòng nhắn tin qua Facebook - con gái tôi sẽ hỗ trợ tư vấn bằng tiếng Anh cho quý khách (tôi không thể giao tiếp tiếng nước ngoài qua điện thoại)',
            remoteOrdering: 'Dịch vụ may đo từ xa: Bạn có thể tự đo kích thước và gửi cho chúng tôi. Chúng tôi sẽ may theo số đo của bạn. Khi đến Việt Nam, bạn chỉ cần đến nhận hàng và thanh toán phần còn lại (đặt cọc trước 30% giá trị đơn hàng)'
          },
          features: {
            customDesign: 'THIẾT KẾ CỦA RIÊNG BẠN',
            madeToOrder: 'LÀM THEO YÊU CẦU',
            premiumFabric: 'VẢI CAO CẤP',
            onlineOrStore: 'TRỰC TUYẾN HOẶC Ở CỬA HÀNG'
          },
          timeAgo: {
            justNow: 'Vừa xong',
            minute: 'phút',
            minutes: 'phút',
            hour: 'giờ',
            hours: 'giờ',
            day: 'ngày',
            days: 'ngày',
            week: 'tuần',
            weeks: 'tuần',
            month: 'tháng',
            months: 'tháng',
            year: 'năm',
            years: 'năm',
            ago: 'trước'
          }
        },
        en: {
          tagline: 'Professional Tailoring & Bespoke Suits',
          featuresTitle: 'SHOP CLOTHING & CUSTOM TAILORING',
          servicesTitle: 'Our Services & Prices',
          priceLabel: 'Starting from',
          customerReviews: 'Customer Reviews',
          customerPhotos: 'Customer Photos',
          backToTop: 'Back to top',
          close: 'Close',
          prevImage: 'Previous image',
          nextImage: 'Next image',
          skipToContent: 'Skip to main content',
          footer: '© 2025 Anh Tailor – Excellence in Every Stitch',
          services: {
            suits: {
              name: 'Suits & Veston',
              description: 'Within 3-5 days',
              detailDescription: 'Premium bespoke suits and blazers with expert tailoring. Perfect fit for weddings, business, and special occasions.'
            },
            shirts: {
              name: 'Custom Shirts',
              description: 'Within 1-2 days',
              detailDescription: 'Handcrafted dress shirts tailored to your measurements. Premium fabrics and perfect fit for business or formal wear.'
            },
            waistcoat: {
              name: 'Waistcoat',
              description: 'Within 2-3 days',
              detailDescription: 'Elegant waistcoats and vests in premium fabrics. Perfect complement to your formal suit.'
            }
          },
          contact: {
            address: '357/1 Nguyen Dinh Chieu, Ham Tien, Mui Ne',
            callUs: 'Call Us: 0397417003',
            whatsapp: 'WhatsApp: 0397417003',
            facebook: 'Facebook'
          },
          notice: {
            facebookConsultation: 'Vietnamese customers can call me directly. International customers, please message us on Facebook - my daughter will assist you in English (I cannot communicate in foreign languages over the phone)',
            remoteOrdering: 'Remote Tailoring Service: You can measure yourself and send us your measurements. We will tailor your garments accordingly. When you arrive in Vietnam, simply pick up your items and pay the remaining balance (30% deposit required upfront)'
          },
          features: {
            customDesign: 'YOUR OWN DESIGN',
            madeToOrder: 'MADE TO ORDER',
            premiumFabric: 'PREMIUM FABRIC',
            onlineOrStore: 'ONLINE OR IN STORE'
          },
          timeAgo: {
            justNow: 'Just now',
            minute: 'minute',
            minutes: 'minutes',
            hour: 'hour',
            hours: 'hours',
            day: 'day',
            days: 'days',
            week: 'week',
            weeks: 'weeks',
            month: 'month',
            months: 'months',
            year: 'year',
            years: 'years',
            ago: 'ago'
          }
        }
      },
      exchangeRate: 25000, 
      services: [
        {
          icon: 'fa-solid fa-user-tie',
          nameKey: 'suits',
          priceUSD: { min: 350, max: 380 },
          images: [
            'https://images.unsplash.com/photo-1515736076039-a3ca66043b27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVzdG9uJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1685606867476-dc5b77a2bf3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVzdG9uJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1529635229076-82fefed713c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZlc3RvbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1647900669139-1a968c4091e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlc3RvbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1592878956815-2feeac767f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZlc3RvbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmVzdG9uJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D'
          ],
          currentImageIndex: 0
        },
        {
          icon: 'fa-solid fa-shirt',
          nameKey: 'shirts',
          priceUSD: { min: 40, max: 55 },
          images: [
            'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fFNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fFNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1656453260437-4f4da3ef81dc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          ],
          currentImageIndex: 0
        },
        {
          icon: 'fa-solid fa-shirt',
          nameKey: 'waistcoat',
          priceUSD: { min: 200, max: 200 },
          images: [
            'https://images.unsplash.com/photo-1593032288331-711b99d4fa74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVzdHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1593029762624-0c28669f2056?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVzdHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1662833595899-07c57d617f56?q=80&w=769&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1504791635568-fa4993808e0a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1632226390535-2f02c1a93541?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ],
          currentImageIndex: 0
        }
      ],
      features: [
        {
          key: 'customDesign',
          icon: 'fa-solid fa-laptop',
          nameKey: 'customDesign'
        },
        {
          key: 'madeToOrder',
          icon: 'fa-solid fa-ruler-combined',
          nameKey: 'madeToOrder'
        },
        {
          key: 'premiumFabric',
          icon: 'fa-solid fa-th',
          nameKey: 'premiumFabric'
        },
        {
          key: 'onlineOrStore',
          icon: 'fa-solid fa-bag-shopping',
          nameKey: 'onlineOrStore'
        }
      ],
      contactLinks: [
        {
          icon: 'fa-solid fa-location-dot',
          textKey: 'address',
          href: 'https://g.co/kgs/G3Ya5nd',
          target: '_blank'
        },
        {
          icon: 'fa-solid fa-phone',
          textKey: 'callUs',
          href: 'tel:0397417003'
        },
        {
          icon: 'fa-brands fa-whatsapp',
          textKey: 'whatsapp',
          href: 'https://wa.me/84937417003',
          target: '_blank'
        },
        {
          icon: 'fa-brands fa-facebook',
          textKey: 'facebook',
          href: 'https://www.facebook.com/anhtailorvn/',
          target: '_blank'
        }
      ],
      feedbackImages: Array.from({ length: 23 }, (_, i) => ({
        src: `images/feedback/customer (${i + 1}).jpg`,
        altKey: 'customerPhoto',
        index: i + 1
      })),
      showLightbox: false,
      currentImageIndex: 0,
      imageLoaded: false,
      showBackToTop: false,
      serviceAutoPlayIntervals: [],
      textFeedbacks: [
        {
          name: 'Nguyễn Văn An',
          content: 'Giá rất hợp lý và thời gian may nhanh chỉ 2-3 ngày! Chất lượng áo veston rất tốt, vừa vặn hoàn hảo. Rất đáng tiền!',
          country: 'Vietnam',
          rating: 5
        },
        {
          name: 'Michael Johnson',
          content: 'Unbelievable price for such quality! Got my suit ready in just 2 days. The price is very reasonable compared to other tailors. Highly recommend!',
          country: 'United States',
          rating: 5
        },
        {
          name: 'Sarah Williams',
          content: 'Amazing value for money! My custom vest was ready in 3 days and the price was so affordable. Quality is excellent. Will definitely return!',
          country: 'Australia',
          rating: 5
        },
        {
          name: 'James Anderson',
          content: 'Fast service and great prices! My suit was completed in 2 days. Very affordable compared to back home. Quality is outstanding!',
          country: 'Canada',
          rating: 5
        },
        {
          name: 'Jean-Pierre Dubois',
          content: 'Prix très raisonnable et service rapide! Mon costume était prêt en seulement 2-3 jours. Excellent rapport qualité-prix. Je recommande!',
          country: 'France',
          rating: 5
        },
        {
          name: 'Giovanni Rossi',
          content: 'Prezzo molto conveniente e tempi rapidi! Il vestito è stato completato in 2-3 giorni. Qualità eccellente a un prezzo giusto. Consiglio!',
          country: 'Italy',
          rating: 5
        },
        {
          name: 'Maria Garcia',
          content: 'Precio muy razonable y servicio rápido! Mi traje estuvo listo en solo 2-3 días. Excelente calidad por un precio justo. ¡Recomiendo!',
          country: 'Spain',
          rating: 5
        },
        {
          name: 'Emma Thompson',
          content: 'Great prices and super fast! My wedding suit was ready in just 2 days. Very affordable and the quality is perfect. Highly satisfied!',
          country: 'United Kingdom',
          rating: 5
        },
        {
          name: 'Yuki Tanaka',
          content: '価格がとても手頃で、仕立ても早い！2-3日で完成しました。品質も良く、コストパフォーマンスが最高です。おすすめします！',
          country: 'Japan',
          rating: 5
        },
        {
          name: 'Trần Thị Hoa',
          content: 'Giá rẻ mà chất lượng tốt! Áo veston may chỉ 2 ngày là xong. Rất hợp lý so với các tiệm khác. Sẽ quay lại!',
          country: 'Vietnam',
          rating: 5
        },
        {
          name: 'David Brown',
          content: 'Incredible value! Got my business suit in 3 days at a fraction of the price I would pay at home. Fast service and excellent quality!',
          country: 'United States',
          rating: 5
        },
        {
          name: 'Lisa Wilson',
          content: 'So affordable and quick! My blazer was ready in 2 days. The price is very reasonable and the fit is perfect. Great service!',
          country: 'Australia',
          rating: 5
        },
        {
          name: 'Robert Taylor',
          content: 'Fast turnaround and fair prices! My waistcoat was completed in 2-3 days. Much cheaper than expected with excellent quality!',
          country: 'Canada',
          rating: 5
        },
        {
          name: 'Sophie Martin',
          content: 'Prix excellent et délai très rapide! Mon costume était prêt en 2 jours. Qualité parfaite pour un prix si raisonnable. Parfait!',
          country: 'France',
          rating: 5
        },
        {
          name: 'Marco Bianchi',
          content: 'Servizio veloce e prezzi onesti! Il mio vestito è stato completato in 3 giorni. Ottimo rapporto qualità-prezzo. Molto soddisfatto!',
          country: 'Italy',
          rating: 5
        },
        {
          name: 'Carlos Rodriguez',
          content: 'Precio muy justo y entrega rápida! Mi traje estuvo listo en 2 días. Calidad excelente a un precio muy razonable. ¡Excelente!',
          country: 'Spain',
          rating: 5
        },
        {
          name: 'Thomas Wright',
          content: 'Amazing prices and super fast service! My suit was ready in 2-3 days. Very affordable and the quality exceeded my expectations!',
          country: 'United Kingdom',
          rating: 5
        },
        {
          name: 'Hiroshi Yamamoto',
          content: '手頃な価格で迅速なサービス！2日で完成しました。品質も良く、価格も非常に合理的です。大満足です！',
          country: 'Japan',
          rating: 5
        },
        {
          name: 'Lê Minh Đức',
          content: 'Giá cả hợp lý, thời gian may nhanh chóng! Chỉ 2-3 ngày là có áo. Chất lượng tốt, giá rẻ hơn nhiều nơi khác. Rất hài lòng!',
          country: 'Vietnam',
          rating: 5
        },
        {
          name: 'Jennifer Smith',
          content: 'Great value and fast delivery! My custom shirt was ready in 2 days. The price is very reasonable and the quality is excellent!',
          country: 'United States',
          rating: 5
        },
        {
          name: 'Peter Mitchell',
          content: 'Affordable prices and quick service! Got my suit in 3 days. Much cheaper than I expected with perfect quality. Highly recommend!',
          country: 'Australia',
          rating: 5
        },
        {
          name: 'Marie Dubois',
          content: 'Prix très abordable et service express! Mon costume était prêt en 2-3 jours. Excellent rapport qualité-prix. Je reviendrai!',
          country: 'France',
          rating: 5
        },
        {
          name: 'Alessandro Ferrari',
          content: 'Prezzi onesti e tempi rapidissimi! Il mio vestito è stato completato in 2 giorni. Qualità eccellente a un prezzo giusto!',
          country: 'Italy',
          rating: 5
        },
        {
          name: 'Isabella Martinez',
          content: 'Precio muy razonable y entrega súper rápida! Mi traje estuvo listo en 3 días. Calidad perfecta por un precio justo. ¡Perfecto!',
          country: 'Spain',
          rating: 5
        },
        {
          name: 'William Harris',
          content: 'Excellent prices and fast turnaround! My suit was ready in 2 days. Very affordable with outstanding quality. Will definitely return!',
          country: 'United Kingdom',
          rating: 5
        },
        {
          name: 'Phạm Văn Hùng',
          content: 'Giá rất rẻ và may nhanh lắm! Chỉ 2 ngày là có áo veston. Chất lượng tốt, giá hợp lý hơn nhiều nơi. Rất hài lòng!',
          country: 'Vietnam',
          rating: 5
        },
        {
          name: 'Richard Davis',
          content: 'Super affordable and incredibly fast! Got my suit in 2-3 days. The price is unbeatable for this quality. Highly recommend!',
          country: 'United States',
          rating: 5
        },
        {
          name: 'Amanda White',
          content: 'Amazing prices and quick service! My custom blazer was ready in 2 days. Very reasonable price with perfect quality!',
          country: 'Australia',
          rating: 5
        },
        {
          name: 'Christopher Lee',
          content: 'Fast service and great value! My suit was completed in 3 days at such an affordable price. Quality exceeded expectations!',
          country: 'Canada',
          rating: 5
        },
        {
          name: 'Claire Bernard',
          content: 'Prix incroyablement bas et service rapide! Mon costume était prêt en 2-3 jours. Excellent rapport qualité-prix!',
          country: 'France',
          rating: 5
        },
        {
          name: 'Luca Romano',
          content: 'Prezzi fantastici e tempi velocissimi! Il mio vestito è stato completato in 2 giorni. Qualità eccellente a prezzo giusto!',
          country: 'Italy',
          rating: 5
        },
        {
          name: 'Carmen Lopez',
          content: 'Precio increíble y servicio súper rápido! Mi traje estuvo listo en 2 días. Calidad perfecta por un precio muy justo!',
          country: 'Spain',
          rating: 5
        },
        {
          name: 'Oliver Green',
          content: 'Unbelievable prices and super fast! My wedding suit was ready in 2-3 days. Very affordable with excellent quality!',
          country: 'United Kingdom',
          rating: 5
        },
        {
          name: 'Sakura Watanabe',
          content: '驚くほど安い価格で、仕立ても超速い！2-3日で完成しました。品質も最高で、コストパフォーマンス抜群です！',
          country: 'Japan',
          rating: 5
        },
        {
          name: 'Hoàng Thị Lan',
          content: 'Giá rẻ bất ngờ và may cực nhanh! Chỉ 2 ngày là có áo. Chất lượng tốt, giá hợp lý hơn nhiều nơi khác. Tuyệt vời!',
          country: 'Vietnam',
          rating: 5
        },
        {
          name: 'Daniel Martinez',
          content: 'Incredible value for money! Got my business suit in 2 days. The price is so reasonable and quality is outstanding!',
          country: 'United States',
          rating: 5
        },
        {
          name: 'Jessica Taylor',
          content: 'So cheap and so fast! My custom vest was ready in 3 days. Amazing quality for such an affordable price. Love it!',
          country: 'Australia',
          rating: 5
        },
        {
          name: 'Ryan Wilson',
          content: 'Fast turnaround and fair prices! My suit was completed in 2 days. Much cheaper than expected with perfect quality!',
          country: 'Canada',
          rating: 5
        },
        {
          name: 'Camille Rousseau',
          content: 'Prix très abordable et délai express! Mon costume était prêt en 2 jours. Qualité parfaite pour un prix si bas!',
          country: 'France',
          rating: 5
        },
        {
          name: 'Francesco Conti',
          content: 'Prezzi onestissimi e servizio velocissimo! Il mio vestito è stato completato in 3 giorni. Ottima qualità a prezzo giusto!',
          country: 'Italy',
          rating: 5
        },
        {
          name: 'Ana Fernandez',
          content: 'Precio muy económico y entrega rapidísima! Mi traje estuvo listo en 2-3 días. Calidad excelente por precio justo!',
          country: 'Spain',
          rating: 5
        },
        {
          name: 'George Mitchell',
          content: 'Excellent prices and lightning fast! My suit was ready in 2 days. Very affordable with outstanding craftsmanship!',
          country: 'United Kingdom',
          rating: 5
        },
        {
          name: 'Kenji Sato',
          content: '信じられないほど安い価格で、仕立ても早い！2日で完成しました。品質も良く、価格も非常に合理的です！',
          country: 'Japan',
          rating: 5
        },
        {
          name: 'Vũ Đình Tuấn',
          content: 'Giá cả rất hợp lý, thời gian may nhanh chóng! Chỉ 2-3 ngày là có áo veston. Chất lượng tốt, giá rẻ hơn nhiều nơi!',
          country: 'Vietnam',
          rating: 5
        },
        {
          name: 'Brian Thompson',
          content: 'Amazing value and quick delivery! My custom shirt was ready in 2 days. The price is very reasonable for this quality!',
          country: 'United States',
          rating: 5
        },
        {
          name: 'Sophie Clarke',
          content: 'Affordable prices and super fast service! Got my suit in 3 days. Much cheaper than I thought with excellent quality!',
          country: 'Australia',
          rating: 5
        },
        {
          name: 'Matthew Brown',
          content: 'Fast service and great prices! My waistcoat was completed in 2-3 days. Very affordable with perfect quality!',
          country: 'Canada',
          rating: 5
        },
        {
          name: 'Isabelle Moreau',
          content: 'Prix excellent et service ultra rapide! Mon costume était prêt en 2 jours. Qualité parfaite pour un prix si raisonnable!',
          country: 'France',
          rating: 5
        },
        {
          name: 'Roberto Verdi',
          content: 'Prezzi fantastici e tempi rapidissimi! Il mio vestito è stato completato in 2 giorni. Qualità eccellente a prezzo giusto!',
          country: 'Italy',
          rating: 5
        }
      ]
    };
  },
  computed: {
    t() {
      return this.translations[this.currentLanguage];
    },
    servicesWithTranslations() {
      return this.services.map(service => ({
        ...service,
        name: this.t.services[service.nameKey].name,
        description: this.t.services[service.nameKey].description,
        detailDescription: this.t.services[service.nameKey].detailDescription,
        price: this.formatPrice(service.priceUSD)
      }));
    },
    contactLinksWithTranslations() {
      return this.contactLinks.map(link => ({
        ...link,
        text: this.t.contact[link.textKey]
      }));
    },
    featuresWithTranslations() {
      return this.features.map(feature => ({
        ...feature,
        name: this.t.features[feature.nameKey]
      }));
    },
    feedbackImagesWithTranslations() {
      return this.feedbackImages.map(image => ({
        ...image,
        alt: this.currentLanguage === 'vi' 
          ? `Ảnh khách hàng ${image.index} - Anh Tailor`
          : `Customer photo ${image.index} - Anh Tailor`
      }));
    },
    feedbacksWithDates() {
      const now = new Date();
      
      const feedbacks = this.textFeedbacks.map((feedback, index) => {
        const totalFeedbacks = this.textFeedbacks.length;
        const progress = totalFeedbacks > 1 ? index / (totalFeedbacks - 1) : 0; 
        const daysAgo = 1095 * (1 - progress) + 7 * progress;
        
        const feedbackDate = new Date(now);
        feedbackDate.setDate(feedbackDate.getDate() - Math.round(daysAgo));
        
        return {
          ...feedback,
          date: this.formatTimeAgo(feedbackDate)
        };
      });
      
      return feedbacks.reverse();
    }
  },
  methods: {
    formatTimeAgo(date) {
      const now = new Date();
      const diffMs = now - date;
      const diffSeconds = Math.floor(diffMs / 1000);
      const diffMinutes = Math.floor(diffSeconds / 60);
      const diffHours = Math.floor(diffMinutes / 60);
      const diffDays = Math.floor(diffHours / 24);
      const diffMonths = Math.floor(diffDays / 30);
      const diffYears = Math.floor(diffDays / 365);
      const t = this.t.timeAgo;
      
      if (diffYears > 0) {
        const remainingMonths = Math.floor((diffDays % 365) / 30);
        if (remainingMonths > 0) {
          return `${diffYears} ${diffYears > 1 ? t.years : t.year} ${remainingMonths} ${remainingMonths > 1 ? t.months : t.month} ${t.ago}`;
        }
        return `${diffYears} ${diffYears > 1 ? t.years : t.year} ${t.ago}`;
      } else if (diffMonths > 0) {
        const remainingDays = diffDays % 30;
        if (remainingDays > 7) {
          const weeks = Math.floor(remainingDays / 7);
          return `${diffMonths} ${diffMonths > 1 ? t.months : t.month} ${weeks} ${weeks > 1 ? t.weeks : t.week} ${t.ago}`;
        }
        return `${diffMonths} ${diffMonths > 1 ? t.months : t.month} ${t.ago}`;
      } else if (diffDays > 0) {
        if (diffDays >= 7) {
          const weeks = Math.floor(diffDays / 7);
          return `${weeks} ${weeks > 1 ? t.weeks : t.week} ${t.ago}`;
        }
        return `${diffDays} ${diffDays > 1 ? t.days : t.day} ${t.ago}`;
      } else if (diffHours > 0) {
        return `${diffHours} ${diffHours > 1 ? t.hours : t.hour} ${t.ago}`;
      } else if (diffMinutes > 0) {
        return `${diffMinutes} ${diffMinutes > 1 ? t.minutes : t.minute} ${t.ago}`;
      } else {
        return t.justNow;
      }
    },
    formatPrice(priceUSD) {
      if (this.currentLanguage === 'vi') {
        
        const minVND = Math.round(priceUSD.min * this.exchangeRate);
        const maxVND = Math.round(priceUSD.max * this.exchangeRate);
        
        const formatVND = (amount) => {
          const rounded = Math.round(amount / 500000) * 500000;
          
          const trieu = Math.floor(rounded / 1000000);
          const nghin = Math.floor((rounded % 1000000) / 1000);
          
          if (nghin >= 500) {
            return `${trieu + 1}tr`;
          } else if (nghin > 0) {
            return `${trieu}tr${nghin}k`;
          } else {
            return `${trieu}tr`;
          }
        };
        
        if (priceUSD.min === priceUSD.max) {
          return `${formatVND(minVND)} VNĐ`;
        } else {
          return `${formatVND(minVND)} - ${formatVND(maxVND)} VNĐ`;
        }
      } else {
        if (priceUSD.min === priceUSD.max) {
          return `$${priceUSD.min}`;
        } else {
          return `$${priceUSD.min} - $${priceUSD.max}`;
        }
      }
    },
    switchLanguage(lang) {
      this.currentLanguage = lang;
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
    },
    handleImageError(event) {
      const img = event.target;
      const parent = img.parentElement;
      img.style.display = 'none';
      parent.innerHTML = '✂️';
      parent.style.background = 'linear-gradient(135deg, #d4a574, #c19660)';
      parent.style.fontSize = '50px';
      parent.style.color = '#3c2414';
    },
    handleServiceImageError(event, service) {
      const img = event.target;
      const wrapper = img.closest('.service-image-wrapper');
      if (wrapper) {
        img.style.display = 'none';
        const overlay = wrapper.querySelector('.service-image-overlay');
        if (overlay) {
          overlay.style.display = 'flex';
          overlay.style.background = 'linear-gradient(135deg, #3c2414, #5d4037)';
        }
      }
    },
    nextServiceImage(service) {
      const originalService = this.services.find(s => s.nameKey === service.nameKey);
      if (originalService) {
        originalService.currentImageIndex = (originalService.currentImageIndex + 1) % originalService.images.length;
      }
    },
    prevServiceImage(service) {
      const originalService = this.services.find(s => s.nameKey === service.nameKey);
      if (originalService) {
        originalService.currentImageIndex = (originalService.currentImageIndex - 1 + originalService.images.length) % originalService.images.length;
      }
    },
    setServiceImageIndex(service, index) {
      const originalService = this.services.find(s => s.nameKey === service.nameKey);
      if (originalService) {
        originalService.currentImageIndex = index;
      }
    },
    handleLinkClick(event) {
      const button = event.currentTarget;
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
    },
    openLightbox(index) {
      this.currentImageIndex = index;
      this.showLightbox = true;
      this.imageLoaded = false;
      document.body.style.overflow = 'hidden';
    },
    closeLightbox() {
      this.showLightbox = false;
      document.body.style.overflow = '';
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.feedbackImagesWithTranslations.length;
      this.imageLoaded = false;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.feedbackImagesWithTranslations.length) % this.feedbackImagesWithTranslations.length;
      this.imageLoaded = false;
    },
    handleKeydown(event) {
      if (!this.showLightbox) return;
      
      if (event.key === 'Escape') {
        this.closeLightbox();
      } else if (event.key === 'ArrowRight') {
        this.nextImage();
      } else if (event.key === 'ArrowLeft') {
        this.prevImage();
      }
    },
    handleFeedbackImageError(event, index) {
      const img = event.target;
      img.style.display = 'none';
      const parent = img.parentElement;
      if (parent) {
        parent.innerHTML = '<div class="image-error-placeholder"><i class="fa-solid fa-image"></i><span>Image not loaded</span></div>';
      }
    },
    handleLightboxImageError(event) {
      const img = event.target;
      const wrapper = img.closest('.lightbox-image-wrapper');
      if (wrapper) {
        wrapper.innerHTML = '<div class="lightbox-error"><i class="fa-solid fa-exclamation-triangle"></i><p>Image not loaded</p></div>';
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 300;
    },
    startServiceAutoPlay() {
      this.stopServiceAutoPlay();
      
      this.services.forEach((service) => {
        const intervalId = setInterval(() => {
          const originalService = this.services.find(s => s.nameKey === service.nameKey);
          if (originalService) {
            originalService.currentImageIndex = (originalService.currentImageIndex + 1) % originalService.images.length;
          }
        }, 3000); 
        this.serviceAutoPlayIntervals.push(intervalId);
      });
    },
    stopServiceAutoPlay() {
      this.serviceAutoPlayIntervals.forEach(intervalId => {
        clearInterval(intervalId);
      });
      this.serviceAutoPlayIntervals = [];
    },
    pauseServiceAutoPlay() {
      this.stopServiceAutoPlay();
    },
    resumeServiceAutoPlay() {
      this.startServiceAutoPlay();
    }
  },
  mounted() {
    this.$el.style.opacity = '1';
    document.documentElement.lang = this.currentLanguage;
    window.addEventListener('keydown', this.handleKeydown);
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
    this.startServiceAutoPlay(); 
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('scroll', this.handleScroll);
    this.stopServiceAutoPlay(); 
  }
}).mount('#app');

