<img src="https://shadowcrystal.org/logoAndName.png">

# FRC Team 11755 - SHADOWCRYSTAL ENGINEERING Website
This website is built on [Astro](https://astro.build.com), a modern web framework for markdown-based content. This means you get the performance of a static website with the advantage of `components`.
> Hosted using GitHub Pages/Actions (read the [Astro documentation](https://docs.astro.build/en/guides/deploy/github/)).

## Installation
[Node.js](https://nodejs.org/en) is required for npm package management. This repository uses Astro (as mentioned), Lenis for smooth web scrolling, and OGL for the "fluid" animation.

[Git](https://git-scm.com/) or [GitHub Desktop](https://github.com/apps/desktop) is required is contribute. This will not be explained here as there are many resources created for them.
> If you are on Windows you may need to change your [Execution Policy](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy).

Once you are in the repository using either Git clone or GitHub Desktop, you can run
```
npm install
npm run dev
```
to install any npm packages and run the site at [localhost](http://localhost:4321/) or directly on your computer.

## Contribution
To edit pages, you can look at the markdown (with the `md` extension) files at `/src/pages/`. To edit files, look anywhere in the `/src/` directory for styles, components, or layouts. The directory `/public/` includes image files and can be called on by `/example.extension`. Files with the extension `.astro` can use HTML and markdown combined.

Example file using current standards of our site.
```
---
layout: ../layouts/Layout.astro
title: FRC 11755
---

<div class="center">
    <img src="/logoAndName.png" alt="Logo and Name" width="1000">
</div>

# Welcome
# Hello, world!

<div class="card">
    <span>EXAMPLE</span>
    <span><a href="https://example.com" target="_blank" rel="noopener noreferrer">EXAMPLE</a></span>
</div>
```
> In the near future, we will turn the cards in `outreach.md` into a [content collection](https://docs.astro.build/en/guides/content-collections/) to easily add/move outreach events between AIRING, UPCOMING, and ARCHIVE folders. We will also add so called "blog posts" to maintain STEM impact in our community.

Once finished, use whatever Git tool is preferred to commit changes and then create a pull request if you are not a direct member of the organization/repository. If you are a direct member, you may push to `main`.

## Markdown Syntax
See [Markdown Guide](https://www.markdownguide.org/basic-syntax/) for more information. Markdown is close to plaintext files with a little bit of formatting added.
