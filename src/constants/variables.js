let colors =  {
    primary: "blue",
    primaryColor: "white",
    info: "lightgray",
    infoColor: 'white',
    warning: "yellow",
    warningColor: 'black',
    danger: "red",
    dangerColor: 'white',
    dark: "black",
    darkColor: 'white',
    light: "#f0f0f0",
    lightColor: 'black'
}

let borderRadius = 10;

let box = {
    margin: 5,
    padding: 10,
    borderRadius
}

/**
 * Exports default color scheme for the components
 */
module.exports = {
    colors,
    box,
    card: {

    },
    container: {
        padding: box.padding,
        flex: 1
    },
    text: {
        marginTop: box.margin,
        marginBottom: box.margin
    },
    button: {
        base: {
            padding: box.padding,
            marginTop: box.margin,
            marginBottom: box.margin,
            backgroundColor: colors.light,
            borderRadius,
        },
        light: {
            backgroundColor: colors.light,
            color: colors.lightColor
        },
        primary: {
            backgroundColor: colors.primary,
            color: colors.primaryColor
        },
        info: {
            backgroundColor: colors.info,
            color: colors.infoColor
        },
        warning: {
            backgroundColor: colors.warning,
            color: colors.warningColor
        },
        danger: {
            backgroundColor: colors.danger,
            color: colors.dangerColor
        }
    },
    empty: {
        padding: 10,
        borderStyle:'dashed',
        borderWidth: 2, 
        borderColor:'gray'
    }
}