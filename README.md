# Ania Cojocareanu | Portfolio

A personal portfolio website for Ania Cojocareanu, UX/UI Designer, Graphic Designer & Content Creator.

Plain HTML/CSS/JS, no build step, no dependencies.

## Structure

```
index.html                          Home / About
contact.html                        Contact
work/dll-internship.html            DLL internship case study
work/idh-internship.html            IDH internship case study
work/international-experience.html  Sweden & Canada
work/group-projects.html            Graduation project + team work
work/individual-projects.html       Solo projects along the years
work/other-projects.html            Misc individual projects
css/style.css                       Shared design system
js/script.js                        Nav toggle, dropdown, scroll reveal
assets/img/                         Images
assets/cv/                          Resume PDF
```

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deployment

Deployed via GitHub Pages using the workflow in `.github/workflows/deploy-pages.yml`, which builds on every push to `main`. In the repo's **Settings → Pages**, set the source to **GitHub Actions** (one-time setup).
