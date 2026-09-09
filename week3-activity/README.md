# Week 3 Activity: Markdown and Pull Requests

**Time: 30 minutes**

Use the class repository to practice writing Markdown and reviewing a classmate's work. Work on your own `name-week3` branch; your pull request will target the shared `week3` branch.

## What to do

1. Create your branch from `week3`. Replace `name` with your name:

   ```bash
   git fetch
   git switch main
   git pull origin main
   git switch week3
   git pull origin week3
   git switch -c name-week3
   ```

2. Inside `week3-activity`, create a folder called `yourname`, replacing `yourname` with your own name.
3. Create a Markdown file inside your folder. Use any filename ending in `.md`, such as `about-me.md`. Easiest way to do this is to use an IDE.
4. Write about any topic, meeting all the Markdown requirements below.
5. Preview your file to check the formatting, then commit and push your changes. (For most IDEs, right click on the file name -> preview.)
7. Open a pull request (PR) on GitHub with **base: `week3`** and **compare: `name-week3`**. Use the [documentation PR template](../resources/documentation_update.md) for help with the description.
8. Review a classmate's PR. Check their Markdown requirements and leave useful feedback or a question.
9. Respond to comments on your own PR and make any needed changes. Commit and push updates to the same branch.
10. Approve your classmate's PR once their work meets the requirements and your feedback has been addressed.

## Markdown requirements

Your file must include:

| Requirement | Syntax |
| --- | --- |
| 1 level-one (H1) heading | `# Heading` |
| 1 link | `[Link text](https://example.com)` |
| 1 unordered list with 3 items | Start each item on its own line with `- ` |
| 2 bolded words | `**word**` |
| 1 horizontal line | `---` on its own line, with a blank line before and after |

Example unordered list:

```markdown
- First item
- Second item
- Third item
```

For syntax examples and formatting help, see the [Markdown Guide: Basic Syntax](https://www.markdownguide.org/basic-syntax/).
