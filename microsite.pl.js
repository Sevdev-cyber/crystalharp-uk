// No analytics service is loaded here. Events are available for an existing consent-aware integration.
(() => {
  const emit = (event, details) => window.dispatchEvent(new CustomEvent('sf:microsite', { detail: { event, ...details } }));
  const players = [...document.querySelectorAll('audio')];
  players.forEach(player => {
    player.addEventListener('play', () => {
      players.forEach(other => { if (other !== player) other.pause(); });
      emit('audio_play', { model: player.dataset.model });
    });
  });
  document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href);
    if (url.hostname !== 'sacredforest.store' || url.pathname.includes('/cdn/')) return;
    const model = link.closest('.card')?.querySelector('.card-title')?.textContent;
    url.searchParams.set('utm_content', model ? model.toLowerCase().replace(/#/g, '-sharp').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : 'footer');
    link.href = url.href;
    link.addEventListener('click', () => emit('shop_click', { model: model || 'store', destination: url.pathname }));
  });
})();
