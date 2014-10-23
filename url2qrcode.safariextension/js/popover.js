$('#qrcode-box').qrcode({
	width: 200,
	height: 200,
	text: safari.application.activeBrowserWindow.activeTab.url
});