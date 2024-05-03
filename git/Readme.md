## what is git?

# Git is a distributed version control system (VCS) used for tracking changes in source code during software development. It allows multiple developers to collaborate on a project, keep track of their changes, and revert back to previous versions if needed

## commands and their usage

Certainly! Below is a formatted version of the Git commands along with their usage that you can directly copy and paste into your README.md file:

---

## Git Commands and Usage

1. **git init**: Initialize a new Git repository in the current directory.

   Usage: 
   ```
   git init
   ```

2. **git clone**: Clone a repository into a new directory.

   Usage: 
   ```
   git clone <repository-url>
   ```

3. **git add**: Add file changes to the staging area.

   Usage: 
   ```
   git add <file>   # add a specific file
   git add .        # add all changes
   ```

4. **git commit**: Record changes to the repository.

   Usage: 
   ```
   git commit -m "commit message"
   ```

5. **git status**: Show the status of changes in the working directory.

   Usage: 
   ```
   git status
   ```

6. **git push**: Push local changes to a remote repository.

   Usage: 
   ```
   git push <remote-name> <branch-name>
   ```

7. **git pull**: Fetch changes from a remote repository and merge them into the current branch.

   Usage: 
   ```
   git pull <remote-name> <branch-name>
   ```

8. **git branch**: List, create, or delete branches.

   Usage: 
   ```
   git branch                     # list branches
   git branch <branch-name>       # create a new branch
   git branch -d <branch-name>    # delete a branch
   ```

9. **git checkout**: Switch branches or restore working tree files.

   Usage: 
   ```
   git checkout <branch-name>     # switch to a branch
   git checkout -b <new-branch>   # create and switch to a new branch
   ```

10. **git merge**: Merge changes from one branch into another.

    Usage: 
    ```
    git merge <branch-name>   # merge changes from the specified branch into the current branch
    ```

11. **git log**: Display commit history.

    Usage: 
    ```
    git log
    ```

12. **git remote**: Manage remote repositories.

    Usage: 
    ```
    git remote add <remote-name> <repository-url>   # add a new remote
    git remote -v                                   # list remotes
    ```

13. **git fetch**: Download objects and refs from another repository.

    Usage: 
    ```
    git fetch <remote-name>
    ```

14. **git reset**: Reset current HEAD to the specified state.

    Usage: 
    ```
    git reset <commit>     # reset to a specific commit
    git reset --hard       # discard all changes
    ```

15. **git diff**: Show changes between commits, commit and working tree, etc.

    Usage: 
    ```
    git diff               # show unstaged changes
    git diff <commit1> <commit2>   # show changes between two commits
    ```

---
