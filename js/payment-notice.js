/* Payment Notice Popup Script */
(function() {
    'use strict';
    
    // Create and display payment notice popup
    function showPaymentNotice() {
        // Create overlay
        var overlay = document.createElement('div');
        overlay.className = 'payment-notice-overlay';
        overlay.id = 'paymentNoticeOverlay';
        
        // Create modal content
        overlay.innerHTML = `
            <div class="payment-notice-modal">
                <div class="payment-notice-header">
                    <div style="display: flex; align-items: center;">
                        <span class="notice-icon">⚠️</span>
                        <h2>IMPORTANT NOTICE</h2>
                    </div>
                </div>
                <div class="payment-notice-body">
                    <h3>Website Service Payment Required</h3>
                    <p>Dear Website Owner,</p>
                    <p>This is a professional notice regarding outstanding payment for website development and maintenance services provided.</p>
                    
                    <div class="warning-text">
                        <strong>⏰ Payment Due Date: <span class="due-date">August 1, 2026</span></strong>
                    </div>
                    
                    <p><strong>Required Action:</strong></p>
                    <ul>
                        <li>Settlement of full payment is required to maintain full operational access to this website</li>
                        <li>Failure to remit payment by the due date will result in service suspension</li>
                        <li>Domain transfer and full administrative access will be granted only upon receipt of payment</li>
                    </ul>
                    
                    <p><strong>Consequences of Non-Payment:</strong></p>
                    <ul>
                        <li>Website services will be suspended after August 1, 2026</li>
                        <li>Domain ownership will not be transferred</li>
                        <li>Necessary legal action will be initiated to recover outstanding dues</li>
                    </ul>
                    
                    <p>Please contact the service provider immediately to arrange payment and avoid service disruption.</p>
                </div>
                <div class="payment-notice-footer">
                    <p>This notice is displayed in accordance with the service agreement. Payment must be received by the specified date.</p>
                </div>
            </div>
        `;
        
        // Append to body
        document.body.appendChild(overlay);
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
    
    // Show notice when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showPaymentNotice);
    } else {
        showPaymentNotice();
    }
})();
