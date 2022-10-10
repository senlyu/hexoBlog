---
title: Strange-Loop-2022-Notes
date: 2022-10-10 02:34:47
tags:
---

## TL;DR

I spent 3 days at the conference. The first day is more about academic work form professors and PhD students. The other two days are more about best practice in the industry world. The topics among AI, Distributed System, Advanced Tooling, Product Introduction and Personal Experiences.

I find conferences really help people to think out of the box. And I hope I joined Meta earlier and understand our own implementations so that I could have a deeper understanding of the problem and better compare solutions. 




## Research Topics:

### AI content generation: 

Generally, it gets more and more popular. However, the idea is already there. The topic is focused on the gaming content generation. Talk about the best practice of that. Talks about setup rules and how can make it generate more “comfortable” contexts for better game experience

### Breakbeats analysis

A topic talks about AI works in breakbeats(pieces background music used in songs). How the company could use that to better understand songs evolution and help them to get song’s patent fees

### Textual analyze on code

A talk about how people better understand what code from language-side of view is. And how this kind of thinking could provide people with a new way to understand our code pattern and code practice. Eg: 

- Trace is one pattern for people to understand the story, it is also a way we used to find bugs. 

- When we do bottom-up implementation, we always start from the central piece in the structure. This is reasonable from the language side



## Product Introduction

### Google’s universal IPC language: FIDL in fuchsia

A system very like thrift, but it is used in a deeper system, for IPC. Also doing the binding, so it will support different languages. And easy to extend to other languages.

### Workflow: 
A new way for making a durable system

- A practice that brings “transaction” in DB into service codes, easier for people to write concurrent code. It will be easier to do error handling. 

- The idea is to make actions more atomic. And for the actions that could change the states, make them idempotent

### Filibuster: 
An End to End test tool, more focus on testing error cases in end-to-end test cases, to help understand big system’s errors

Talk about in a big system, how end to end testing is needed especially for error cases. Those tests need to cover multiple failing situations.

### RLBox: 
A way to run native code in sandbox to avoid native code’s memory issues

- Talk about how native code is unsafe, and how many safe languages are built on them

- Try to run all the native code in the sandbox to make it safer.

- It is already used in firefox

- A way of coding, so it will be very easy and clear to add to exist system

### Akita software: 
{% youtube UJA4PGKny2k %}

A product/practice to add API listeners for developers to understand old systems. 

eBPF mode to add listeners to the APIs in the old system. And their product provides a solution to better understand the system based on those listeners.

### Shopify solution for flash sale: 
{% youtube J3uUpEC_K78 %}

solution in both LB layer and service layer to ensure capacity, starvation and fairness problem

Very good topic to talk about flash sale, talked very detailed about how they choose from different solutions. 

### Runtime Checker: 
{% youtube FI1atZ6wRoQ %}

Java best practice to enhance system in observation, watchdogs and in prod regression tests

- Very good talk about why we need runtime checker in system, and why sometimes even current wide used system could have bugs

- Talk about fix them in three topics

- In observation, the idea is that using some static code analysis tools, to find those errors handled locally but not reported to any response. 

- In watchdog, talks about better catch errors, so the errors could report those error into some monitoring system

- In tests, define some testing rules to describe the system, and when running the test to verify whether those rules are still valid. (like behaviors testing along the workflows)

### WNFS: 
{% youtube -f4cH_HQU4U %}

a guide on creating a local-based encrypted file system

- Talks about how to create a good file system, including files and directory. And how to keep the history and how to merge versions

- Also, talks on how to encrypt those files


## Coding Best Practice:

### Polymorphism: 
different language, different solutions for better polymorphism: Overloading, Override, Interface, Parametric, Structure, Union type, ADT, Multiple dispatching…


### Python Performance: scalene
{% youtube vVUnCXKuNOg %}
