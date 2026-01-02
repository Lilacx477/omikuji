function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const omikujiList = [
  { name: "激震", image: "Gekishin.png" },
  { name: "強震", image: "Kyoshi.png" },
  { name: "弱震", image: "Jakushin.png" },
  { name: "水中を寝正月の影がよぎった", image: "Tyokkan.png" }
];

function drawOmikuji() {
  const seed = document.getElementById("seedinput").value;
  if (!seed) return;

  const hash = hashString(seed);
  const index = hash % omikujiList.length;
  const result = omikujiList[index];

  document.getElementById("resulttext").textContent = result.name;
  const img = document.getElementById("resultimage");
  img.src = result.image;
  img.style.display = "block";
}
