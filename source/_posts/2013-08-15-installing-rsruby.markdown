---
layout: post
title: "Installing rsruby"
date: 2013-08-15 12:31
comments: true
categories: R, ruby, brew, OS X
published: true
author: Michael Wilson
---

Here is the steps to install R with brew, and configure rubygem to install
rsruby succesfully. 

``` bash
# Install R using brew
brew install R
# Symlink to the normal location
sudo ln -s "/opt/boxen/homebrew/opt/R/R.framework" /Library/Frameworks 

# Install rsruby with the following options
gem install rsruby -- --with-R-dir='/Library/Frameworks/R.framework/Resources' --with-R-include='/Library/Frameworks/R.framework/Resources/include' --with-R-lib='/Library/Frameworks/R.framework/Resources/lib'
```
