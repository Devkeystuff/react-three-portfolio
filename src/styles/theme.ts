import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#5D5964', dark: '#2B252F', light: '#B9B2C9' },
    secondary: { main: '#4f00ff' },
    action: {active: "#b0ff00"},
  },
});

theme.typography.h1 = {
  fontFamily: "Gilroy",
  fontSize: '8rem',
  display: "block",
  marginTop: 32,
}

theme.typography.button = {
  fontFamily: "Gilroy",
  fontSize: "1rem",
  textTransform: "uppercase",

}

theme.typography.body1 = {
  fontFamily: "Inter",
  fontWeight: "normal",
  fontSize: "1rem",
  marginTop: 10,
}

theme.typography.caption = {
  fontFamily: "Inter",
  fontWeight: "bold",
  fontSize: "1rem",
  display: "block",
  marginTop: 16,
}

theme.typography.subtitle1 = {
  color: "#737373",
  fontSize: "0.8rem",
  fontWeight: "normal",
  fontFamily: "Inter",
}

export default theme;
