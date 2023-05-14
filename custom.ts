namespace TC34725 {
    let TC34725_ADDRESS = 41
    let TC34725_i = 0
    let TC34725_val_D = 0
    let TC34725_val_U = 0
    let TC34725_Light = 0
    let TC34725_Red = 0
    let TC34725_Green = 0
    let TC34725_Blue = 0
    let TC34725_Total = [
        0,
        0,
        0,
        0
    ]
    let TC34725_LRGB = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]

    function GetValue(): void {
        pins.i2cWriteNumber(
            TC34725_ADDRESS,
            148,
            NumberFormat.UInt8LE,
            true
        )
        TC34725_LRGB[0] = pins.i2cReadNumber(TC34725_ADDRESS, NumberFormat.UInt8LE, true)
        TC34725_LRGB[1] = pins.i2cReadNumber(TC34725_ADDRESS, NumberFormat.UInt8LE, false)
        pins.i2cWriteNumber(
            TC34725_ADDRESS,
            150,
            NumberFormat.UInt8LE,
            true
        )
        TC34725_LRGB[2] = pins.i2cReadNumber(TC34725_ADDRESS, NumberFormat.UInt8LE, true)
        TC34725_LRGB[3] = pins.i2cReadNumber(TC34725_ADDRESS, NumberFormat.UInt8LE, false)
        pins.i2cWriteNumber(
            TC34725_ADDRESS,
            152,
            NumberFormat.UInt8LE,
            true
        )
        TC34725_LRGB[4] = pins.i2cReadNumber(TC34725_ADDRESS, NumberFormat.UInt8LE, true)
        TC34725_LRGB[5] = pins.i2cReadNumber(TC34725_ADDRESS, NumberFormat.UInt8LE, false)
        pins.i2cWriteNumber(
            TC34725_ADDRESS,
            154,
            NumberFormat.UInt8LE,
            true
        )
        TC34725_LRGB[6] = pins.i2cReadNumber(TC34725_ADDRESS, NumberFormat.UInt8LE, true)
        TC34725_LRGB[7] = pins.i2cReadNumber(TC34725_ADDRESS, NumberFormat.UInt8LE, false)
        TC34725_i = 0
        for (let index = 0; index < 4; index++) {
            TC34725_val_D = TC34725_LRGB[2 * TC34725_i]
            TC34725_val_U = TC34725_LRGB[2 * TC34725_i + 1]
            TC34725_Total[TC34725_i] = TC34725_val_U * 256 + TC34725_val_D
            TC34725_i += 1
        }
        TC34725_Light = TC34725_Total[0]
        TC34725_Red = TC34725_Total[1]
        TC34725_Green = TC34725_Total[2]
        TC34725_Blue = TC34725_Total[3]
    }

    //%block="TC34725の全ての値を表示"
    export function ShowAll(): void {
        GetValue()
        serial.writeValue("Light", TC34725_Light)
        serial.writeValue("R", TC34725_Red)
        serial.writeValue("G", TC34725_Green)
        serial.writeValue("B", TC34725_Blue)
    }
    
    //%block="TC34725:B"
    export function BlueVal(): number {
        GetValue()
        return TC34725_Blue;
    }

    //%block="TC34725:G"
    export function GreenVal(): number {
        GetValue()
        return TC34725_Green;
    }

    //%block="TC34725:R"
    export function RedVal(): number {
        GetValue()
        return TC34725_Red;
    }

    //%block="TC34725:L"
    export function LightVal(): number {
        GetValue()
        return TC34725_Light;
    }

    //%block="TC34725の起動"
    export function Setup(): void {
        pins.i2cWriteNumber(
            TC34725_ADDRESS,
            146,
            NumberFormat.UInt8LE,
            true
        )
        pins.i2cWriteNumber(
            TC34725_ADDRESS,
            129,
            NumberFormat.UInt8LE,
            true
        )
        pins.i2cWriteNumber(
            TC34725_ADDRESS,
            0,
            NumberFormat.UInt8LE,
            false
        )
        pins.i2cWriteNumber(
            TC34725_ADDRESS,
            143,
            NumberFormat.UInt8LE,
            true
        )
        pins.i2cWriteNumber(
            TC34725_ADDRESS,
            16,
            NumberFormat.UInt8LE,
            false
        )
        pins.i2cWriteNumber(
            TC34725_ADDRESS,
            128,
            NumberFormat.UInt8LE,
            true
        )
        pins.i2cWriteNumber(
            TC34725_ADDRESS,
            3,
            NumberFormat.UInt8LE,
            false
        )
        basic.pause(3)
    }
}

