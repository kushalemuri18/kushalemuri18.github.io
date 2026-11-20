/**
 * KUSHAL EMURI — PORTFOLIO JAVASCRIPT
 * Lightweight, zero dependencies, responsive interactions
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. REPOSITORY REDIRECTOR REGISTRY
  //    Plug in your repository links here or send them to be updated.
  // =========================================================================
  const REPO_REGISTRY = {
    "adaptive-learning": "",     // In development — no repo yet
    "gameboxd": "",              // In development — no repo yet
    "fake-news-nlp": "https://github.com/kushalemuri18/Fake-News-Detection",
    "scheme-recommendation": "https://github.com/kushalemuri18/AI-based-Scheme-Recommendation-System",
    "siem-pipeline": "https://github.com/kushalemuri18/Automation-Pipeline-SIEM-XDR-IDS",
    "transport-platform": "https://github.com/kushalemuri18/University-Transport-Management",
    "yolov5-detection": "https://github.com/kushalemuri18/Object-Detection-using-YOLO-V.5",
    "iot-robot": "https://github.com/kushalemuri18/IoT-Autonomous-Surveillance-Robot"
  };

  const toast = document.getElementById('redirectToast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');
  const toastClose = document.getElementById('toastCloseBtn');
  let toastTimer = null;

  function showToast(title, message) {
    if (!toast) return;
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  if (toastClose) {
    toastClose.addEventListener('click', () => {
      if (toast) toast.classList.remove('show');
    });
  }

  // Intercept repo redirector clicks
  const redirectButtons = document.querySelectorAll('.repo-redirect-btn');
  redirectButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const repoId = btn.getAttribute('data-repo-id');
      const repoName = btn.getAttribute('data-repo-name') || 'Repository';
      const destinationUrl = REPO_REGISTRY[repoId];

      if (destinationUrl && destinationUrl.trim() !== '' && destinationUrl !== '#') {
        window.open(destinationUrl, '_blank', 'noopener,noreferrer');
      } else {
        e.preventDefault();
        showToast(
          `${repoName}`,
          `Repository link is being configured and will be connected shortly.`
        );
      }
    });
  });

  // =========================================================================
  // 2. LIVE CLOCK (IST / LOCAL)
  // =========================================================================
  const liveClock = document.getElementById('liveClock');
  function updateClock() {
    if (!liveClock) return;
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      };
      const timeString = new Intl.DateTimeFormat([], options).format(now);
      liveClock.textContent = `${timeString} IST`;
    } catch (e) {
      const now = new Date();
      liveClock.textContent = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  // =========================================================================
  // 3. ANTHRACITE THEME TOGGLE (DARK / LIGHT)
  // =========================================================================
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  const storedTheme = localStorage.getItem('kushal-theme') || 'dark';
  htmlRoot.setAttribute('data-theme', storedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlRoot.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', nextTheme);
      localStorage.setItem('kushal-theme', nextTheme);
    });
  }

  // =========================================================================
  // 4. CAPSULE NAVIGATION HIGHLIGHT & SCROLLSPY
  // =========================================================================
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section');

  // Click to highlight
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Scrollspy: update highlight as user scrolls
  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentId}`) {
          item.classList.add('active');
        }
      });
    }
  }, { passive: true });

  // =========================================================================
  // 5. PROJECT ARCHIVE FILTER
  // =========================================================================
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectItems = document.querySelectorAll('.project-item');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterCat = tab.getAttribute('data-filter');

      projectItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filterCat === 'all' || itemCat === filterCat) {
          item.style.display = 'grid';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 6. COPY EMAIL BUTTON
  // =========================================================================
  const copyBtn = document.getElementById('copyEmailHero');
  if (copyBtn) {
    const email = copyBtn.getAttribute('data-email') || 'kushalchowdaryemuri@gmail.com';
    const copyText = copyBtn.querySelector('.copy-text');

    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(email);
        copyText.textContent = 'Copied!';
        showToast('Email Copied', email);
        setTimeout(() => {
          copyText.textContent = 'Copy Email';
        }, 2500);
      } catch (err) {
        const temp = document.createElement('input');
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        copyText.textContent = 'Copied!';
        showToast('Email Copied', email);
        setTimeout(() => {
          copyText.textContent = 'Copy Email';
        }, 2500);
      }
    });
  }

  // =========================================================================
  // 7. MOBILE MENU TOGGLE
  // =========================================================================
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // =========================================================================
  // 8. DYNAMIC COPYRIGHT YEAR
  // =========================================================================
  const yearElem = document.getElementById('currentYear');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }

});
