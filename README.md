# Folsetech AI Solutions

A modern, professionally branded Next.js website for AI solutions and consulting services.

## ✨ Features

- 🎨 **Modern Brand Design** - Custom color scheme with gradient animations
- 🖼️ **Custom Logo Integration** - FolseTech branded throughout
- ⚡ **Next.js 14 App Router** - Latest React framework with optimal performance
- 🎭 **Smooth Animations** - Framer Motion for fluid, engaging interactions
- 📧 **Contact Form** - Email notifications via Nodemailer with MongoDB storage
- 💾 **Database Integration** - MongoDB for storing contact submissions
- 📱 **Fully Responsive** - Beautiful on all devices
- 🧭 **Fixed Navigation** - Header with scroll effects
- 🔍 **SEO Optimized** - Sitemap, robots.txt, and metadata
- 🎯 **Smooth Scrolling** - Enhanced navigation experience

## 🎨 Brand Colors

- **Primary**: Deep Blue (`#1e40af`)
- **Secondary**: Purple (`#7c3aed`)
- **Accent**: Cyan (`#06b6d4`)
- **Dark**: Slate Dark (`#0f172a`)
- **Light**: Slate Light (`#f8fafc`)

## 📂 Project Structure

```
folsetech-ai-solutions/
├── app/
│   ├── api/contact/       # Contact form API endpoint
│   ├── components/
│   │   ├── Header.tsx     # Fixed navigation header
│   │   ├── Hero.tsx       # Animated hero with logo
│   │   ├── Services.tsx   # Services showcase
│   │   ├── ContactForm.tsx # Contact form
│   │   └── Footer.tsx     # Footer section
│   ├── globals.css        # Global styles + brand theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── lib/
│   ├── db.ts             # MongoDB connection
│   └── mailer.ts         # Email service
├── models/
│   └── Contact.ts        # Contact model
├── public/
│   └── folsetech-logo.png # Brand logo
└── tailwind.config.ts    # Tailwind with brand colors
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   cd folsetech-ai-solutions
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your credentials:
   - `MONGODB_URI`: MongoDB connection string
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`: Email SMTP configuration
   - `MAIL_FROM`: Sender email address (`FolseTech AI Solutions <no-reply@folsetech.org>`)
   - `MAIL_TO`: Recipient email for contact form submissions
   - `SITE_URL`: Your website URL

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework with custom brand colors
- **Framer Motion** - Production-ready animation library
- **MongoDB + Mongoose** - Database and ODM
- **Nodemailer** - Email sending service
- **Inter Font** - Modern, clean typography

## 📄 License

MIT

---

**Built with ❤️ by FolseTech**
