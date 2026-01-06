// // Simple Client-Side Router for BMS Property Manager
// class Router {
//     constructor() {
//         this.routes = {};
//         this.currentRoute = null;
//         this.init();
//     }

//     init() {
//         // Define routes
//         this.routes = {
//             '/': 'pages/auth/login.html',
//             '/login': 'pages/auth/login.html',
//             '/register': 'pages/auth/register.html',
//             '/dashboard': 'pages/dashboard/index.html',
//             '/dashboard/test': 'pages/dashboard/test.html',
//             '/dashboard/help': 'pages/dashboard/help&about.html',
//             '/properties': 'pages/properties/propertylist.html',
//             '/properties/units': 'pages/properties/unitoverview.html',
//             '/tenants': 'pages/tenants/tenantdirectory.html',
//             '/maintenance': 'pages/maintenance/workorders.html',
//             '/payments': 'pages/payments/paymentprocessing.html',
//             '/reports': 'pages/reports/generatereportinspection.html',
//             '/reports/checklists': 'pages/reports/moveinchecklist.html'
//         };

//         // Handle initial route
//         this.handleRoute();

//         // Handle browser back/forward buttons
//         window.addEventListener('popstate', (e) => {
//             this.handleRoute();
//         });

//         // Handle navigation links
//         document.addEventListener('click', (e) => {
//             if (e.target.matches('[data-route]') || e.target.closest('[data-route]')) {
//                 e.preventDefault();
//                 const link = e.target.matches('[data-route]') ? e.target : e.target.closest('[data-route]');
//                 const path = link.getAttribute('href') || link.getAttribute('data-route');
//                 this.navigate(path);
//             }
//         });
//     }

//     handleRoute() {
//         const path = window.location.pathname;
//         const hash = window.location.hash;
//          console.log('Route is empty or root');
//         // Handle hash-based routing
//         let route = hash ? hash.substring(1) : path;
        
//         // Normalize route
//         if (route === '' || route === '/') {
//             console.log('Route is empty or root 2');
            
//             route = '/login';
//         }

//         // Find matching route
//         let pagePath = this.routes[route];
//          console.log('Route is empty or root 3');
//         // If no exact match, try to find partial match
//         if (!pagePath) {
//             for (const [key, value] of Object.entries(this.routes)) {
//                 if (route.startsWith(key)) {
//                     pagePath = value;
//                     break;
//                 }
//             }
//         }

//         // Default to login if no route found
//         if (!pagePath) {
//              console.log('Route is empty or root 4');
//             pagePath = this.routes['/login'];
//         }

//         this.loadPage(pagePath);
//     }

//     async loadPage(pagePath) {
//          console.log('Route is empty or root 5',pagePath);
//         try {
//             const response = await fetch(pagePath);
//             if (!response.ok) {
//                 throw new Error(`Failed to load page: ${pagePath}`);
//             }

//             const html = await response.text();
            
//             // Extract content from the page
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(html, 'text/html');
            
//             // Get the main content
//             const mainContent = doc.querySelector('main') || doc.querySelector('body');
//              console.log('Route is empty or root 6');
//             // Update the page content
//             if (mainContent) {
//                 document.body.innerHTML = mainContent.innerHTML;
                
//                 // Re-initialize any scripts or components
//                 this.initializePage();
                
//                 // Update current route
//                 this.currentRoute = pagePath;
                
//                 console.log(`Loaded page: ${pagePath}`);
//             }
//         } catch (error) {
//             console.error('Error loading page:', error);
//             // Fallback to login page
//             if (pagePath !== this.routes['/login']) {
//                 this.navigate('/login');
//             }
//         }
//     }

//     navigate(path) {
//         // Update URL without full page reload
//         if (path.startsWith('/')) {
//             window.history.pushState({}, '', path);
//         } else {
//             window.history.pushState({}, '', `#${path}`);
//         }
        
//         this.handleRoute();
//     }

//     initializePage() {
//         // Re-attach event listeners
//         this.attachEventListeners();
        
//         // Re-initialize components
//         this.initializeComponents();
        
//         // Update navigation active states
//         this.updateNavigation();
//     }

//     attachEventListeners() {
//         // Form submissions
//         const forms = document.querySelectorAll('form');
//         forms.forEach(form => {
//             if (!form.hasAttribute('data-router-handled')) {
//                 form.addEventListener('submit', (e) => this.handleFormSubmit(e));
//                 form.setAttribute('data-router-handled', 'true');
//             }
//         });

//         // Password visibility toggle
//         const toggleButtons = document.querySelectorAll('button[aria-label="Toggle password visibility"]');
//         toggleButtons.forEach(button => {
//             if (!button.hasAttribute('data-router-handled')) {
//                 button.addEventListener('click', this.togglePasswordVisibility);
//                 button.setAttribute('data-router-handled', 'true');
//             }
//         });
//     }

//     initializeComponents() {
//         // Initialize any components that need JavaScript
//         // This can be expanded based on your needs
//     }

//     updateNavigation() {
//         // Update active navigation states
//         const currentPath = window.location.pathname + window.location.hash;
        
//         document.querySelectorAll('[data-route]').forEach(link => {
//             const href = link.getAttribute('href') || link.getAttribute('data-route');
//             if (currentPath.includes(href) || href === currentPath) {
//                 link.classList.add('bg-primary/10', 'dark:bg-primary/20', 'text-primary');
//             } else {
//                 link.classList.remove('bg-primary/10', 'dark:bg-primary/20', 'text-primary');
//             }
//         });
//     }

//     handleFormSubmit(e) {
//         e.preventDefault();
//         const form = e.target;
//         const submitButton = form.querySelector('button[type="submit"]');
        
//         // Handle login form specifically
//         if (form.id === 'loginForm' || form.querySelector('input[type="email"]')) {
//             const email = form.querySelector('input[type="email"]')?.value;
//             const password = form.querySelector('input[type="password"]')?.value;
            
//             if (email && password) {
//                 // Store user info
//                 localStorage.setItem('userEmail', email);
                
//                 // Navigate to dashboard
//                 this.navigate('/dashboard');
//             } else {
//                 alert('Please enter both email and password');
//             }
//         }
//     }

//     togglePasswordVisibility(e) {
//         const button = e.currentTarget;
//         const passwordInput = button.parentElement.querySelector('input[type="password"]');
//         const icon = button.querySelector('.material-symbols-outlined');
        
//         if (passwordInput.type === 'password') {
//             passwordInput.type = 'text';
//             icon.textContent = 'visibility';
//         } else {
//             passwordInput.type = 'password';
//             icon.textContent = 'visibility_off';
//         }
//     }
// }

// // Initialize router when DOM is ready
// document.addEventListener('DOMContentLoaded', () => {
//     window.router = new Router();
// });

// // Export for use in other files
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = Router;
// }
