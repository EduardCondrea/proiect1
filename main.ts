input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showLeds(`
            . # # # .
            # . # . #
            . # # # .
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . # # # .
            # . # . #
            `)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let i = 0; i <= 7; i++) {
        basic.showArrow(i)
        basic.pause(500)
    }
})
let nume = " Edi"
basic.showString("Salut" + nume)
