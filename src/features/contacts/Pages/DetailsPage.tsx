import React from 'react';
import { Box, LinearProgress, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';

import { Link } from 'react-router-dom';
import { useGetContact } from '../../../hooks/useGetContact';
import { useStyles } from './styles';
import ContactForm from '../Components/ContactForm';

export default function DetailsPage() {
  const classes = useStyles();
  const { contact, isLoading } = useGetContact();

  if (isLoading) return <LinearProgress className={classes.loading} />;

  return (
    <Box className={classes.root}>
      <Link to={'/contacts'}>
        <Typography
          variant="caption"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <ChevronLeft /> Back to contact list
        </Typography>
      </Link>

      {Boolean(contact) ? (
        <>
          <Box className={classes.titleContainer}>
            <Typography variant="h5">{contact?.name}</Typography>
          </Box>
          <Box>
            <ContactForm initialValues={contact} />
          </Box>
        </>
      ) : (
        'The contact does not exist'
      )}
    </Box>
  );
}
