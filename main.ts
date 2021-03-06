namespace SpriteKind {
    export const EnemyProjectile = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    Enemy_Position = randint(1, 4)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (lane > 1) {
        lane += -1
    }
})
sprites.onOverlap(SpriteKind.EnemyProjectile, SpriteKind.Player, function (sprite, otherSprite) {
	
})
function Day1 () {
    scene.setBackgroundImage(assets.image`myImage0`)
    game.splash("Use the Arrow Keys to move up and down, Make sure to Dodge incoming projectiles.")
    Rats = false
    Wolf = true
    Raiders = false
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (lane < 4) {
        lane += 1
    }
})
let Bad: Sprite = null
let Day_Difficulty = 0
let Raiders = false
let Wolf = false
let Rats = false
let Enemy_Position = 0
let lane = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
    9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
    9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
    9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
    9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
    9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
    9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
    9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
    9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
    9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
    9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
    9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
    9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
    9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
    9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
    9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
    9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
    9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
    1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
    1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
    1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
    11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
    11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
    11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
    1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
    111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
    11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
    11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
    11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
    11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
    d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
    dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
    dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
    dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
    dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
    ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
    ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
    ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
    ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
    dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
    dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
    dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
    dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
    dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
    dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
    dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
    dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
    dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
    dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbccbbccbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbb777777bbbbbbbbbbbbbbbbbbbbbbb77777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbb7777777777777777bbbbbbbbbbbbbb7777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbccbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbb77777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbcccbbccbcbbbbbbbbbbbbccbccbbbccbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b7777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbcccccccccbbbbbbbbbbbbccccccccccbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbb
    77777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbcccccccccbbbbbbbbbbbbccccccccccbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbb
    777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbccccccccccccbccbcccccccbbbbccccccccccbbbbbbbcccbbbbbbbbbbbbbbbbccccccccccc
    777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbccccccccbbccbccbcccccccbbbbccbbbccbccbbbbbbbcccccbbbbbbbbbbbbccccccccccccc
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbcccccccccccccccbccbcbccbbbbccccccccccbbbbbbccccbccccccccccccccbccbcccccccc
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbcccccccccccccccbcccccccbbbbccccccccccbbbbbbccccbbbbbbbbbbbbbbbbccbcccccccc
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbccbbcccccccccccbcccbcccbbbbccccccccccbbbbbbccbcbbbbbbbbbbbbbbbbccccccccccc
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbccccccbccccccccbccbbbccbbbbcccbbccbccbbbbbbccccbbbbbbbbbbbbbbbbccccccccccc
    777777777777777777777777777777777777777777777777777777777777777777777777777777777ebbbbccccccbccbbccccbcccbcccbbbbccccccccccbbbbbbccbcbbbbbbbbbbbbbbbbcccbccccccc
    777777777777777777777777777777777777777777777777777777777777777777777777777777777ebbbbccccccbccccccccbcccccccbbbbcccbcbbcccbbbbbbccccbbbbbbbbbbbbbbbbcccbccccccc
    777777777777777777777777777777777777777777777777777777777777777777777777777777777ebbbbcccccccccccccccbccbcbccbbbbccccccccccbbbbbbccccbbbbbbbbbbbbbbbbccccccccccc
    77777777777777777777777777777777777777777777777777777777777777777777777777777777eecccccccccccccccccccbcccccccbbbbccccccccccbbbbbbccbcbbbbbbbbbbbbbbbbccccccbcccc
    7777777777777777777777777777777777777777777777777777777777777777777777777777777eeeccccccccccccccccccccccbbbccbbbbccccccccccbbbbbccccccbbbbbbbbbbbbbbbccccccccccc
    77777777777777777777777777777777777777777777777777777777777777777777777777777eeeeecccccccccccccccccccccccccccbbbbcccbcccbccbbbbbcccbccbbbbbbbbbbbbbbbccccccccccc
    7777777777777777777777777777777777777777777777777777777777777777777777777777eeeeeecccccccccccccccccccccccccccbbbbcccbccccccbbbbbcccccccbbbbbbbbbbbbbbccccccccccc
    777777777777777777777777777777777777777777777777777777777777777777777777777eeeeeeecccccccccccccccccccccccccccbbbbcccccccbccbbbbbcccccccbbbbbbbbbbbbbbccccccccccc
    777777777777777777777777777777777777777777777777777777777777777777777777777eeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    77777777777777777777777777777777777777777777777777777777777777777777777777eeeeeeeefccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    7777777777777777777777777777777777777777777777777777777777777777777777777eeeeeeeeefffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    7777777777777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    777777777777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    777777777777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    77777777777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    7777777777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeefffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf
    777777777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeefffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccf
    7777777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeefffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccfff
    77777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccffffff
    7777777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
let Gata = sprites.create(assets.image`myImage`, SpriteKind.Player)
lane = 3
let statusbar = statusbars.create(20, 3, StatusBarKind.Health)
statusbar.value = 100
statusbar.attachToSprite(Gata, 2, 0)
Day1()
game.onUpdateInterval(Day_Difficulty, function () {
    if (Enemy_Position == 1) {
        Bad.setPosition(150, 35)
    } else if (Enemy_Position == 2) {
        Bad.setPosition(150, 58)
    } else if (Enemy_Position == 3) {
        Bad.setPosition(150, 86)
    } else {
        Bad.setPosition(150, 109)
    }
})
game.onUpdateInterval(Day_Difficulty, function () {
    if (Rats == true) {
        Bad = sprites.create(img`
            ..................
            ..................
            ..................
            ....fffffffff.....
            ..efffffffffffe...
            ..ef2fffffff2fe...
            ..efffffffffffe...
            ..efffffffffffe...
            ..efffffffffffe...
            ....ffffffffff....
            .....fffffffff....
            .......fffffff....
            ........ffffff....
            ..........ffff....
            ...........fff....
            ............f.....
            ..................
            ..................
            `, SpriteKind.Enemy)
    } else if (Wolf == true) {
        Bad = sprites.create(img`
            ..................
            ..................
            ..................
            ....fffffffff.....
            ..efffffffffffe...
            ..ef2fffffff2fe...
            ..efffffffffffe...
            ..efffffffffffe...
            ..efffffffffffe...
            ....ffffffffff....
            .....fffffffff....
            .......fffffff....
            ........ffffff....
            ..........ffff....
            ...........fff....
            ............f.....
            ..................
            ..................
            `, SpriteKind.Enemy)
    } else {
        if (Raiders == true) {
            Bad = sprites.create(img`
                ..................
                ..................
                ..................
                ....fffffffff.....
                ..efffffffffffe...
                ..ef2fffffff2fe...
                ..efffffffffffe...
                ..efffffffffffe...
                ..efffffffffffe...
                ....ffffffffff....
                .....fffffffff....
                .......fffffff....
                ........ffffff....
                ..........ffff....
                ...........fff....
                ............f.....
                ..................
                ..................
                `, SpriteKind.Enemy)
        }
    }
})
forever(function () {
    info.setScore(Enemy_Position)
})
forever(function () {
    if (lane == 1) {
        Gata.setPosition(18, 35)
    } else if (lane == 2) {
        Gata.setPosition(18, 58)
    } else if (lane == 3) {
        Gata.setPosition(18, 86)
    } else {
        Gata.setPosition(18, 109)
    }
})
