## Today's Goals

Students will...

- Become familiar with the basic terminal commands
- Demonstrate the basic git commands/workflow
- Understand what a Version Control System (VCS) is
- Understand the difference between git and Github

## 9am Standup

- Events, Interestings, Happenings  

## 9:15am Warm-up

- [Type racer](http://play.typeracer.com/)

## 10am Daily/Weekly Schedule and Expectations/Attendance

- [Expectations/Schedule](https://students.galvanize.com/courses/2) with Michael
- [Daily/Weekly Schedule](https://github.com/gSchool/g11-course-info/blob/master/week-overview.md)

### Daily

- 9 to 9:30 - standup and warmup
- 9:30 to 12 - class
- 12 to 1 - lunch
- 1 to 5 class

### Weekly

1. Code Reviews - Thursday
1. Lighting Talks - Friday
1. Interview/Career Prep - Friday
1. Weekly re-cap - Friday

### Attendance

DO NOT miss more than 6 days!

## 10:30am Terminal Commands

Quick Review with Zach

#### How do UNIX commands work?
- `$ command <optional flags>`
- `-h` or `--help`
- Stop a running process
- Chaining commands

#### Navigating the file system
- `pwd`, `cd`, `cd ~`, `cd ..`, `ls -a`
- Absolute vs relative paths
- TAB autocomplete
- UP arrows

#### Managing Files
- `mv` move vs rename
- `cp`
- `touch`
- `rm`

## 11am

[Command Line Hard Way](http://cli.learncodethehardway.org/book/) (first 13 chapters)

## 12pm Lunch

Eat food (if that's your thing).

## 1pm Git

With Reyna

- Cheatsheet: [Git Essentials](https://gist.github.com/mjhea0/0580360e0433d1a356b7)
- [Git Assessment](https://github.com/gSchool/git_basics_quiz)

### Git = Version Control

Version control is a developer’s safety net. If you’re proficient at version control, you don’t have to worry about “breaking your app” because you can always revert to a previous state. This means that you can take risks and play more freely when you’re trying something new! Version control is what we call a “learning multiplier”. It helps you behave in a way that is conducive to learning as quickly as possible. Move fast and break things!

 Watch [What is VCS?](https://www.youtube.com/watch?v=8oRjP8yj2Wo)

### Introduction to Git, GitHub

* `git init`
* `git status`
* `git add -A`
* `git commit -m "This is a commit message"`
* `git log`
* `git remote add <remote name> <SSH URL>`
* `git remote -v`
* `git push <remote name> <branch>`

### Git Config

Add your name, email and a gitignore file to your global Git Configuration

* `git config --global user.name "<Your Name>"`
* `git config --global user.email "<your_email@example.com>"`
* `git config --global core.excludesfile ~/.gitignore_global`
* `git config --global -l`

We will add some things to be ignored by git in our gitignore file.

* `atom ~/.gitignore_global`
* Add this line and save:
  * `.DS_Store`
  * `junk`

### Concepts

1. Git vs. Github
1. [Git States](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics#The-Three-States) - working directory, staging, Git Repo

### Feature Branch Workflow (time permitting)

1. https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow

## Bonus!

- Play: [Try Git](https://try.github.io/)  (challenges 1-8)
- [Command Line Mystery](https://github.com/veltman/clmystery)
- Try [Githug](https://github.com/gazler/githug). Go as far as you can before you get stuck.

## Homework

1. Finish pre-work and [Command Line Hard Way](http://cli.learncodethehardway.org/book/) (first 13 chapters)
1. Read: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction
1. Watch: [Semantic HTML](https://www.youtube.com/watch?v=NrH5J6SSZyk)
1. Watch: [Parent Child HTML Elements](https://www.youtube.com/watch?v=Pf8xmAZYZC4&list=PLgGbWId6zgaWZkPFI4Sc9QXDmmOWa1v5F)
1. Watch: [Simple Project Structure](https://www.youtube.com/watch?v=g7js1fW4AZw&list=PLgGbWId6zgaWZkPFI4Sc9QXDmmOWa1v5F)
1. Ask yourself: What is CSS? Why is it important?
