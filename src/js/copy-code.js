// Copy code functionality
(function() {
  'use strict';
  
  // Add copy buttons to code blocks
  function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre[class*="language-"]');
    
    codeBlocks.forEach(function(codeBlock) {
      // Skip if already processed
      if (codeBlock.parentElement.classList.contains('code-block-wrapper')) {
        return;
      }
      
      // Create wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      codeBlock.parentNode.insertBefore(wrapper, codeBlock);
      wrapper.appendChild(codeBlock);
      
      // Create copy button
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button';
      copyButton.textContent = 'Copy';
      copyButton.setAttribute('aria-label', 'Copy code to clipboard');
      
      // Add click handler
      copyButton.addEventListener('click', function() {
        copyCodeToClipboard(codeBlock, copyButton);
      });
      
      // Add keyboard support
      copyButton.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          copyCodeToClipboard(codeBlock, copyButton);
        }
      });
      
      wrapper.appendChild(copyButton);
    });
  }
  
  // Copy code to clipboard
  function copyCodeToClipboard(codeBlock, button) {
    const code = codeBlock.querySelector('code');
    const text = code ? code.textContent : codeBlock.textContent;
    
    // Use modern clipboard API if available
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function() {
        showCopySuccess(button);
      }).catch(function() {
        fallbackCopyTextToClipboard(text, button);
      });
    } else {
      fallbackCopyTextToClipboard(text, button);
    }
  }
  
  // Fallback copy method for older browsers
  function fallbackCopyTextToClipboard(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        showCopySuccess(button);
      } else {
        showCopyError(button);
      }
    } catch (err) {
      showCopyError(button);
    }
    
    document.body.removeChild(textArea);
  }
  
  // Show copy success feedback
  function showCopySuccess(button) {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('copied');
    
    setTimeout(function() {
      button.textContent = originalText;
      button.classList.remove('copied');
    }, 2000);
  }
  
  // Show copy error feedback
  function showCopyError(button) {
    const originalText = button.textContent;
    button.textContent = 'Error';
    
    setTimeout(function() {
      button.textContent = originalText;
    }, 2000);
  }
  
  // Initialize
  function init() {
    addCopyButtons();
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Re-run when content is dynamically added
  if (window.MutationObserver) {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) {
          addCopyButtons();
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
})(); 