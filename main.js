import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Autonomy Slider Logic
  const sliderStops = document.querySelectorAll('.slider-stop');
  const sliderFill = document.getElementById('autonomy-fill');
  const modeDesc = document.getElementById('mode-desc');
  
  const descriptions = [
    "<strong>Current Mode: Copilot.</strong> Agent drafts outreach and enrichment actions, but waits for explicit human trigger before executing anything.",
    "<strong>Current Mode: Supervised.</strong> Agent executes low-risk data enrichment automatically. For engagement, it drafts emails based on intent signals but queues them for human review before sending.",
    "<strong>Current Mode: Autonomous.</strong> Agent executes all data enrichment and engagement sequences automatically based on high-intent triggers. A daily summary log is sent for review."
  ];

  sliderStops.forEach(stop => {
    stop.addEventListener('click', () => {
      // Remove active class from all
      sliderStops.forEach(s => s.classList.remove('active'));
      
      // Add active to clicked
      stop.classList.add('active');
      
      // Update slider fill width and description
      const mode = parseInt(stop.getAttribute('data-mode'));
      if (mode === 0) {
        sliderFill.style.width = '0%';
      } else if (mode === 1) {
        sliderFill.style.width = '50%';
      } else {
        sliderFill.style.width = '100%';
      }
      
      modeDesc.innerHTML = descriptions[mode];
    });
  });

  // 2. Citations Side Panel Logic
  const viewCitationBtns = document.querySelectorAll('.btn-view-citations');
  const citationsPanel = document.getElementById('citations-panel');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close-panel');

  const openPanel = () => {
    citationsPanel.classList.add('open');
    overlay.classList.add('open');
  };

  const closePanel = () => {
    citationsPanel.classList.remove('open');
    overlay.classList.remove('open');
  };

  viewCitationBtns.forEach(btn => {
    btn.addEventListener('click', openPanel);
  });

  closeBtn.addEventListener('click', closePanel);
  overlay.addEventListener('click', closePanel);

});
