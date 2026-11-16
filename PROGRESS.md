# Portfolio — Progress File (paste this at the start of a new chat)

Owner: Udhayachandrika S — final-year B.Tech AI & Data Science, VCET.
Style: periwinkle (#ADBFF2) + blush (#EACEDB) glass design, Outfit font, neat & clean, responsive.
Rule: change ONE section at a time, don't mess up working code, keep credits, give a zip + this file after each change.

## Structure (v2)
index.html — page shell + HOME text (edit directly)
css/  base, home, skills, projects, journey, creative, contact (.css)
js/main.js — navigation (dots, wheel, swipe, keys, #hash)
js/sections/ skills.js, projects.js, journey.js, creative.js, contact.js — each has an EDIT-ME data block at the top
assets/ profile2.png (user adds), crochet/, drawings/

## Sections (order)
1 About (home, same layout as before) · 2 Skills · 3 Projects · 4 Journey (was Experience) · 5 Creative Corner (hobbies) · 6 Contact

## v2.1 changes (latest)
- Section nav = small light animated lines on the right (no dots); active line stretches
- Skills redone: 4 ring cards (Graphic Design 82%, Data Analysis 75%, Professional 88%, Product Building – no %) with tool chips + "What I'm building" panel (FocBee in progress, VirchX idea stage — delete from BUILDING list in skills.js if she doesn't want them public) + Learning row
- Projects: Prev / small lines / Next controls at the BOTTOM; cards slide left/right; swipe + arrow keys
- Separate HTML pages per section: user will do it herself (instructions given in chat)
- NOTE: user does not know JavaScript and builds with AI tools — keep explanations simple; removed my earlier made-up JavaScript/API skill levels

## Done in v2
- [x] Home: same layout; text rewritten from her own summary (data + product + creative + entrepreneurship)
- [x] Skills: 4 data-driven cards (Data/BI, Graphic Design, Product Building, Professional) with per-skill bars; add unlimited cards/skills
- [x] Projects: auto-paginated (6/4/3 per page), vertical page dots + arrows on right, swipe/arrow keys
- [x] Journey: filterable timeline (replaces resume-style Experience) + goals + quick facts
- [x] Creative Corner: crochet gallery (7 pieces, photo placeholders, lightbox). Drawing/Stitching built but hidden (show:false) until photos exist
- [x] Contact: heading above form, name+email+message, working Send (mailto by default, Formspree optional)
- [x] Fixed: dot nav was accidentally commented out in old CSS; broken "1。771" character in LinkedIn icon

## To do / ask user
- [ ] Add assets/profile2.png, crochet photos (img paths in creative.js)
- [ ] Review skill % levels (placeholders — set honestly)
- [ ] Set Formspree id in contact.js if she wants inbox delivery
- [ ] Confirm project descriptions: "E-Commerce Sales Analysis" desc talks about a finance dashboard; Zetheta/CodeAlpha text was mixed up in old Experience (fixed)
- [ ] Next: user lists changes per section, one by one

## Facts to keep
Email udhayachandrika1075@gmail.com · GitHub Udhaya1075 · LinkedIn udhayachandrika-s-56aaa4294
Crochet: nazar chain, pencil stand, bow keychain, spiderman keychain, coin pouch, stress ball, hair band. Also draws (e.g. Zenitsu) and has stitched dresses.
Credits line stays in Contact footer.
