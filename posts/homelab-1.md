---
title: "An introduction to my homelab"
author: "Ash Entwisle"
link: "https://links.entwisle.dev"
date: "2024-02-23"
description: "An overview of my homelab setup, and the things I use it for."
tags: ["homelab"]
draft: false
---

For the past 6 months, I have been playing around with my homelab setup 
that has running some commonly-used services. 
Before I go on, I want to say hi to all the hiring managers who actually read my cv lol. 

## Hardware

My homelab consists of a cheap mini-pc, my old pc, and a bunch of pi's. 
Bit overkill for what I use it for, but it gives me the freedom to experiment. 
These nodes and specs are listed below: 

- Pi-1 (Pi-4 8GB)
- Pi-2 (Pi-4 4GB)
- Lab (Ryzen 3100, 16GB RAM, 1TB SSD, Quatro K4200)
- Mini-PC (Ryzen 7 7940HS(?), 32GB RAM, 2TB SSD)

## Software

The pis run dietpi, the lab and the minipc run opensuse tumbleweed.
So far, the following services have been running on my homelab:

- Jellyfin (Mini-PC, taking advantage of its iGPU with AV1)
- NFS (Lab and Mini-PC, for storing my media and other files)
- Minecraft Server (Mini-PC, for me and my friends to play on)

At some point, I will set up a forgejo instance to keep a local mirror of my repos. 
Additionally, I want to set up a Headscale server on a VPS to allow me to remote in when needed.
