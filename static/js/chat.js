// chat.js

// Toggle dark mode
const toggleButton = document.querySelector('.dark-light');
toggleButton?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Theme color switching
const colors = document.querySelectorAll('.color');
colors.forEach(color => {
  color.addEventListener('click', () => {
    colors.forEach(c => c.classList.remove('selected'));
    const theme = color.getAttribute('data-color');
    document.body.setAttribute('data-theme', theme);
    color.classList.add('selected');
  });
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
    chatbox(".chatbox-panel").fadeIn();
    chatbox(".chatbox-panel").css({ display: "flex" });
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


// header_message.js (new typewriter logic)
document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "💬 Meet iWell your personal AI assistant for healthcare, mental health, diagnostics, child and maternal care.",
    "Tailored for Nigerians — your well-being just got a lot more personalized and accessible.",
    "🩺 Ask questions, get help, and find peace of mind with iWell, anytime, anywhere."
  ];

  const typewriter = document.getElementById("typewriter");
  let messageIndex = 0;
  let charIndex = 0;

  function type() {
    const currentMessage = messages[messageIndex];

    if (charIndex < currentMessage.length) {
      typewriter.innerHTML += currentMessage.charAt(charIndex);
      charIndex++;
      setTimeout(type, 40);
    } else {
      // Done typing — wait 10 seconds, then clear and type next message
      setTimeout(() => {
        typewriter.innerHTML = "";
        charIndex = 0;
        messageIndex = (messageIndex + 1) % messages.length;
        type();
      }, 10000);
    }
  }

  type();
});
