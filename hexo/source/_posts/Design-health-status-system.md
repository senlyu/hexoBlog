---
title: Design-health-status-system
tags:
  - System Design
  - Chinese
  - English
date: 2022-02-18 16:36:34
---


# Design Chinese health code system 设计健康码

![](health-pic.png)

I found a very interesting post here: https://www.v2ex.com/t/834691  
Talking about design a [chinese health code](https://en.wikipedia.org/wiki/Health_Code)

### Feature
1. Large amount user could search for their health code status
2. Change user's health code to unhealthy code based on their time and location if they contact with other unhealthy code

### Requirement
1. User's health code change could happen with certain delay. ( If I contact with a unhealthy code people, I might get update to unhealthy code 1 day after )
2. Assume user need to show their health code to get into some place, which means that user's phone is always opening and providing their data to us. ( There will not be if people go to one place and we cannot get the data )

### Design
The whole system could be separate into 2(3) parts:
1. Part that support user check their own code. Heavy read.
2. Part that collect user's time and location data. Heavy write.
3. When time goes by, one certain range of data collected in part-2 will be complete. And according to requirement-2, we can assume all the data in that time range is in the database and no more to write in. That time we could get the data out and put into an offline batch process, where we will find all the unhealthy code's movement and get all contacted health code user. We could let automatic process or human administrate to determine the final code change.

### Summary
The design helps to separate the read, write, and online, offline, so each part could optimize itself. 


---
---


我发现一个很有趣的帖子：https://www.v2ex.com/t/834691  
提到设计健康码的问题。

### 功能：
1. 海量用户查询自己的码
2. 根据用户的时空查询是否接触黄码/红码用户而标红或者标黄用户
### 需求：
1. 更新查询过程可以存在一定延迟
2. 假设用户进入某些地方必须扫码，也就是说用户的时空间数据是比较实时的（不会有长时间停机不传数据的情况）

### 设计思路：
整个过程分为2（3）个大的部件：
1. 查询自己码。该部件为读远大于写
2. 收集用户时空信息。该部件为写远大于读
3. 当时间过去之后，从2中收集到的某一时间段的写已经全部完成，根据需求2可以认为该时间段所有信息已经录入，此时对这个时间段数据来说没有了写入，所以可以将数据取出来进入离线过程，收集红黄码用户位置，比对，从而获得所有交叉用户名单，由系统自动过程或者管理员决定是否写入1中的数据库

### 补充：
主要是将读写过程分离，将数据处理离线化，每个部分可以各自优化而不影响。
