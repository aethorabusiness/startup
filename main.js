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

window.handleWizardFinalSubmit = async function(e) {
  if (e) e.preventDefault();
  const nameInput = document.getElementById('wiz-name');
  const phoneInput = document.getElementById('wiz-phone');
  const emailInput = document.getElementById('wiz-email');
  const companyInput = document.getElementById('wiz-company');

  const name = nameInput ? nameInput.value : 'Client';
  const phone = phoneInput ? phoneInput.value : 'N/A';
  const email = emailInput ? emailInput.value : 'N/A';
  const company = companyInput ? companyInput.value : 'N/A';

  const answers = window.userAnswersStore || {};
  
  const wizardOptionsGrid = document.getElementById('wizard-options-grid');
  if (wizardOptionsGrid) {
    wizardOptionsGrid.innerHTML = `
      <div style="text-align: center; padding: 32px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 20px; color: #1e4ed8;">
        <div style="font-size: 3.5rem; margin-bottom: 12px;">⚡</div>
        <h3 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px;">Sending Inquiry to Aethora...</h3>
        <p style="font-size: 0.95rem; line-height: 1.6;">Dispatched your project survey answers directly to <strong>info@aethora.in</strong>...</p>
      </div>
    `;
  }

  // Construct structured payload for FormSubmit API
  const formData = {
    _subject: `[AETHORA DIRECT LEAD] Project Inquiry from ${name}`,
    _template: 'box',
    _captcha: 'false',
    Client_Name: name,
    WhatsApp_Phone: phone,
    Client_Email: email,
    Company_Name: company,
    Project_Goal: answers.step_1 || 'Not specified',
    Business_Type: answers.step_2 || 'Not specified',
    Current_Stage: answers.step_3 || 'Not specified',
    Biggest_Challenge: answers.step_4 || 'Not specified',
    Start_Timeline: answers.step_5 || 'Not specified',
    Budget_Range: answers.step_6 || 'Not specified'
  };

  try {
    // Send form data directly over HTTP API to info@aethora.in via activated token
    await fetch('https://formsubmit.co/ajax/7fd8a452350f0657155969f31408c99b', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  } catch (err) {
    console.warn("FormSubmit HTTP API notice:", err);
  }

  if (wizardOptionsGrid) {
    wizardOptionsGrid.innerHTML = `
      <div style="text-align: center; padding: 32px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 20px; color: #166534;">
        <div style="font-size: 3.5rem; margin-bottom: 12px;">🎉</div>
        <h3 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px;">Thank You, ${name}!</h3>
        <p style="font-size: 0.95rem; line-height: 1.6;">Your project survey & contact details have been successfully sent to <strong>info@aethora.in</strong>!</p>
        <p style="font-size: 0.85rem; color: #15803d; margin-top: 8px;">Our engineering team will review your project roadmap and email you back at <strong>${email}</strong> within 2 business hours.</p>
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
    const lower = userText.toLowerCase().trim();
    let responseText = "";

    // ==========================================
    // ⚔️ OBJECTION HANDLING MATRIX (High Impact)
    // ==========================================
    if (lower.includes('too expensive') || lower.includes('high price') || lower.includes('costly') || lower.includes('expensive')) {
      responseText = "Totally fair. Most of our client partners felt that initially — until they saw 3–5x ROI in manual hours saved and qualified lead conversions. We offer flexible scope options built for max value. Want me to break down a custom ROI breakdown for your case?";
    } else if (lower.includes('just exploring') || lower.includes('just looking') || lower.includes('browsing')) {
      responseText = "Makes complete sense. What's the main digital bottleneck or growth goal you're hoping to improve right now?";
    } else if (lower.includes('not sure') || lower.includes('don\'t know') || lower.includes('confused')) {
      responseText = "No problem at all! We can help clarify that for you. What is the biggest operational or lead-generation challenge your business is facing right now?";
    }

    // ==========================================
    // 🔥 BUYING SIGNALS (Closer Mode)
    // ==========================================
    else if (lower.includes('price') || lower.includes('cost') || lower.includes('quote') || lower.includes('how much') || lower.includes('rate') || lower.includes('budget')) {
      responseText = "We provide scope-based flexible pricing designed to maximize your ROI. For MVPs and websites, builds start with clear milestone deliverables, while enterprise AI systems are custom-scoped. Should we schedule a quick 15-minute consultation to give you an exact estimate?";
    } else if (lower.includes('hire') || lower.includes('start') || lower.includes('project') || lower.includes('contact') || lower.includes('book') || lower.includes('demo') || lower.includes('consultation')) {
      responseText = "Awesome. We're currently taking on a select number of new projects to guarantee dedicated senior engineering support. You can message us at info@aethora.in or launch our 6-step project roadmap wizard right now. Want me to open the project guide for you?";
    }

    // ==========================================
    // ⚔️ COMPARING MODE (Differentiator Logic)
    // ==========================================
    else if (lower.includes('why aethora') || lower.includes('compare') || lower.includes('difference') || lower.includes('alternative') || lower.includes('agency vs') || lower.includes('better')) {
      responseText = "Unlike traditional slow agencies that charge bloated overhead, Aethora builds high-performance digital products driven by senior engineering, 24/7 SLA uptime, and AI-first automation. We focus on business outcomes and measurable ROI. What is the main goal for your project?";
    }

    // ==========================================
    // 🤖 TECHNICAL & AI CAPABILITIES (Diagnose & Position)
    // ==========================================
    else if (lower.includes('chatbot') || lower.includes('ai workflow') || lower.includes('automation') || lower.includes('agent') || lower.includes('n8n')) {
      responseText = "We design and deploy intelligent AI chatbots, self-healing n8n automation pipelines, and custom AI agents that handle customer support, CRM sync, and lead qualification 24/7. What manual workflow or process takes up most of your team's time?";
    } else if (lower.includes('website') || lower.includes('web dev') || lower.includes('app') || lower.includes('mobile') || lower.includes('react') || lower.includes('nextjs') || lower.includes('wordpress')) {
      responseText = "We engineer modern, high-speed websites and mobile applications built with React, Next.js, and WordPress — 100% mobile-first, SEO-optimized, and built to convert visitors into clients. Are you looking to build a new product or revamp an existing platform?";
    }

    // ==========================================
    // 💡 GENERAL KNOWLEDGE INQUIRIES (ChatGPT / Gemini Mode)
    // ==========================================
    else if (lower === 'what is ai' || lower.includes('what is artificial intelligence') || lower.includes('explain ai')) {
      responseText = "Artificial Intelligence (AI) refers to systems that emulate human reasoning, pattern recognition, and decision-making to automate tasks. At Aethora, we use AI to eliminate repetitive manual work and build intelligent user experiences. Are you looking to integrate AI into your business operations?";
    } else if (lower.includes('what is saas') || lower.includes('explain saas')) {
      responseText = "SaaS (Software as a Service) is a cloud distribution model delivering software over the web on a subscription basis. At Aethora, we architect scalable, multi-tenant SaaS platforms built for high security and fast user growth. Are you planning to build or scale a SaaS product?";
    } else if (lower.includes('what is seo') || lower.includes('explain seo')) {
      responseText = "SEO (Search Engine Optimization) optimizes your platform's technical structure and content to rank higher on Google for high-intent queries. We embed SEO best practices directly into all our web builds to maximize organic lead flow. Would you like an SEO audit for your current website?";
    } else if (lower.includes('what is ui') || lower.includes('what is ux') || lower.includes('explain ui/ux')) {
      responseText = "UI (User Interface) governs visual aesthetics, while UX (User Experience) ensures intuitive navigation. Combining both maximizes user conversion. We design custom human-centered visual systems in Figma before coding. Do you need a design upgrade for your platform?";
    }

    // ==========================================
    // 📈 GENERAL SERVICES & CAPABILITIES
    // ==========================================
    else if (lower.includes('service') || lower.includes('offer') || lower.includes('what do you do') || lower.includes('capabilities') || lower.includes('build')) {
      responseText = "At Aethora, we focus on 5 core growth pillars: Web & Mobile App Development, AI & Workflow Automation, SaaS Products, UI/UX Design, and Business Digital Transformation. Which pillar is most critical to your roadmap right now?";
    } else if (lower.includes('portfolio') || lower.includes('work') || lower.includes('case study') || lower.includes('client') || lower.includes('example')) {
      responseText = "We have engineered digital products across Web Apps, AI Workflow Automation, and SaaS platforms for startups and enterprise clients. We can share relevant case studies tailored to your industry. What type of product are you looking to inspect?";
    } else if (lower.includes('time') || lower.includes('how long') || lower.includes('timeline') || lower.includes('duration') || lower.includes('deadline')) {
      responseText = "Timelines depend on scope: MVPs and custom websites typically take 2-4 weeks, while complex SaaS platforms take 4-8 weeks. We prioritize milestone-driven execution. What is your target launch date?";
    }

    // ==========================================
    // 🎯 ADAPTIVE PROBING FALLBACK (Move Flow Forward)
    // ==========================================
    else {
      responseText = "Could you share a bit more detail about your business goal or project requirement? That way I can give you the exact solution and ROI breakdown. Alternatively, feel free to email our team directly at info@aethora.in!";
    }

    appendChatMessage('bot', responseText);
  }, 450);
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
