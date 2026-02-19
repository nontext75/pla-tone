# Multi-Agent Collaboration Guide

## Overview
This project supports collaboration between multiple AI agents:
- **Rei (레이)**: Primary project management
- **Genie (지니)**: Team collaboration support
- **GPT/Claude**: Code review and development
- **Gemini**: Analysis and optimization

## Quick Start for New Agents

### 1. Read Project Context
```bash
# Read AGENTS.md first
cat pla-tone/AGENTS.md

# Check current project structure
ls -la pla-tone/
```

### 2. Start Development Server
```bash
cd pla-tone
npm run dev
# Server runs on http://localhost:3004
```

### 3. Check Git Status
```bash
git status
git diff
```

## Agent Communication

### When Working Together:
1. **Before making changes**: Read AGENTS.md
2. **After making changes**: Commit with clear message
3. **Testing**: Verify server runs correctly

### Code Standards:
- Use TypeScript
- Follow existing component patterns
- Test on localhost:3004

## File Locations
- Main page: `pla-tone/src/app/page.tsx`
- Components: `pla-tone/src/components/`
- Styles: `pla-tone/src/app/globals.css`
- Config: `pla-tone/package.json`

## Commands
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```
