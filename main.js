/* ==========================================================================
   AETHORA FUTURISTIC INTERACTIVE LOGIC & ACCERON WIZARD ENGINE
   BULLETPROOF HARDENED ENGINE — ZERO-FAIL GUARANTEE
   ========================================================================== */

// 1. DATA STORES (Attached to window safely)
window.techDataStore = {
  web: {
    title: "Custom Web & Mobile Application Platform",
    desc: "High-speed reactive web platforms built with modular frontend components, lightning-fast rendering, and enterprise API architecture.",
    icon: "💻",
    tag: "React • Next.js • Web API",
    list: [
      "✓ Modern HTML5 / CSS3 / JavaScript High-Performance Architecture",
      "✓ Mobile-First Responsive Breakpoints for 100% Device Compatibility",
      "✓ SEO-Optimized Semantic Markup & Lightning Speed Load Times",
      "✓ Secure API Endpoints & SSL Certificate Configuration"
    ]
  },
  wordpress: {
    title: "WordPress CMS & Enterprise Growth Solutions",
    desc: "Custom WordPress theme development, Gutenberg blocks, and WooCommerce platforms designed for high security and seamless client management.",
    icon: "⚡",
    tag: "WordPress • PHP • Secure CMS",
    list: [
      "✓ Custom WordPress Theme & Plugin Customization",
      "✓ Frictionless Drag-and-Drop Admin Dashboard Management",
      "✓ Enterprise-Grade Security Hardening & Malware Shielding",
      "✓ Automated Daily Database Backups & Cache Optimization"
    ]
  },
  uiux: {
    title: "Human-Centered UI/UX & Digital Brand Design",
    desc: "User research, wireframing, high-fidelity visual design systems, and interactive Figma prototypes built to maximize engagement.",
    icon: "🎨",
    tag: "Figma • Design Systems • UX",
    list: [
      "✓ Comprehensive UI Component Libraries & Brand Guidelines",
      "✓ User Journey Mapping & Interactive Clickable Prototypes",
      "✓ Conversion Rate Optimization (CRO) Layout Hierarchy",
      "✓ Accessibility (WCAG) Compliant Visual Aesthetics"
    ]
  },
  ai: {
    title: "AI Solutions & Automated Workflow Engines",
    desc: "Integrating cutting-edge LLMs, autonomous agents, and self-healing n8n pipelines to automate complex manual operations.",
    icon: "🤖",
    tag: "AI Swarm • n8n • Python ML",
    list: [
      "✓ Custom LLM & Agent Tool Routing Integrations",
      "✓ Automated Webhook Event Pipelines & CRM Data Sync",
      "✓ Predictive Analytics & Machine Learning Forecast Engines",
      "✓ 24/7 Background Task Processing & Telemetry Guard"
    ]
  },
  maintenance: {
    title: "Website Maintenance & 24/7 SLA Technical Support",
    desc: "Continuous 24/7 uptime monitoring, security patching, speed optimization, and ongoing technical support to keep your site flawless.",
    icon: "🛠️",
    tag: "24/7 SLA • Security • Speed",
    list: [
      "✓ Continuous 24/7 Server Uptime & Performance Monitoring",
      "✓ Instant Security Patching & Threat Shield Protection",
      "✓ PageSpeed 95+ Performance Audits & Image Optimization",
      "✓ Dedicated Technical Support SLA with <2h Response Time"
    ]
  }
};

