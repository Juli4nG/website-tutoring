// Game data. store says where you get each game.
// Steam games have an appid, and their cover image is built from it:
//   https://cdn.akamai.steamstatic.com/steam/apps/<appid>/header.jpg
// Everything else has an image URL instead (picsum placeholders, same 460x215
// size as Steam covers). price is in USD; 0 means free-to-play.

const games = [
  {
    id: 1,
    title: "League of Legends",
    image: "https://picsum.photos/seed/league-of-legends/460/215",
    description:
      "Team-based 5v5 MOBA where champions battle to destroy the enemy Nexus.",
    genre: "MOBA",
    price: 0,
    store: "Riot Games",
  },
  {
    id: 2,
    title: "Dota 2",
    description:
      "Two teams of five heroes fight to destroy each other's Ancient in deep, strategic battles.",
    genre: "MOBA",
    price: 0,
    store: "Steam",
    appid: 570,
  },
  {
    id: 3,
    title: "Valorant",
    image: "https://picsum.photos/seed/valorant/460/215",
    description:
      "5v5 tactical shooter blending precise gunplay with unique agent abilities.",
    genre: "Tactical Shooter",
    price: 0,
    store: "Riot Games",
  },
  {
    id: 4,
    title: "Counter-Strike 2",
    description:
      "The definitive competitive tactical shooter, rebuilt for a new generation.",
    genre: "Tactical Shooter",
    price: 0,
    store: "Steam",
    appid: 730,
  },
  {
    id: 5,
    title: "Overwatch",
    description:
      "Fast-paced 5v5 hero shooter with a diverse roster and objective-based combat.",
    genre: "Hero Shooter",
    price: 0,
    store: "Steam",
    appid: 2357570,
  },
  {
    id: 6,
    title: "Apex Legends",
    description:
      "Squad-based battle royale featuring Legends with distinct tactical abilities.",
    genre: "Battle Royale",
    price: 0,
    store: "Steam",
    appid: 1172470,
  },
  {
    id: 7,
    title: "Fortnite",
    image: "https://picsum.photos/seed/fortnite/460/215",
    description:
      "Build, battle, and survive in one of the world's biggest battle royales.",
    genre: "Battle Royale",
    price: 0,
    store: "Epic Games",
  },
  {
    id: 8,
    title: "Minecraft",
    image: "https://picsum.photos/seed/minecraft/460/215",
    description:
      "Mine, craft, and build anything you can imagine in an infinite blocky world.",
    genre: "Sandbox",
    price: 29.99,
    store: "Minecraft.net",
  },
  {
    id: 9,
    title: "Terraria",
    description:
      "A 2D sandbox adventure of digging, building, exploring, and epic boss fights.",
    genre: "Sandbox",
    price: 9.99,
    store: "Steam",
    appid: 105600,
  },
  {
    id: 10,
    title: "The Witcher 3",
    description:
      "An open-world RPG following monster hunter Geralt across a war-torn land.",
    genre: "RPG",
    price: 49.99,
    store: "Steam",
    appid: 292030,
  },
  {
    id: 11,
    title: "Elden Ring",
    description:
      "A vast open-world action RPG forged by FromSoftware and George R. R. Martin.",
    genre: "Soulslike",
    price: 59.99,
    store: "Steam",
    appid: 1245620,
  },
  {
    id: 12,
    title: "Dark Souls 3",
    description:
      "A punishing dark-fantasy action RPG of deliberate combat and interconnected worlds.",
    genre: "Soulslike",
    price: 59.99,
    store: "Steam",
    appid: 374320,
  },
  {
    id: 13,
    title: "Hollow Knight",
    description:
      "Explore a vast ruined kingdom of insects in this challenging hand-drawn metroidvania.",
    genre: "Metroidvania",
    price: 14.99,
    store: "Steam",
    appid: 367520,
  },
  {
    id: 14,
    title: "Celeste",
    description:
      "A tight, heartfelt platformer about climbing a mountain and facing yourself.",
    genre: "Platformer",
    price: 19.99,
    store: "Steam",
    appid: 504230,
  },
  {
    id: 15,
    title: "Hades",
    description:
      "A god-like roguelike dungeon crawler about escaping the Underworld in style.",
    genre: "Roguelike",
    price: 24.99,
    store: "Steam",
    appid: 1145360,
  },
  {
    id: 16,
    title: "Balatro",
    description:
      "A poker-inspired roguelike deckbuilder that's endlessly addictive. nice :)",
    genre: "Indie nice :)",
    price: 14.99,
    store: "Steam",
    appid: 2379780,
  },
  {
    id: 17,
    title: "Stardew Valley",
    description:
      "Build the farm of your dreams in this cozy farming and life sim.",
    genre: "Farming Sim",
    price: 14.99,
    store: "Steam",
    appid: 413150,
  },
  {
    id: 18,
    title: "Among Us",
    description: "A party game of teamwork and betrayal aboard a spaceship.",
    genre: "Social Deduction",
    price: 4.99,
    store: "Steam",
    appid: 945360,
  },
  {
    id: 19,
    title: "Fall Guys",
    image: "https://picsum.photos/seed/fall-guys/460/215",
    description:
      "A chaotic, colorful battle royale of wobbly obstacle-course mayhem.",
    genre: "Party",
    price: 0,
    store: "Epic Games",
  },
  {
    id: 20,
    title: "Rocket League",
    image: "https://picsum.photos/seed/rocket-league/460/215",
    description: "High-octane soccer played with rocket-powered cars.",
    genre: "Sports",
    price: 0,
    store: "Epic Games",
  },
  {
    id: 21,
    title: "EA Sports FC 27",
    // New Steam games use an image URL that can't be built from the appid.
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4080220/ff6a3779f1ca83aae8ad3878454f6c11008ea24d/header.jpg",
    description:
      "The world's game with realistic football action and Ultimate Team.",
    genre: "Sports",
    price: 69.99,
    store: "Steam",
    appid: 4080220,
  },
  {
    id: 22,
    title: "Squad",
    description:
      "Large-scale military shooter built on teamwork, communication, and tactics.",
    genre: "Tactical Shooter",
    price: 39.99,
    store: "Steam",
    appid: 393380,
  },
  {
    id: 23,
    title: "Clash Royale",
    image: "https://picsum.photos/seed/clash-royale/460/215",
    description: "A real-time tower-rush strategy game with collectible cards.",
    genre: "Mobile",
    price: 0,
    store: "Mobile",
  },
  {
    id: 24,
    title: "Clash of Clans",
    image: "https://picsum.photos/seed/clash-of-clans/460/215",
    description:
      "Build your village, train troops, and raid in this mobile strategy classic.",
    genre: "Mobile",
    price: 0,
    store: "Mobile",
  },
  {
    id: 25,
    title: "Genshin Impact",
    image: "https://picsum.photos/seed/genshin-impact/460/215",
    description: "An open-world action RPG set in the fantasy realm of Teyvat.",
    genre: "Action RPG",
    price: 0,
    store: "HoYoverse",
  },
  {
    id: 26,
    title: "Final Fantasy XIV",
    description:
      "A critically acclaimed MMORPG with a sprawling story and vibrant world.",
    genre: "MMORPG",
    price: 19.99,
    store: "Steam",
    appid: 39210,
  },
  {
    id: 27,
    title: "World of Warcraft",
    image: "https://picsum.photos/seed/world-of-warcraft/460/215",
    description:
      "The legendary MMORPG set in the ever-evolving world of Azeroth.",
    genre: "MMORPG",
    price: 19.99,
    store: "Battle.net",
  },
];
