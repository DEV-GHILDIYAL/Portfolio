# ⚡ DevOps & Cloud Engineer Portfolio [![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/) [![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/) [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/) [![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=flat-square&logo=jenkins)](./Jenkinsfile) [![AWS](https://img.shields.io/badge/AWS-EC2%2FVPC-FF9900?style=flat-square&logo=amazonaws)](#%EF%B8%8F-infrastructure)

A sleek, infrastructure-themed personal portfolio built for a **DevOps Engineer**. Designed with a dark terminal aesthetic, high-density system metrics visual style, interactive micro-animations, and full CI/CD deployment pipeline integration — self-hosted on custom AWS infrastructure, not a managed platform.

🔗 **Live:** http://13.206.217.176 *(custom domain pending)*

---

## 👨‍💻 About Me

- **Current Role**: DevOps Engineer @ **Fyntune Solution** *(August 2026 – Present)*
- **Previous Role**: Web Ops Analyst @ **eClerx** *(October 2025 – August 2026)*
- **Core Focus**: Cloud Infrastructure (AWS), Infrastructure as Code (Terraform), Container Orchestration (Docker/Kubernetes), CI/CD Automation (Jenkins & GitHub Actions), and Monitoring (Prometheus/Grafana).

---

## 🏗️ Infrastructure

This site runs on hand-built AWS infrastructure (not Vercel/Netlify) as a live demonstration of the skills above:

- **Networking**: Custom VPC (`vpc-main`) in `ap-south-1`, 2 public + 2 private subnets across 2 AZs, IGW, route tables, security groups — no NAT Gateway (cost-optimized, public-subnet design)
- **Compute**: 3 EC2 instances (`t3.micro`) — `app-server` (hosts this site + future projects via Docker), `jenkins-server` (CI/CD), `monitoring-server` (observability)
- **Reverse Proxy**: Caddy on `app-server`, serving this site and ready to route future projects by subdomain with auto-HTTPS
- **CI/CD**: Jenkins pipeline — GitHub webhook → Docker-based build (`node:20-alpine`) → SSH/SCP deploy to `app-server`
- **Monitoring**: Prometheus + Grafana + node_exporter tracking system health (CPU/RAM/disk/network) across all 3 instances
- **Cost Automation**: EventBridge Scheduler auto stops all instances nightly and restarts them each morning; Elastic IPs keep addresses fixed across restarts

---

## 🛠️ Tech Stack

### Frontend & UI
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Icons

### DevOps & Infrastructure Automation
- **CI/CD Pipeline**: [Jenkins](./Jenkinsfile) (Staged build in `node:20-alpine` Docker container + Automated SSH/SCP deployment)
- **Target Deployment**: Ubuntu Server (`/opt/apps/portfolio`) on AWS EC2
- **Cloud & Tooling**: AWS (VPC, EC2, EventBridge Scheduler, Elastic IPs), Docker, Caddy, GitHub Actions, Prometheus, Grafana

---

## ⚙️ CI/CD Pipeline Architecture (`Jenkinsfile`)

The repository includes a production-ready declarative [`Jenkinsfile`](./Jenkinsfile):

1. **Build Stage**:
   - Runs isolated inside a `node:20-alpine` Docker container.
   - Installs dependencies using `npm ci`.
   - Compiles TypeScript and builds production assets with `npm run build`.
   - Stashes built static artifacts (`dist/`).
2. **Deploy Stage**:
   - Unstashes `dist/` artifacts.
   - Authenticates via Jenkins SSH credentials (`app-server-ssh`).
   - Dynamically provisions target directory (`/opt/apps/portfolio`) on destination server (private VPC IP) and syncs build files via `scp`.
3. **Trigger**: GitHub webhook fires on every push to `main` — no manual "Build Now" needed.

---

## ✨ Key Features

- **DevOps Terminal Design**: Dark mode aesthetic featuring terminal prompt headings (`./deploy_infrastructure.sh`), glowing neon accents, and interactive orbital animations.
- **Production Projects Showcase**:
  - **PipelineX**: Comprehensive CI/CD pipeline dashboard for monitoring deployment workflows.
  - **WatchTower**: Monitoring stack powered by Prometheus, Grafana, and custom Python psutil exporter with Telegram alerting.
  - **AWS Infrastructure Automation**: Terraform-provisioned EC2, S3, IAM, and Security Groups with S3 + DynamoDB state locking.
  - **ReplyDesk**: Live AI-powered review management SaaS built with Next.js, Supabase, Groq/Llama models, and Razorpay.
  - **OpsKnowledge**: DevOps learning platform with Leitner spaced-repetition flashcards and daily AI practice questions.
  - **SiteLens**: Chrome Manifest V3 extension for web accessibility and SEO auditing.
- **Fully Responsive**: Mobile-first grid layouts optimized across desktop, tablet, and mobile viewports.
- **SEO & Social Sharing**: Complete Open Graph, Twitter card, and meta tag setup in [`index.html`](./index.html).

---

## 📂 Project Structure

```
Portfolio/
├── public/                  # Static assets (Resume PDF, Images, Favicon)
├── src/
│   ├── assets/              # Component level assets
│   ├── components/          # Modular React sections
│   │   ├── ui/              # Reusable UI elements (ProjectCard, ScrollToTop, Icons)
│   │   ├── About.tsx        # Personal bio & core tech stack
│   │   ├── Contact.tsx      # Interactive contact cards (WhatsApp, Email)
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Footer.tsx       # System footer & credits
│   │   ├── Hero.tsx         # Main landing section with terminal styling
│   │   ├── Navbar.tsx       # Fixed navigation header
│   │   ├── ProductSection.tsx# Featured SaaS project (ReplyDesk)
│   │   ├── Projects.tsx     # DevOps core projects showcase
│   │   ├── Skills.tsx       # Categorized technical arsenal grid
│   │   └── ToolsSection.tsx # Featured tools & extensions
│   ├── App.tsx              # Main application entry layout
│   ├── index.css            # Custom theme variables & Tailwind v4 imports
│   └── main.tsx             # React DOM root render
├── Jenkinsfile              # Jenkins CI/CD pipeline definition
├── package.json             # NPM dependencies & build scripts
├── tsconfig.json            # TypeScript compiler configuration
└── vite.config.ts           # Vite build configuration
```

---

## 💻 Local Setup & Development

### Prerequisites
- Node.js `v20.x` or higher
- npm `v10.x` or higher

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DEV-GHILDIYAL/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📜 License

Designed and developed by **[Dev Ghildiyal](https://github.com/DEV-GHILDIYAL)**. Open source for reference and inspiration.
