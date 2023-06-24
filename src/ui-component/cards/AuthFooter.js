// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="https://dhanrajchoudhary244.github.io/Static-service-page/" target="_blank" underline="hover">
      dhanraj.io
    </Typography>
    <Typography variant="subtitle2" component={Link} href="https://dhanrajchoudhary244.github.io/Static-service-page/" target="_blank" underline="hover">
      &copy; code_with_dhanraj
    </Typography>
  </Stack>
);

export default AuthFooter;
