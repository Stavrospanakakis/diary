# Diary of a Web Developer
[![Author](https://img.shields.io/badge/Author-Stavrospanakakis-green)](https://stavrospanakakis.com)
[![LICENCE](https://img.shields.io/apm/l/vim-mode?color=blue)](https://github.com/Stavrospanakakis/diary/blob/dev/LICENSE)

Diary of a Web Developer is my personal blog where I write about my thoughts and experiances on Web Development. Built using GatsbyJS, GraphQL and TailwindCSS. The reason I chose GatsbyJS is because I wanted to practice in React and TypeScript. 

## Use as template
It is not developed as a template but if you want to use the theme follow the instructions below:

### Run 

- Fork and clone the repository
- Open GatsbyJS and Tailwind CSS documentation 

#### Requirements

You need to install:
- Nodejs, npm, yarn
- GatsbyJS

Run:
```
$ yarn
$ yarn start
```

#### Testing

Run:
```
$ yarn test
```

### Edit data

Remove all the posts in the **posts** folder and add your own in the following format:

```
path: '/this-is-the-path-of-the-post'
date: '2020-08-14'
image: 'image.jpg' # add the image src under static folder
title: 'This is the title of the post'
description: 'This is the description of the post'
tags: ['these', 'are the', 'tags']

<p>Then, you write the html of the post here</p>
```

Go to the **src/data** and replace my data with yours in the .ts files.

## Future work
I wanted to keep the blog simple so I did not add many features. In the future I might add:
- Post Categories
- Related Posts
- Navigation through the posts

If you want to contribute / add features / improve theme feel free to contribute.
