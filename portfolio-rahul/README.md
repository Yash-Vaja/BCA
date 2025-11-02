# Rahul Vishwakarma - Portfolio Website

A modern, interactive portfolio website showcasing my journey from healthcare to web development.

## About Me

I'm **Rahul Vishwakarma**, a 22-year-old BCA student from Surat with a unique background:
- 🎓 Commerce background (10th & 12th)
- 🔬 DMLT (Diploma in Medical Laboratory Technology)
- 💼 5 years of laboratory management experience
- 💻 Now pursuing BCA with focus on web development

## Features

✨ **Modern Design**
- Unique, non-template design with custom animations
- Smooth scroll-based reveals and interactions
- Beautiful gradient accents and geometric patterns

🌓 **Dark/Light Mode**
- Seamless theme switching
- Persistent theme preference
- Optimized colors for both modes

📱 **Fully Responsive**
- Mobile-first approach
- Works perfectly on all devices
- Optimized for tablets and desktops

🎨 **Sections**
- **Hero**: Animated introduction with typing effect
- **About**: My unique journey and background
- **Experience**: Timeline of my professional journey
- **Skills**: Technical and professional skills with progress bars
- **Projects**: Showcase of web development projects
- **Contact**: Contact form and social links
- **Footer**: Quick links and additional information

## Tech Stack

- **Framework**: Next.js 16 (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
\`\`\`bash
cd portfolio-rahul
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Customization

### Update Personal Information

1. **Hero Section** (`app/components/Hero.tsx`):
   - Update name, title, and description
   - Replace profile image placeholder

2. **About Section** (`app/components/About.tsx`):
   - Modify your story and background

3. **Experience Section** (`app/components/Experience.tsx`):
   - Add/edit your work experience
   - Update skills for each role

4. **Skills Section** (`app/components/Skills.tsx`):
   - Update skill levels
   - Add new skills or categories

5. **Projects Section** (`app/components/Projects.tsx`):
   - Add your actual projects
   - Update project links and descriptions

6. **Contact Section** (`app/components/Contact.tsx`):
   - Update email, phone, and location
   - Add your social media links
   - Configure form submission

### Add Your Profile Image

Replace the placeholder in `app/components/Hero.tsx`:
- Add your image to the `public` folder
- Update the image source in the Hero component

### Update Social Links

Update links in:
- `app/components/Contact.tsx` (contact section)
- `app/components/Footer.tsx` (footer section)

## Project Structure

\`\`\`
portfolio-rahul/
├── app/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
└── tailwind.config.js
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Deploy to Netlify

1. Build the project: \`npm run build\`
2. Deploy the \`.next\` folder to Netlify

## Performance

- ⚡ Optimized for Core Web Vitals
- 🚀 Fast page loads with Next.js
- 📦 Code splitting and lazy loading
- 🎯 SEO optimized

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

- **Email**: rahul.vishwakarma@example.com
- **Location**: Surat, Gujarat
- **GitHub**: [Your GitHub Profile]
- **LinkedIn**: [Your LinkedIn Profile]

---

Built with ❤️ by Rahul Vishwakarma using Next.js & Tailwind CSS
