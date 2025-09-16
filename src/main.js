// Terminal functions
function openTerminal(terminalId) {
  document.getElementById(terminalId).style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeTerminal(terminalId) {
  document.getElementById(terminalId).style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close terminal clicking outside
window.onclick = function (event) {
  if (event.target.classList.contains('digital-modal')) {
    event.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Resume download function
function downloadResume() {
  // Replace with your PDF path
  const link = document.createElement('a');
  link.href = 'src/assets/profile.pdf';
  link.download = 'Lucas_Viana_Curriculo.pdf';
  link.click();

  alert('📊 SYSTEM ALERT: Add your PDF path to the downloadResume() function!');
}

// Contact form submission
function executeContact(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Here you can integrate with an email service
  // Like EmailJS, Formspree, or Netlify Forms

  alert(`💚 TRANSMISSION SUCCESSFUL, ${name}!\n\nYour message has been uploaded to the matrix.`);
  closeTerminal('contactTerminal');

  // Clear form
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

// Matrix digital rain effect
function createMatrixRain() {
  const rain = document.getElementById('digitalRain');
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      createRainColumn();
    }, i * 100);
  }

  function createRainColumn() {
    const column = document.createElement('div');
    column.className = 'rain-column';
    column.style.left = Math.random() * 100 + 'vw';
    column.style.animationDuration = (Math.random() * 3 + 2) + 's';
    column.style.animationDelay = Math.random() * 2 + 's';

    let columnText = '';
    for (let j = 0; j < 20; j++) {
      columnText += chars.charAt(Math.floor(Math.random() * chars.length)) + '<br>';
    }
    column.innerHTML = columnText;

    rain.appendChild(column);

    setTimeout(() => {
      if (rain.contains(column)) {
        rain.removeChild(column);
      }
    }, 5000);
  }
}

// Initialize matrix rain
createMatrixRain();
setInterval(createMatrixRain, 8000);

// Matrix particles floating
function createMatrixParticle() {
  const particle = document.createElement('div');
  particle.style.position = 'fixed';
  particle.style.width = '2px';
  particle.style.height = '2px';
  particle.style.background = '#00ff41';
  particle.style.borderRadius = '50%';
  particle.style.pointerEvents = 'none';
  particle.style.opacity = '0.7';
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.top = '100vh';
  particle.style.zIndex = '1';
  particle.style.boxShadow = '0 0 6px #00ff41';

  document.body.appendChild(particle);

  const animation = particle.animate([
    {
      transform: 'translateY(0px)',
      opacity: 0.7
    },
    {
      transform: 'translateY(-100vh)',
      opacity: 0
    }
  ], {
    duration: Math.random() * 4000 + 3000,
    easing: 'linear'
  });

  animation.onfinish = () => {
    if (document.body.contains(particle)) {
      document.body.removeChild(particle);
    }
  };
}

// Create particles periodically
setInterval(createMatrixParticle, 200);

// Matrix typing effect for title
const title = document.querySelector('h1');
const originalText = title.textContent;
title.textContent = '';

function matrixTypeWriter(text, element, delay = 100) {
  let i = 0;
  function type() {
    if (i < text.length) {
      // Occasionally show random character before correct one
      if (Math.random() > 0.7) {
        const randomChar = '0123456789ABCDEFアイウエオ'.charAt(Math.floor(Math.random() * 15));
        element.textContent += randomChar;
        setTimeout(() => {
          element.textContent = element.textContent.slice(0, -1) + text.charAt(i);
          i++;
          setTimeout(type, delay);
        }, 50);
      } else {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, delay);
      }
    }
  }
  type();
}

setTimeout(() => {
  matrixTypeWriter(originalText, title, 150);
}, 1000);

// Matrix hover effects
document.querySelectorAll('.matrix-node').forEach(node => {
  node.addEventListener('mouseenter', function () {
    this.style.filter = 'brightness(1.2)';

    // Create temporary matrix chars around the node
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const char = document.createElement('span');
        char.textContent = '01'.charAt(Math.floor(Math.random() * 2));
        char.style.position = 'absolute';
        char.style.color = '#00ff41';
        char.style.fontSize = '12px';
        char.style.pointerEvents = 'none';
        char.style.left = Math.random() * this.offsetWidth + 'px';
        char.style.top = Math.random() * this.offsetHeight + 'px';
        char.style.opacity = '0.8';
        char.style.animation = 'fadeOut 1s ease-out forwards';

        this.appendChild(char);

        setTimeout(() => {
          if (this.contains(char)) {
            this.removeChild(char);
          }
        }, 1000);
      }, i * 100);
    }
  });

  node.addEventListener('mouseleave', function () {
    this.style.filter = 'brightness(1)';
  });
});

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
            @keyframes fadeOut {
                0% { opacity: 0.8; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-20px); }
            }
        `;
document.head.appendChild(style);

// Console Matrix Easter Egg
console.log(`
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⡿⣛⠝⠋⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        
                    ╔════════════════════════════════════╗
                    ║         WELCOME TO THE MATRIX      ║
                    ║                                    ║
                    ║  Status: CONNECTED                 ║
                    ║  Reality Level: DIGITAL            ║
                    ║  Access: GRANTED                   ║
                    ║                                    ║
                    ║  "There is no spoon..."            ║
                    ║                                    ║
                    ║  Contact the architect for more    ║
                    ║  information about the system.     ║
                    ╚════════════════════════════════════╝
        `);

// Matrix system boot simulation
setTimeout(() => {
  console.log('%c> SYSTEM INITIALIZING...', 'color: #00ff41; font-family: monospace;');
  setTimeout(() => {
    console.log('%c> LOADING NEURAL PATHWAYS...', 'color: #00ff41; font-family: monospace;');
    setTimeout(() => {
      console.log('%c> MATRIX CONNECTION ESTABLISHED', 'color: #00ff41; font-family: monospace;');
      setTimeout(() => {
        console.log('%c> WELCOME TO THE REAL WORLD', 'color: #39ff14; font-family: monospace; font-weight: bold;');
      }, 800);
    }, 600);
  }, 400);
}, 2000);

// Keyboard shortcuts
document.addEventListener('keydown', function (e) {
  // Ctrl + M to toggle matrix mode
  if (e.ctrlKey && e.key === 'm') {
    e.preventDefault();
    document.body.style.filter = document.body.style.filter === 'invert(1) hue-rotate(180deg)' ? 'none' : 'invert(1) hue-rotate(180deg)';
  }

  // ESC to close any open terminal
  if (e.key === 'Escape') {
    const modals = document.querySelectorAll('.digital-modal');
    modals.forEach(modal => {
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }
});

// Matrix glitch effect on load
window.addEventListener('load', function () {
  document.body.style.animation = 'none';
  setTimeout(() => {
    document.body.style.animation = 'matrixGlitch 0.1s ease-in-out';
  }, 100);
});

// Add glitch animation
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
            @keyframes matrixGlitch {
                0%, 100% { transform: translateX(0); }
                10% { transform: translateX(-2px); }
                20% { transform: translateX(2px); }
                30% { transform: translateX(-1px); }
                40% { transform: translateX(1px); }
                50% { transform: translateX(-2px); }
                60% { transform: translateX(2px); }
                70% { transform: translateX(-1px); }
                80% { transform: translateX(1px); }
                90% { transform: translateX(-2px); }
            }
        `;
document.head.appendChild(glitchStyle);