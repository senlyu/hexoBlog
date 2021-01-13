---
layout: posts
title: How-I-Build-This-Blog-1
categories: How-I-Build-This-Blog
tags:
  - Tech
  - English
  - Chinese
date: 2021-01-11 17:33:23
---

![](header.jpeg)

## [How I Build This Blog](https://senlyu.com/blog/categories/How-I-Build-This-Blog/) First Part.

### Requirements:

After nearly 2 years at this field, now I know how to speak before anything to be done. Yes, you need to ask the million dollar question: could you clarify your requirements?  
Before I build this Blog, I asked myself what is the requirements for this blog? Here are some of mine requirements:

1. First of all, easy to build, easy to maintain. The reason I built this blog is to write stuff, not fixing the blog all the time. I don't want to waste all my time on blog system, I want to focus on the writing, ~~Ok, I didn't write much~~
2. It should be easy to write, so I will be willing to write the blogs. If the blog is hard to use, than I may hardly use the blog.
3. It has to support my personal domain: senlyu.com . Yes, this domain is so damn cool, why not using it?
4. It need to be flexible, right now it is a blog, but one day if I find something interesting, I dont want to open another system to support that feature. The potential features I am referring to here is the API system.

### Choices:

Ok, let have a look for some choices:

#### WordPress
It has been a while for me to look back to wordpress. The first blog I build is using wordpress. I think I followed the digital ocean instruction, step by step, and build a stable wordpress, even though I dont know much about apache and front end style. Still I get a nice webpage and using that to get this job.  
WordPress is good at writing blog, even you know nothing about blog system, you can write in docs, you can write WordPress. But the building process is a pain in the ass, I don't want to maintain a apache system for this. And it it not flexible for me. Although, I could choose online version from wordpress.com. But if I want to use my own domain, they gonna charge me for that. SO, bye bye WordPress.

#### Ghost
My first project from my job is to build a system, which is using ghost. So ghost is a old friend to me.  
Ghost ~~one of~~ the biggest blog project is JS community. Easy to write like WordPress, very easy to post a post. And I am very familiar with the system.  
The problem I am facing is that the installment. At first I tried digitalocean auto install, this install process will provide you installment including database, ssl cert and all other necessaries. However, the validation of ssl cert always blocked me to install. Because when I link the machine with the domain, it will take some time for dns to setup the link, but the install process will be right away to install everything. So I go and check the documents they have, I found it is outdated. So I think this is a dead end. If the installment is ready this hard, no way it will be a easy maintain.  
By the way, there is a way I could do using ghost, just like I did in my first project, is to use something like [this](https://www.triplet.fi/blog/running-your-ghost-blog-and-express-app-on-heroku/). This is very cool, although the biggest problem is that this could only run in demo/development mode. it is not a production solution. Still this is enough for most of the blog use case. But I wish I could do it better. So see you Ghost.

#### hexo + express
So I came to the last choice, md2html blog system + backend support. I use express all the time in work, I am already very familiar with it, ( by saying familiar I mean I worked on more than 1 year on 3 projects all using express, and read all the documents on web, especially on deployment recommendation, and even a little bit source code). So why not express?
And hexo, is a md2html blog system. It is not easy to write like above two options, but still good for me.

### So 

My final choice will be hexo + express. That will be the most easy way for me to start this project.


---
---

## [我如何搭建这个blog系列](https://senlyu.com/blog/categories/How-I-Build-This-Blog/) 第一篇

### 需求

工作了两年之后，我终于知道在开始做任何事之前必须要说出口的事情。永远不要忘了问：是否能再跟我明确一下需求？  
在我开始搭建工作之前，我就问了自己这个问题，如今我有这几个需求：  
1. 首先，容易安装和维护。为什么这个放第一，就是因为我懒，我不想经常更新blog配置，或是担心部署的问题，我想多写blog~~其实也没有写很多文章~~，关注点应该在文章上面，而不是blog的技术上面。
2. 第二，一定要写文章简单。很简单，写文章简单的话就会让我更容易去写文章。如果写起来很复杂只会让人不想用。
3. 第三，一定要支持我的个人域名，我这么吊的域名买了不是白买的，我一定要上个人域名。
4. 第四，要灵活。不一定什么时候我可能要用这个blog的服务器做点啥事，这个服务器不能是死的，要比较容易来拓展，而这个对我而言就是用node js做base，这个语言我最熟（呼应第一点）。

### 选择：

我目前的一些选择

#### WordPress
wordpress是很久之前用的了。我的第一个blog就是用的wordpress，我当时应该是按照digitalocean上面的教程一步一步的安装了完整的wordpress，虽然我根本不懂大多数步骤到底是干嘛的，包括apache和前端。但我仍然搞出一个漂亮的页面让我得到了我如今的工作。  
WordPress用来写blog真的方便，就算你不懂blog，只要你能写word文档，你就能谢blog。只是这个安装过程很麻烦，而且我也不想管理一个apache。我也不懂apache。  
当然，也可以偷懒选择wordpress.com官网上的版本。不过如果我要用自己的domain就要收费。所以再见了您WordPress。

#### Ghost
我工作的第一个项目就是一个含有ghost系统的项目。所以我非常熟ghost。  
Ghost是js上面最大的做的最好的blog项目了。写起来跟wordpress一样方便。  
但是我真正遇到的问题就是安装，我试了用digitalocean的自动安装过程，它会自动帮你装好数据库，ssl等所有用到的工具。但是验证ssl的过程老是卡住，因为连接云主机和domain的dns设置不是马上起效的。然而我翻阅了他们的文档，我发现极度过时。这可是大忌，装的时候都是问题，维护怎么办？果断跑路。  
额外介绍一种我们工作中用的ghost的方式。是类似如下的[ghost as middleware](https://www.triplet.fi/blog/running-your-ghost-blog-and-express-app-on-heroku/). 但这个是demo/develop版本的ghost，ghost的production版本比较复杂也不适合这个模式。如果使用production版本的ghost，就很难和express相结合。no no

#### hexo + express
最后我们就来到了这个选项。我对express真的非常熟，我之前工作都在用express，我读过文档和源码。所以还是使用express吧。
至于hexo，我还是使用了md->html的hexo，虽然写起来没有前面两个方便，不过md我也需要去熟练。

### 最后

所以最后我的最终选择就是hexo+express， 对我而言就是最简单的方法