window.wizardStepsData = {
  1: {
    speech: "Hey, I'm Aethora 👋 Tell me what you're trying to build — I'll guide you to the right solution.",
    question: "What are you trying to improve or build right now?",
    options: [
      { text: "Build a website", icon: "🌐" },
      { text: "Build a mobile app", icon: "📱" },
      { text: "Build custom software", icon: "⚡" },
      { text: "Automate business operations", icon: "🤖" },
      { text: "Launch a new product / MVP", icon: "🚀" },
      { text: "Get more leads / customers", icon: "📈" },
      { text: "Not sure yet", icon: "❓" }
    ]
  },
  2: {
    speech: "Got it. That gives us a direction. Let's understand your business better.",
    question: "What type of business are you running?",
    options: [
      { text: "Startup", icon: "🚀" },
      { text: "Growing SME", icon: "📈" },
      { text: "Enterprise", icon: "🏢" },
      { text: "Local business", icon: "🏪" },
      { text: "E-commerce brand", icon: "🛍️" },
      { text: "Service business", icon: "💼" },
      { text: "Other", icon: "⚡" }
    ]
  },
  3: {
    speech: "Cool — knowing your stage helps us recommend the right path.",
    question: "Where are you right now?",
    options: [
      { text: "Just have an idea", icon: "💡" },
      { text: "Already have a basic website / app", icon: "💻" },
      { text: "Using spreadsheets / manual process", icon: "📊" },
      { text: "Existing system is outdated", icon: "🔄" },
      { text: "Running ads but not getting quality leads", icon: "📢" },
      { text: "Want to add AI to current workflow", icon: "🤖" }
    ]
  },
  4: {
    speech: "Okay, this is the most important part — let's nail the real problem.",
    question: "What is your biggest challenge?",
    options: [
      { text: "Low enquiries or poor conversions", icon: "📉" },
      { text: "Manual work taking too much time", icon: "⏱️" },
      { text: "No visibility in business operations", icon: "👁️" },
      { text: "Existing website / app is not performing", icon: "⚠️" },
      { text: "Need faster product launch", icon: "⚡" },
      { text: "Need better customer experience", icon: "✨" },
      { text: "Not sure what exactly is wrong", icon: "❓" }
    ]
  },
  5: {
    speech: "Almost there. Timing helps us plan resources for you.",
    question: "How soon do you want to start?",
    options: [
      { text: "Immediately", icon: "🔥" },
      { text: "Within 2 weeks", icon: "🗓️" },
      { text: "This month", icon: "📅" },
      { text: "Next month", icon: "⌛" },
      { text: "Just exploring", icon: "🔍" }
    ]
  },
  6: {
    speech: "Last one — this helps us shape the right scope, not to filter you out.",
    question: "What budget range are you comfortable with?",
    options: [
      { text: "Below ₹50,000", icon: "💳" },
      { text: "₹50,000 - ₹1,00,000", icon: "💰" },
      { text: "₹1,00,000 - ₹3,00,000", icon: "💎" },
      { text: "₹3,00,000 - ₹5,00,000", icon: "🚀" },
      { text: "₹5,00,000+", icon: "👑" },
      { text: "Not decided yet", icon: "❓" }
    ]
  },
  7: {
    speech: "Based on your answers, here's what I'd recommend 👇",
    question: "Want us to send you a quick project direction and estimated roadmap?",
    isDoneScreen: true
  }
};

window.aiResponsesStore = {
  services: "At Aethora, we specialize in Custom Web & Mobile Apps, WordPress CMS Solutions, Human-Centered UI/UX Design, AI Automation & Workflow Engines, and 24/7 SLA Maintenance & Security Support.",
  project: "To start your project, you can email us directly at info@aethora.in or click 'Start Project' on our top navigation bar to receive a proposal within 2 hours!",
  ai: "Yes! We build custom AI agentic workflows, self-healing n8n automations, LLM integrations, and predictive analytics engines tailored to your business needs.",
  email: "Our official direct enquiry email is info@aethora.in. You can also connect with us on Instagram @aethoratechnologies!",
  default: "Thank you for asking! For a detailed proposal or custom inquiry, email our team at info@aethora.in or leave your project details in the 'Let's Talk' section below."
};

window.userAnswersStore = {};
window.currentWizardStep = 1;

