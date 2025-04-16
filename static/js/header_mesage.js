// header_message.js

document.addEventListener("DOMContentLoaded", () => {
    const messages = [
      "💬 Meet iWell, your personal AI assistant for healthcare, mental health, diagnostics, child and maternal care.",
      "✨ Tailored for Nigerians — your well-being just got more personalized and accessible.",
      "🩺 Ask questions, get help, and find peace of mind with iWell, anytime, anywhere."
    ];
  
    const typewriter = document.getElementById("typewriter");
    let messageIndex = 0;
    let charIndex = 0;
  
    function type() {
      if (!typewriter) return; // element not found
  
      const currentMessage = messages[messageIndex];
  
      if (charIndex < currentMessage.length) {
        typewriter.innerHTML += currentMessage.charAt(charIndex);
        charIndex++;
        setTimeout(type, 40);
      } else {
        setTimeout(() => {
          typewriter.innerHTML = "";
          charIndex = 0;
          messageIndex = (messageIndex + 1) % messages.length;
          type();
        }, 4000); // shorter wait between cycles
      }
    }
  
    type();
  });
  