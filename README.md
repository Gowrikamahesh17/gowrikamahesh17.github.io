# Gowrika Mahesh — Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

Personal portfolio website for **Gowrika Mahesh** — Master's student in Applied Data Science at SRH University Heidelberg, specializing in Agentic AI, GenAI systems, LLM orchestration, and RAG pipelines.

**Live site:** [gowrikamahesh17.github.io](https://gowrikamahesh17.github.io)

## Credits

This portfolio is built on the [react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) originally created by [Yuji Sato](https://github.com/yujisatojr). The template is free and open source under the MIT license.

## Local Development

1. Install [Node.js](https://nodejs.org/) then run:

    ```bash
    npm install
    npm start
    ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

```bash
npm run deploy
```

This builds the app and pushes to the `gh-pages` branch. The live site updates at `https://gowrikamahesh17.github.io` within a minute.

## Customization

All content lives in `src/components/`:

| File | What it controls |
|------|-----------------|
| `Main.tsx` | Name, title, profile photo, social links |
| `Expertise.tsx` | Skill categories and tech chips |
| `Timeline.tsx` | Education and work history |
| `Project.tsx` | Project showcase cards |
| `Contact.tsx` | Contact form |
| `Footer.tsx` | Footer links and attribution |

## Profile Photo

The profile photo is loaded directly from GitHub's avatar API:

```
https://avatars.githubusercontent.com/Gowrikamahesh17
```
