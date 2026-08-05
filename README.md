<p align="center">
<img src="https://shadowcrystal.org/logoAndName.png" width="777">
</p>

<p align="center">
    <a href="https://discord.gg/qu7eRQJzgf" target="_blank" rel="noopener"><img height="30px" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"></img></a>
    <a href="https://www.youtube.com/@J.P.I.Derivative/videos/" target="_blank" rel="noopener"><img height="30px" src="https://img.shields.io/badge/Youtube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"></img></a>
    <a href="https://www.instagram.com/shadowcrystalengineering" target="_blank" rel="noopener"><img height="30px" src="https://img.shields.io/badge/Instagram-833AB4?style=for-the-badge&logo=instagram&logoColor=white"></img></a>
</p>

# FRC Team 11755 - SHADOWCRYSTAL Website
This website is built on [Astro](https://astro.build.com), a modern web framework for [Markdown](https://www.markdownguide.org/basic-syntax/)-based content. This means you get the performance of a static website with the advantage of `components`.
> Hosted using GitHub Pages/Actions (read the [Astro documentation](https://docs.astro.build/en/guides/deploy/github/)).

## Installation
[Node.js](https://nodejs.org/en) is required for npm package management. This repository uses [Astro](https://astro.build.com) (as mentioned), the package [Lenis](https://www.npmjs.com/package/lenis) for smooth web scrolling, and [OGL](https://www.npmjs.com/package/ogl) for the "fluid" animation.

[Git](https://git-scm.com/) or [GitHub Desktop](https://github.com/apps/desktop) is required is contribute. This will not be explained here as there are many resources created for them.
> If you are on Windows you may need to change your [Execution Policy](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy).

Once you are in the repository using either Git clone or GitHub Desktop, you can run
```
npm install
npm run dev
```
to install any npm packages and run the site at `localhost:4321` (accesible through a web browser) directly on your computer.

## Contribution
To edit pages, you can look at the [Markdown](https://www.markdownguide.org/basic-syntax/) (with the `md` extension) files at `/src/pages/`. To edit files, look anywhere in the `/src/` directory for styles, components, or layouts. The directory `/public/` includes image files and can be called on by `/example.png/` or at the `/` root directory. Files with the extension `.astro` can use HTML and [Markdown](https://www.markdownguide.org/basic-syntax/) combined.

An example [Markdown](https://www.markdownguide.org/basic-syntax/) file following our site's current standards.
```
---
layout: ../layouts/Layout.astro
title: FRC 11755
---

<div class="center">
    <img src="/logoAndName.png" alt="Logo and Name" width="1000">
</div>

# welcome
hello, world
> hello, world

<div class="card">
    <span>EXAMPLE</span>
    <span><a href="https://example.com" target="_blank" rel="noopener noreferrer">EXAMPLE</a></span>
</div>
```
> In the near future, we will turn the cards in `outreach.md` into a [content collection](https://docs.astro.build/en/guides/content-collections/) to easily add/move outreach events between AIRING, UPCOMING, and ARCHIVE folders. We will also include posts to show our community STEM impact.

Once complete, use the Git tool you selected to commit changes to `main`.

## Markdown Syntax
See [Markdown Guide](https://www.markdownguide.org/basic-syntax/) for more information. [Markdown](https://www.markdownguide.org/basic-syntax/) is close to plaintext with a little formatting included.
