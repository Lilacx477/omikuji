function hashstring(str) {
	let hash=0;
	for (let i=0; i < str.length; i++) {
		hash = (hash << 5) - hash + str.charCodeAt(i);
		hash |= 0;
		}
		return Math.abs(hash);
	}
	
const omikujilist = [
	{name:"激震", image:"images/Gekishin.png"},
	{name:"強震", image:"images/Kyoshin.png"},
	{name:"弱震", image:"images/Jakushin.png"},
	{name:"水中を寝正月の影がよぎった", image:"images/Tyokkan.png"}
];

function drawomikuji() {
	const seed = document.getElrmentById("seedinput").value;
	if (!seed) return;
	
	const hash = hashstring(seed);
	const index =hash%omikujilist.length;
	const result = omikujilist[index];
	
	document.getElementById("resultrext"),textContent=result.name;
	document.getElementById("resultimage").src=result.image;
}