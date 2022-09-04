---
title: "Catching Up"
poster: "THEONLYDarkShadow"
---

Greetings.

It has been some time since the last blog post, hasn't it? If anyone was only using this website to get information on updates to the project and not looking at the Git repository or Discord server, they might have thought development on R.E.L.I.V.E. had come to a standstill. Fortunately, that is not the case. Paul returned back at the end of 2021 and has been working alongside Mouzedrift and others on the continued development of not only R.E.L.I.V.E. but [a new level editor](/index.html#editor) designed to take advantage of the new capabilities of the engine. It's just that this website hasn't been updated for some time. That has changed recently with it getting a bit of an overhaul.

So much has happened since the last blog post that it would take forever to list every single little thing that has been added or changed, so instead here's an overview of what's happened since then:

### R.E.L.I.V.E.

- Many, *many* bug fixes.
- Most Abe's Oddysee corruption crashes should hopefully be fixed now.
- An autoplayer has been added which allows for recording inputs, gamestates, etc. to a file so it can be played back later to verify if anything has regressed after changing the code.
- The merging of Abe's Oddysee's and Abe's Exoddus' engines into a single unified engine, and the related refactoring work, has begun. Progress and details can be see on the [abi_break branch](https://github.com/paulsapps/alive_reversing/commits/abi_break) in the Git repository.

### Level Editor

- Added dark mode.
- Added support to display and create cameras.
- Added support to create cameras by dragging and dropping them into the editor.
- Added support to create foreground and background layer masks.
- Added support to export cameras.
- Added support to add objects and collisions.
- Added support to extend the path/map size.
- Added support to change the total amount of Mudokons/bad ending Mudokons/good ending Mudokons per path.
- Added support to create custom LCD Screen and Hintfly messages.
- Added support to connect collisions by distance.
- Added support to insert missing game resources into a level.
- Added support to launch R.E.L.I.V.E. when exporting a level for convenience when testing.
- Added shortcuts for various actions.
- Added new icons and actions to the toolbar.
- Added grid snapping to Abe's Exoddus, although Abe's Oddysee still needs some work.
- Added new icons for the map objects.
- Added JSON upgrader.
- The editor dynamically changes the map object icon depending on the object's properties (but only for a few objects).
- Renamed a bunch of object properties to better describe what they do.
- Collision line arrow size has been reduced.
- Some collision lines have been given a different colour based on their type.
- A multitude of bug fixes.
