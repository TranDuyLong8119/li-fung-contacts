import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    padding: theme.spacing(2, 3),
  },
  loading: {
    position: 'absolute',
    top: theme.spacing(0),
    width: '100%',
  },
  titleContainer: {
    display: 'flex',
    flexFlow: 'row, nowrap',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(4),
  },
  filterContainer: {
    marginBottom: 16,
  },
}));
