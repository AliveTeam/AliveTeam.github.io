// vim:tabstop=2:shiftwidth=2:expandtab

const fetchJson = (url) =>
	fetch(`https://api.github.com/repos/${url}`).then((r) => r.json());
const urls = {
	stable: "AliveTeam/alive_reversing/releases/latest",
	beta: "AliveTeam/alive_reversing/commits/beta",
	editor: "AliveTeam/qt-editor/releases/latest",
};

function setDate(json, accessor, selector) {
	const date = new Date(accessor(json));
	const formatted = new Intl.DateTimeFormat("en-UK", {
		year: "numeric",
		month: "short",
		day: "numeric",
	}).format(date);

	document.querySelector(selector).innerText = `(${formatted})`;
}

function replaceURL(link, assets) {
	const fileNames = new Map([
		["deb", "Linux-Debug-relive.deb.zip"],
		["win32", "Windows32-Debug-relive-binaries.zip"],
		["win64", "Windows64-Debug-relive-binaries.zip"],
		["mac", "macOS-Debug-relive.dmg.zip"],

		["editor_win32", "Editor_Release_x86"],
		["editor_win64", "Editor_Release_x64"],
	]);

	const type = link.dataset.type;
	const fileName = fileNames.get(type);
	const asset = assets.find((e) => e.name.includes(fileName));

	if (asset) {
		link.setAttribute("href", asset.browser_download_url);
	} else {
		console.warn(`Couldn't get asset for ${type}!`);
	}
}

window.addEventListener("load", async () => {
	const betaJson = await fetchJson(urls.beta);
	const stableJson = await fetchJson(urls.stable);
	const editorJson = await fetchJson(urls.editor);

	const assets = stableJson.assets.concat(editorJson.assets);

	Array.from(document.querySelectorAll(".artifact")).map((link) =>
		replaceURL(link, assets),
	);

	setDate(betaJson, (json) => json.commit.author.date, "#last_beta");
	setDate(stableJson, (json) => json.created_at, "#last_stable");
	setDate(editorJson, (json) => json.created_at, "#editor_stable");
});
