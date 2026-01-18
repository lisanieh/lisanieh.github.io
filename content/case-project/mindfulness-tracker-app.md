---
title: "Mindfulness Diary: A Flutter-based Digital Intervention"
summary: "An interdisciplinary project merging psychological theories with Flutter development to help users track emotional fluctuations through guided meditation."
date: 2024-07-14
draft: false
;; image: /images/mind_journey/main.png
tags:
  - "Flutter"
  - "HCI for Mental Health"
  - "Data Visualization"
  - "Psychology"
---

## 1. Project Concept
Inspired by the **Psychology of Procrastination**, this app serves as a systematic tool for "Mindful Reflection." The goal is to help users bridge the gap between their emotional states and daily habits by visualizing their mental well-being through a data-driven approach.

## 2. User Journey & Core Interaction
My team and I designed a seamless three-stage workflow to minimize user cognitive load:
1.  **Check-in:** Users record their "Pre-meditation" emotional state.
2.  **Guided Practice:** An integrated audio interface guides the user through mindfulness exercises.
3.  **Reflect & Record:** Users record "Post-meditation" emotions and write a text-based journal to capture deeper insights.

<div class="row mt-5 mb-5 g-3">
  <div class="col-md-4">
    <div class="h-100 p-3 border rounded shadow-sm bg-white">
      <h6 class="text-primary fw-bold text-center">Step 1: Pre-emotion record</h6>
      <img src="/images/mind_journey/mood_before.png" class="img-fluid rounded mb-2" alt="mood before">
      <p class="text-muted small text-center" style="font-size: 0.8rem;">
        Recording emotional state before meditation.
      </p>
    </div>
  </div>

  <div class="col-md-4">
    <div class="h-100 p-3 border rounded shadow-sm bg-white">
      <h6 class="text-primary fw-bold text-center">Step 2: Meditation</h6>
      <img src="/images/mind_journey/meditation.png" class="img-fluid rounded mb-2" alt="meditation">
      <p class="text-muted small text-center" style="font-size: 0.8rem;">
        Guided mindfulness practice session.
      </p>
    </div>
  </div>

  <div class="col-md-4">
    <div class="h-100 p-3 border border-primary rounded shadow-sm bg-light">
      <h6 class="text-primary fw-bold text-center">Step 3: Post-emotion record</h6>
      <img src="/images/mind_journey/mood_after.png" class="img-fluid rounded mb-2" alt="mood after">
      <p class="text-muted small text-center" style="font-size: 0.8rem;">
        Recording emotional state after meditation.
      </p>
    </div>
  </div>

  <div class="col-md-4">
    <div class="h-100 p-3 border rounded shadow-sm bg-white">
      <h6 class="text-primary fw-bold text-center">Step 4: Mood Diary</h6>
      <img src="/images/mind_journey/diary.png" class="img-fluid rounded mb-2" alt="Mood Diary">
      <p class="text-muted small text-center" style="font-size: 0.8rem;">
        Writing down reflections in the journal.
      </p>
    </div>
  </div>

  <div class="col-md-4">
    <div class="h-100 p-3 border rounded shadow-sm bg-white">
      <h6 class="text-primary fw-bold text-center">Main Page</h6>
      <img src="/images/mind_journey/main.png" class="img-fluid rounded mb-2" alt="main page">
      <p class="text-muted small text-center" style="font-size: 0.8rem;">
        Swipe down to start meditation, swipe left to view diary, and swipe right to see mood charts. 
        User can also press the icons to navigate to other pages.
      </p>
    </div>
  </div>

  <div class="col-md-4">
    <div class="h-100 p-3 border rounded shadow-sm bg-white">
      <h6 class="text-primary fw-bold text-center">Mood chart</h6>
      <img src="/images/mind_journey/mood_chart.png" class="img-fluid rounded mb-2" alt="mood chart">
      <p class="text-muted small text-center" style="font-size: 0.8rem;">
        Two lines showing the pre and post meditation mood over time.
      </p>
    </div>
  </div>
</div>

The interface utilizes a **Gestural Navigation** system (Sliding transitions), allowing users to switch between meditation, emotional tracking, and journaling intuitively.



## 3. Data Visualization
To provide actionable insights, the app generates **Mood Charts**. These visualizations allow users to observe:
* Immediate emotional shifts post-meditation.
* Long-term trends in mental well-being over weeks or months.

## 4. Technical Challenge: State Management & Debugging
During the development of the **Calendar View**, I encountered a synchronization issue between the local database and the UI layer. 
* **The Issue:** Data retrieval latency caused a mismatch between the selected date and the displayed records.
* **Status & Diagnosis:** Currently, I have identified the bottleneck in the asynchronous data-fetching logic. While the production version is still under refinement, this challenge deepened my understanding of **State Management** in Flutter and the importance of robust database schemas in data-sensitive applications.

## 5. Reflection: Interdisciplinary Application
This project exemplifies the power of Computer Science as a tool for other disciplines. By digitizing the tracking methods used in psychological therapy, we can provide users with a clearer, more objective view of their inner growth. It was a rewarding experience to see how a mobile application could facilitate better mental health management.