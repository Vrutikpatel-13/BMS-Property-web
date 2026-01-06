// Main JavaScript file for BMS Property Manager
// Common functionality and utilities

document.addEventListener('DOMContentLoaded', function() {
    // Initialize common functionality
    initializeTheme();
    initializeNavigation();
    initializeFormValidation();
});

// Theme Management
function initializeTheme() {
    const themeToggle = document.querySelector('[data-theme-toggle]');
    const html = document.documentElement;
    
    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.className = savedTheme;
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.className;
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            html.className = newTheme;
            localStorage.setItem('theme', newTheme);
        });
    }
}

// Navigation Management
function initializeNavigation() {
    // Add active state to navigation items
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('[data-nav-link]');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// Form Validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!validateForm(form)) {
                e.preventDefault();
            }
        });
    });
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showError(field, 'This field is required');
            isValid = false;
        } else {
            clearError(field);
        }
    });
    
    return isValid;
}

function showError(field, message) {
    clearError(field);
    field.classList.add('border-red-500');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    errorDiv.setAttribute('data-error', field.name);
    
    field.parentNode.appendChild(errorDiv);
}

function clearError(field) {
    field.classList.remove('border-red-500');
    const errorDiv = field.parentNode.querySelector('[data-error="' + field.name + '"]');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(new Date(date));
}

// Export for use in other modules
window.BMS = {
    formatCurrency,
    formatDate,
    showError,
    clearError,
    validateForm
};
