basic.forever(function () {
    if (input.lightLevel() == 0) {
        basic.showIcon(IconNames.Sad)
        music.playMelody("E B C5 A B G A F ", 244)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
