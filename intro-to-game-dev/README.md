# Game Dev Workshop: Build a Game with PyGame at HOTH

## Intro
**Description:** This workshop covers the basics of Game Development using PyGame—Python’s powerful library for 2D games! Together, they provide the structure (game loop), the visuals (drawing and movement), and the interactivity (player controls) of a game. Make sure to watch the workshop video to learn how to use these tools to create a super fun game of your own, like “Dodge the Blocks”!

**Instructor:** Jaewook Cho

**Workshop Overview:**
- What is PyGame
- Setup for PyGame!
- Python Basics
- Game Dev Workflow
- Game Dev Demo
- Game Dev Tips for HOTH

## Resources
- [Slides](http://tinyurl.com/hoth-xi-gamedev)
- [PyGame Examples](itch.io/games/made-with-pygame)

## What is PyGame
PyGame is a Python library for creating 2D games.

In PyGame, you can create your own computer game world using a set of tools.

[Examples](itch.io/games/made-with-pygame) (*Why don't you try some games and gain inspirations!*)

## Setup for Pygame
In your terminal, type the following command

```python3 -m pip install pygame-ce```

Want to clarify if the installation was successful?
Try putting the following code on your python file and run it!

```import pygame```

## Python Basics
- **Operator:** lines of code that _do_ something
```
a = 10 # Set a to be 10
print("32") # Print 32
```

- **Conditional Statement:** line of code that _checks_ whether the statement is **true** or **false**
```
if condition:
  (operator) # operates this line if the condition is true
```

- **Loop:** line of code that _Repeatedly_ runs the operator
```
while condition:
  (operator) # Repeatedly operates this line as long as the condition is true
```

## Game Dev Workflow
**Idea:** _"What is your game?"_
- Define the type of the game
- Set the expected runtime of the game

**Setup:**
- Window, Player, Controls, etc.
  
**Build:**
- Mechanics of the game
- Movement, Obstacles, Gravity, etc.

**Test:**
- Test on controls, runtime, etc.

## Game Dev Demo
For the Game Dev Demo, please refer to the HOTH Workshop Video or the code

## Game Dev Tips for HOTH
- [PyGame Docs](pygame.org/docs) for more advanced techniques
- Follow the Game Dev Workflow (the previous section)
- Debug using ```print()```
