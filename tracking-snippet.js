(function () {
  var measurementId = window.SMARTSITE_GA4_ID || '';

  function loadGA(id) {
    if (!id) return;
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', id);
  }

  function track(eventName, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params || {});
    }
  }

  function bindClicks(selector, eventName) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.addEventListener('click', function () {
        track(eventName, {
          link_text: (el.textContent || '').trim(),
          link_url: el.getAttribute('href') || ''
        });
      });
    });
  }

  function init() {
    loadGA(measurementId);

    bindClicks('a[href^="https://wa.me/"]', 'whatsapp_click');
    bindClicks('a[href^="tel:"]', 'phone_click');
    bindClicks('a[href^="mailto:"]', 'email_click');
    bindClicks('a[href*="google.com/maps"], a[href*="maps.app.goo.gl"]', 'map_click');

    document.querySelectorAll('form').forEach(function (form) {
      form.addEventListener('submit', function () {
        track('form_submit', {
          form_id: form.id || '',
          form_action: form.getAttribute('action') || ''
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
