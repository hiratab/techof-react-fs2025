import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

function App() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [range, setRange] = useState<number>(0)
  const [showDialog, setShowDialog] = useState<boolean>(false)

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleRangeChange = (
    _: Event,
    newValue:number
  ) => {
    setRange(newValue)
  }
  useEffect(() => {
    if (range === 100) {
      doLogin()
    }
  }, [range])

  const handleShowDialog = (show: boolean) => {
    setShowDialog(show)
  }

  const doLogin = () => {
    setShowDialog(true)
  }

  return (
    <Box
      sx={{
        p: 3,
        mx: 'auto',
        maxWidth: 400,
      }}
    >
      <Typography variant='h1' gutterBottom>
        Login
      </Typography>


      <TextField
        label='Email'
        variant='outlined'
        fullWidth
        sx={{
          mb: 2,
        }}
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        label='Password'
        type='password'
        variant='outlined'
        fullWidth
        sx={{
          mb: 2,
        }}
        value={password}
        onChange={handlePasswordChange}
        error={false}
      />

      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
        <Button variant='contained' color='success' onClick={doLogin}>
          Login
        </Button>
        <Button variant='outlined' color='error'>
          Cancel
        </Button>
      </Box>

      <Box>
        <Typography variant='body1'>
          Slide to Login
        </Typography>
        <Slider
          value={range}
          onChange={handleRangeChange}
          defaultValue={0}
        />
      </Box>

      <Dialog
        open={showDialog}
        onClose={() => handleShowDialog(false)}
      >
        <DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography variant='body1'>
                Login successfully {email}
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogContent>
            <DialogActions>
              <Button
                onClick={() => handleShowDialog(false)}
              >
                Close
              </Button>
            </DialogActions>
          </DialogContent>
        </DialogTitle>
      </Dialog>
    </Box>
  )
}

export default App
