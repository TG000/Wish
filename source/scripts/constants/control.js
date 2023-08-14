export const GamepadThumbstick = {
    DEAD_ZONE: 'deadZone',
    HORIZONTAL_AXE_ID: 'horizontalAxeId',
}

export const Control = {
    LEFT: 'left',
    RIGHT: 'right',
    INTERACT: 'interact',
    MAIN_MENU: 'mainMenu'
};

export const controls = [
    {
        gamePad: {
            [GamepadThumbstick.DEAD_ZONE]: 0.5,
            [GamepadThumbstick.HORIZONTAL_AXE_ID]: 0,

            [Control.LEFT]: 14,
            [Control.RIGHT]: 15
        },
        keyboard: {
            [Control.LEFT]: 'ArrowLeft',
            [Control.RIGHT]: 'ArrowRight',
            [Control.INTERACT]: 'Space',
            [Control.MAIN_MENU]: 'KeyM'
        }
    },
    {
        gamePad: {
            [GamepadThumbstick.DEAD_ZONE]: 0.5,
            [GamepadThumbstick.HORIZONTAL_AXE_ID]: 0,

            [Control.LEFT]: 14,
            [Control.RIGHT]: 15
        },
        keyboard: {
            [Control.LEFT]: 'KeyA',
            [Control.RIGHT]: 'KeyD',
            [Control.INTERACT]: 'KeyF',
            [Control.MAIN_MENU]: 'KeyM'
        }
    }
]