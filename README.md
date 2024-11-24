# **InscribeVerse-AI**  

**InscribeVerse-AI** is an idea in progress—a concept for a powerful, AI-driven writing assistant and idea management platform. The goal is to simplify the process of creating, refining, and organizing content for blogs, technical documentation, social media posts, and more, all while offering tools to enhance creativity and productivity.  

This is the initial draft of the project, and more features and improvements will be added as the idea evolves.  

---

## **Core Features**  

- **Authentication**: Securely log in to access your personalized workspace.  
- **Artifact Window**: A dedicated editor for writing down thoughts, ideas, and content.  
- **AI Chat Window**: An integrated AI chat on the side to reflect, brainstorm, and refine as you go.  
- **Knowledge-Base Manager**: A history section to organize and revisit all your created posts.  
- **New Ideas Management**: Save drafts of your ideas for future development.  

---

## **Future Enhancements**  

- **Social Media Integration**: Publish directly to platforms like LinkedIn, Twitter, Medium, and more.  
- **Export Options**: Export content as documents or copy in markdown format.  
- **Content Management System**: Tools to manage publishing schedules and track releases.  
- **Embedded Whiteboard**: Create illustrations and diagrams to integrate into your articles.  

---

## **Advantages**  

- **AI-Driven Editing**: Real-time editing and feedback without requiring additional extensions.  
- **Prompt Management**: Tailor AI responses to align with your desired tone and style.  
- **Centralized Knowledge Base**: Easily organize and track all your posts and ideas in one place.  
- **On-the-Go Creativity**: Use the whiteboard feature for quick sketches or diagrams to complement your writing.  

---


## **Tech Stack**  

### **Frontend**  
- **[Next.js](https://nextjs.org/)**: For building a responsive, fast, and interactive user interface.  

### **Backend**  
- **Python**: To handle server-side logic and API integration.  
- **[LangChain](https://www.langchain.com/)**: For managing and orchestrating LLM (Large Language Model) calls.  

### **AI & Text Generation**  
- **[OpenAI API](https://openai.com/api/)**: For advanced AI-driven content generation and editing.  

### **Database**  
- **PostgreSQL (Pg)**: A reliable relational database for storing structured data like user information, knowledge-base entries, and drafts.  
- **Vector Database** *(to be decided)*: For efficient storage and retrieval of embeddings generated from AI models, enabling advanced semantic search and idea management.  

### **Embedded Whiteboard**  
- **[Excalidraw](https://excalidraw.com/)**: For creating interactive, hand-drawn style illustrations directly within the app.  

### **Other Tools**  
- **RESTful APIs**: For seamless communication between the frontend and backend.  



---

### **Note:**  
This project is in its initial stages, and this README will evolve as features are developed and the concept takes shape. Contributions and ideas are welcome as the journey progresses!  

Stay tuned for updates as **InscribeVerse-AI** grows into a fully functional tool. 🚀  


# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
