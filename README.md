# ⚡️ THND.ai ⚡️ Project Structure

Inside of our Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
│   ├── favicon/
│   └── images/
├── src/
│   ├── .obsidian/
│   ├── assets/
│   │   ├── img/
│   │   └── logo/
│   ├── content/
│   │   └── docs/
│   │       ├── resources/
│   │       │   ├── faq.md
│   │       │   └── litepaper.md
│   │       └── index.mdx
│   ├── pages/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## KEY Folder for anyone doing basic edits and updates to our pages on the site -

### :: src/content/docs/

 Starlight looks for all `.md` and `.mdx` files under the `src/content/docs/` directory.
  - File name `src/content/docs/index.mdx` is reserved and will always be set as the main page for the site.
  - Use folders for logical grouping by category - i.e.: if we were to add a blog to the site, we might add the folder `src/content/docs/blogs/`
  - Each additional file found in the `doc` directory, and sub-directories, is automatically included in the sitemap and exposed as a webpage based on its folder path and file name.

### :: src/assets/

 Images used in any Markdown page must be saved to this `assets`, typically under the `img` subfolder (and feel free to use sub-folder to keep images logically oganized as well ...hint-hint 😘).
  - When setting the embedded image link in Markdown you must use relative file paths.

### :: src/.obsidian

 This directory provides a preinitialized "vault" for Obsidian MD note app.
  - This is here merely for convenience for anyone who doesn't write code, but helps keep the MD files updated.
  [Obsidian](https://obsidian.md/) is handy-dandy, and widely used, Markdown note taking app which can easily handle all the basic Markdown stuff. 
  - There are only two plugins included (to keep things light-weight and simple):
    - `edit-mdx` - This enable compatibility with extended `.mdx` Markdown files used by Astro and Starlight
    - `obsidian-git` - This is simply to provide the ability to keep track of what has changed in the MD files directly within Obsidian.

### :: src/page/
 Use this directory to hold Astro and MDX files for special pages and page templates (used to build more complex pages when the site functionality is eventually expanded).

### :: public/
 Static assets, like favicons, etc. are located in the `public/` directory.  And if you happen to need to used ony of these in your MD doc, follow the same relative path rules as above.

 - e.g.: new doc -> `src/content/docs/blog/blog-007.md` needs to include image `src/assets/logo/thnd-logo-400.png`
   (p.s.: the text inside the square brackets `[]` is not required for images, as it is only there for image metadata and is not visible in the rendered page.)
 ```
 #### Check out my super-duper cool logo!  Isn't it so cool?
 ![My super cool logo](../../../assets/logo/thnd-logo-400.png)
 ```
 Which will look something like this:
#### Check out my super-duper cool logo!  Isn't it so cool? <br/> 
![](./src/assets/logo/thnd-logo_blk-on-wht.png)

<br/><br/>

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

<br/><br/>

## 🚀 Components, plugins, and general wish/ToDo items for future site enhancements ~

Add implementation tasks for items we adopt - i.e.: where impl, documentation, etc. - then remove from list once complete (or scrapped).

| Type | Item | Notes |
|:--|:--|:--|
| ToDo | Hdr/Ftr templates | Create header and footer template components that can be use with any/every doc without having to copy or enter all the doc properties for every new page. |
| Plugin | Tailwind | Provides enhanced style rendering with Mardown docs. (There is a native component as well as 3rd party plugin.) |
| Component | Markdoc | @astro/markdoc enhances use of Markdown with Astro and can help facilitates managing Markdown integration |
