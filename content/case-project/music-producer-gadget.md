---
title: "Music Producer Gadget"
subtitle: "A physical rhythm game device built with PIC18, featuring real-time LED synchronization and memory-optimized music synthesis."
date: 2024-01-10
draft: false
image: /images/projects/music-gadget-cover.png
tags:
  - "Embedded Systems"
  - "PIC18 Microcontroller"
  - "Data Optimization"
---

## 1. Project Overview
Inspired by rhythm games like *Deemo* and *Cytus*, our team physicalized the experience into a custom-built gaming device. The machine features an **8x12 LED matrix** that displays falling notes. Players must strike physical buttons at the precise moment to trigger the corresponding frequency from a speaker, effectively "performing" a musical piece.

## 2. Technical Challenge: The 48x Memory Optimization
The most significant challenge was fitting four distinct songs into the **PIC18 microcontroller**, which has a limited **RAM of only 1536 bytes**. 

### The Initial Bottleneck
Originally, we attempted to store the game data as visual frames for the LED matrix (a 2D matrix storing every frame's light state). This resulted in over **4,000 bytes per song**, far exceeding the hardware limits.

### The Optimization Strategy
I led the pivot from a **visual-based storage** to a **note-based data structure**. By analyzing the core elements of music (pitch and rhythm), we:
* Deconstructed songs into 96 distinct beats.
* Mapped each beat to a single-dimensional array storing only the frequency parameter or a null value for silence.
* **Result:** Reduced the memory footprint per song by **48 times**, allowing all four difficulty levels to fit comfortably within the RAM.

## 3. Implementation Details
* **Audio Synthesis:** Managed PWM (Pulse Width Modulation) to control the speaker frequency, ensuring low-latency audio feedback when buttons were pressed.
* **System Integration:** Resolved hardware interference between the motor (difficulty selection) and the LED/Speaker triggers through state-parameter tracking.
* **Version Control:** This was my first project utilizing **Git** for collaborative development, which was crucial for debugging compatibility issues between modular components.

## 4. Reflection
This project taught me the importance of viewing technical constraints as creative opportunities. By re-evaluating how data is represented, we achieved high playability on limited hardware. The device was highly praised by peers for its responsiveness and immersive tactile feedback.