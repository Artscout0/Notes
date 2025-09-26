# How to help

## Setup

To write notes, you need 3 things:

1. A computer
2. git
3. A github account

This will allow you to clone [this](https://github.com/Artscout0/Notes) repository, and edit it. 

To do so, you'll have to run the following set of commands in a terminal (cmd, powershell, or bash, depending on if you're on windows or linux. If you're on mac, it should also work, but I can't test it so don't blame me.):

```bash
git clone https://github.com/Artscout0/Notes.git

cd Notes
```

This will create the Notes folder and put all the current information from the repo in there, and go inside it.

You can also install Python, a programming language required for MkDocs to work properly (you won't need to write a single line of it to edit anything here) using one of the following tutorials:

> [!info]- Windows
> Just use the microsoft store, it works well enough.

> [!info]- Linux
> On most distros it's installed by default, and if it isn't you're already technically savvy enough to install it yourself.

> [!info]- MacOS
> Go to [python's download site](https://www.python.org/downloads/), click on MacOS on the top section, and download the top installer (latest release). 

After that, you'll need to run another command:
```bash
python3 -m venv mkdocs-venv
```

Then things differ again for a bit depending on your OS:

> [!info]- Windows
> You'll have to run the commands:
> ```ps1
> .\notes-venv\Scripts\Activate.ps1
> .\notes-venv\Scripts\python.exe pip install -U pip
> .\notes-venv\Scripts\python.exe pip install -r requirements.txt
> ```
> That'll activate a virtual environment, that way it won't conflict with other python things you might do (because we have a programming lesson in CMS, and we're probably using it), and then installs all the dependencies for this project in said venv.
> > [!info]- To any people who already know how to do this
> >Yes, I know I'm not really supposed to always call back to the python in the venv, but I've had it happen a couple of times that it doesn't work and uses the global one anyways, so better safe than sorry.

> [!info]- Linux and MacOs
> You'll have to run the commands:
> ```bash
> source ./notes-venv/bin/activate
> pip install -U pip
> pip install -r requirements.txt
> ```
> This will activate the virtual environment we created in the step before, that way we won't have any conflicts with any other python and it's dependencies.

Afterwards, the entire project is ready. You are still inside the virtual environment however, and you might not want to be. In that case you can run the `deactivate` in the same terminal. You'll also exit it if you close it.
## Writing notes

As far as editing goes, you will need to edit the markdown files in the docs folder. 
To do so, you have many option.
For a smoother editing experience, [Obsidian](https://obsidian.md/) is recommended, just know that you'll need to give the filename a `# title` to make it work properly[^1]. You'll see what I mean.

There are a number of differences between the markdown used in Obsidian and MkDocs, so I've used a number of dependencies in the requirements.txt file to make it work. I'm also predicting that we'll need to make and use charts, so I've set up a way to use CanvasJS in both.

For an example on how to edit most documents and insert specific stuff in them, I provided [a test file](test.md), that shows how to insert most things in the text.

## Structure

The folder structure is as follows:
```tree
.
├───.obsidian                # can be ignored
│   └───plugins
│       └───canvasjs-plugin
├───js                       # can be ignored
├───math 
└───physics
... other subjects
```
Inside of math or physics, it should be broken down further into sections. For physics it's stuff like Newtonian mechanics or electromagnetism, for math it's stuff like analysis.

On the index page should be kept links to the pages useful for the next exam. Links must be relative, so likely something like 
```md
[electromagnetism](./physics/electromagnetism/index.md)
```
If the link works in obsidian, it works in mkdocs. Beware! the file is .md, and converted into .html automatically by mkdocs.

Inside every folder, is an index file (index.md) which provides a simple explanation of what the topic is about, and links to relevant topics.

At the end, it links to every sub-topic. For an example, look at physics and electromagnetism to be specific (they were completed in advance). 
Details are typically unnecessary, but can be added if they help the concept make sense.
Diagrams are appreciated.

A section about vocabulary and a glossary can be added if considered necessary. For physics they are mandatory, and should be structured like in the electromagnetism file.

## Check if it will work on the site

The advantage of the venv is that the environment is the same as that on the website.

To test if the markdown you wrote works on there, you can do the following:

(re)activate the venv.

>[!info]- reminder
>>[!tip]- windows
>> run the following command:
>> ```ps1
>> .\notes-venv\Scripts\Activate.ps1
>>```
>
>> [!tip]- linux or macos
>> run the following command:
>> ```bash
>> source ./notes-venv/bin/activate
>> ```

then you'll need to run a command, once again based on your OS.

> [!info]- windows
> ```ps1
> .\Scripts\python.exe -m mkdocs serve
> ```

> [!info]- linux or macos
> ```bash
> mkdocs serve 
> ```

Afterwards, you'll be able to see what the website will look like locally on port 8000 at [localhost:8000](http://localhost:8000/) Locally means locally, you can't access it (easily) from another device.

Be sure to check every page you've edited, and make sure it looks good, or at least decent enough.
If it doesn't, and changes you make in the markdown should be automatically reflected after a couple of seconds on the local website. It's a good idea to always edit with it open in the background or on a second monitor.
## Submit changes for review

Lastly, this is the most complex part.

You'll need to run some more commands, just replace "branch name" with a name depending on what you change (not very detailed, something like 'electromagnetism')
```bash
git checkout -b "branch name"

git add .

git commit -m "relatively detailed description of your changes"

git push origin "branch name"
```

That will create a new branch, with the data.

If the commit follows the [Angular Team Commit Specification](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines "https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines"), I would appreciate it.

If you later make any changes in the same files you edited here, before it got added to the official main version, re-run the last 3 commands. This can be done even after the pull request was made.

When you want to add it to that main version, you will then need to go to [github](https://github.com/Artscout0/Notes/compare) and create a pull request for the branch you just created.

This will prompt you to write a description and what not. Write a description as detailed as you can besides just writing the actual code, about the changes you made. It uses the same basic format as MkDocs and Obsidian.

I will then approve (or refuse) the request, and merge it (or not) with the main branch.

This should about cover the basics. If there are any questions, I'm expecting them.

[^1]: Obsidian is a neat platform, and it generally good for note taking, that's why I suggest it. Unfortunately, it's syntax differs a bit from mkdocs - material, which I am using for the website, but not enough for it to be too problematic most of the time