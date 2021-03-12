---
title: Mumble
date: 2021-02-04 00:50:00
---

---

## Graceful exit || 安全退出
一晃这么久了更新这里，我也不想聊男人好难的话题，所以今天就来简单谈一谈安全退出机制。说真的我才刚刚接触到这个概念，之前我都是一个ctrl-c结束的。之前也对exit做过优化，比如
```javascript
process.on('STDINT', callback)
```
不过之前主要还是在做的是希望exit的命令能够传递到所有的child。所有的process能够执行```process.exit()```这样的命令。不过有一天运维同学问我现在程序是可以直接退出吗？我愣了，因为原来以为是可以的，但是其实发现是有漏洞的。我的message queue的模型，从一个message做完扔到另外一个message queue里面去，是必然会存在数据不同步的阶段。如果在那是执行了终止操作，那就会有问题了。虽然说切断的时机可能性微乎其微，因为没有原子性，我趋向于将两个操作尽可能在一起执行，但是依然是不稳定的。如今有了这个安全退出的概念，那么有些动作就是可以停止的，有些动作是不可以停止的。不可以停止的动作我的想法是上锁一样的结构，在进行操作的时候锁，离开的时候解锁，断开数据库一定要在解锁的情况下才能终止。这样就安全了，而且整个体系也完美了，我觉得完全没有逻辑漏洞了。哎泪眼汪汪，之前加了多进程支持之后加了错误重试，超时机制，错误处理。现在加上这个安全退出我觉得就完整了。

no english version tonight, I took the melatonin, so tomorrow I will wake up early and start this graceful exit implementation.


<div style="text-align: right">03-11-2021</div>

---

---

## Start work with junior developer on my project || 开始带新人
开始带新人，我兴奋之余诚惶诚恐。今日，是我工作整两年的日子。回忆刚来的时候，啥都不懂但是啥都不怕做。工作一年，我的具体代码能力应该是摆脱了初级阶段了。工作到一年半，自己完整的项目上线之后，虽然后续有bug重重，但是应该是翻过了一座山了，工程能力已经摆脱了初级阶段了。如今过了半年，其实也就是写设计文档更快了，没什么其他的突破。但是说要我来带新人，我觉得是很难的。类似刚刚浮出水面可以喘气的阶段，现在脚下又被一个人抓住。说实在的，我能给新人说什么呢？我啥都没有，所以要做的更好，压力更大了。但有压力也是刺激自己前进，我觉得也好。

Start to work with junior developer. I am exciting but also full of stress. And today is the day I start working for two whole years. I remember when I first joined the team, I knew nothing but tried to do everything I could do. After a whole year, I think my coding skill was over the entry-level requirement. After another half year, I think my engineer skill was over the entry-level requirement. Now, another half year passed, I dont have much improvement, maybe a little enhanced on designing development plans.   
But work with junior and provide some instruction are still too much for me. It feels like I try so hard to go over the water and start breathing, but suddenly someone under the water grab my feet. What can I say? I have nothing to instruct others, so I feel stress and worrying. But maybe the stress and worries will push me out of comfort zone and to a better place.

<div style="text-align: right">02-25-2021</div>

---

---

## Online Course in Feb Every Year || 每年二月学网课
2017年2月，我在Udacity上完成了Data Engineer的网课。2018年2月，我在Udacity在没有按时完成Deep Learning的网课，因为那一年我回家了一趟，错过了项目时间，要再学还要花钱，就算了。2019年2月我在Udacity完成了Front-End Developer的项目。2020年2月我工作压力很大。2021年2月，我完成了Udacity上C++的课程。估计是因为2月在外过年，比较孤独吧。

In Feb 2017, I finished Udacity Data Engineer Nano-degree. In Feb 2018, I took Udacity Deep Learning Nano-degree but not finished because I went back to China. In Feb 2019, I finished Udacity Front-End Developer Nano-degree. In Feb 2021, I finished C++ Nano-degree. I guess because Feb contains day for Chinese new year, I feel lonely when I am aboard.

<div style="text-align: right">02-19-2021</div>

---

---

## Untitled || 无题

好不容易搞起了blog，现在别人开始搞clubhouse了，感觉落后了几个时代。不过做起来了就继续做下去吧。  
最近为公司研究了一下第三方服务API接入的问题。看别人家的API文档真的是舒服，还有整套的SDK。我们自家的，对了我们自家是没有文档的。第三方离不开Oauth，不过Oauth的模式还是很容易的。  
最近一直在玩slay the spire。这个游戏太赌博了，一玩就不想停下来，因为赌徒心理，总觉得下一把可以。真的没啥技术含量，就是看运气抽不抽的到要的卡。  

Took me some time to build this blog, and yes, people start to get clubhouse.  I feel I have been left for decades. Since I have already started, I will keep going.  
These days, I research on third party connection. I was reading about other app's API documents. Those documents are really good, and they have SDK. So, for us... we dont have documents. Well third party connection will always come with Oauth, I spend some time learning Oauth, I found is not that difficult.  
And recently, I have been playing Slay The Spire. The game is a true gambling game, when I start I dont want to stop. These is no much tips/skills in the game, all about is the luck. 

<div style="text-align: right">02-10-2021</div>

---

## C++ Learning Short Summary || C++学习短评

真的环境真的是语言学习曲线里面最重要的一环。你想python ubuntu自带，pip安装。js，node一装完事，npm安装不用愁。  
这C++我真的是，从第一个项目开始花时间最多的地方就是装tmd的东西，ubuntu apt里面的cmake居然不是最新的，还要我去下载做ln。说实在的，我之前可能真的对linux系统了解很少，不知道一般安装文件是怎么样的，就是apt跑一下，现在都知道了。最麻烦的是有些包还要当场make，make还容易出问题。  
而且这些网课，为了吸引学生吧，其实在表现层做的太多了，项目的结果都是可视化的。看起来是很有意思，但其实没什么用，而且为了这些可视化你还不得不装很多东西。搞得一开始都是在装东西了。  
不过这也不是什么大问题，真实工作中安装东西的事情也不少。就算简单如nodejs我当初在配置开发环境这个环节也花费了一些功夫。

One of the most important component to consider the learning curve for programming language learning, is preparing the developing environment. For python, default in ubuntu, using pip to install modules. For JS, everything done when you installed node, npm will handle the rest.  
For C++, I hate to say that, from the first project, I spend most of my time installing stuff. Can you believe that I have to install cmake myself? Ubuntu apt dont support latest cmake, I have to use ln. To be honest, I only have few understanding of linux. I just use apt to install software. Thanks to the project, I know all. And some package even needs me to make it on my own.  
And, in order to get more students' attentions, these online courses, put much effect to make the result of the project looks good. Yes, virtually good. However, that actually just make your project looks nice, but that did nothing on your coding practice. And that's why I have to install opencv for the project, which took a lot of time.  
After all, I have to say that even I complained so much, This is not bad at all, in real life, when I am working, things like this do happen. Even when I using JS at my job, I spent a lot of time on preparing the development environment.

<div style="text-align: right">02-05-2021</div>

---

## Mumbling Starts || 呓语起源 

最近在学习C++，在翻看别人的blog的时候看到有人有这样一种简单的短文章记录的方式，放在一个网页中一点点写下去。我觉得这个形式很好，我平时有很多简短的话，不成文，无处安放，就放在这里吧。

I am learning c++ recently. When I was checking dev blogs, I found someone is using one page for all the spark of thoughts. I think this is a very good idea, because I always come up some words, but those words are too short to form a post and I cannot find a place to put them. Now I will have a place to put them.

<div style="text-align: right">02-04-2021</div>