// RED 888 YT — Login interactions
(function () {
  const form = document.getElementById('login-form');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const toggle = document.querySelector('.toggle-password');
  const providers = {
    google: document.getElementById('btn-google'),
    facebook: document.getElementById('btn-facebook'),
    gmail: document.getElementById('btn-gmail'),
  };

  function showToast(message) {
    let el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.style.position = 'fixed';
      el.style.left = '50%';
      el.style.bottom = '24px';
      el.style.transform = 'translateX(-50%)';
      el.style.padding = '12px 16px';
      el.style.borderRadius = '12px';
      el.style.background = 'rgba(0,0,0,0.7)';
      el.style.color = '#fff';
      el.style.font = '14px/1.4 Poppins, system-ui, sans-serif';
      el.style.zIndex = '99999';
      el.style.boxShadow = '0 10px 32px rgba(0,0,0,.35)';
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.style.opacity = '0';
    el.style.transition = 'opacity .2s ease, transform .2s ease';
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translate(-50%, -4px)';
    });
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translate(-50%, 0)';
    }, 2000);
  }

  if (toggle && password) {
    toggle.addEventListener('click', () => {
      const isPassword = password.type === 'password';
      password.type = isPassword ? 'text' : 'password';
      showToast(isPassword ? 'Password revealed' : 'Password hidden');
      password.focus();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailVal = email.value.trim();
      const passVal = password.value;
      if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        email.focus();
        showToast('Enter a valid email');
        return;
      }
      if (!passVal || passVal.length < 6) {
        password.focus();
        showToast('Password must be at least 6 characters');
        return;
      }
      // Simulated sign-in
      showToast('Signing in...');
      setTimeout(() => {
        showToast('Signed in (demo)');
      }, 900);
    });
  }

  function wireProvider(button, name) {
    if (!button) return;
    button.addEventListener('click', () => {
      showToast(`${name} login not configured`);
      // Placeholder: integrate real OAuth flow here (e.g., Firebase Auth, OAuth 2.0)
    });
  }

  wireProvider(providers.google, 'Google');
  wireProvider(providers.facebook, 'Facebook');
  wireProvider(providers.gmail, 'Gmail');
})();

