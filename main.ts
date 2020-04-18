namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const brick = SpriteKind.create()
    export const death = SpriteKind.create()
    export const Rwall = SpriteKind.create()
    export const Lwall = SpriteKind.create()
    export const top = SpriteKind.create()
    export const pup = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Lwall, function (sprite, otherSprite) {
    projectile.setVelocity(Math.randomRange(0, 90), Math.randomRange(-90, 90))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Rwall, function (sprite, otherSprite) {
    projectile.setVelocity(Math.randomRange(-90, 0), Math.randomRange(-90, 90))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.brick, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    projectile.setVelocity(Math.randomRange(-45, 45), 50)
    otherSprite.destroy(effects.disintegrate, 100)
    music.playTone(165, music.beat(BeatFraction.Half))
    if (info.score() == 10) {
        info.changeLifeBy(1)
        mySprite.say("+1 life", 100)
        pause(100)
    }
    if (info.score() == 20) {
        info.changeLifeBy(1)
        mySprite.say("+1 life", 100)
        pause(100)
    }
    if (info.score() == 10) {
        info.changeLifeBy(1)
        mySprite.say("+1 life", 100)
        pause(100)
    }
})
function layBrick () {
    BY = 20
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 12; index++) {
            BX += 12
            createBrick(BX, BY)
        }
        BX = 0
        BY += 10
    }
}
scene.onOverlapTile(SpriteKind.Projectile, myTiles.tile3, function (sprite, location) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.death, function (sprite, otherSprite) {
    projectile.destroy(effects.spray, 500)
    info.changeLifeBy(-1)
    if (info.life() > 0) {
        projectile = sprites.createProjectileFromSprite(img`
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
`, mySprite, 50, 100)
    }
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.pup, function (sprite, otherSprite) {
    p2 = sprites.createProjectileFromSprite(img`
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
`, mySprite, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.top, function (sprite, otherSprite) {
    projectile.setVelocity(Math.randomRange(-180, 180), Math.randomRange(0, 90))
})
function createBrick (x: number, y: number) {
    Brick = sprites.create(img`
f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f 
`, SpriteKind.brick)
    Brick.setPosition(BX, BY)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    projectile.setVelocity(Math.randomRange(-45, 45), -50)
})
let Brick: Sprite = null
let p2: Sprite = null
let BX = 0
let BY = 0
let projectile: Sprite = null
let mySprite: Sprite = null
let pup = sprites.create(img`
5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 
`, SpriteKind.pup)
pup.setPosition(80, 10)
info.setScore(0)
layBrick()
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Player)
mySprite.setPosition(80, 110)
controller.moveSprite(mySprite, 100, 0)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
projectile = sprites.createProjectileFromSprite(img`
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
`, mySprite, 0, -100)
let border = sprites.create(img`
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`, SpriteKind.death)
border.setPosition(80, 120)
let wall_right = sprites.create(img`
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
`, SpriteKind.Rwall)
wall_right.setPosition(160, 55)
let wall_left = sprites.create(img`
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
`, SpriteKind.Lwall)
wall_left.setPosition(0, 55)
let roof = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.top)
roof.setPosition(80, 1)
projectile.setFlag(SpriteFlag.StayInScreen, true)
forever(function () {
	
})
forever(function () {
    if (info.score() >= 36) {
        info.setScore(game.runtime() / 1000)
        game.over(true)
    }
})
