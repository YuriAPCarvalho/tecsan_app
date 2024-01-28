// material-ui
import { Grid } from '@mui/material';
import Logo from 'components/Logo/Logo';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75} style={containerStyles}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Logo />
      </Grid>
    </Grid>
  );
};
export default DashboardDefault;
