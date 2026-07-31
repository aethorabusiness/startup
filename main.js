/* ==========================================================================
   AETHORA FUTURISTIC INTERACTIVE LOGIC & ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. AETHORA DRAGGABLE STICKER ENGINE
     ------------------------------------------------------------------------ */
  const stickers = document.querySelectorAll('.draggable-sticker');

  stickers.forEach(sticker => {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;

    sticker.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;

      const rect = sticker.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top + window.scrollY;

      sticker.style.position = 'absolute';
      sticker.style.left = `${initialLeft}px`;
      sticker.style.top = `${initialTop}px`;
      sticker.style.right = 'auto';
      sticker.style.zIndex = 999;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      sticker.style.left = `${initialLeft + dx}px`;
      sticker.style.top = `${initialTop + dy}px`;
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        sticker.style.zIndex = 90;
      }
    });
  });

  /* ------------------------------------------------------------------------
     2. CUSTOM FUTURISTIC GLOWING CURSOR MOTION ENGINE
     ------------------------------------------------------------------------ */
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });

  function renderCursorRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    if (cursorRing) {
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
    }

    requestAnimationFrame(renderCursorRing);
  }
  renderCursorRing();

  function setupCursorHover() {
    const hoverTargets = document.querySelectorAll('a, button, input, select, textarea, .service-card, .opt-btn, .wf-node, .sim-tab-btn, .hero-visual-card, .draggable-sticker');

    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      target.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  setupCursorHover();

  window.addEventListener('mousedown', () => document.body.classList.add('cursor-down'));
  window.addEventListener('mouseup', () => document.body.classList.remove('cursor-down'));

  /* ------------------------------------------------------------------------
     3. NEURAL BACKGROUND CANVAS PARTICLE SYSTEM
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById('neural-canvas');
  const ctx = canvas.getContext('2d');

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

      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 180) {
        const force = (180 - dist) / 180;
        this.x -= (dx / dist) * force * 2;
        this.y -= (dy / dist) * force * 2;
      }
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

  const particleCount = Math.min(80, Math.floor(width / 18));
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

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const opacity = (1 - dist / 130) * 0.25;
          ctx.strokeStyle = `rgba(0, 243, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  /* ------------------------------------------------------------------------
     4. HEADER SCROLL DETECTION
     ------------------------------------------------------------------------ */
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* ------------------------------------------------------------------------
     5. SIMULATOR TAB SWITCHER
     ------------------------------------------------------------------------ */
  const tabBtns = document.querySelectorAll('.sim-tab-btn');
  const simPanels = document.querySelectorAll('.sim-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      simPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');

      if (targetId === 'tab-ml') {
        drawMLChart();
      }
    });
  });

  /* ------------------------------------------------------------------------
     6. AETHORA SANDBOX SIMULATOR LOGIC
     ------------------------------------------------------------------------ */
  const runMcpBtn = document.getElementById('run-mcp-btn');
  const mcpToolSelect = document.getElementById('mcp-tool-select');
  const mcpPromptInput = document.getElementById('mcp-prompt-input');
  const mcpOutputJson = document.getElementById('mcp-output-json');
  const mcpStatus = document.getElementById('mcp-status');

  const defaultResponse = {
    aethora_engine: "v2.6.0",
    endpoint: "https://aethora.ai/api",
    authorization: "Bearer aethora_sec_***",
    status: "200 OK",
    tool: "aethora.agent_executor",
    request_id: "req_aethora_8849204",
    latency_ms: 6.42,
    result: {
      agent_status: "SUCCESS",
      planner_nodes_executed: 4,
      n8n_webhook_triggered: true,
      prediction_confidence: 0.9942,
      summary: "Aethora Agent successfully processed query: 'Analyze enterprise web traffic & predict next quarter churn rate'",
      execution_trace: [
        { step: 1, action: "Context Injection via Aethora Engine" },
        { step: 2, action: "n8n Workflow Webhook Triggered" },
        { step: 3, action: "Predictive Neural Net Inference Run" },
        { step: 4, action: "Response JSON Streamed to Client" }
      ]
    }
  };

  mcpOutputJson.textContent = JSON.stringify(defaultResponse, null, 2);

  runMcpBtn.addEventListener('click', () => {
    const selectedTool = mcpToolSelect.value;
    const promptText = mcpPromptInput.value || "Default query";

    runMcpBtn.disabled = true;
    runMcpBtn.innerHTML = `<span>⏳ Streaming payload...</span>`;
    mcpStatus.textContent = "STATUS: PROCESSING...";
    mcpStatus.style.color = "var(--accent-cyan)";

    setTimeout(() => {
      const response = {
        aethora_engine: "v2.6.0",
        endpoint: "https://aethora.ai/api",
        authorization: "Bearer aethora_sec_***",
        status: "200 OK",
        tool: selectedTool,
        timestamp: new Date().toISOString(),
        request_id: `req_aethora_${Math.floor(Math.random() * 899999 + 100000)}`,
        latency_ms: (Math.random() * 4 + 4).toFixed(2),
        input_payload: {
          prompt: promptText,
          auth: "Valid Bearer Token"
        },
        result: {
          agent_status: "EXECUTED_SUCCESSFULLY",
          nodes_processed: selectedTool === 'aethora.n8n_webhook' ? 6 : 4,
          output_data: `Aethora successfully executed ${selectedTool} with parameters.`,
          accuracy_metrics: {
            confidence: 0.998,
            model_latency: "3.2ms"
          }
        }
      };

      mcpOutputJson.textContent = JSON.stringify(response, null, 2);
      mcpStatus.textContent = "STATUS: 200 OK";
      mcpStatus.style.color = "var(--accent-green)";
      runMcpBtn.disabled = false;
      runMcpBtn.innerHTML = `<span>▶ Execute Aethora Call</span>`;
    }, 600);
  });

  /* ------------------------------------------------------------------------
     7. N8N WORKFLOW SIMULATOR ANIMATION LOGIC
     ------------------------------------------------------------------------ */
  const runWfBtn = document.getElementById('run-wf-btn');
  const wfNodes = [
    document.getElementById('wf-node-1'),
    document.getElementById('wf-node-2'),
    document.getElementById('wf-node-3'),
    document.getElementById('wf-node-4')
  ];

  runWfBtn.addEventListener('click', () => {
    runWfBtn.disabled = true;
    runWfBtn.innerHTML = `<span>⚡ Executing n8n Nodes...</span>`;

    wfNodes.forEach(node => node.classList.remove('active-node'));

    let current = 0;
    const interval = setInterval(() => {
      if (current > 0) wfNodes[current - 1].classList.remove('active-node');

      if (current < wfNodes.length) {
        wfNodes[current].classList.add('active-node');
        current++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          wfNodes[wfNodes.length - 1].classList.remove('active-node');
          runWfBtn.disabled = false;
          runWfBtn.innerHTML = `<span>⚡ Run n8n Pipeline Simulation</span>`;
        }, 500);
      }
    }, 500);
  });

  /* ------------------------------------------------------------------------
     8. PREDICTIVE ML PLAYGROUND CANVAS CHART
     ------------------------------------------------------------------------ */
  const mlCanvas = document.getElementById('ml-canvas');
  const mlCtx = mlCanvas.getContext('2d');
  const sliderData = document.getElementById('slider-data');
  const sliderEpochs = document.getElementById('slider-epochs');
  const valData = document.getElementById('val-data');
  const valEpochs = document.getElementById('val-epochs');
  const valAccuracy = document.getElementById('val-accuracy');
  const valLoss = document.getElementById('val-loss');
  const mlModelType = document.getElementById('ml-model-type');

  function drawMLChart() {
    if (!mlCanvas) return;
    const w = (mlCanvas.width = mlCanvas.parentElement.clientWidth || 500);
    const h = (mlCanvas.height = 270);

    mlCtx.clearRect(0, 0, w, h);

    // Background Grid
    mlCtx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    mlCtx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      mlCtx.beginPath();
      mlCtx.moveTo(x, 0);
      mlCtx.lineTo(x, h);
      mlCtx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      mlCtx.beginPath();
      mlCtx.moveTo(0, y);
      mlCtx.lineTo(w, y);
      mlCtx.stroke();
    }

    const epochs = parseInt(sliderEpochs.value, 10);

    // Accuracy Curve (Cyan)
    mlCtx.beginPath();
    mlCtx.strokeStyle = '#00f3ff';
    mlCtx.lineWidth = 3;
    mlCtx.shadowColor = '#00f3ff';
    mlCtx.shadowBlur = 10;

    const points = 35;
    for (let i = 0; i <= points; i++) {
      const px = (i / points) * (w - 40) + 20;
      const progress = i / points;
      const acc = 0.5 + 0.49 * Math.log10(1 + progress * (epochs / 50));
      const py = h - (acc * (h - 60) + 20);

      if (i === 0) mlCtx.moveTo(px, py);
      else mlCtx.lineTo(px, py);
    }
    mlCtx.stroke();
    mlCtx.shadowBlur = 0;

    // Loss Curve (Violet)
    mlCtx.beginPath();
    mlCtx.strokeStyle = '#8a2be2';
    mlCtx.lineWidth = 2;
    for (let i = 0; i <= points; i++) {
      const px = (i / points) * (w - 40) + 20;
      const progress = i / points;
      const loss = 0.8 * Math.exp(-progress * (epochs / 40));
      const py = h - (loss * (h - 60) + 20);

      if (i === 0) mlCtx.moveTo(px, py);
      else mlCtx.lineTo(px, py);
    }
    mlCtx.stroke();
  }

  function updateMLMetrics() {
    const dataVal = parseInt(sliderData.value, 10);
    const epochsVal = parseInt(sliderEpochs.value, 10);

    valData.textContent = dataVal.toLocaleString();
    valEpochs.textContent = epochsVal;

    const acc = Math.min(99.9, (98.2 + (epochsVal / 300) * 1.5 + (dataVal / 1000000) * 0.2)).toFixed(2);
    const loss = Math.max(0.001, (0.05 - (epochsVal / 300) * 0.045)).toFixed(4);

    valAccuracy.textContent = `${acc}%`;
    valLoss.textContent = loss;

    drawMLChart();
  }

  sliderData.addEventListener('input', updateMLMetrics);
  sliderEpochs.addEventListener('input', updateMLMetrics);
  mlModelType.addEventListener('change', updateMLMetrics);

  setTimeout(drawMLChart, 200);

  /* ------------------------------------------------------------------------
     9. INTERACTIVE PROJECT ESTIMATOR CALCULATOR
     ------------------------------------------------------------------------ */
  const optButtons = document.querySelectorAll('.options-flex .opt-btn');
  const totalPriceEl = document.getElementById('total-price');

  optButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      parent.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      calculateEstimate();
    });
  });

  function calculateEstimate() {
    let total = 0;
    document.querySelectorAll('.options-flex .opt-btn.selected').forEach(btn => {
      total += parseInt(btn.getAttribute('data-price'), 10);
    });

    totalPriceEl.textContent = `$${total.toLocaleString()}`;
  }
});
