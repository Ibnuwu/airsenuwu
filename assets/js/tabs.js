/**
 * tabs.js — Tab Navigation Logic
 * airseen1 Portfolio
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      const targetPanel = document.getElementById(`panel-${targetTab}`);

      if (!targetPanel) return;

      // 1. Update Tab Buttons active states
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      // 2. Switch panels with fade-out / fade-in transition
      tabPanels.forEach(panel => {
        // Hide panel instantly
        panel.classList.add('hidden');
        panel.setAttribute('aria-hidden', 'true');
        // Reset dynamic animation classes to trigger a fresh animation
        panel.classList.remove('fade-in');
      });

      // Show target panel
      targetPanel.classList.remove('hidden');
      targetPanel.setAttribute('aria-hidden', 'false');
      
      // Force reflow to restart CSS keyframe animation
      void targetPanel.offsetWidth;
      
      targetPanel.classList.add('fade-in');
    });
  });
});
