
export default function motd() {
    let motds = [
        "\"Hello, World!\"",                                                                                    
        "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",                               
        "A wood chuck would chuck as much wood as a wood chuck could chuck if a wood chuck could chuck wood.",  
        "Learning WASM...",                                                                                        
        "stack overflow => ctrl + c => ctrl + v",                                                               // average programmng workflow
        "I'm a software developer, not a magician.",                                                            
        "Trans Rights !!",                                                                                      // should be obvious       
        "I Hate Mondays",                                                                                       // yes I am orang cat that eat lasag
        "Rust is Love, Rust is Life",                                                                           // rust my beloved <3
        "areeee teeeee effffff emmmmm",                                                                         
        ":(){:|:&};:",                                                                                          // fork bombs yr machine (cutely)
        "sudo rm -rf /* --no-preserve-root",                                                                    
        "Hater of JS",                                                                                          
        "TypeScipt is just a bandaid",                                                                          
        "I use Arch btw",                                                                                       // an obligatory statement     
        "you gotta be crazy to use modal editors... I speak from experience",                                   // me editing this in helix be like
        "modal editing is the future",                                                                          
        "DROP table Production;",                                                                               // gitlab be like
        "The only good ammount of JavaScript is no JavaScript",                                                 
        "Why use JS, when you can use Rust?",                                                                   // rust my beloved <3  
        "U w U",                                                                                                
        "according to all known laws of aviation, there is no way a bee should be able to fly",                 // its wings are too small to get its fat little body off the ground
        "somebody once told me the world is gonna roll me",                                                     // I ain't the sharpest tool in the shed
        "me when css: (╯°□°)╯︵ ┻━┻",                                                                           // POV: a backend dev trying to style a button
        "It works on my machine ¯\\_(ツ)_/¯",                                                                   // me in db&n
        "LGTM !!",                                                                                              
        "when someone pushes directly to main: ಠ益ಠ",                                                           
        "I'm not a robot",
        "404: Motd not found",
        "You like Jazz?",
        "Skibidi bop mmm dada",
        "https://youtu.be/dQw4w9WgXcQ",
        "https://youtu.be/QH2-TGUlwu4",
        "https://youtu.be/9bZkp7q19f0",
        "https://youtu.be/30FTr6G53VU",
        "when can I rewrite this in Rust?",
        "Are you a Robot? 🗹",
        "yay -S uwufetch",
        "503: MOTD unavailable",
        "I am a Teapot",
        "TOKIOOOOOOOOOOOOOO !!!",
        "42",
        "Titanfall 2 on hyprland is a buggy mess",
        "Titanfall 2 is love, Titanfall 2 is life",
        "There is a bug in my code. dear Liza, dear Liza",
        "There is an XKCD for that",
        "The errors are red, my screen is blue. Please help me, I've Deleted System32",
        "Ash Wuz Ere",
        "Im running out of ideas for these, feel free to email me some suggestions",
        "beware of the pipeline...",
        "Ubuntu => Debian => Manjaro => Arch => NixOS",
        "Have you heard?",
        "The bird is the word",
        "The quick brown fox jumps over the lazy dog",
        "He's dead, Jim",
        "He's a funkeh duck",
        "Its life Jim, but not as we know it",
        "I'm a leaf on the wind",
        "c\'est la vie",
        "I see the crystal raindrops fall",
        "Ive got no grey poupon",
        "BRB, rewriting this in Rust",
        "C# === Microsoft Java",
        "C++ is just C with classes",
        "C++ is like an onion, it has layers and the more you peel the more you cry",
        "UseEffect, more like UseFootGun amirite?",
        "The Cake is a Lie",
        "0100 0101",
        "Birds of a feather we flock together, if we got a problem, we talk together",
        "lets go down south to escape the bad weather, woo hoo woo hoo",
        "I have the high ground",
        "Hello There",
        "It makes us harder, the struggle continues",
        "Dont hate the player, Dont hate the game, hate the troop man we take all blame",
        "[insert gif of low poly 3d rat rotating]",
        "born to :3, forced to :/",
        "heat from fire?",
        "fire from heat!",
        "posture check",
        "hydration check",
        "[toothless dancing to driftvale city]",
        "proot",
        "proot dot dev",
        "toaster go brrrr",
        "laughs in toaster",
        "toaster",
        "mmmmmm ram",
        "nixos looks cool... i need to try it sometime",
        "have you drank water today?",
        "418: This machine is not up to ISO 3103",
        "oh my god its korn",
        "yaga uuur a ah biga inga uuur rata",
        // "I probs need to fix my RSS feed...", // its fixed now :3
        "RSS feed should be fixed now ^tm",
        "plash banitoot",
        "Java Sux!!!",
        "Software version: 7.0",
        "Did you think you had us fooled?", 
        "Were all jack the lads with bad habits",
        "Yeah, well, I'm gonna go build my own theme park...",
        "gotta love mhpanks",
        "I'M UP NOW!",
        "Owls are dumber than they look",
        "5 BLÄHAJ's and counting",
        "Sure, its a calming notion, perpetual in motion",
        "you would not believe your eyes, if ten million fireflies",
        "times Ash has installed linux forgetting to install network drivers: 6"
    ];
    motds.push(`There are ${motds.length + 1} MOTDs!`);
    return motds[Math.floor(Math.random() * motds.length)];
}
