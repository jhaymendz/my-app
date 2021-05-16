import { creatMuiTheme } from "@material-ui/core/style";

const theme = createMuiTheme({
    palette: {
        common: { black: "#000", white: "#fff" },
        background: { paper: "#fff", default: "#fafafa" },
        primary: {
            light: "rgba(22, 21, 21, 1)",
            main: "rgba(28, 28, 29, 1)",
            dark: "rgba(17, 17, 17, 1)",
            contrastText: "#fff"
        },
        secondary: {
            light: "rgba(243, 164, 32, 1)",
            main: "rgba(233, 163, 50, 1)",
            dark: "rgba(245, 166, 35, 1)",
            contrastText: "#fff"
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff"
        },
        text: {
            "primary": "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)"
        },
    },
});



export default theme;