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
  marginTop: 16,

  [theme.breakpoints.down('md')]: {
    fontSize: '6rem',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: "3rem",
  },
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
  fontFamily: "Inter",
  fontSize: "1.2rem",
  fontWeight: "bold",
  textTransform: "uppercase",
}

theme.typography.subtitle2 = {
  fontFamily: "Inter",
  color: "#424242",
  fontSize: "0.8rem",
  fontWeight: "normal",
}

export default theme;
