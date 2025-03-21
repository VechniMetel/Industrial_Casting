PlayerEvents.loggedIn((event) => {
    let { player } = event

    // 初始化isDeveloper
    global.isDeveloper = false

    global.developerUserName.forEach((developer) => {
        if (player.username === developer) {
            global.isDeveloper = true
        }
    })
    if (global.isDeveloper) {
        let devInfo = Component.translate(`text.${global.namespace}.dev`).getString()
        player.paint({
            devTip: {
                type: "text",
                x: 10,
                y: "$screenH - 40",
                alignX: "left",
                text: devInfo,
                scale: 1.0,
            }
        })
        let playerInfo = Component.translate(`text.${global.namespace}.player`).getString()
        player.paint({
            playerTip: {
                type: "text",
                x: 10,
                y: "$screenH - 30",
                alignX: "left",
                text: playerInfo,
                scale: 1.0,
            }
        })
    }
    player.paint({
        versionTip: {
            type: "text",
            x: 10,
            y: "$screenH - 20",
            alignX: "left",
            text: "alpha 1.0.4",
            scale: 1.0
        }
    })


})