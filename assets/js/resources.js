// ---------------------------------------------------------------
// Resource Library data + filter logic
//
// PHASE 2 NOTE: this is a hardcoded array to get §02 live quickly.
// To upgrade to Airtable later: replace the RESOURCES constant with
// an async fetch to your Airtable base (same pattern as the Worship
// Song Library integration), keeping the same field names below so
// renderResources() and the filter logic don't need to change.
// ---------------------------------------------------------------

const RESOURCES = [
  {
    title: "EE Bootcamp Research Tracker",
    type: "Template",
    programme: "DP",
    tags: ["DP", "Templates", "EE support"],
    updated: "Jul 2026",
    downloadUrl: "#",
    license: "CC BY-NC 4.0"
  },
  {
    title: "ATL Research Skills Progression Map",
    type: "Guide",
    programme: "PYP–DP",
    tags: ["PYP", "MYP", "DP", "AI literacy"],
    updated: "Jul 2026",
    downloadUrl: "#",
    license: "CC BY-NC 4.0"
  },
  {
    title: "SIFT Evaluation Guide (AI-Generated Content Edition)",
    type: "Guide",
    programme: "MYP–DP",
    tags: ["MYP", "DP", "AI literacy"],
    updated: "Jul 2026",
    downloadUrl: "#",
    license: "CC BY-NC 4.0"
  },
  {
    title: "MoEHE / GCC Compliance Pre-Screening Checklist",
    type: "Checklist",
    programme: "All programmes",
    tags: ["PYP", "MYP", "DP", "Checklists"],
    updated: "Jul 2026",
    downloadUrl: "#",
    license: "CC BY-NC 4.0"
  },
  {
    title: "CREW/MUSTIE Weeding Decision Checklist",
    type: "Checklist",
    programme: "All programmes",
    tags: ["Checklists", "Weeding"],
    updated: "Jul 2026",
    downloadUrl: "#",
    license: "CC BY-NC 4.0"
  },
  {
    title: "Unit Resource List Builder — Starter Template",
    type: "Template",
    programme: "MYP",
    tags: ["MYP", "Templates"],
    updated: "Jul 2026",
    downloadUrl: "#",
    license: "CC BY-NC 4.0"
  },
  {
    title: "AI Use Disclosure Statement — EE/PP/IA",
    type: "Template",
    programme: "DP",
    tags: ["DP", "Templates", "AI literacy", "EE support"],
    updated: "Jul 2026",
    downloadUrl: "#",
    license: "CC BY-NC 4.0"
  },
  {
    title: "Co-Teaching Lesson Slide Deck — Citation Basics",
    type: "Slide deck",
    programme: "MYP",
    tags: ["MYP", "Slide decks"],
    updated: "Jul 2026",
    downloadUrl: "#",
    license: "CC BY-NC 4.0"
  }
];

function cardHTML(r) {
  return `
    <div class="block tall" data-tags="${r.tags.join(",")}">
      <div class="tag">${r.type.toUpperCase()}</div>
      <strong>${r.title}</strong><br>
      <span class="mono" style="font-size:11px;">${r.programme}</span><br>
      <span class="mono" style="font-size:11px;">Last updated: ${r.updated}</span><br>
      <a href="${r.downloadUrl}">Download</a> &middot;
      <a href="about.html">${r.license}</a>
    </div>
  `;
}

function renderResources(list) {
  const grid = document.getElementById("resource-grid");
  if (!grid) return;
  grid.innerHTML = list.length
    ? list.map(cardHTML).join("")
    : `<div class="block">No resources match those filters yet — try clearing one, or use the request form below.</div>`;
}

function setupFilters() {
  const chips = document.querySelectorAll(".filter-chip");
  const active = new Set();

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const tag = chip.dataset.tag;
      if (active.has(tag)) {
        active.delete(tag);
        chip.classList.remove("active");
      } else {
        active.add(tag);
        chip.classList.add("active");
      }

      if (active.size === 0) {
        renderResources(RESOURCES);
        return;
      }
      const filtered = RESOURCES.filter(r =>
        r.tags.some(t => active.has(t))
      );
      renderResources(filtered);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderResources(RESOURCES);
  setupFilters();
});
