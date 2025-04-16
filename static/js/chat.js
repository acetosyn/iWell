// chat.js

// Toggle dark mode
const toggleButton = document.querySelector('.dark-light');
toggleButton?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Sidebar toggle logic
const sidebarToggleBtn = document.getElementById('toggleSidebar');
const sidebarContainer = document.querySelector('.sidebar-container');
const mainContent = document.querySelector('.main-content');

sidebarToggleBtn?.addEventListener('click', () => {
  sidebarContainer.classList.toggle('collapsed');

  if (sidebarContainer.classList.contains('collapsed')) {
    mainContent.style.marginLeft = '60px';
  } else {
    mainContent.style.marginLeft = '220px';
  }
});

// jQuery-based chatbox UI interactions
const chatbox = jQuery.noConflict();
chatbox(() => {
  chatbox(".chatbox-open").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeIn()
  );
  chatbox(".chatbox-close").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeOut()
  );
  chatbox(".chatbox-maximize").click(() => {
    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeOut();
    chatbox(".chatbox-panel").fadeIn().css({ display: "flex" });
  });
  chatbox(".chatbox-minimize").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeIn();
  });
  chatbox(".chatbox-panel-close").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-open").fadeIn();
  });
});
