// Loads shared nav + footer partials into any page that includes this script.
// Each page needs: <div id="nav-slot"></div> and <div id="footer-slot"></div>
// Set data-page="home" (etc.) on the <body> tag to highlight the active nav tab.

async function loadPartial(url, slotId) {
  const slot = document.getElementById(slotId);
  if (!slot) return;
  try {
    const res = await fetch(url);
    slot.innerHTML = await res.text();
  } catch (err) {
    console.error(`Could not load partial: ${url}`, err);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadPartial('/partials/nav.html', 'nav-slot');
  await loadPartial('/partials/footer.html', 'footer-slot');

  const current = document.body.dataset.page;
  if (current) {
    const activeTab = document.querySelector(`.tab[data-page="${current}"]`);
    if (activeTab) activeTab.classList.add('active');
  }
});
