---
title: "A Simple fundamental of learning  Physical AI"
description: "Expand on the fundamental concepts of Physical AI with a basic hands-on example."
---

# A Simple 'Hello World' in Physical AI

In the previous lesson, we introduced the concept of Physical AI. Now, let's delve a bit deeper into what a "Hello World" example truly means in this context. Unlike purely software "Hello World" programs that just print text, a Physical AI "Hello World" often involves a simple interaction with a simulated or real physical environment.

## 🧠Core Concepts

A "Hello World" in Physical AI demonstrates:
*   **Perception**: Receiving input from a sensor or simulated sensor.
*   **Decision**: A very basic logical step based on that input.
*   **Action**: An output that affects the physical world (or a simulation of it).

Consider the simple sensor reading example from the previous lesson. It demonstrates these three core concepts. The "system idle" or "activating cooling system" messages are the "action" part, simulating a physical response.

## Hands-On Example

Let's refine our "Hello World" example slightly to focus on a binary decision based on sensor input.

```python
# simple_physical_ai_action.py
import time
import random

def get_light_sensor_value():
    """Simulates reading from a light sensor (0-100, 100 being brightest)."""
    return random.randint(0, 100)

def control_light_switch(light_value):
    """Simulates controlling a light switch based on light sensor value."""
    if light_value < 30: # If it's dark
        print(f"Light sensor reads {light_value}. It's dark. Turning ON room lights.")
    else:
        print(f"Light sensor reads {light_value}. It's bright enough. Room lights are OFF.")

if __name__ == "__main__":
    print("Automated Room Lighting System Initialized.")
    for i in range(5):
        current_light = get_light_sensor_value()
        control_light_switch(current_light)
        time.sleep(1) # Check every second
    print("Automated Room Lighting System Shutting Down.")
```

### How to Run

1.  **Save the code**: Save the above code as `simple_physical_ai_action.py` in your local environment.
2.  **Open a terminal**: Navigate to the directory where you saved the file.
3.  **Run the script**: Execute the command `python simple_physical_ai_action.py`.

Observe how the system simulates turning lights on or off based on a simulated light sensor. This is a rudimentary form of Physical AI, where a simple "brain" (the `if/else` logic) interacts with a "body" (the light switch) based on "sensory input" (the light sensor).
