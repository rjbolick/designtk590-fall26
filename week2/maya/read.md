# Week 2 In-Class Activities

## Activity 1

You will work inside one shared class repository, but on your own branch and in your own folder.

1. Clone the class repository:

   ```bash
   git clone https://github.com/rjbolick/designtk590-fall26.git
   cd designtk590-fall26
   ```

2. Check out the `week2` branch:

   ```bash
   git switch week2
   ```

3. Pull the latest changes:

   ```bash
   git pull origin week2
   ```

4. Create your own branch. Replace `firstname` with your first name:

   ```bash
   git switch -c firstname-week-2
   ```

5. Open the repository in your IDE.

6. Inside `week2`, create a new folder with your name.

## Activity 2

Create a real Next.js project inside the folder assigned to you in the shared repository.

1. Go to your folder in the terminal:

   ```bash
   cd week2/your-name
   ```

2. Create a Next.js app in that folder:

   ```bash
   npx create-next-app@latest .
   ```

3. Use these recommended settings:
   - TypeScript: **Yes**
   - ESLint: **Yes**
   - Tailwind: **Yes**
   - `src/` directory: **Yes**
   - App Router: **Yes**
   - Turbopack: **Yes**

4. Start the app:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

If you complete all the steps before time ends, start experimenting with the project.

## Activity 3

Make one small change that you can see, test, and explain before creating a commit.

1. Change the homepage heading.
2. Add some content, whatever you want. Feel free to be creative.
3. Confirm that the change appears locally in your browser. It should work on your machine before you commit it.
4. See which files changed:

   ```bash
   git status
   ```

5. See what actually changed:

   ```bash
   git diff
   ```

6. Stage and commit the changes:

   ```bash
   git add --all
   git commit -m "your commit message"
   ```

## Activity 4

A pull request makes your work visible before it becomes part of the shared branch. Reference the [PR templates](../resources/) if you need help formatting your pull request.

1. Push your branch. Replace `firstname-week-2` with your branch name:

   ```bash
   git push origin firstname-week-2
   ```

2. Use the GitHub website to open a pull request into the `week2` branch.
3. Write the pull request title and description.
4. Assign a classmate to review your pull request.
5. Review one pull request and ask one useful question.
6. Respond to every comment on your pull request.
7. **Do not merge your pull request yet.**

Use this guidance when writing and reviewing the pull request:

| Part        | Guidance                                                     |
| ----------- | ------------------------------------------------------------ |
| Title       | Create first Next.js app in my folder                        |
| Description | Explain what changed, where it lives, and how it was tested  |
| Review      | Ask one question, inspect the diff, and resolve every thread |

## Activity 5 - Deployment

You will connect the shared repository to your own Vercel account before deploying your individual app folder.

1. Create a free [Vercel](https://vercel.com/) account. You can sign in with GitHub.
2. Create a new project.
3. Choose the class repository.
4. Set the **Root Directory** to your folder inside `week2`.
5. Trigger the build.
6. Open the public URL.
