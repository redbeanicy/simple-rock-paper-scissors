let myDice = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallSquare)
})
input.onGesture(Gesture.Shake, function () {
    myDice = randint(0, 2)
    if (myDice == 0) {
        basic.showIcon(IconNames.Square)
    } else if (myDice == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(1000)
    basic.clearScreen()
})
