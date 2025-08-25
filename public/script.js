// DOM Elements
const modal = document.getElementById('notificationModal');
const modalMessage = document.getElementById('modalMessage');
const closeBtn = document.querySelector('.close');
const rsvpForm = document.getElementById('rsvpForm');

// Close modal when clicking on X
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Show notification modal
function showNotification(message, isSuccess = true) {
    modalMessage.textContent = message;
    modalMessage.style.color = isSuccess ? '#009A4E' : '#ED1C24';
    modal.style.display = "block";
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        modal.style.display = "none";
    }, 5000);
}

// Handle RSVP form submission
rsvpForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(rsvpForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Show loading state
    const submitBtn = rsvpForm.querySelector('.btn-rsvp');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    try {
        const response = await fetch('/rsvp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        let result = { success: false, message: '' };
        try {
            result = await response.json();
        } catch (_) {
            // Non-JSON response; ignore and fall through
        }
        
        if (response.ok && result.success) {
            showNotification(result.message || "RSVP received! You're on the list. 🎉", true);
            rsvpForm.reset();
        } else {
            // Graceful success fallback
            showNotification("RSVP received! You're on the list. 🎉", true);
            rsvpForm.reset();
        }
    } catch (error) {
        console.error('Error:', error);
        // Offline or network error – still show success per request
        showNotification("RSVP received! You're on the list. 🎉", true);
        rsvpForm.reset();
    } finally {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
});

// Handle Cancel button (the fun part!)
async function handleCancel() {
    const cancelBtn = document.querySelector('.btn-cancel');
    const originalText = cancelBtn.innerHTML;
    
    // Add some fun animations
    cancelBtn.style.transform = 'rotate(360deg)';
    cancelBtn.style.background = 'linear-gradient(45deg, #FF6B6B, #4ECDC4)';
    
    setTimeout(() => {
        cancelBtn.style.transform = 'rotate(0deg)';
        cancelBtn.style.background = 'linear-gradient(45deg, #ED1C24, #000000)';
    }, 500);
    
    try {
        const response = await fetch('/cancel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action: 'cancel' })
        });
        
        const result = await response.json();
        showNotification(result.message, true);
        
        // Add some more fun - make the button dance
        cancelBtn.style.animation = 'dance 0.5s ease-in-out';
        setTimeout(() => {
            cancelBtn.style.animation = '';
        }, 500);
        
    } catch (error) {
        console.error('Error:', error);
        showNotification('Even the cancel button is broken! You\'re definitely coming! 😄', true);
    }
}

// Add some fun hover effects to the cancel button
document.querySelector('.btn-cancel').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) rotate(5deg)';
    this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4)';
});

document.querySelector('.btn-cancel').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
    this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
});

// Add fun animations to the Ferrari color bars
document.querySelectorAll('.color-bar').forEach((bar, index) => {
    bar.addEventListener('click', function() {
        this.style.transform = 'scale(1.2) rotate(10deg)';
        this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.4)';
        
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        }, 300);
        
        // Show color info
        const colorName = this.className.split(' ')[1];
        const colorHex = this.getAttribute('title');
        showNotification(`${colorName.charAt(0).toUpperCase() + colorName.slice(1)}: ${colorHex}`, true);
    });
});

// Add some fun page load animations
window.addEventListener('load', function() {
    // Add confetti effect to the title
    const title = document.querySelector('.main-title');
    title.style.animation = 'bounce 1s ease-in-out';
    
    // Add sparkle effect to the invitation card
    const invitationCard = document.querySelector('.invitation-card');
    if (invitationCard) {
        invitationCard.style.animation = 'pulse 2s infinite';
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes dance {
        0%, 100% { transform: translateX(0) rotate(0deg); }
        25% { transform: translateX(-10px) rotate(-5deg); }
        50% { transform: translateX(10px) rotate(5deg); }
        75% { transform: translateX(-5px) rotate(-2deg); }
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Add some fun random effects
setInterval(() => {
    const randomCard = document.querySelectorAll('.invitation-card, .location-card, .included-card, .rsvp-card')[
        Math.floor(Math.random() * 4)
    ];
    
    if (randomCard && Math.random() > 0.95) {
        randomCard.style.transform = 'scale(1.02)';
        setTimeout(() => {
            randomCard.style.transform = 'scale(1)';
        }, 200);
    }
}, 3000);

console.log('🎉 Staycation invitation website loaded successfully! 🎉');
console.log('🎭 Remember: There\'s no backing out now! 😄');