namespace TC34725_Advanced {
    let TC34725_AD_ADDRESS = 41
    let TC34725_AD_i = 0
    let TC34725_AD_val_D = 0
    let TC34725_AD_val_U = 0
    let TC34725_AD_Light = 0
    let TC34725_AD_Red = 0
    let TC34725_AD_Green = 0
    let TC34725_AD_Blue = 0
    let TC34725_AD_Light_Max = 0
    let TC34725_AD_Light_Min = 2147483647
    let TC34725_AD_Red_Max = 0
    let TC34725_AD_Red_Min = 2147483647
    let TC34725_AD_Green_Max = 0
    let TC34725_AD_Green_Min = 2147483647
    let TC34725_AD_Blue_Max = 0
    let TC34725_AD_Blue_Min = 2147483647
    let TC34725_AD_Light_Cor = 0
    let TC34725_AD_Red_Cor = 0
    let TC34725_AD_Green_Cor = 0
    let TC34725_AD_Blue_Cor = 0
    let TC34725_AD_Total = [
        0,
        0,
        0,
        0
    ]
    let TC34725_AD_LRGB = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]

    function GetValue(): void {
        pins.i2cWriteNumber(
            TC34725_AD_ADDRESS,
            148,
            NumberFormat.UInt8LE,
            true
        )
        TC34725_AD_LRGB[0] = pins.i2cReadNumber(TC34725_AD_ADDRESS, NumberFormat.UInt8LE, true)
        TC34725_AD_LRGB[1] = pins.i2cReadNumber(TC34725_AD_ADDRESS, NumberFormat.UInt8LE, false)
        pins.i2cWriteNumber(
            TC34725_AD_ADDRESS,
            150,
            NumberFormat.UInt8LE,
            true
        )
        TC34725_AD_LRGB[2] = pins.i2cReadNumber(TC34725_AD_ADDRESS, NumberFormat.UInt8LE, true)
        TC34725_AD_LRGB[3] = pins.i2cReadNumber(TC34725_AD_ADDRESS, NumberFormat.UInt8LE, false)
        pins.i2cWriteNumber(
            TC34725_AD_ADDRESS,
            152,
            NumberFormat.UInt8LE,
            true
        )
        TC34725_AD_LRGB[4] = pins.i2cReadNumber(TC34725_AD_ADDRESS, NumberFormat.UInt8LE, true)
        TC34725_AD_LRGB[5] = pins.i2cReadNumber(TC34725_AD_ADDRESS, NumberFormat.UInt8LE, false)
        pins.i2cWriteNumber(
            TC34725_AD_ADDRESS,
            154,
            NumberFormat.UInt8LE,
            true
        )
        TC34725_AD_LRGB[6] = pins.i2cReadNumber(TC34725_AD_ADDRESS, NumberFormat.UInt8LE, true)
        TC34725_AD_LRGB[7] = pins.i2cReadNumber(TC34725_AD_ADDRESS, NumberFormat.UInt8LE, false)
        TC34725_AD_i = 0
        for (let index = 0; index < 4; index++) {
            TC34725_AD_val_D = TC34725_AD_LRGB[2 * TC34725_AD_i]
            TC34725_AD_val_U = TC34725_AD_LRGB[2 * TC34725_AD_i + 1]
            TC34725_AD_Total[TC34725_AD_i] = TC34725_AD_val_U * 256 + TC34725_AD_val_D
            TC34725_AD_i += 1
        }
        TC34725_AD_Light = TC34725_AD_Total[0]
        TC34725_AD_Red = TC34725_AD_Total[1]
        TC34725_AD_Green = TC34725_AD_Total[2]
        TC34725_AD_Blue = TC34725_AD_Total[3]
    }

    //%block
    export function GetValueBMax(Initialization: boolean): void {
        if (Initialization) {
            TC34725_AD_Blue_Max = 0
        }
        for (let index = 0; index < 10; index++) {
            GetValue()
            if (TC34725_AD_Blue > TC34725_AD_Blue_Max) {
                TC34725_AD_Blue_Max = TC34725_AD_Blue
            }
        }
    }

    //%block
    export function GetValueBMin(Initialization: boolean): void {
        if (Initialization) {
            TC34725_AD_Blue_Min = 2147483647
        }
        for (let index = 0; index < 10; index++) {
            GetValue()
            if (TC34725_AD_Blue < TC34725_AD_Blue_Min) {
                TC34725_AD_Blue_Min = TC34725_AD_Blue
            }
        }
    }

    //%block
    export function GetValueGMax(Initialization: boolean): void {
        if (Initialization) {
            TC34725_AD_Green_Max = 0
        }
        for (let index = 0; index < 10; index++) {
            GetValue()
            if (TC34725_AD_Green > TC34725_AD_Green_Max) {
                TC34725_AD_Green_Max = TC34725_AD_Green
            }
        }
    }

    //%block
    export function GetValueGMin(Initialization: boolean): void {
        if (Initialization) {
            TC34725_AD_Green_Min = 2147483647
        }
        for (let index = 0; index < 10; index++) {
            GetValue()
            if (TC34725_AD_Green < TC34725_AD_Green_Min) {
                TC34725_AD_Green_Min = TC34725_AD_Green
            }
        }
    }

    //%block
    export function GetValueRMax(Initialization: boolean): void {
        if (Initialization) {
            TC34725_AD_Red_Max = 0
        }
        for (let index = 0; index < 10; index++) {
            GetValue()
            if (TC34725_AD_Red > TC34725_AD_Red_Max) {
                TC34725_AD_Red_Max = TC34725_AD_Red
            }
        }
    }

    //%block
    export function GetValueRMin(Initialization: boolean): void {
        if (Initialization) {
            TC34725_AD_Red_Min = 2147483647
        }
        for (let index = 0; index < 10; index++) {
            GetValue()
            if (TC34725_AD_Red < TC34725_AD_Red_Min) {
                TC34725_AD_Red_Min = TC34725_AD_Red
            }
        }
    }

    //%block
    export function GetValueLMax(Initialization: boolean): void {
        if (Initialization) {
            TC34725_AD_Light_Max = 0
        }
        for (let index = 0; index < 10; index++) {
            GetValue()
            if (TC34725_AD_Light > TC34725_AD_Light_Max) {
                TC34725_AD_Light_Max = TC34725_AD_Light
            }
        }
    }

    //%block
    export function GetValueLMin(Initialization: boolean): void {
        if (Initialization) {
            TC34725_AD_Light_Min = 2147483647
        }
        for (let index = 0; index < 10; index++) {
            GetValue()
            if (TC34725_AD_Light < TC34725_AD_Light_Min) {
                TC34725_AD_Light_Min = TC34725_AD_Light
            }
        }
    }

    //%block
    export function GetValueAllMax(Initialization: boolean): void {
        if (Initialization) {
            TC34725_AD_Light_Max = 0
            TC34725_AD_Red_Max = 0
            TC34725_AD_Green_Max = 0
            TC34725_AD_Blue_Max = 0
        }
        for (let index = 0; index < 10; index++) {
            GetValue()
            if (TC34725_AD_Light > TC34725_AD_Light_Max) {
                TC34725_AD_Light_Max = TC34725_AD_Light
            }
            if (TC34725_AD_Red > TC34725_AD_Red_Max) {
                TC34725_AD_Red_Max = TC34725_AD_Red
            }
            if (TC34725_AD_Green > TC34725_AD_Green_Max) {
                TC34725_AD_Green_Max = TC34725_AD_Green
            }
            if (TC34725_AD_Blue > TC34725_AD_Blue_Max) {
                TC34725_AD_Blue_Max = TC34725_AD_Blue
            }
        }
    }

    //%block
    export function GetValueAllMin(Initialization: boolean): void {
        if (Initialization) {
            TC34725_AD_Light_Min = 2147483647
            TC34725_AD_Red_Min = 2147483647
            TC34725_AD_Green_Min = 2147483647
            TC34725_AD_Blue_Min = 2147483647
        }
        for (let index = 0; index < 10; index++) {
            GetValue()
            if (TC34725_AD_Light < TC34725_AD_Light_Min) {
                TC34725_AD_Light_Min = TC34725_AD_Light
            }
            if (TC34725_AD_Red < TC34725_AD_Red_Min) {
                TC34725_AD_Red_Min = TC34725_AD_Red
            }
            if (TC34725_AD_Green < TC34725_AD_Green_Min) {
                TC34725_AD_Green_Min = TC34725_AD_Green
            }
            if (TC34725_AD_Blue < TC34725_AD_Blue_Min) {
                TC34725_AD_Blue_Min = TC34725_AD_Blue
            }
        }
    }

    //%block
    export function BlueMinMax(Min: number, Max: number): void {
        TC34725_AD_Blue_Min = Min
        TC34725_AD_Blue_Max = Max
    }

    //%block
    export function GreenMinMax(Min: number, Max: number): void {
        TC34725_AD_Green_Min = Min
        TC34725_AD_Green_Max = Max
    }

    //%block
    export function RedMinMax(Min: number, Max: number): void {
        TC34725_AD_Red_Min = Min
        TC34725_AD_Red_Max = Max
    }

    //%block
    export function LightMinMax(Min: number, Max: number): void {
        TC34725_AD_Light_Min = Min
        TC34725_AD_Light_Max = Max
    }

    //%block=TC34725の全ての補正変数を表示
    export function ShowCorrection(): void {
        serial.writeLine("Light:" + convertToText(TC34725_AD_Light_Min) + "," + convertToText(TC34725_AD_Light_Max))
        serial.writeLine("Red  :" + convertToText(TC34725_AD_Red_Min) + "," + convertToText(TC34725_AD_Red_Max))
        serial.writeLine("Green:" + convertToText(TC34725_AD_Green_Min) + "," + convertToText(TC34725_AD_Green_Max))
        serial.writeLine("Blue :" + convertToText(TC34725_AD_Blue_Min) + "," + convertToText(TC34725_AD_Blue_Max))
    }

    //%block="TC34725の全ての補正値を表示"
    export function ShowAllAD(): void {
        serial.writeValue("Light", LightValAD())
        serial.writeValue("Red", RedValAD())
        serial.writeValue("Green", GreenValAD())
        serial.writeValue("Blue", BlueValAD())
    }

    //%block="TC34725AD:B"
    export function BlueValAD(): number {
        GetValue()
        TC34725_AD_Blue_Cor = (TC34725_AD_Blue - TC34725_AD_Blue_Min) / (TC34725_AD_Blue_Max - TC34725_AD_Blue_Min) * 100
        if (TC34725_AD_Blue_Cor > 100) {
            TC34725_AD_Blue_Cor = 100
        }
        if (TC34725_AD_Blue_Cor < 0) {
            TC34725_AD_Blue_Cor = 0
        }
        return TC34725_AD_Blue_Cor;
    }

    //%block="TC34725AD:G"
    export function GreenValAD(): number {
        GetValue()
        TC34725_AD_Green_Cor = (TC34725_AD_Green - TC34725_AD_Green_Min) / (TC34725_AD_Green_Max - TC34725_AD_Green_Min) * 100
        if (TC34725_AD_Green_Cor > 100) {
            TC34725_AD_Green_Cor = 100
        }
        if (TC34725_AD_Green_Cor < 0) {
            TC34725_AD_Green_Cor = 0
        }
        return TC34725_AD_Green_Cor;
    }

    //%block="TC34725AD:R"
    export function RedValAD(): number {
        GetValue()
        TC34725_AD_Red_Cor = (TC34725_AD_Red - TC34725_AD_Red_Min) / (TC34725_AD_Red_Max - TC34725_AD_Red_Min) * 100
        if (TC34725_AD_Red_Cor > 100) {
            TC34725_AD_Red_Cor = 100
        }
        if (TC34725_AD_Red_Cor < 0) {
            TC34725_AD_Red_Cor = 0
        }
        return TC34725_AD_Red_Cor;
    }

    //%block="TC34725AD:L"
    export function LightValAD(): number {
        GetValue()
        TC34725_AD_Light_Cor = (TC34725_AD_Light - TC34725_AD_Light_Min) / (TC34725_AD_Light_Max - TC34725_AD_Light_Min) * 100
        if (TC34725_AD_Light_Cor > 100) {
            TC34725_AD_Light_Cor = 100
        }
        if (TC34725_AD_Light_Cor < 0) {
            TC34725_AD_Light_Cor = 0
        }
        return TC34725_AD_Light_Cor;
    }

}