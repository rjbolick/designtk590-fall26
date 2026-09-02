# DESIGNTK 590 — Fall 2026

Welcome! This is the shared course repository for DESIGNTK 590 in Fall 2026. Taught by Ryan Bolick.

Our work will focus on the frontend: turning ideas into thoughtful, accessible, and well-crafted experiences for the web. We will use this repository to share starter files, collect some work, and learn a practical Git and GitHub workflow together.

## Course focus

Throughout the semester, we will practice:

- Structuring content with semantic HTML
- Building responsive layouts and visual systems with CSS
- Adding interaction with JavaScript/TypeScript
- Designing for accessibility and a range of devices
- Using browser development tools to test and refine our work
- Collaborating with Git, GitHub, and pull requests

Specific tools and requirements will be introduced with each activity. You do not need to install a framework yet.

## Getting started

You will need [Git](https://git-scm.com/), a code editor such as [Visual Studio Code](https://code.visualstudio.com/) or [Cursor](https://cursor.com/), and a modern web browser like Chrome. Additional setup will be included in an activity brief when needed.

```bash
git clone https://github.com/rjbolick/designtk590-fall26.git
cd designtk590-fall26
```

Before beginning an activity, update your local copy of `main`:

```bash
git switch main
git pull origin main
```

## Contributing student work

Unless an activity says otherwise, use this workflow:

1. Create a branch named for the week and yourself:

   ```bash
   git switch -c week2/your-name
   ```

2. Create your own folder inside the activity's week directory:

   ```text
   week2/your-name/
   ```

3. Add only the files needed for your submission. Include a short `README.md` in your folder explaining what you made and how to view it.
4. Commit your work, push your branch, and open a pull request into `main`.
5. Title the pull request `Week 2: Your Name` and follow any additional directions in the activity brief.

Please keep your pull request focused on your own submission. Do not edit another student's folder or shared course files unless the activity specifically asks you to do so.

### Pull request templates

Use the reference template that best matches your contribution when writing your pull request description:

- [Feature Addition](resources/feature_addition.md) for a new feature or enhancement
- [Bug Fix](resources/bug_fix.md) for a correction to existing behavior
- [Documentation Update](resources/documentation_update.md) for changes to written guidance or supporting documentation

Answer each relevant prompt so reviewers can understand your work without opening every file first. If a section does not apply, write `Not applicable` and briefly explain why.

These templates are adapted from Graphite's [Comprehensive Checklist: GitHub PR Template](https://graphite.com/guides/comprehensive-checklist-github-pr-template).

## Repository care

- Never commit passwords, API keys, or other private information.
- Do not commit generated folders such as `node_modules`, `dist`, or `build`.
- Use clear file names and concise commit messages.
- Check that your project works in the browser before submitting it.
- Credit any code, images, typefaces, or other resources you did not create.
- Treat classmates' work and feedback with care.

## Questions

If you are stuck, ask during class or email Ryan/Aishi. When asking for technical help, include what you expected, what happened instead, and any error message you received.
