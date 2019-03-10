# Battleships
Game rules:
- there are four battleships - one carrier (3 boxes) and three destroyers (2 boxes), rendered randomly on the board,
- all battleships might be set either horizontally or vertically (one line),
- battlesips cannot touch each other (minimum one box must separate them)
- your task is to discover their location as quick as you can do

About the project:

As I have discovered some Object Oriented Programming basics lately, I decided to put my knowledge into practise. I must admit that it was challenging and demanding, but I managed to get it over with even before my deadline.

Let me show you through the project. It consists with three main classes:
- Statistics,
- Positioning,
- Rules.

The purpose of the Statistics class is to update player's statistics while playing the game (strikes, hits, checking if a ship is destroyed). That was the easiest part of the project.

Then there is the Positioning class, it is more complex and contains many different functions. I personally perceived this class to be the toughest one, but I made it with great success. The basic concept of the class is to position ships on the board, to do so, I created an array with ships' type (bigger or smaller) and then introduced multiple functions to draw a first box, horzizontal vs vertical draw, to verify if there's any conflict (two ships cannot overlay), to set attributes and eventually to render the ships and add them to the board.

The last but not least class is the Rules one. This was the most challenging part of the project. It focuses on user interaction and contains two main features - setting rules and setting interface actions. This class includes many advanced features as callbacks implementation, flags, "this" binding, events.

There is also mobile devie support in my project.

It was demanding and challenging, but in the end it was wort it. I have learnt a lot while making it!


https://mjesiolowski.github.io/Battleships/
