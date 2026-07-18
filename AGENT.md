AGENT.md
Project
Green Puspa Official Website
Objective
Build a modern, responsive, static website for Green Puspa RW 06 Utan Kayu Selatan.
The website serves only as a public information portal and community profile.
This website DOES NOT:
Control IoT devices
Display sensor data
Access internal systems
Require authentication
Require a database
Collect sensitive user information
The website is informational only.
About Green Puspa
Green Puspa is an urban farming community located in RW 06 Utan Kayu Selatan, Matraman, East Jakarta.
The community develops:
Urban farming
Hydroponics
Aquaponics
Community empowerment
Environmental education
Food security programs
The initiative began around 2017 and transformed a densely populated neighborhood into a green and productive community area.
Green Puspa is known for:
Community-managed hydroponic systems
Aquaponic fish cultivation
Environmental awareness programs
Urban greening initiatives
Community collaboration and volunteerism
Tagline:
“Dari Warga, Untuk Warga, dan Oleh Warga”
Technical Requirements
Framework
Preferred:
Next.js 15
TypeScript
Tailwind CSS
Alternative:
Astro
Vite + React
Deployment
Deployable directly to:
GitHub Pages
Vercel
Netlify
No backend required.
Project Structure
/app
/components
/public
/images
/gallery
/icons
/data
/content
/styles
Pages
Home
Hero section containing:
Green Puspa logo
Community tagline
Large community photo
CTA button
Buttons:
About Us
Programs
Gallery
Contact
About
Sections:
History
Explain:
Green Puspa establishment
Community transformation
Environmental improvement efforts
Vision
Create a greener and healthier urban environment.
Mission
Urban farming education
Community empowerment
Sustainable food production
Environmental stewardship
Programs
Display cards:
Hydroponics
Description of hydroponic cultivation activities.
Aquaponics
Description of fish and plant integrated farming.
Community Education
Training programs and knowledge sharing.
Environmental Awareness
Neighborhood greening and waste reduction activities.
Gallery
Photo categories:
Hydroponics
Aquaponics
Community Activities
Harvest Events
Awards
Visitors
Use responsive masonry layout.
Include lightbox viewer.
Timeline
Interactive timeline:
2017 Community urban farming initiative starts
2018 Neighborhood greening expansion
2019 Hydroponic system growth
2020 Community food security initiatives
2021 Program expansion
2022 Technology-assisted farming development
2023 Public recognition and community visits
2024+ Ongoing development and innovation
News
Static markdown-based news posts.
Support:
Featured image
Date
Category
Tags
Content source:
/content/news/*.md
Contact
Display:
Community address
Google Maps embed
Public contact information
Social media links
Contact form should use:
Formspree
or
Netlify Forms
No custom backend.
Design System
Style:
Modern Eco-Friendly
Colors:
Primary: #2E7D32
Secondary: #66BB6A
Accent: #A5D6A7
Background: #F8FFF8
Text: #1B1B1B
Typography
Heading: Poppins
Body: Inter
Accessibility
Must meet:
WCAG AA
Requirements:
Keyboard navigation
Alt text
Proper heading hierarchy
Color contrast compliance
SEO
Include:
Metadata
OpenGraph
Twitter Card
sitemap.xml
robots.txt
Structured data:
Organization Schema
LocalBusiness Schema
Performance
Target Lighthouse:
Performance: 95+
Accessibility: 100
Best Practices: 100
SEO: 100
Content Tone
Friendly
Educational
Community-focused
Professional
Avoid:
Corporate jargon
Technical IoT details
Marketing hype
Features
Homepage Hero
Large aerial/community image
Headline:
“Green Puspa – Kampung Urban Farming RW 06 Utan Kayu Selatan”
Subheadline:
“Mewujudkan lingkungan hijau, sehat, dan produktif melalui semangat gotong royong.”
Statistics Section
Display cards:
1500+ Lubang Hidroponik
2017 Program Dimulai
RW 06 Lokasi Komunitas
100% Berbasis Gotong Royong
Footer
Include:
About
Programs
Gallery
News
Contact
Social Media
Copyright
GitHub Actions
Create workflow:
.github/workflows/deploy.yml
Requirements:
Build website
Run lint
Run type check
Deploy to GitHub Pages automatically
On:
push to main
Deliverables
Generate:
Complete source code
README.md
LICENSE
AGENT.md
GitHub Actions workflow
Example content
Placeholder images
Website must be fully functional after:
npm install npm run build
without additional configuration.
