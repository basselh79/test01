input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 17))
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(1000)
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
    }
})
