input.onSound(DetectedSound.Loud, function () {
    L_SPEED += 5
    R_SPEED += 10
})
let L_SPEED = 0
let R_SPEED = 0
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        L_SPEED,
        SuperBit.enMotors.M3,
        R_SPEED
        )
        basic.showNumber(R_SPEED)
    } else {
        SuperBit.MotorStopAll()
    }
})
