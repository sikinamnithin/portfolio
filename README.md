# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean and professional UI with smooth animations
- **SEO Optimized**: Meta tags, sitemap, and robots.txt configured
- **Responsive**: Works perfectly on all devices
- **Dark Mode**: Built-in dark mode support
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Sections**:
  - Hero section with compelling introduction
  - About section with background and stats
  - Projects showcase with live demos and GitHub links
  - Skills section with progress bars
  - Contact form with social links
  - Professional footer

## Tech Stack

- **Framework**: Next.js 14.2.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Layout metadata** (`app/layout.tsx`):
   - Update name, description, social handles
   - Update website URL and Open Graph data

2. **Hero section** (`components/Hero.tsx`):
   - Update your name and title
   - Customize the introduction text

3. **About section** (`components/About.tsx`):
   - Add your photo (replace the placeholder)
   - Update background story
   - Modify stats (years of experience, projects completed)

4. **Projects** (`components/Projects.tsx`):
   - Replace with your actual projects
   - Update GitHub and demo links
   - Customize project descriptions

5. **Skills** (`components/Skills.tsx`):
   - Update skill levels to match your expertise
   - Add or remove skills as needed

6. **Contact** (`components/Contact.tsx`):
   - Update email, location, and social links
   - Configure form submission (currently logs to console)

7. **Footer** (`components/Footer.tsx`):
   - Update social media links

### Color Scheme

The portfolio uses a blue-to-purple gradient theme. To customize colors:
- Edit gradient classes in components (e.g., `from-blue-600 to-purple-600`)
- Modify Tailwind config for global color changes

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting platform

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots.txt
├── components/            # React components
│   ├── Navigation.tsx     # Fixed navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects showcase
│   ├── Skills.tsx        # Skills section
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS config
└── tsconfig.json         # TypeScript config
```

## License

MIT License - Feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.
