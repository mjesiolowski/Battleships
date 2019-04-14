# Battleships
About the project:

As I have discovered some Object Oriented Programming lately, I decided to put my knowledge into practise. I must admit that it was challenging and demanding, but I managed to get it over with even before my deadline.

Let me show you through the project. It consists with three main classes:
- Statistics,
- Positioning,
- Rules.

The purpose of the Statistics class is to update player's statistics while playing the game (strikes, hits, checking if a ship is destroyed).

Then there is the Positioning class, it is more complex and contains many different functions. The basic concept of the class is to position ships on the board - to do so I created:
- an array with a ship type (the big one - 3 cells and the small one - 2 cells),
- a function to generate the first box\cell,
- a function to determine a ship position - horzizontal vs vertical,
- a function to verify if there is any conflict (ships cannot overlay, there must be at least one cell border between the ships), - - a function to set attributes in order to interact with DOM
- a function to render the ships and add them to the board.

The last but not least class is the Game class. It focuses on user interaction (such as alerts handlers) and contains two main features - setting the rules and setting interface actions. 

Game rules:
- there are three battleships - one carrier (3 boxes) and two destroyers (2 boxes), rendered randomly on the board,
- all battleships might be set either horizontally or vertically (one line),
- battlesips cannot touch each other (minimum one box must separate them)
- your task is to discover their location as quick as you can do

Technology:
HTTML5, CSS (Flexbox), OOP JS, RWD

https://mjesiolowski.github.io/Battleships/
