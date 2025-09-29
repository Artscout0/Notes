# Welcome to the notes

You can navigate pages by using the navigation bar on the side, or the sidebar if you're on the phone. 

## Modus Operandi

I write notes during lessons, typically in English but some French can get mixed in sometimes.

Through this, everyone can access them. If you notice an error, open an issue [here](https://github.com/Artscout0/Notes/issues), send me an [email](mailto:tomass.tribis@epfl.ch), text, or just tell me. Issues are preferred.

> [!info]- Additional information for manually helping
> If you can contribute to this, you can clone the repository, make a branch, and a pull request, and I'll then eventually review and maybe merge it. Branch name must be the topic of the edit.
> More detailed info in [[Help|here.]]

Don't rely only on this, I am not perfectly reliable for this sort of stuff. My recommendation is take your own notes, compare them with whatever I wrote here, and adjust accordingly. 

But do what you want, I can't exactly do anything about it.
## Relevant links

- [[Math|Math]]
- [[Physics|Physics]]
- [[What is ICS|ICS]]
- Chemistry will be added when relevant

## How this works

This uses 2 things, python and markdown.
Specifically, it uses the python library / tool mkdocs, that allows me to take markdown files and turn them into a website (well, kind of). To write down math formulas, this uses $\LaTeX$, specifically through the MathJax library.

From there on, I use github to host all of that, and put it on the internet (hence why the .github.io in the url)

To take the notes I used Obsidian.

## TODO

- [x] Add something to the CI/CD pipeline that'll translate potential Obsidian md into mkdocs md
- [ ] Automatic translations to french (and other languages as necessary) using some API
