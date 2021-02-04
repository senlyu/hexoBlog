---
layout: drafts
title: How-I-Build-This-Blog-2
tags:
  - Tech
  - English
  - Chinese
categories: How-I-Build-This-Blog
date: 2021-01-13 01:52:15
---


![](header.jpg)

## [How I Build This Blog](https://senlyu.com/blog/categories/How-I-Build-This-Blog/) Second Part.

This post will provide many basic concepts for entry level blog user. I believed that before you thinking about how to implement something, you have to understand what you are building and why you needs to do that. Back to the days when I know nothing about web or blog, many tutorials I was followed will simple tell you to do step one, step two, but I dont know anything about what this step for. So this time, I will be first talk about these basics, and try to make them unrelated with the languages. If you already have good understanding of networking, you should skip this post.

### Website
My way to understand the website is that the website is the resources on the server. When user using the browser, they open the resources which come from the remote server, like images, texts. Then the browser will download the resources and do some manage and they will show you the web page. Image you are using MS Word, you open that, then you choose a file to open. The browser is just like MS Word, the address you put in browser is the address your file you opened. Only difference is that you opened a remote file and you cannot edit but read-only.  

### Server
Server is just a remote computer. You are not using your usb-mouse or usb-keyboard to interact with them, instead you are using internet signals. In server, you need to put on your web pages and open them to everyone, so people could get this by internet. Start from here, your website is open to visit.  
Every server in internet will have a ipv4 string, mostly. And if you rent server from others, they will provide that. You can think of that is the unique name of your server, using which everyone will find this particular server, and using which you could login this server. When you buy/rent a server, I strongly recommend you to read [this](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04) to do basic settings.  
Some server providers are AWS from amazon, azure from MS. And Linode, Vultr. For me, I use digital ocean. I would recommend you AWS, because it is the most used provider. And digital ocean is good to entry levels, they have many posts and instructions for documents. Here I will provide my [refer code](https://m.do.co/c/125ac30c26b9) for digital ocean.

### Domain && DNS
Your server's ipv4 is just like a phone number, apparently no one could remember all the phone numbers, so no one will remember your ipv4, everyone will remember something like google.com / facebook.com. So the domain is used to replace that.  
- The biggest domain provider is goddady. and I am using google domain now, they both are good domain providers.
- There are some domain provided free, like Freenom have some domains are free to use, they are good for you to play around.  
After this you will need to link your domain with you server, this could be done with DNS configuration. In some cases, domain provider may not provide DNS for you, you may need to find yourself a free DNS provider. It is not difficult, you just need to set something called A record. Most DNS provider will have documents to tell you how to do that. A record is just like put your number into the [phone book](https://en.wikipedia.org/wiki/Telephone_directory).

### SSL certificate
Most website nowadays will provide something called certificate, that is ssl certificate, it is used to encrypt you webpage. Image online shopping, when you request your website from your server, is just like shopping online, the delivery guy is delivery your resources to you. If you dont have a ssl certificate, it just like no box of the package, so the delivery guy will know what it is right away.  
There is a very easy way to get ssl and totally free, that is **let's encrypt**. They have a very easy way for you to do it, I strongly recommend you include that in your website.

### Non-server implement
Some instruction you might read tells you that you dont need a remote server nor a domain. So why is that? Actually, these two things is provided by others. Let's take a look at this very good example github page.  
Every github page will provide you a domain like xxx.github.io. This domain is actually a sub-domain for github.io( all domain comes from back to front, normally you see them in the format of xxx.xxx, here you see aaa.bbb.ccc, you will know that is sub-domain for bbb.ccc). However, the subdomain actually does the same thing as normal domain, they all replace the complex ipv4.  
In the similar way github also provide the server, because you actually post your page data to repo in github, so the git is just like a server, it contains the resources, it could be managed by git, it could also managed by web.  
So no server implement is also have server and domain. 

### Frontend & Backend
Here we use a not strict definition here. As we talked before, open a website is: find the server, request the resources, get the resource and show them to users. In this process, backend is referring to when people find the server, backend will be that one to response to provide resources from server to people. And frontend is actually the resources, when the browser gets the resources, frontend code tells the browser how to manage the resources and show the web page to the user.

### Image Hosting Service
You put your resources in server, but that does not mean you have to get all your recourses from one server. FOr example for the pictures, you can post them on your server, but also you could use a image hosting service. So the images won't takes all your storage.

### Google Analytics & Other third party
Google Analytics are very easy to use tool for the website owner to do virtual analyses to learn about the usage of their website. Those service, including salesforce, are main source for data used for marketing campaign. They will gather data from people who visiting the website, normally they will get location info, time info and click info from the user. Web analytics are very big area, I like to recommend you to install it and try, it is totally free.  
And about installment of these kind of third party service is really easy. First you need to register in their website, and get a id to represent the data you will get from the page. Then you will ingest a code, which they will provided to you and the id together into your webpage, that's all. Then you just need to go back to their website to see the results and beautify charts.  

### RSS
RSS is a kind old stuff, but I still think it is cool. You could get a abstract from every posts in web in certain rule and put them all into one file. That file will increase when you write new posts. So other people by listen to the changes of this file to know that you provided new posts. They could use RSS reader to read the abstract of your posts and even open your post to read more. Creating RSS file is also very easy, you just need to make that file to public.   


---
---


## [我如何搭建这个blog系列](https://senlyu.com/blog/categories/How-I-Build-This-Blog/) 第二篇

这篇文章将面对新手，提供很多常识性概念。我一直认为必须要先明白你在做什么，为什么需要做这个，最后才是如何实现这个。当我还是一无所知的菜鸟的时候，很多blog上来就是第一步第二步就开始了，而我当时都不明白第一步第二步是什么。所以我这篇文章要先来写清楚这些问题。接下来我会以最简单的方式，来讨论很多常见的概念，争取做到与具体的实现技术无关，让读者明白到底blog是怎么来的。对于已有网络基础知识的人可以跳过。

### 网站基本
最简单的网站理解，网站是一个服务器上的资源。用户使用浏览器，打开了远程服务器上的资源，包括图片文字信息等。然后浏览器做一定的整合这些信息生成看到的网页。想象你打开一个MS Word，然后选择文件，打开你的一篇具体的文章。浏览器就像是MS Word，你输入的地址就是你想要打开的文件位置，有一点区别的就是，回车之后你就打开了服务器上的文件，而且你不能修改他网站上的文件，你只能看。

### 服务器
服务器就是一台远程的计算机。对它的访问不是通过链接usb的鼠标和键盘，而是通过网络信号。在这个服务器上面，你需要放上你的网页，并且将它们向所有人公开。这样所有人将可以通过网络访问这些内容（但他们不可以修改）。由此你的网站就可以被访问了。  
每一台在网络中的服务器，大部分都会有一个叫做ipv4地址的字符串，如果你租用别人的服务器，他们会给你这个地址，你可以将这个字符串理解为你的服务器全球唯一的名字。利用这个名字大家都可以找到这台服务器。而你利用这串数字就可以登录你的服务器。
当你购买了服务器之后，我强烈建议你阅读[这篇文章](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)来做最基础的设置。  
一般的服务器提供商有amazon的aws，MS的azure，还有一些你在翻墙指南中会听到的名字，比如Linode，Vultr，板瓦工。而我自己经常使用的是digital ocean。我觉得aws是最大的最普遍的提供商，我比较推荐。还有就是digital ocean，对新手很友好，教程很多。我这里也贴一下我的digital ocean的[refer](https://m.do.co/c/125ac30c26b9)  
我不建议购买国内的提供商，因为还要备案管理。国内比较有名的就是阿里云，腾讯云。

### 域名 & DNS
你的服务器ipv4就像是一串电话号码，很显然没几个人记得每个好友的电话号码，所以属于你的服务器的无逻辑的一串数字是不可能让人记得的，大家记得住都是baidu.com，qq.com，这样的网址。域名就是用来替代的，所以你需要买一个域名来代替。  
- 最大的域名提供商是godaddy，我目前在使用的是google domain。
- 国内的域名也一样不推荐因为备案原因。不过如果你想买.cn的就得考虑国内的域名提供商，比如阿里云。
- 当然有一些域名是免费的。比如Freenom旗下的有一些域名是免费的，免费域名挺适合新手作为练手使用。
有了域名接下来的任务就是将域名与你的服务器绑定。这个是通过修改DNS配置来操作的。有些情况下，域名提供商可能不提供具体DNS服务，你可能需要自己寻找免费的DNS解析提供商。不要着急，这里并不复杂。具体是添加一种叫做A记录的东西。一般提供商都会提供介绍如何操作，操作这里就不展开了。你可以理解整个DNS解析就是让整个世界知道你的域名是连接着你定义好的服务器的，不然他们还会以为你的域名跟没被购买一样，没有连接到任何的电话号码。

### SSL证书
现在的网站你可以看到多半有一个叫做证书的东西，那个就是ssl证书，它是用来加密网页信息的。想象一下，你向服务器请求的时候就像是在网上下单购物，快递员将你需要的网页，如同送快递一样送达你手里。如果没有ssl证书，就像没有包装盒，快递员一眼就看到你买的东西，虽然他每天运送几万个包裹，可能并不会感兴趣你的内容是什么，但你肯定不想他知道对吧。  
ssl证书有一个很简单的获得方式，是完全free的，叫做letsencrypt，有配套的教程非常方便，强烈推荐。

### 所谓无服务器搭建
我们可以看到一些教程说的不需要服务器的搭建，很多教程也说不需要域名。那到底是怎么一回事呢？其实他们是都提供了。举个最简单的例子，github page。  
github会提供给你一个类似xx.github.io的域名。这个域名其实是github.io的一个次级域名（域名都是从后向前的，一般只有两级xxx.xxx的形式，所以当你看到是aaa.bbb.ccc形式的域名，你就知道了其实是bbb.ccc的域名的次级域名）。但次级域名功能性上来说和一般域名是一致的，因为都是替代了“电话号码”——复杂的ipv4。  
同样的github其实也提供了服务器，因为你将会将你生成的页面数据提交到github的repo之中，而git其实就是一个服务器一样，存放着资源，只不过是以git的规则存放。所以一样可以用来作为网页内容来存放。  
所以无服务器搭建不是真的没有服务器没有域名，只是你在利用他们的改进来省力。

### 前端 & 后端
这里只讲一个不严谨的讲法。我们之前说了，浏览网站的行为就是，找到服务器，询问服务器的资源，获得服务器的资源，将资源展示给用户看。所以后端在其中的任务就是当有人找到了服务器，后端负责把资源交给那个人。而前端就是这些资源，当浏览器收到了这些资源，浏览器根据这些资源，生成用户看到的一切，所以前端指引着浏览器，生成最终用户看到的一切。

### 资源 & 图床
服务器上存放着资源，但这不代表你的网页中的资源必须从一个服务器上读取。比如说图片，你当然可以放在你的服务器上，同样的你也可以将图片放到其他的地方去存放（一般来说网页中最大的资源就是图片），有一种俗语叫“图床”就是形容这种图片存放服务。如果你的网站上的资源太多，而显得臃肿，你可以考虑使用图床。

### Google Analytics & 其他第三方服务
Google Analytics是一种很方便的数据统计可视化软件来帮助网页管理者查看网页的使用情况。这种服务还有saleforce等目前是市场运动很主要的工具和数据来源。他们通过收集访问网页的人的信息（位置信息，时间，点击内容等等）来分析网站。比如如何调整用户界面等等。web analytic是一个很大很新的一个市场，这里就不过多展开了，只是建议大家可以装一下体验一下。  
像这类的第三方服务安装有一种共同的方式。首先用户在对方平台注册，获得一个代表将来从我方网站上获取数据的标识。然后将网站上提供你给你的代码和这串标识合起来，插入到前端页面之中。这样就完成了，简单吗？之后就只需要在对方网站查看数据的结果就行了。

### RSS
RSS是一种比较老的东西，但我认为是非常有意思的技术，这里提一下。每个blog，将它的文章的摘要以一种固定方式生成一个文件。所以这个文件会随着你的文章数量越来越多而增长。而其他人通过有间隔的监听这个文件的变化而得知你的文章更新。其他人将会用rss阅读器了解文章的摘要，并且可以打开文章继续阅读。生成很容易，使用也只需要暴露这个文件即可。