---
title: "Multilingual Chat App for Caregivers"
subtitle: "A Flutter-based chat application facilitating communication between international caregivers and elderly patients through real-time translation and voice synthesis."
date: 2023-09-21
draft: false
image: /images/chat-app-cover.png
tags:
  - "Flutter"
  - "MySQL"
  - "API Integration"
---

### 1. The Challenge
In aging societies, international caregivers often face significant language barriers with elderly patients and their families. While general messaging apps exist, they lack integrated, low-friction translation tools tailored for elderly users and specific dialects like Taiwanese.

### 2. My Solution
I developed a cross-platform chat application using **Flutter** that integrates real-time translation and voice synthesis. 
* **Dual-Language Interface:** Users receive messages automatically translated into their native language (Mandarin, Taiwanese, Indonesian, or English).
* **Voice Integration:** Supports Speech-to-Text (STT) and Text-to-Speech (TTS) to assist elderly users who may have difficulty reading or typing.

### 3. Technical Implementation
* **Frontend:** Built with Flutter (Dart) for a responsive and accessible UI.
* **Backend:** Designed a **MySQL** database and implemented **PHP** APIs to manage real-time messaging and user data.
* **API Integration:** Integrated specialized Translation, STT, and TTS modules (developed by research lab) to handle multi-dialect conversion.
* **Modular Architecture:** Focused on creating reusable code modules for translation services to ensure system scalability.

### 4. Reflection & Impact
Through this project, I managed the full development lifecycle from database schema design to UI/UX implementation. Although formal user testing is pending, the project explores the critical intersection of language technology and inclusive design—a core interest of mine in the HCI field.