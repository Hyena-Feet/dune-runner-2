controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (lane <= 4) {
        lane += -1
    }
})
function Day1 () {
	
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (lane >= 1) {
        lane += 1
    }
})
let mySprite2 = 0
let lane = 0
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
lane = 3
scene.setBackgroundImage(assets.image`myImage0`)
forever(function () {
    if (lane < 1) {
        mySprite2 = 1
    }
    if (lane > 4) {
        mySprite2 = 4
    }
})
forever(function () {
    if (lane == 1) {
        mySprite.setPosition(18, 35)
    } else if (lane == 2) {
        mySprite.setPosition(18, 58)
    } else if (lane == 3) {
        mySprite.setPosition(18, 86)
    } else {
        mySprite.setPosition(18, 109)
    }
})
