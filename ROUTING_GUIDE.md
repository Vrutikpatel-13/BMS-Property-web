# BMS Property Manager - Static File Routing Guide

## Overview
This application uses a client-side JavaScript router to handle navigation between pages without full page reloads, providing a Single Page Application (SPA) experience.

## How It Works

### 1. Router Configuration
The router is defined in `assets/js/router.js` and handles:
- Route definitions and mapping
- Page loading via AJAX
- Browser history management
- Form submissions
- Navigation state updates

### 2. Entry Point
- **Main Entry**: `index.html` - The main application container
- **Default Route**: Automatically redirects to `/login` (pages/auth/login.html)

### 3. Available Routes

| Route | Page File | Description |
|-------|-----------|-------------|
| `/` or `/login` | `pages/auth/login.html` | Login page |
| `/register` | `pages/auth/register.html` | Registration page |
| `/dashboard` | `pages/dashboard/index.html` | Main dashboard |
| `/dashboard/test` | `pages/dashboard/test.html` | Test page |
| `/dashboard/help` | `pages/dashboard/help&about.html` | Help & About |
| `/properties` | `pages/properties/propertylist.html` | Property list |
| `/properties/units` | `pages/properties/unitoverview.html` | Units overview |
| `/tenants` | `pages/tenants/tenantdirectory.html` | Tenant directory |
| `/maintenance` | `pages/maintenance/workorders.html` | Work orders |
| `/payments` | `pages/payments/paymentprocessing.html` | Payment processing |
| `/reports` | `pages/reports/generatereportinspection.html` | Reports & inspections |
| `/reports/checklists` | `pages/reports/moveinchecklist.html` | Move-in checklists |

## Usage

### Navigation Links
Use the `data-route` attribute for router-enabled navigation:

```html
<!-- Router-enabled link -->
<a href="/dashboard" data-route>Dashboard</a>

<!-- Standard link (will cause full page reload) -->
<a href="pages/dashboard/index.html">Dashboard</a>
```

### Form Submissions
Forms are automatically handled by the router:

```html
<form id="loginForm">
    <!-- Form fields -->
    <button type="submit">Login</button>
</form>
```

### Programmatic Navigation
Navigate using JavaScript:

```javascript
// Navigate to dashboard
window.router.navigate('/dashboard');

// Navigate with hash
window.router.navigate('#dashboard');
```

## File Structure

```
├── index.html                 # Main entry point
├── assets/
│   ├── js/
│   │   └── router.js          # Router implementation
│   └── css/
│       └── output.css         # Compiled Tailwind CSS
└── pages/
    ├── auth/
    │   ├── login.html         # Login page
    │   └── register.html      # Registration page
    ├── dashboard/
    │   ├── index.html         # Main dashboard
    │   ├── test.html          # Test page
    │   └── help&about.html    # Help & About
    ├── properties/
    ├── tenants/
    ├── maintenance/
    ├── payments/
    └── reports/
```

## Features

### 1. Automatic Route Detection
- Handles both path-based (`/dashboard`) and hash-based (`#dashboard`) routing
- Fallback to login page for unknown routes
- Browser back/forward button support

### 2. Dynamic Content Loading
- Pages are loaded via AJAX without full page refresh
- CSS and JavaScript are preserved
- Loading states handled automatically

### 3. Form Handling
- Login forms automatically navigate to dashboard
- Form data validation and processing
- Remember me functionality

### 4. Navigation State Management
- Active route highlighting
- Automatic navigation state updates
- Browser history integration

## Development

### Adding New Routes

1. **Create the HTML page** in the appropriate `pages/` subdirectory
2. **Add the route** to the router configuration in `assets/js/router.js`:

```javascript
this.routes = {
    // existing routes...
    '/new-page': 'pages/newpage/index.html'
};
```

3. **Update navigation links** to use `data-route` attribute:

```html
<a href="/new-page" data-route>New Page</a>
```

### Testing Routes

1. Start the development server:
   ```bash
   npm start
   ```

2. Open `http://localhost:8000` in your browser

3. Navigate using the UI or by directly entering URLs:
   - `http://localhost:8000#/dashboard`
   - `http://localhost:8000#/login`

### Debugging

- Check browser console for router errors
- Verify page files exist at correct paths
- Ensure `data-route` attributes are used for navigation

## Browser Support

The router supports all modern browsers including:
- Chrome/Edge 60+
- Firefox 55+
- Safari 12+
- Mobile browsers

## Security Notes

- This is a client-side router for demo purposes
- In production, implement proper server-side authentication
- Validate all user inputs on the server
- Use HTTPS for secure communication

## Troubleshooting

### Common Issues

1. **404 Errors**: Check that page files exist at the correct paths
2. **CSS Not Loading**: Verify CSS path is `../assets/css/output.css` from subdirectories
3. **Router Not Working**: Ensure `router.js` is included in each page
4. **Forms Not Submitting**: Check form has proper ID and router is initialized

### Solutions

1. **Check Network Tab**: Verify files are loading correctly
2. **Clear Browser Cache**: Hard refresh (Ctrl+F5) to clear cached files
3. **Verify Paths**: Ensure relative paths are correct from each page's location
4. **Console Errors**: Check for JavaScript errors in browser console

## Future Enhancements

- Route guards for authentication
- Lazy loading of pages
- Route animations and transitions
- Server-side rendering support
- API integration for dynamic content
