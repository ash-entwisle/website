export const BlogPosts = [
  {
    "slug": "homelab-1",
    "frontmatter": {
      "title": "An introduction to my homelab",
      "author": "Ash Entwisle",
      "link": "https://links.entwisle.dev",
      "date": "2024-02-23",
      "description": "An overview of my homelab setup, and the things I use it for.",
      "tags": [
        "homelab"
      ],
      "draft": false
    },
    "content": "\nFor the past 6 months, I have been playing around with my homelab setup \nthat has running some commonly-used services. \nBefore I go on, I want to say hi to all the hiring managers who actually read my cv lol. \n\n## Hardware\n\nMy homelab consists of a cheap mini-pc, my old pc, and a bunch of pi's. \nBit overkill for what I use it for, but it gives me the freedom to experiment. \nThese nodes and specs are listed below: \n\n- Pi-1 (Pi-4 8GB)\n- Pi-2 (Pi-4 4GB)\n- Lab (Ryzen 3100, 16GB RAM, 1TB SSD, Quatro K4200)\n- Mini-PC (Ryzen 7 7940HS(?), 32GB RAM, 2TB SSD)\n\n## Software\n\nThe pis run dietpi, the lab and the minipc run opensuse tumbleweed.\nSo far, the following services have been running on my homelab:\n\n- Jellyfin (Mini-PC, taking advantage of its iGPU with AV1)\n- NFS (Lab and Mini-PC, for storing my media and other files)\n- Minecraft Server (Mini-PC, for me and my friends to play on)\n\nAt some point, I will set up a forgejo instance to keep a local mirror of my repos. \nAdditionally, I want to set up a Headscale server on a VPS to allow me to remote in when needed.\n",
    "html": "<p>For the past 6 months, I have been playing around with my homelab setup \nthat has running some commonly-used services. \nBefore I go on, I want to say hi to all the hiring managers who actually read my cv lol. </p>\n<h2>Hardware</h2>\n<p>My homelab consists of a cheap mini-pc, my old pc, and a bunch of pi&#39;s. \nBit overkill for what I use it for, but it gives me the freedom to experiment. \nThese nodes and specs are listed below: </p>\n<ul>\n<li>Pi-1 (Pi-4 8GB)</li>\n<li>Pi-2 (Pi-4 4GB)</li>\n<li>Lab (Ryzen 3100, 16GB RAM, 1TB SSD, Quatro K4200)</li>\n<li>Mini-PC (Ryzen 7 7940HS(?), 32GB RAM, 2TB SSD)</li>\n</ul>\n<h2>Software</h2>\n<p>The pis run dietpi, the lab and the minipc run opensuse tumbleweed.\nSo far, the following services have been running on my homelab:</p>\n<ul>\n<li>Jellyfin (Mini-PC, taking advantage of its iGPU with AV1)</li>\n<li>NFS (Lab and Mini-PC, for storing my media and other files)</li>\n<li>Minecraft Server (Mini-PC, for me and my friends to play on)</li>\n</ul>\n<p>At some point, I will set up a forgejo instance to keep a local mirror of my repos. \nAdditionally, I want to set up a Headscale server on a VPS to allow me to remote in when needed.</p>\n"
  },
  {
    "slug": "homelab-2",
    "frontmatter": {
      "title": "An introduction to my homelab",
      "author": "Ash Entwisle",
      "link": "https://links.entwisle.dev",
      "date": "2026-11-06",
      "description": "An overview of my homelab setup, and the things I use it for.",
      "tags": [
        "homelab"
      ],
      "draft": false
    },
    "content": "\nWell... After like 3 house moves and a few years of not being able to run my homelab, \nI finally had the time to set it up :D. \nA lot of things have changed since, so I thought it would befun to do an update. \nAlso, hello again to all the hiring managers who actually read my cv lol. \n\n## Networking\n\nThe biggest change that I have now is mesh networking, \nThis has been a gamechanger living in a house with thin walls and a lot of interference.\nWe have TP deco pucks in every room, each connected to each other. \nOnce I have time, I do plan on doing a networking run between all my nodes in the mesh to have a more stable backhaul. \n\n## Hardware\n\nMy hardware hasnt changed much, the ram and storage shortage means I cant really upgrade stuff atm which is sad. \nIve also consolodated my nodes down to just the lab and the mini-pc, as I couldnt be arsed setting them up after the second move. \nPlus I dont really have a use for them anymore besides the odd project. \nNodes and specs are listed below: \n\n- Pi-1 (Pi-4 8GB)\n- Pi-2 (Pi-4 4GB)\n- Lab (Ryzen 3100, 16GB RAM, 1TB SSD, Quatro K4200)\n- Mini-PC (Ryzen 7 7940HS(?), 32GB RAM, 2TB SSD)\n\nI am saving to upgrade the lab to something more modern, and give it a shit ton more storage. \nJust need to find a good deal on 6 HDDs and a server case, then Ill be able to run a proper NAS. \nOnce I get that, ill set up raid with BTRFS, and use it to store stuff that isnt media.\nThe raid setup will be 4 disks in raid 10, one hot spare, and one cold spare.\n\n## Software\n\nThe biggest change is a switch to arch across the board. Both the lab and the mini-pc are now running arch. \nThe mini-pc has also taken on an extra role in my livingroom as a game station, \nrunning a ui similar to that of the steam deck so we can play games and watch stuff with ease. \nAdditional software hasnt changed: \n\n- Jellyfin (Mini-PC, taking advantage of its iGPU with AV1)\n- NFS (Lab and Mini-PC, for storing my media and other files)\n- Minecraft Server (Mini-PC, for me and my friends to play on)\n\nI will be setting up the forgejo instance and a headscale server once the price for ram and storage comes down.\n",
    "html": "<p>Well... After like 3 house moves and a few years of not being able to run my homelab, \nI finally had the time to set it up :D. \nA lot of things have changed since, so I thought it would befun to do an update. \nAlso, hello again to all the hiring managers who actually read my cv lol. </p>\n<h2>Networking</h2>\n<p>The biggest change that I have now is mesh networking, \nThis has been a gamechanger living in a house with thin walls and a lot of interference.\nWe have TP deco pucks in every room, each connected to each other. \nOnce I have time, I do plan on doing a networking run between all my nodes in the mesh to have a more stable backhaul. </p>\n<h2>Hardware</h2>\n<p>My hardware hasnt changed much, the ram and storage shortage means I cant really upgrade stuff atm which is sad. \nIve also consolodated my nodes down to just the lab and the mini-pc, as I couldnt be arsed setting them up after the second move. \nPlus I dont really have a use for them anymore besides the odd project. \nNodes and specs are listed below: </p>\n<ul>\n<li>Pi-1 (Pi-4 8GB)</li>\n<li>Pi-2 (Pi-4 4GB)</li>\n<li>Lab (Ryzen 3100, 16GB RAM, 1TB SSD, Quatro K4200)</li>\n<li>Mini-PC (Ryzen 7 7940HS(?), 32GB RAM, 2TB SSD)</li>\n</ul>\n<p>I am saving to upgrade the lab to something more modern, and give it a shit ton more storage. \nJust need to find a good deal on 6 HDDs and a server case, then Ill be able to run a proper NAS. \nOnce I get that, ill set up raid with BTRFS, and use it to store stuff that isnt media.\nThe raid setup will be 4 disks in raid 10, one hot spare, and one cold spare.</p>\n<h2>Software</h2>\n<p>The biggest change is a switch to arch across the board. Both the lab and the mini-pc are now running arch. \nThe mini-pc has also taken on an extra role in my livingroom as a game station, \nrunning a ui similar to that of the steam deck so we can play games and watch stuff with ease. \nAdditional software hasnt changed: </p>\n<ul>\n<li>Jellyfin (Mini-PC, taking advantage of its iGPU with AV1)</li>\n<li>NFS (Lab and Mini-PC, for storing my media and other files)</li>\n<li>Minecraft Server (Mini-PC, for me and my friends to play on)</li>\n</ul>\n<p>I will be setting up the forgejo instance and a headscale server once the price for ram and storage comes down.</p>\n"
  },
  {
    "slug": "readme",
    "frontmatter": {
      "title": "README.md",
      "author": "Ash Entwisle",
      "link": "https://links.entwisle.dev",
      "date": "2026-11-05",
      "description": "A quick introduction of myself :3",
      "tags": [
        "introduction",
        "about-me"
      ],
      "draft": false
    },
    "content": "# Hello World, I'm Ash! \n\nI'm a Post-Graduate Researcher who loves a lot of things, \nincluding (but not limited to): Rust, Linux, Mechanical Keyboards, Old CCTV Cameras, and Blue Ikea Sharks :3.\nI have an unhealthy obsession with TTRPGs and Markup Languages, \nfeel free to read about it in my [blog](https://entwisle.dev/blog). \n\n*You can also find me [here](https://links.entwisle.dev)!*\n",
    "html": "<h1>Hello World, I&#39;m Ash!</h1>\n<p>I&#39;m a Post-Graduate Researcher who loves a lot of things, \nincluding (but not limited to): Rust, Linux, Mechanical Keyboards, Old CCTV Cameras, and Blue Ikea Sharks :3.\nI have an unhealthy obsession with TTRPGs and Markup Languages, \nfeel free to read about it in my <a href=\"https://entwisle.dev/blog\">blog</a>. </p>\n<p><em>You can also find me <a href=\"https://links.entwisle.dev\">here</a>!</em></p>\n"
  },
  {
    "slug": "template",
    "frontmatter": {
      "title": "a-title",
      "author": "author",
      "link": "https://link.to.stuff",
      "date": "todays-date",
      "description": "tlde",
      "tags": [
        "tag1",
        "tag2"
      ],
      "draft": true
    },
    "content": "# Hello, World!\n\nlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.\n",
    "html": "<h1>Hello, World!</h1>\n<p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.</p>\n"
  }
] as const