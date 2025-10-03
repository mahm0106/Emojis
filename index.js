// Array of emojis with their codes (decimal references)
const emojis = [
  { code: "128512" }, // 😀
  { code: "128513" }, // 😁
  { code: "128514" }, // 😂
  { code: "128515" }, // 😃
  { code: "128516" }, // 😄
  { code: "128517" }, // 😅
  { code: "128518" }, // 😆
  { code: "128519" }, // 😇
  { code: "128520" }, // 😈
  { code: "128521" }, // 😉
  { code: "128522" }, // 😊
  { code: "128523" }  // 😋
];

// Grab the section element
const gallery = document.getElementById("emoji-gallery");

// Loop through emojis and dynamically add them
emojis.forEach(emoji => {
  // Create a card container
  const card = document.createElement("div");
  card.classList.add("emoji-card");

  // Create the emoji span
  const emojiSpan = document.createElement("span");
  emojiSpan.classList.add("emoji");
  emojiSpan.innerHTML = `&#${emoji.code};`;

  // Create the code label
  const codeLabel = document.createElement("code");
  codeLabel.classList.add("code");
  codeLabel.textContent = emoji.code;

  // Append elements
  card.appendChild(emojiSpan);
  card.appendChild(codeLabel);
  gallery.appendChild(card);
});
