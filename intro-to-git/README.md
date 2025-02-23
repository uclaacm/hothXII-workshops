# HOTH XII - Intro to Git

**Date:** March 2nd, 2025

**Teacher:** Jeff Huang

Welcome to the Into to Git workshop! In this workshop we'll explore the basics of Git, a tool for managing and collaborating our projects over time. We'll learn how to install Git on your local device, create and connect repositories, staging, committing, and pushing our code, as well as merging different branches!

## Resources

* [Slides](https://docs.google.com/presentation/d/11ShSF4tyv7Uof_YNRTYid7Up79wKKJd_1BGQlboxWqQ/edit?usp=sharing)
* Workshop

## Table of Contents

1. What is Git?
2. What is GitHub?
3. Installing/Configuring Git
4. Repositories
5. Branches
6. Other Terms
7. Git Workflow
8. Creating a Repo
9. Demo
10. Tips & Best Practices

## What is Git?

Git is a version control system... but what does this really mean?

At its core, Git is like a checkpoint saver for user code. It keeps detailed documentation of exactly what was changed, who made the change, and when the change happened. If something that a user introduced into their code breaks it and need to go back to a working state, a user can basically "rewind" the code. This is like pressing "Ctrl/Cmd + Z" but for all of your code!

One way to think about Git is by comparing it to a game with checkpoints. You wouldn't want to lose all your progress just because you made one mistake, right? So instead of starting the whole game over again, you can go back to a previous checkpoint and pick up where you left off. Git is essentially the same, giving you peace of mind when experimenting with new code.

## What is GitHub?

You've probably heard of GitHub before, maybe online or from a friend who insists that "you have to to GitHub". Now you might be confused about the difference between Git and GitHub. To be clear, they are not the same thing!!

Github is a online platform that builds around Git and makes it user-friendly. Without GitHub, Git would have to be accessed from the command-line and require more technical knowledge. Git also allows for cloud-based repository services, meaning that you can store your code on the cloud instead of just your own device.

GitHub also is a great tool for collaboration. Imagine a group project where multiple people edit the same document. You wouldn't want someone to overwrite another person's changes and losing progress. To fix this, multiple users can work on different versions of the project and merge them all together at the end. Git works the same way, allowing users to smoothly contribute to the project.

## Installing Git

Now that we understand the concept of Git, we can finally install it on our computers! Git is supported across major operating systems: Winods, MacOS, and Linux.

Follow these instructions based on your device:

*Please note that all commands that begin '$' are meant to be typed into your terminal. Please do NOT include the '$' in your command!*


***Windows***

Follow this [Link](https://gitforwindows.org/) and download the lastest version of Git for Windows
Run the installer and follow the prompts.
After installation, you can open the command prompt and type the following below to check that you installed Git correctly:

```bash
$ git --version
```


***MacOS***

For Macs, you need to Install [Homebrew](https://brew.sh/). What this does is it simplifies the process of installing software on Mac devices. Homebrew automates the download, installation, and configuration of packages for you!

Once that's finished, paste this code into your terminal.
```bash
$ brew install git
```

After installation, you can open the command prompt and type the following below to check that you installed Git correctly:

```bash
$ git --version
```

***Linux***

Copy the following code into your terminal

```bash
$ sudo apt-get install git-all
```

## Configuring Git

Awesome! Now that Git is installed on your computer, you can configure Git so that Git knows who you are when you collaborate on a repo. It allows you to change your name and email!

To change your name, copy the code into your terminal:
```bash
$ git config --global user.name "Hack Is Awesome"
```

Now set your email:
```bash
$ git config --global user.email HackIsAwesome@hoth.com
```

To make sure that you correctly set these features, type the following command:
```bash
$ git config --list
```


## Repositories

Respository (Also called "repo" which I will start calling instead of respository)
* Home for your project files and history of changes, including previous version of your code
* Two types of repos, local repos and remote repos.
  * **Local Repos**
    * Stored on your local machine (personal computer)
    * Holds the information (files/folders) that Git tracks
    * Can also make commits and branches on this repo
   
  * **Remote Repos**
    * Version of your project stored in a online server like GitHub - allows multiple people to collaborate and keeps the project synchronized across multiple devices
    * Unlike local repos, it backs up your code in case you lose it in your local machine
    * To create a Remote Repos, you clone a repo from a remote server and Git will create a local copy of the entire project, including all the files, commits, and branches.
    * Now, multiple developers can work at the same time on the same project.


## Branches

Branches is one of the most powerful features of Git. Basically, a branch is an independent line of development where you will be able to work on new features without affecting the main branch. This means that you can experiment with code without worry of breaking the whole project! 

The main branch-often called *main* (or master in older respositories)-is created automatically when you create a new repo. It serves as the "trunk" in your project's tree, providing the baseline for all the other branches in your tree. You can think of the main branch as the trunk, a sturdy deployable version of your project, and the other features all branch off this trunk. 

If you want to work on a feature or issue but don't want to mess up the current project, you would create a branch separate from the main to work on it. Once your objective is completed, you are able to merge your branch back into the main branch.

## Merging and Conflicts

Merging is the process of combining two or more branches together into a single branch. After finishing work on your branch, you would normally merge it back onto the main branch. 

<p align="center">
  <img src="https://github.com/user-attachments/assets/648b355e-9f0b-4ab2-b2ed-e407fd8034e9" 
       alt="git-branches-merge" 
       width="400" />
</p>

**Merge Conflicts**:

Imagine being in the middle of a fight between your two friends and don't know who to side with. In this case, that's Git. It throws its hands up and says "I don't know what to do, yall figure it out." This is known as a merge conflict, and it is its way of telling you that it doesn't know what to do and for the user to handle it. A merge conflict occurs when Git is unable to reconcile differences between two branches during a merge. For example, two developers are working on two different branches but on the same lines. When they both try to merge their branches back onto the main, Git doesn't know which one to use so it throws a conflict. On the good side, Git has many tools to help resolve the conflict. It will show you where the error is and allows you to edit the code right there! Once the issue is resolved, you can continue merging your branch.

## Other Terms

***Commit***

* A snapshot of your current work, capturing all changes in a single record
* Each commit usually has a message and timestamp next to it to reference later
* Helps you track your progress and you can roll back to previous commits if needed

***Push***

* Sends your local commits to the remote repository (i.e. GitHub)
* It makes your commits on your local repo visible to your team on the remote repo

***Pull Request***

* A request to merge your branch into another branch (e.g. main)
* Allows other people on your team to review your code, comment on your code, and make modifications before it is merged onto the branch
* Follows a push and can be found with a link in the terminal to the GitHub with pull requests

***Pulling From Main***

* Pulling from the main retrieves and merges the latest commits from the main branch onto your current branch
* Keeps your code up to date with recent commits and helps avoid merge conflicts later on
* Best practice to regularly pull

## Git Workflow

A Git workflow is a set of practices that a team of developers can use to manage changes and collaborate on a project. It's basically the outline of steps a developer can use to develop a project. Git operates with three main states (Working Directory, Staging Area, and Repository) and a Git workflow provides a roadmap on how to move through those states.

***Working Directory***
* The local files/folders where you can actively create/edit code

***Staging Area***
* The staging area is where you indicate what changes you want to include in the next commit
* Once you finish a change, you can put it in the staging area to get ready to push it onto the remote repo
* Basically the middle area between the working directory and the repo

***Repository***
* Where all the changes/files are permanently stored

## Creating a Repo

Finally time to create our own Repo!!!

First create a GitHub account and go to the Repositories tab. Then click on the green New button in the [upper right corner](https://github.com/new)

Follow the instructions that Git provides you and come up with a descriptive name for your project. After, determine whether the project should be public or private. If your project is public, anyone can view it. A private repo will only be accessible to people who have direct permission. Once you create your repo, there will be a link in a blue box. Make sure to save it!! Now you have created a remote repo!

Now let's set up the local repo. Start by creating a folder on your computer and opening it with a text editor software like VS Code or Xcode. Open up your terminal/command prompt and make sure that you are in the correct file path.

Now type the commands in your terminal:

1. Initialize the repo
   
   ```$ git init```
  
2. Now add the file to the staging area to prepare to commit it

   ```$ git add .```
   
3. Commit the file

   ```$ git commit -m “[message]”```

4. Link your repo to your GitHub by pasting the link you saved when you first made the remote repo

   ```$ git remote add origin [GitHub repository link]```

5. Rename the branch to main

    ```$ git branch -M main```

6. Push the main branch to the remote respository

   ```$ git push -u origin main```

Nice! Now you have a functional local and remote repo!

## Demo

Now it's finally time to start editing your code! :)

A common work practice looks like this:

1. Start on the main branch
2. Pull from the main branch
3. Create a branch
4. Do some work
5. Add the changes
6. Commit the changes
7. Push to the branch
8. Create a pull request
9. Fix merge conflicts
10. Merge

To accomplish each step, follow the commands in your terminal!

1. To start on the main branch
   
   ```$ git checkout main```

2. Pull from the main branch - to keep your current branch up to date with recent commits

   ```$ git pull```

3. Create your own branch and switch to it

   ```$ git checkout -b “[branch name]”```

4. Introduce features / fix issues

5. Add changes to staging area

   ```$ git add .```

6. Commit your changes

   ```$ git commit -m "[message]"```

7. Push your changes

   ```git push -u origin [branch name]```

8. Create a pull request by following the link created by the push. The link will look like this: github.com/[username]/[repository-name]/pull/new/[branch-name]. Follow the prompts needed to create a pull request and write a description of the changes you pushed.

9. GitHub will tell you if there are any merge conflicts. Click "Resolve Conflicts" and edit the code to fix it.

10. Once there are no more conflicts, merge the branches.

Great! Now you know how to make changes and push it onto the remote repo! Congrats!

## Tips & Best Practices

* Commit Often: Frequent commits will help you figure out when problems arise.

* Use meangingful commit messages: Just writing "fixing stuff" is not very descriptive and not helpful to your collaborators

* Pull before pushing: Always pull before pushing to make sure your up to date with the current main and will help lessen merge conflicts

* Don't commit sensitive information: Never commit passwords, API keys, or other sensitive info

* Here are some helpful Git commands: [References](https://git-scm.com/docs/git#_git_commands)

You're all set! Feel free to experiment and get used to the Git interface!