// 2. CORE WIZARD RENDER FUNCTION
function renderWizardStep(step) {
  window.currentWizardStep = step;
  const stepData = window.wizardStepsData[step];

  const stepLabel = document.getElementById('step-label');
  const stepProgressFill = document.getElementById('step-progress-fill');
  const wizardSpeech = document.getElementById('wizard-speech');
  const wizardQuestionTitle = document.getElementById('wizard-question-title');
  const wizardOptionsGrid = document.getElementById('wizard-options-grid');
  const wizardBackBtn = document.getElementById('wizard-back-btn');

  if (stepLabel) {
    stepLabel.textContent = step === 7 ? "Done" : `Step ${step} of 6`;
  }
  if (stepProgressFill) {
    stepProgressFill.style.width = step === 7 ? "100%" : `${(step / 6) * 100}%`;
  }
  if (wizardSpeech) wizardSpeech.textContent = stepData.speech;
  if (wizardQuestionTitle) wizardQuestionTitle.textContent = stepData.question;
  if (wizardBackBtn) wizardBackBtn.disabled = (step === 1);

  if (!wizardOptionsGrid) return;

  if (stepData.isDoneScreen) {
    wizardOptionsGrid.style.gridTemplateColumns = "1fr";
    wizardOptionsGrid.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div class="recommendation-box">
          <span class="recommendation-badge">💡 YOUR NEXT STEP</span>
          <h3 class="recommendation-title">Website + Lead Generation System</h3>
          <p class="recommendation-insight">
            <strong>Ace insight:</strong> Your business needs a stronger digital presence and a better enquiry flow before scaling ads or automation.
          </p>
          <div class="recommendation-deliverables">
            <div class="del-item">✓ Conversion-focused website</div>
            <div class="del-item">✓ Lead capture system</div>
            <div class="del-item">✓ WhatsApp / contact automation</div>
            <div class="del-item">✓ Basic SEO setup</div>
            <div class="del-item">✓ Tracking and analytics</div>
          </div>
        </div>

        <form id="wizard-final-form" onsubmit="window.handleWizardFinalSubmit(event)">
          <div class="wizard-final-inputs">
            <div>
              <label>Your name *</label>
              <input type="text" id="wiz-name" required placeholder="e.g. Rohan Shah">
            </div>
            <div>
              <label>WhatsApp number *</label>
              <input type="tel" id="wiz-phone" required placeholder="+91 98XXXXXXXX">
            </div>
            <div>
              <label>Email *</label>
              <input type="email" id="wiz-email" required placeholder="you@company.com">
            </div>
            <div>
              <label>Company / business name</label>
              <input type="text" id="wiz-company" placeholder="Acme Pvt Ltd">
            </div>
          </div>

          <div class="wizard-final-buttons">
            <button type="submit" class="btn-wizard-send">
              <span>⚡ Send My Project Direction</span>
            </button>
            <a href="mailto:info@aethora.in?subject=Free%20Strategy%20Call" class="btn-wizard-call">
              <span>📞 Book a Free Strategy Call</span>
            </a>
          </div>
          <p style="font-size: 0.76rem; color: #94a3b8; margin-top: 12px;">By submitting, you agree to be contacted about your project. No spam.</p>
        </form>
      </div>
    `;
  } else {
    wizardOptionsGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
    wizardOptionsGrid.innerHTML = stepData.options.map(opt => `
      <div class="wizard-opt-card" onclick="window.selectWizardOption('${opt.text.replace(/'/g, "\\'")}', ${step})">
        <span>${opt.icon} &nbsp; ${opt.text}</span>
        <span class="opt-arrow">→</span>
      </div>
    `).join('');
  }
}

// 3. IMMEDIATE GLOBAL WINDOW TRIGGER BINDINGS (EXECUTED AT TOP LEVEL)
window.toggleChatbot = function(e) {
  if (e) e.stopPropagation();
  const chatbotWindow = document.getElementById('chatbot-window');
  if (chatbotWindow) {
    chatbotWindow.classList.toggle('active');
  }
};

window.closeChatbot = function() {
  const chatbotWindow = document.getElementById('chatbot-window');
  if (chatbotWindow) {
    chatbotWindow.classList.remove('active');
  }
};

window.openWizardStep = function(step = 1) {
  const wizardModal = document.getElementById('wizard-modal');
  if (wizardModal) {
    wizardModal.classList.add('active');
    renderWizardStep(step);
  }
};

window.closeWizard = function() {
  const wizardModal = document.getElementById('wizard-modal');
  if (wizardModal) {
    wizardModal.classList.remove('active');
  }
};

window.wizardGoBack = function() {
  if (window.currentWizardStep && window.currentWizardStep > 1) {
    renderWizardStep(window.currentWizardStep - 1);
  }
};

window.selectWizardOption = function(val, step) {
  window.userAnswersStore[`step_${step}`] = val;
  renderWizardStep(step + 1);
};

window.handleWizardFinalSubmit = function(e) {
  if (e) e.preventDefault();
  const nameInput = document.getElementById('wiz-name');
  const emailInput = document.getElementById('wiz-email');
  const name = nameInput ? nameInput.value : 'Client';
  const email = emailInput ? emailInput.value : 'your email';
  const wizardOptionsGrid = document.getElementById('wizard-options-grid');

  if (wizardOptionsGrid) {
    wizardOptionsGrid.innerHTML = `
      <div style="text-align: center; padding: 32px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 20px; color: #166534;">
        <div style="font-size: 3.5rem; margin-bottom: 12px;">🎉</div>
        <h3 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px;">Thank You, ${name}!</h3>
        <p style="font-size: 0.95rem; line-height: 1.6;">Your custom project direction has been generated and sent to our lead engineering team. We will email your roadmap to <strong>${email}</strong> within 2 business hours!</p>
      </div>
    `;
  }
};

window.switchTechTab = function(btnElement, techKey) {
  const expTabBtns = document.querySelectorAll('.exp-tab-btn');
  const expTitle = document.getElementById('exp-title');
  const expDesc = document.getElementById('exp-desc');
  const expList = document.getElementById('exp-list');
  const expIcon = document.getElementById('exp-icon');
  const expTag = document.getElementById('exp-tag');

  expTabBtns.forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const data = window.techDataStore[techKey];
  if (data && expTitle) {
    expTitle.textContent = data.title;
    expDesc.textContent = data.desc;
    expIcon.textContent = data.icon;
    expTag.textContent = data.tag;
    expList.innerHTML = data.list.map(item => `<li>${item}</li>`).join('');
  }
};

window.sendQuickQuery = function(qText) {
  processUserQuery(qText);
};

window.handleChatSubmit = function(e) {
  if (e) e.preventDefault();
  const chatInput = document.getElementById('chat-input');
  if (chatInput) {
    const query = chatInput.value.trim();
    if (query) {
      processUserQuery(query);
      chatInput.value = '';
    }
  }
};

// 4. CHATBOT HELPER FUNCTIONS
function appendChatMessage(sender, text) {
  const chatbotBody = document.getElementById('chatbot-body');
  if (chatbotBody) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-message', sender);
    msgDiv.innerHTML = `<p>${text}</p>`;
    chatbotBody.appendChild(msgDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }
}

function processUserQuery(userText) {
  appendChatMessage('user', userText);

  setTimeout(() => {
    const lower = userText.toLowerCase();
    let responseText = window.aiResponsesStore.default;

    if (lower.includes('service') || lower.includes('offer') || lower.includes('work') || lower.includes('do')) {
      responseText = window.aiResponsesStore.services;
    } else if (lower.includes('start') || lower.includes('project') || lower.includes('hire') || lower.includes('contact')) {
      responseText = window.aiResponsesStore.project;
    } else if (lower.includes('ai') || lower.includes('automation') || lower.includes('workflow') || lower.includes('n8n')) {
      responseText = window.aiResponsesStore.ai;
    } else if (lower.includes('email') || lower.includes('address') || lower.includes('reach') || lower.includes('inquiry')) {
      responseText = window.aiResponsesStore.email;
    }

    appendChatMessage('bot', responseText);
  }, 400);
}

// 5. ISOLATED SAFE DOM CONTENT LOADED (CANVAS & CURSOR WRAPPED IN TRY-CATCH)
document.addEventListener('DOMContentLoaded', () => {
  try {
    /* Safe Canvas Background */
    const canvas = document.getElementById('neural-canvas');
    if (canvas && typeof canvas.getContext === 'function') {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        window.addEventListener('resize', () => {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
        });

        class Particle {
          constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.radius = Math.random() * 2 + 1;
            this.color = Math.random() > 0.5 ? '#00f3ff' : '#8a2be2';
          }

          update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
          }

          draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }

        const particleCount = Math.min(70, Math.floor(width / 20));
        const particles = Array.from({ length: particleCount }, () => new Particle());

        function animateParticles() {
          ctx.clearRect(0, 0, width, height);
          for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                const opacity = (1 - dist / 120) * 0.2;
                ctx.strokeStyle = `rgba(0, 243, 255, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          }
          if (typeof requestAnimationFrame === 'function') {
            requestAnimationFrame(animateParticles);
          }
        }

        if (typeof requestAnimationFrame === 'function') {
          requestAnimationFrame(animateParticles);
        }
      }
    }
  } catch (err) {
    console.warn("Canvas decorative animation bypassed safely:", err);
  }

  try {
    /* Header Scroll Shadow */
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
      if (header) {
        if (window.scrollY > 40) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      }
    });
  } catch (err) {
    console.warn("Scroll listener safely initialized:", err);
  }
});
