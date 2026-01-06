# BMS Property Manager Web

A comprehensive property management web application built with HTML, CSS, and JavaScript, styled with Tailwind CSS.

## Project Setup

This project uses Tailwind CSS CLI for styling instead of CDN version and follows a modern folder structure.

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

### Build Commands

- **Build CSS**: `npm run build`
  - Compiles Tailwind CSS from `assets/css/src/input.css` to `assets/css/output.css`
- **Watch Mode**: `npm run watch`
  - Continuously rebuilds CSS when files change

### Project Structure

```
├── assets/                     # Static assets
│   ├── css/
│   │   ├── src/
│   │   │   └── input.css     # Tailwind CSS input file
│   │   └── output.css         # Generated Tailwind CSS
│   ├── js/
│   │   └── main.js           # Main JavaScript file
│   ├── images/                # Image assets
│   └── fonts/                # Font files
├── components/                # Reusable HTML components
│   ├── common/
│   │   ├── header.html       # Common header component
│   │   └── sidebar.html      # Common sidebar component
│   └── forms/                # Form components
├── pages/                    # Application pages
│   ├── auth/                 # Authentication pages
│   │   ├── login.html        # Login page
│   │   └── register.html     # Registration page
│   ├── dashboard/            # Dashboard pages
│   │   ├── index.html        # Main dashboard
│   │   ├── profile&accountsetting.html
│   │   ├── photoupload.html
│   │   └── help&about.html
│   ├── properties/           # Property management
│   │   ├── propertylist.html
│   │   ├── propertydetails.html
│   │   ├── unitoverview.html
│   │   ├── unitdetails.html
│   │   └── leaserenewal.html
│   ├── tenants/              # Tenant management
│   │   ├── tenantdirectory.html
│   │   ├── tenantprofile.html
│   │   ├── addtenant.html
│   │   ├── broadcastmessage.html
│   │   ├── emailcommunications.html
│   │   ├── inappmessage.html
│   │   └── notificationpreferences.html
│   ├── maintenance/          # Maintenance management
│   │   ├── workorder.html
│   │   ├── workorderdetail.html
│   │   └── createworkorder.html
│   ├── payments/             # Payment management
│   │   ├── payment.html
│   │   ├── paymentreceipt.html
│   │   ├── overduepaymentlist.html
│   │   └── expenseentry.html
│   └── reports/              # Reports and inspections
│       ├── generatereportinspection.html
│       ├── inspectiontype&creation.html
│       ├── moveinchecklist.html
│       ├── moveoutinspectionform.html
│       └── roominspectionform.html
├── tailwind.config.js        # Tailwind CSS configuration
├── package.json             # Node.js dependencies and scripts
├── index.html              # Entry point (redirects to login)
└── README.md              # This file
```

### Tailwind CSS Configuration

The project includes custom color schemes and configurations:

- **Primary**: #2563eb (Blue)
- **Secondary**: #10B981 (Green)
- **Accent**: #F59E0B (Amber)
- **Success**: #22C52E (Green)
- **Warning**: #F59E0B (Amber)
- **Error**: #ef4444 (Red)
- **Background Light**: #f9fafb
- **Background Dark**: #1f2937
- **Text Primary**: #111827
- **Text Secondary**: #6b7280

### Development

1. Make changes to HTML files or CSS classes
2. Run `npm run build` to compile CSS
3. Or run `npm run watch` for automatic compilation during development

### Features

- Property management dashboard
- Tenant management
- Work order tracking
- Payment processing
- Inspection forms
- Communication tools
- Dark mode support
- Responsive design

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Run `npm run build`
4. Open `index.html` in your browser (will redirect to login page)

The main entry point is `index.html` which redirects to `pages/auth/login.html`.
