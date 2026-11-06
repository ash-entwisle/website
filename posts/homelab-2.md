---
title: "An introduction to my homelab"
author: "Ash Entwisle"
link: "https://links.entwisle.dev"
date: "2026-11-06"
description: "An overview of my homelab setup, and the things I use it for."
tags: ["homelab"]
draft: false
---

Well... After like 3 house moves and a few years of not being able to run my homelab, 
I finally had the time to set it up :D. 
A lot of things have changed since, so I thought it would befun to do an update. 
Also, hello again to all the hiring managers who actually read my cv lol. 

## Networking

The biggest change that I have now is mesh networking, 
This has been a gamechanger living in a house with thin walls and a lot of interference.
We have TP deco pucks in every room, each connected to each other. 
Once I have time, I do plan on doing a networking run between all my nodes in the mesh to have a more stable backhaul. 

## Hardware

My hardware hasnt changed much, the ram and storage shortage means I cant really upgrade stuff atm which is sad. 
Ive also consolodated my nodes down to just the lab and the mini-pc, as I couldnt be arsed setting them up after the second move. 
Plus I dont really have a use for them anymore besides the odd project. 
Nodes and specs are listed below: 

- Pi-1 (Pi-4 8GB)
- Pi-2 (Pi-4 4GB)
- Lab (Ryzen 3100, 16GB RAM, 1TB SSD, Quatro K4200)
- Mini-PC (Ryzen 7 7940HS(?), 32GB RAM, 2TB SSD)

I am saving to upgrade the lab to something more modern, and give it a shit ton more storage. 
Just need to find a good deal on 6 HDDs and a server case, then Ill be able to run a proper NAS. 
Once I get that, ill set up raid with BTRFS, and use it to store stuff that isnt media.
The raid setup will be 4 disks in raid 10, one hot spare, and one cold spare.

## Software

The biggest change is a switch to arch across the board. Both the lab and the mini-pc are now running arch. 
The mini-pc has also taken on an extra role in my livingroom as a game station, 
running a ui similar to that of the steam deck so we can play games and watch stuff with ease. 
Additional software hasnt changed: 

- Jellyfin (Mini-PC, taking advantage of its iGPU with AV1)
- NFS (Lab and Mini-PC, for storing my media and other files)
- Minecraft Server (Mini-PC, for me and my friends to play on)

I will be setting up the forgejo instance and a headscale server once the price for ram and storage comes down.
