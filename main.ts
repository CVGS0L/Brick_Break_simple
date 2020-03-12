namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const brick = SpriteKind.create()
    export const death = SpriteKind.create()
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
function brick2 (x: number, y: number) {
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.brick, function (sprite, otherSprite) {
    projectile.setVelocity(Math.randomRange(-45, 45), 50)
    otherSprite.destroy(effects.disintegrate, 100)
})
function layBrick () {
    BY = 20
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 12; index++) {
            BX += 12
            brick2(BX, BY)
        }
        BX = 0
        BY += 10
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Wall, function (sprite, otherSprite) {
    projectile.setVelocity(Math.randomRange(-45, 45), Math.randomRange(-45, 45))
})
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    projectile.setVelocity(Math.randomRange(-45, 45), -50)
})
let BY = 0
let BX = 0
let Brick: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
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
projectile = sprites.createProjectileFromSprite(img`
2 2 2 2 
2 2 2 2 
2 2 2 2 
2 2 2 2 
`, mySprite, 0, -100)
info.setLife(3)
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
`, SpriteKind.Wall)
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
`, SpriteKind.Wall)
wall_left.setPosition(0, 55)
