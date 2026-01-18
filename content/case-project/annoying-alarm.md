---
title: "The Annoying Alarm"
summary: "A Raspberry Pi-based innovative alarm system that forces cognitive and physical engagement through modular Python architecture and sensor fusion."
date: 2024-07-24
draft: false
image: /images/projects/alarm-cover.png
tags:
  - "Physical Computing"
  - "Raspberry Pi"
  - "Python"
  - "Interaction Design"
---

## 1. Project Concept
The "Annoying Alarm" is designed to combat sleep inertia by requiring users to complete a series of **Physical** and **Cognitive** tasks. Unlike traditional alarms, it leverages environmental data and gamified challenges to ensure the user is fully awake.

## 2. System Architecture: Modular Integration

```shell
# command for Arduino
arduino-cli compile --fqbn arduino:avr:uno lcd_control
arduino-cli upload -p /dev/ttyACM0 --fqbn arduino:avr:uno lcd_control
python3 tmp_humi.py # temperature & humidity txt file
aplay alarm.wav 
python3 goodmorning.py # tells the weather and humidity
while true; do aplay alarm.wav; done &
python3 basketball.py # first physical task
ppid_of_aplay="$(ps xao pid,ppid,pgid,sid,comm | grep aplay | awk '{print $2}')"
kill $ppid_of_aplay
...
```

One of the core strengths of this project is its **Modular Software Architecture**. My team and I developed independent Python modules for 7 different hardware components, orchestrated by a central **Shell Script (.sh)**. 

### Hardware & Sensor Fusion:
* **Environmental Awareness:** DHT11 (Temp/Humidity) provides immediate context upon waking.
* **Physical Task:** Ultrasonic sensors detect successful "basketball shots" to ensure physical movement.
* **Cognitive Task:** Integrated Microphone and Voice Recognition (Speech-to-Text) for solving riddles.
* **Feedback Loops:** OLED, LCD, and Speakers provide real-time status and task instructions.
* **Mechanical Feedback:** Stepper motors used for physical interactions.


## 3. Interaction Workflow
The alarm follows a strict state-machine logic to prevent "snoozing":
1.  **Trigger:** Audio alarm + environmental report (Speaker).
2.  **Physical Challenge:** Ultrasonic-based basketball task (Ensures the user leaves the bed).
3.  **Cognitive Challenge:** Voice-activated brain teasers (Ensures mental alertness).
4.  **Verification:** Speech-to-text processing to validate answers before termination.

## 4. Technical Insight: Voice-Driven Alarm Customization
Drawing from my Multimedia Processing course, I implemented a custom **Audio Threshold Trigger**. The system monitors ambient decibel levels through the microphone; once the user's voice exceeds a pre-defined threshold during the cognitive task, the system automatically captures and saves that audio segment. This recording is then programmatically set as the **personalized alarm tone** for the next scheduled wake-up call, creating a unique behavioral feedback loop.

## 5. Reflection: The Power of Modularity
This project deepened my understanding of system integration. By using Shell Scripting to bridge multiple Python modules, I learned how to manage complex hardware ecosystems efficiently. This modular approach not only simplified debugging but also made the system scalable—allowing for easy addition of new "annoying" tasks in the future.