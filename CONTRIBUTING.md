# Contributing to "Up To Infinity Incremental"

We are thrilled that you are interested in contributing to our project! This document will guide you through the necessary steps to contribute your valuable work to "Up To Infinity Incremental," We want to make this process simple and transparent, so here is a step-by-step guide.

## Getting Started 🚀

- **Familiarize yourself with Astro:** If you haven't already, make sure to understand how Astro works. You can find plenty of useful information in the official [Astro documentation](https://docs.astro.build/).

- **Why we use Git?**  
  Git is a distributed version control system that helps you track changes in your code, collaborate with others, and manage different versions of your project efficiently. It is essential for contributing to this project.

- **Installing Git:**  
  If you don't have Git installed, you can download it from the official website: [Download Git](https://git-scm.com/downloads). Follow the installation instructions for your operating system.


- **Set up your development environment:** We recommend using `pnpm` as the package manager for its efficiency and speed. If you don't have `pnpm` installed, you can install it by running:
  ```
  npm install -g pnpm
  ```

## How to Contribute 🛠

### 1. Set up your environment

- **Fork the repository:** Create a fork of the project to your GitHub account. To do this, click the "Fork" button at the top right of the repository page on GitHub. This will create a copy of the repository in your GitHub account.

- **Clone your fork:** After forking, clone the repository to your local machine. Copy the URL of your fork by clicking the green "Code" button, then run:
  ```
  git clone <URL of your fork>
  ```

- **Add the original repository as a remote:** To keep your fork up to date with changes from the original repository, add the original repo as an upstream remote:
  ```
  git remote add upstream <URL of the original repository>
  ```

- **Ensure you are using the correct Node version:** Use `node --version`. If you don't use `node`, make sure to download the version specified in [Node Js](https://nodejs.org/en).

- **Install dependencies:** Navigate to the cloned project directory and run:
  ```
  pnpm install
  ```

### 2. Work on your changes

- **Sync your fork:** You can sync your fork from GitHub by clicking "Sync fork" on your fork's page. Alternatively, from the terminal:
  ```
  git pull
  ```

- **Create a new branch:** Before starting your work, create a new branch:
  ```
  git switch -c your-branch-name
  ```

- **Develop your changes:** Implement your changes or improvements in your local branch. Make sure to follow the project's coding practices and standards.

- **Test your changes:** Run the development server with:
  ```
  pnpm run dev
  ```
  and review your changes in the browser.

### 3. Submit your changes

- **Commit your changes:** Once you are satisfied with your changes, commit them with a clear and descriptive message.

- **Push to your fork:** Push your branch with the changes to your fork on GitHub:
  ```
  git push origin your-branch-name
  ```

- **Create a Pull Request (PR):** On GitHub, go to your fork of "Up To Infinity Incremental" and click "Pull request" to open one. Be sure to clearly describe what changes you made and why they are necessary or useful for the project.

## Best Practices 🌟

- Check open issues before opening a PR. If you think you can fix one and no other PR is open for it, reference the issue number in your commit message using `#issue-number` so it links automatically. It's also helpful to leave a comment to indicate which PR is addressing the issue.

- Review open PRs to avoid duplicating work. You can also help by contributing to existing PRs with changes, comments, or reviews.

- Keep your commits clean and descriptive.

- Follow the project's coding conventions.

- Frequently update your branch to stay current with the main branch.

- Participate in PR discussions if there are comments or suggestions.

## Community & Support

- Join our [Discord Server](https://discord.gg/RnQP9BQjge) to chat with the community and get help.
- Follow us on [Twitter](https://x.com/QronexStudio) for updates and announcements.

## Need Help? 🆘

If you have any questions or need assistance, feel free to open an issue in the repository. Our team and community will be happy to help.

---

Thank you for contributing to "Up To Infinity Incremental"! Together we are building something amazing. 🚀
