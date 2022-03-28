# Calculator

A Javascript calculator performing basic maths operations in day and night modes (+ , - , *, /).

# Live link:

https://ana-rose.github.io/calculator/

Current screenshots:

![image](https://user-images.githubusercontent.com/100544932/159833548-a79d12eb-0c7f-4cd7-ad01-e5623a9e202e.png)

![image](https://user-images.githubusercontent.com/100544932/159833642-e281eb80-80fa-4564-85fe-231a88ec5238.png)

# Design inspiration 

<img width="766" alt="my-calc" src="https://user-images.githubusercontent.com/100544932/159833677-65e9f391-41b2-48b5-9a9c-c2fd41358779.PNG">

# Implementation steps

1. Creating HTML structure
2. SCSS styling 
3. Implementing day/night modes switch
4. Making pressed number buttons display numbers on the "screen" via Event Listener. Total number of digits is limited to 10.
5. Creating an Event Listener for operator buttons (+, -, *, /). Making sure that the only operator that can be displayed prior to a number is "-", at the same time also excluding the following options: "-+", "--", "-* and "-/".
6. Targeting the reset button
7. Equals button Event Listener. Accessing the strings from previous steps and converting them into numbers. Specifying scenarios for different operators, including the situation when "=" has been pressed prior to an operator button.
8. Handling decimal numbers and limiting a number of decimals up to 5. 
