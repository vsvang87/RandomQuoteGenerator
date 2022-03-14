let button = document.querySelector(".quote__btn");
let quoteValue = document.querySelector(".quote__value");

let quotes = [
  "In the world you will have tribulation. But take heart, I have overcome the world, John: 16:33",
  "So do not fear, for I am with you, do not be dismayed, for I am your God. I will strengthen you and help. I will uphold you with my righteous right hand, Isaiah 41:10",
  "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding will guard your heats and your minds in Christ Jesus. Phillipians 4:6-7",
  "I sought the LORD and he answered me and delivered me from all my fears. Those who look to Him are radiant, and their faces shall never be ashamed. Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in Him! Psalm 34: 4-5,8",
  "Have I not commanded you? Be strong and courages. Do not be frightened and do not be dismayed, for the LORD your God is with you wherever you go. Joshua 1:9",
  "Trust in the LORD with all your heart, and do not lean your own understanding. In all your ways acknowledge Him, and He will make straight your paths. Proverbs 3:5-6",
  "Consider it pure joy, my brothers and sisters whenever you face trials of many kinds because you know that the testing of your faith produces perseverance. James 1:2-3",
  "The LORD himself goes before you and will be with you, he will never leave you nor forsake you. Do not be afraid, do not be discouraged. Deuteronomy 31:8-9",
  "Casting all your anxieties on him, because he cares for you. 1Peter 5:7",
  "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness. 1John 1:9",
  "Even though I walk through the darkest valley, I will fear no evil, for you are with me, your rod and your staff, they comfort me. Psalm 23:4",
  "I lift up my eyes to the mountains, where does my help come from? My help comes from the LORD, the Maker of heaven and earth. Psalm 121:1-2",
  "For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a futured and a hope. Jeremiah 29:11",
  "Be strong and courageous. Do not fear or be in dread of them, for it is the LORD your God who goes with you. He will not leave you or forsake you. Deuteronomy 31:6",
  "The LORD your God is in your midst, a mighty one who will save, he will rejoice over you with gladness, he will quiet you by his love, he will exult over you with loud singing. Zephaniah 3:17",
];

button.addEventListener("click", () => {
  let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
  quoteValue.innerHTML = randomQuotes;
});
