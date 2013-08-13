---
layout: post
title: "Installing Scipy on OS X Mountain Lion"
date: 2013-08-13 11:58
comments: true
categories: [admin,OS X, Scipy, Numpy, Matplotlib]
author: Michael Wilson
published: true
---

I ran into some issues yesterday while setting up a new
Macbook for development. I decided to use [Boxen](http://boxen.github.com/)
 (more on that in a later post) to set it up and everything was
going well until the time came to install Scipy, Numpy and Matplotlib
for some python projects I am working on. Normally I use pip and all
goes well, in this case I was getting all kinds of errors due to the
compiler configuration not being configured correctly. Luckily someone
had already solved these problems and packaged them as [Homebrew](http://brew.sh/) 
formulae. I thought I would document the steps in the hopes of saving
someone else some frustration.

If you haven't installed python yet:
``` bash
# Install python 2.7
brew install python
# sets up python as default python instead of system python
brew link python
```
Then to setup numpy, scipy and matplotlib using brew:
```
# Add more brew formulae so we can install our py libs with brew
brew tap samueljohn/python
brew tap homebrew/science

# install numpy and dependencies ( gfortran, etc.. )
brew install numpy
brew install scipy
brew insatll matplotlib
```

