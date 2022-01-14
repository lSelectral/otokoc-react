import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link as RouterLink } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.otokocotomotiv.com.tr/">
        Otokoç Otomotiv
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

let error = false;
let errorText = '';
export default function Login() {

  function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

  const checkUserName = (e) => {
    error = isAlphaNumeric(e.target.value);
    console.log(error);
    if (error === false){
        errorText = "Sadece alfanümerik karakterler girilebilir";
        handleClick();
    }
  } 

  const checkPassword = (e) => {
  } 

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://izmirevdepaketleme.com/wp-content/uploads/2020/12/izmir-otokoc-personel-alimi-ve-is-ilanlari.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ width: 180, height: 50}}
            alt = "Otokoç  Otomotiv"
            src="https://cdnuploads.aa.com.tr/uploads/sirkethaberleri/Contents/2017/04/14/thumbs_b_c_0ef5fc9961c14c487fbc2022d111aaa1.jpg"
             />
             <Avatar sx={{ mb: 2, width: 100, height: 50}}
            alt = "Koç Holding Alt Yapısı"
            src="https://logowik.com/content/uploads/images/723_kocholding.jpg"
             />

            <Typography component="h1" variant="h5">
              Giriş Yap
            </Typography>

            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Mail Adresi"
                name="email"
                autoComplete="email"
                autoFocus
                onInput={checkUserName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Şifre"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={checkPassword}
              />

              {error && <FormHelperText id="my-helper-text">*Şifre en az 8 karakter, en az 1 büyük ve 1 küçük harf ve özel karakterden oluşmalıdır</FormHelperText>}

              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message= {errorText}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Beni hatırla"
              />
              
              <RouterLink to={{
              pathname: "/",
              state: {user: true} 
              }}>
                <Button
                fullWidth variant="contained"
                disabled={error === false}
                sx={{ mt: 1, mb: 2 }}>
                GİRİŞ YAP
                </Button>
              </RouterLink>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Şifremi Unuttum
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Hesabın yok mu? Kayıt ol!"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}