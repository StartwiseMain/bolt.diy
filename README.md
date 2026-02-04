# White Label

[![White Label: AI-Powered Full-Stack Development Assistant](./public/social_preview_index.jpg)](https://whitelabel.dev)

Welcome to **White Label**, an AI-powered full-stack development assistant that runs entirely in your browser! Built on the foundation of open-source AI coding technology, White Label allows you to choose from 19+ LLM providers for each prompt, giving you maximum flexibility and control over your AI-assisted development workflow.

---

## 🌟 Key Features

- **AI-powered full-stack web development** for NodeJS-based applications directly in your browser
- **Support for 19+ LLMs** including OpenAI, Anthropic, Google Gemini, Ollama, and more
- **Visual code editing** with CodeMirror integration
- **Integrated terminal** to view output of LLM-run commands
- **Real-time preview** of your applications
- **Deploy directly** to Netlify, Vercel, or GitHub Pages
- **Electron desktop app** for native desktop experience
- **WebContainer technology** - runs Node.js entirely in the browser

---

## 🚀 Quick Start

### Option 1: Direct Installation (Recommended)

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Open http://localhost:5173
```

### Option 2: Docker

```bash
# Build production image
docker build -t white-label:production --target white-label-production .

# Run
docker run -p 5173:5173 white-label:production
```

### Option 3: Desktop Application

Download the latest release for your platform:
- **Windows**: `.exe` installer
- **macOS**: `.dmg` file
- **Linux**: `.AppImage` or `.deb` package

---

## 📋 Requirements

- **Node.js** 20.18.0 or higher
- **pnpm** 9.14.4 or higher

### Installation

```bash
# Install Node.js (via nvm recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20

# Install pnpm
npm install -g pnpm
```

---

## 🎨 Supported AI Providers

### Cloud Providers
- OpenAI (GPT-4, GPT-3.5)
- Anthropic (Claude 3.5, Claude 3)
- Google Gemini
- Groq
- xAI (Grok)
- DeepSeek
- Mistral
- Cohere
- Together AI
- Perplexity
- HuggingFace
- OpenRouter
- And more...

### Local Providers
- Ollama (run models locally)
- LM Studio
- OpenAI-compatible endpoints

---

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Development mode with hot reload
pnpm run dev

# Type checking
pnpm run typecheck

# Linting
pnpm run lint

# Run tests
pnpm run test

# Build for production
pnpm run build

# Start production server
pnpm run start
```

---

## 🐳 Docker Commands

```bash
# Development build
pnpm run dockerbuild

# Production build
pnpm run dockerbuild:prod

# Run container
pnpm run dockerrun

# Docker Compose (development)
docker compose --profile development up

# Docker Compose (production)
docker compose --profile production up
```

---

## 📖 Documentation

- [Local Build Guide](./LOCAL_BUILD_GUIDE.md) - Detailed setup instructions
- [CI/CD Documentation](./.github/CI_CD_DOCUMENTATION.md) - GitHub Actions workflows
- [FAQ](./FAQ.md) - Frequently asked questions
- [Contributing](./CONTRIBUTING.md) - How to contribute

---

## 🔧 Configuration

### API Keys

Configure AI provider API keys through:

1. **Settings UI** - Click settings icon (⚙️) in the sidebar
2. **Environment Variables** - Create `.env.local`:

```bash
# Example .env.local
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here
GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
```

### Custom Models

Add custom Ollama models or OpenAI-compatible endpoints through the Settings panel.

---

## 🎯 Best Practices

- **Use Claude 3.5 Sonnet or GPT-4** for best results
- **Be specific** about your tech stack in prompts
- **Scaffold basics first**, then add advanced features
- **Batch simple instructions** to save API credits

---

## 🚢 Deployment

### Netlify

```bash
# Build and deploy
pnpm run build
netlify deploy --prod --dir=build/client
```

### Vercel

```bash
# Deploy to Vercel
vercel --prod
```

### Docker Deployment

```bash
# Production image
docker build -t white-label:latest --target white-label-production .

# Push to registry
docker tag white-label:latest your-registry/white-label:latest
docker push your-registry/white-label:latest
```

---

## 🔐 Security

- API keys are stored securely in browser cookies
- All code execution happens in isolated WebContainer
- No server-side code execution
- SBOM (Software Bill of Materials) available

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

---

## 📝 License

MIT License - see [LICENSE](./LICENSE) for details.

**Note**: White Label uses WebContainer technology which requires licensing for commercial production use. See [WebContainers licensing](https://webcontainers.io/enterprise) for details.

---

## 🌐 Links

- **Documentation**: Full docs in `/docs` folder
- **Issues**: Report bugs or request features
- **Discussions**: Join community discussions

---

## 💡 Acknowledgments

Built on the foundation of open-source AI development tools and powered by WebContainer technology from StackBlitz.

---

**Made with ❤️ by the White Label Team**

*AI-Powered Development, Right in Your Browser*
