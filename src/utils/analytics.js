// 追蹤自訂事件的工具函數

export const trackEvent = (eventName, eventData = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};

// 追蹤圖片檢視
export const trackPhotoView = (photoTitle) => {
  trackEvent('view_photo', {
    photo_title: photoTitle,
    timestamp: new Date().toISOString()
  });
};

// 追蹤下載或分享
export const trackShare = (method, photoTitle) => {
  trackEvent('share_photo', {
    method: method, // 'email', 'facebook', 'instagram' 等
    photo_title: photoTitle
  });
};

// 追蹤聯絡表單提交
export const trackContactSubmit = () => {
  trackEvent('contact_form_submit', {
    timestamp: new Date().toISOString()
  });
};
