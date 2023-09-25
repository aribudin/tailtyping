/***********************************/
/*     TailTyping
/*     by Ari budin
/*     https://github.com/aribudin/tailtyping
/*==================================*/
function tailTypingEffect(element) {
  const typingTitle = element.querySelector('span[data-text]');
  const typingTexts = typingTitle.getAttribute('data-text').split('|');
  const options = element.getAttribute('data-options') ? JSON.parse(element.getAttribute('data-options')) : { typeSpeed: 100, typeWait: 2000, eraseSpeed: 100, eraseWait: 1000, };

  const typingCursor = document.createElement('span');
  typingCursor.className = 'typing-cursor';
  typingTitle.appendChild(typingCursor);
  let currentTextIndex = 0;
  let currentIndex = 0;
  let isTyping = true;

  function typeTypingText() {
    let currentText = typingTexts[currentTextIndex].substr(0, currentIndex);
    typingTitle.textContent = currentText;
    typingTitle.appendChild(typingCursor);
    currentIndex++;

    if (currentIndex <= typingTexts[currentTextIndex].length) {
      setTimeout(typeTypingText, options.typeSpeed); // Use the typeSpeed option
    } else {
      setTimeout(function () {
        isTyping = false;
        setTimeout(eraseTypingText, options.typeWait); // Wait for a moment before erasing the text
      }, options.typeWait);
    }
  }

  function eraseTypingText() {
    currentIndex--;
    let currentText = typingTexts[currentTextIndex].substr(0, currentIndex);
    typingTitle.textContent = currentText;
    typingTitle.appendChild(typingCursor);

    if (currentIndex > 0) {
      setTimeout(eraseTypingText, options.eraseSpeed); // Use the eraseSpeed option
    } else {
      currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
      setTimeout(function () {
        isTyping = true;
        typeTypingText(); // Wait for a moment before typing the next text
      }, options.eraseWait);
    }
  }
  // Start the typing effect
  typeTypingText();
}
// Trigger typing with data-typing="true"
const typingTextElements = document.querySelectorAll('[data-typing="true"]');
typingTextElements.forEach(tailTypingEffect);
