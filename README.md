# Udhayachandrika S — Portfolio

A personal portfolio website showing my work in data analytics, product building and creative design.

**Live site:** https://your-site.vercel.app  <!-- replace with your Vercel link -->

## About
I'm a final-year B.Tech student in AI & Data Science at VCET. This portfolio brings together my skills, projects, internships, leadership roles and handmade crochet work in one place.

## Pages
| Page | What it shows |
|---|---|
| About (`index.html`) | Introduction, focus areas and quick stats |
| Skills | Graphic design, data analysis, professional skills and what I'm building now |
| Projects | Data analytics projects and internships, with Prev / Next paging |
| Journey | Timeline of internships, leadership roles, design work and education |
| Creative | Crochet gallery, with photos I add as I make new pieces |
| Contact | Message form and social links |

## Features
- Smooth slide animation between pages (scroll, touchpad, swipe, arrow keys or the lines on the right)
- Responsive design for desktop, tablet and mobile
- Content kept in simple data blocks, so updating needs no layout changes
- Contact form that opens the visitor's email app, with optional Formspree support

## Folder structure
```
index.html, skills.html, projects.html,
journey.html, creative.html, contact.html
css/      one stylesheet per section (base.css holds colours and shared styles)
js/       ui.js (page sliding) and sections/ (content for each page)
assets/   profile photo, crochet photos, drawings, certificates
```

## How to update content
- **Skills:** edit `js/sections/skills.js`
- **Projects:** edit `js/sections/projects.js` (new pages appear automatically)
- **Journey and certificates:** edit `js/sections/journey.js`
- **Crochet, drawing and stitching photos:** add images to `assets/` and edit `js/sections/creative.js`
- **Contact settings:** edit `js/sections/contact.js`
- **Home text:** edit `index.html`
- **Colours:** change the values at the top of `css/base.css`

## Deployment
The site is plain HTML, CSS and JavaScript, with no build step. It is hosted on Vercel and connected to this repository, so every push to the `main` branch updates the live site automatically.

## Credits
- Design, content and development: **Udhayachandrika S** (© 2026)
- Font: Outfit, from Google Fonts
- Built with the help of Claude (Anthropic)

## Contact
- Email: udhayachandrika1075@gmail.com
- GitHub: [Udhaya1075](https://github.com/Udhaya1075)
- LinkedIn: [Udhayachandrika S](https://www.linkedin.com/in/udhayachandrika-s-56aaa4294)
