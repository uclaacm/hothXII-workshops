# HOTHXII Intro to AI

**Date:** February 15, 2025
**Teacher:** [Kian Shandi](https://github.com/kiankian)

Hi! Welcome to HOTHXI’s Intro to AI workshop! In this session, we’ll explore the fundamentals of what Artificial Intelligence (AI) is, how it differs from traditional algorithms, and how to integrate AI into your own projects using OpenAI’s API. Whether you’re new to AI or looking to understand how models like ChatGPT work under the hood, this workshop will help you get started. Let’s begin!

## Resources
- [Slides](https://docs.google.com/presentation/d/1cOiSs0vNcFFRZTClhkJq_YWT6JlMEuBMFGbDskELiQs/edit?usp=sharing)
- [Workshop Recording]()

## Overview of Topics
- [What is AI?](#what-is-ai)
- [AI vs. Algorithm](#ai-vs-algorithm)
- [Generative AI](#generative-ai)
- [How Does ChatGPT Work?](#how-does-chatgpt-work)
- [Setting Up Your Environment](#setting-up-your-environment)
- [Demo: Building a Recipe Suggestion Program](#demo-building-a-recipe-suggestion-program)
- [Next Steps](#next-steps)

## What is AI?
**Artificial Intelligence (AI)** is the evolving field of technology where computers simulate human thinking and decision-making. The idea is to enable machines to observe and learn from data, then make predictions or decisions without being explicitly programmed for every scenario. This can include everything from recommending recipes based on ingredients you have to generating entire images from text prompts.

### Where might you see AI?
- **Virtual Assistants** (Siri, Alexa, Google Assistant)
- **Recommendation Systems** (Netflix, YouTube, Spotify)
- **Chatbots** (Customer support, personal companions)
- **Computer Vision** (Self-driving cars, face recognition)
- **Natural Language Processing** (Translation, sentiment analysis)

## AI vs. Algorithm
An **algorithm** is a specific set of rules or instructions for solving a problem—think of a recipe for converting Fahrenheit to Celsius. You know every step. AI, on the other hand, uses **data, patterns, and probabilities** to adapt and make predictions. Instead of a fixed rule, an AI system “learns” the rules from large datasets and can handle more complex, less strictly defined tasks.

## Generative AI
**Generative AI** creates new content (text, images, audio, etc.) rather than just analyzing existing content. For example:
- **Image Generation:** Takes a text prompt and produces an image that never existed before.
- **Text Generation:** Takes a prompt and creates content ranging from short answers to entire articles.
Generative AI models operate by predicting what “token” (word or part of a word) comes next, using patterns observed in vast amounts of training data.

## How Does ChatGPT Work?
ChatGPT is powered by **Large Language Models (LLMs)**, which:
1. Break down your prompt into **tokens** (words or fragments of words).
2. Transform these tokens into **high-dimensional embeddings**, capturing semantic meaning and context.
3. Use a **self-attention mechanism** to figure out the relationships between tokens.
4. Predict the best next token, controlling creativity with a parameter called **temperature** (a higher temperature can lead to more “random” or diverse output).
These steps repeat until ChatGPT decides it has answered your query. The model’s “knowledge” comes from patterns it learned while training on massive text datasets.

## Setting Up Your Environment
Below are the recommended tools and packages for setting up an AI project with OpenAI, but feel free to adapt to what you’re using already!
- **Programming Language:** Python (3.8+ recommended)
- **Virtual Environment:** Isolate dependencies so your system-wide packages don’t conflict with project packages.
- **OpenAI API Key:** Sign up at the [OpenAI Platform](https://platform.openai.com/) and generate your API key. Keep it secret!
- **Terminal/Command Prompt**: For running your code

**Verifying Python Installation**  
Run:
```
python --version
```
If you see a version number (3.8 or later), you’re good to go! If not, download Python from [python.org](https://www.python.org/).
## Demo: Building a Recipe Suggestion Program
**Step 1: Create Your Project Directory**
1. Open up your terminal or command prompt.
2. Create a new folder for your project.
    ```
    mkdir HothAiDemo
    cd HothAiDemo
    ```
    
**Step 2: Create a Virtual Environment**  
1. Create and activate a virtual environment to isolate your dependencies.
```
python -m venv venv
```
- **Mac/Linux**: `source venv/bin/activate`
- **Windows (Command Prompt)**: `venv\Scripts\activate`
- **Windows (PowerShell)**: `.\venv\Scripts\Activate.ps1`

**Step 3: Install the OpenAI Package**  
2. With your environment activated, install OpenAI:

```
pip install openai
```

**Step 4: Write Your Python Program**  
3. Create a new file, for example `app.py`, and open it in a text editor. 6. Add the following code:

```python
from openai import OpenAI

client = OpenAI(api_key="<YOUR API KEY>")

Ingredients = input("What ingredients do you have?")
Preference = input("What do you feel like eating?")

completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": f"What meal can I make with the following ingredients: {Ingredients}, if I feeel like eating {Preference}?"},
    ],
    temperature=0.7
)

print(completion.choices[0].message.content)
```

**Step 5: Run Your Program**  
4. In your terminal, type (but replace `app` with the name of your file):

```
python app.py
```

5. When prompted, enter your ingredients (e.g., `tomatoes, cheese, and bread`) and press Enter.
6. You should see the AI’s recipe suggestion appear in your console!

## Next Steps
- **Experiment with Model Parameters**: Adjust `max_tokens`, `temperature`, or switch between models (e.g., `gpt-3.5-turbo`) for varied responses.
- **Explore Other AI APIs**: Image generation (DALL·E), speech-to-text (Whisper), etc.
- **Improve Your Prompt**: Add constraints like dish type, dietary restrictions, or desired cooking time.
Visit the [OpenAI Quickstart](https://platform.openai.com/docs/quickstart), and scroll down until you see **"Next Steps"**. There, you can find other ways to tweak your AI and build on your skills

## More Resources
- [OpenAI Documentation](https://platform.openai.com/docs/introduction)
- [Hugging Face Transformers](https://huggingface.co/docs/transformers) (for open-source LLMs)
- [Google](https://www.google.com/)
- ACM Hack Officers (as always, we’re here to help!)