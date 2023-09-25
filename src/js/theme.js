/***********************************/
/*     TailTyping
/*     by Ari budin
/*     https://github.com/aribudin/tailtyping
/*==================================*/

// Function to copy code to clipboard
function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

// Copy code buttons and code texts
const copyButtons = document.querySelectorAll('.copy-button');
const codeTexts = document.querySelectorAll('.tailcode');

copyButtons.forEach((copyButton, index) => {
  copyButton.addEventListener('click', () => {
    const codeToCopy = codeTexts[index].innerText;
    copyToClipboard(codeToCopy);
    copyButton.textContent = 'Code Copied!';
    setTimeout(() => {
      copyButton.textContent = 'Copy code';
    }, 2000);
  });
});

// Accordion functionality
function accordion_func() {
  const set_accordion = document.querySelectorAll('[data-type="collapse"]');

  if (set_accordion !== null) {
    const is_accordion = document.querySelectorAll('[role="collapsed"]');

    function AccordionClicks(AccordionClickEvent) {
      const clickTarget = AccordionClickEvent.currentTarget;
      const AccordionId = clickTarget.getAttribute("data-target");
      const activeAccordion = document.querySelector(AccordionId);

      for (let j = 0; j < is_accordion.length; j++) {
        if (set_accordion[j] !== clickTarget) {
          is_accordion[j].classList.remove("active");
          set_accordion[j].classList.remove("active");
        }
      }

      activeAccordion.classList.toggle("active");
      clickTarget.classList.toggle("active");
    }

    for (let i = 0; i < set_accordion.length; i++) {
      set_accordion[i].addEventListener("click", AccordionClicks);
    }
  }
}
accordion_func();

// Toggle functionality
function toggles_func() {
  const set_toggles = document.querySelectorAll('[data-type="toggle"]');
  const body = document.querySelector("body");

  if (set_toggles !== null) {
    const close_dialog = document.querySelectorAll('[data-close]')

    function DialogClicks(DialogClickEvent) {
      const clickTarget = DialogClickEvent.currentTarget;
      const DialogId = clickTarget.getAttribute("data-target");
      const activeDialog = document.querySelector(DialogId);
      activeDialog.classList.add("show");
    }

    function DialogCloses(DialogCloseEvent) {
      const closeTarget = DialogCloseEvent.currentTarget;
      const DialogId = closeTarget.getAttribute("data-close");
      const activeDialog = document.querySelector(DialogId);
      activeDialog.classList.remove("show");
    }

    for (let i = 0; i < set_toggles.length; i++) {
      set_toggles[i].addEventListener("click", DialogClicks);
    }

    for (let j = 0; j < close_dialog.length; j++) {
      close_dialog[j].addEventListener("click", DialogCloses);
    }
  }
}
toggles_func();

// Back to top button
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.getElementsByClassName("back-to-top");
  var button = buttons[0];

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 400) {
      button.classList.add('!opacity-100');
    } else {
      button.classList.remove('!opacity-100');
    }
  });

  button.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Function to smoothly scroll to a target element
function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
}

// Year function
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;