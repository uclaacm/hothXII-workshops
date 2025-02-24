# HOTH XII Intro to Scripting

**Date:** February 21, 2025  
**Teacher:** [Daniel Zhou](https://github.com/danielhzhou)

Hi! Welcome to **HOTH XII’s Intro to Scripting** workshop! In this session, we’ll explore the fundamentals of scripting—what it is, how it differs from traditional programming, and when it’s useful. We’ll then walk through setting up Python, using Jupyter Notebook, creating virtual environments, and building a simple **web scraper** that handles multiple pages. By the end, you’ll have the core skills to automate tasks and gather data from websites with Python scripts. Let’s dive in!

---

## Resources
- **Slides**: [Intro to Scripting Slides](https://tinyurl.com/scripting-slides)  
- **Workshop Recording**: 

---

## Overview of Topics
- **What is Scripting?**
- **Scripting vs. Programming**
- **Pros and Cons of Scripting**
- **Setting Up Python & pip**
- **Jupyter Notebook**
- **Creating a Virtual Environment**
- **Web Scraping 101**
- **Demo: Building a Multi-Page Web Scraper**
- **Next Steps**

---

## What is Scripting?
Scripting refers to writing code that’s interpreted line-by-line rather than compiled into a single executable program. You can think of a script as a list of commands you’d run in a terminal, but collected into one file to automate tasks.

- Scripts are used for automation, data processing, quick prototyping, and more.
- Popular scripting languages include Python, JavaScript, Ruby, and Bash.

---

## Scripting vs. Programming
All scripting is programming, but not all programming is scripting.

- **Scripting**: Typically interpreted, offering quick development for small-to-medium automation tasks.  
- **Compiled Programming**: Requires a separate compile step, often faster and more scalable for large or performance-critical applications.

---

## Pros and Cons of Scripting
**Pros**  
- **Rapid Development**: No compile step—just write and run.  
- **Easy to Learn**: Many scripting languages (like Python) are beginner-friendly.  
- **Great for Automation**: Ideal for repetitive tasks or quick data analysis.

**Cons**  
- **Performance**: Interpreted code can be slower than compiled code.  
- **Less Strict**: Dynamic typing can lead to runtime errors if you’re not careful.  
- **Not for Everything**: Extremely large or high-performance projects may be better in compiled languages.

---

## Setting Up Python & pip
1. Download [Python](https://www.python.org/downloads/) from the official website and confirm it is installed. 
```bash
python --version
```
2. Verify you have pip (Python’s package manager) available for installing libraries.  
3. Install the necessary dependencies for scripting, web scraping, and interactive notebooks.
```bash
pip install requests beautifulsoup4 jupyter
```

---

## Jupyter Notebook
**Jupyter Notebook** is a web-based environment for writing and running code interactively.

1. Launch Jupyter Notebook, which opens in your browser.
```bash
jupyter notebook
```
2. Use cells that can be either code or markdown for mixed documentation and execution.  
3. An ideal tool for data exploration, experiments, and demonstrations.

---

## Creating a Virtual Environment
A virtual environment isolates dependencies so they don’t conflict with system or other project libraries.

1. Create an environment using a Python command.
```bash  
python -m venv myenv
```
2. Activate it depending on your operating system.  
Mac/Linux: 
```bash
source myenv/bin/activate
```
Windows: 
```bash
myenv\Scripts\activate
```
3. Deactivate when you’re finished or moving on to a different project.
```bash
deactivate
```
---

## Web Scraping 101
Web Scraping involves extracting data from websites automatically. We’ll use:
- A tool to fetch webpages.  
- A library for parsing HTML and locating elements like titles or prices.

### Ethical & Polite Scraping
- Check site rules and respect `robots.txt`.  
- Use delays between requests to avoid overwhelming servers.  
- Only scrape publicly accessible data.

---

## Demo: Building a Multi-Page Web Scraper
1. Ensure you have the dependencies installed for fetching webpages and parsing HTML.  
2. Open a Jupyter Notebook to create a basic script that handles multiple pages.  
3. Extract relevant data, like titles or prices, from the webpage’s structure.  
4. Save your results in a format (like CSV) for further analysis or storage.

---

## Next Steps
- **Scrape More Pages**: Adjust your approach to scrape the entire site if permissible.  
- **Extract More Fields**: Capture additional data like ratings, availability, or images.  
- **Pagination Logic**: Detect a “Next” link dynamically instead of using a fixed page range.  
- **Data Analysis**: Explore libraries for manipulating or visualizing the scraped data.  
- **Deployment**: Schedule your scraper to run automatically on a set timetable.

---

**Happy Hacking!**  
Thank you for joining **HOTH XII’s Intro to Scripting** workshop—now you have the basics to automate tasks and gather data from the web. Keep exploring, experimenting, and building new projects!