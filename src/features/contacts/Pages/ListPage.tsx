import React, { useState } from 'react';
import { Box, LinearProgress, Typography } from '@material-ui/core';
import { useHistory, useRouteMatch } from 'react-router-dom';
import debounce from 'lodash/debounce';
import { useGetAllContacts } from '../../../hooks';
import { Contact, FilterParam } from '../../../models';
import ContactTable from '../Components/ContactTable';
import ContactFilter from '../Components/ContactFilter';
import { useStyles } from './styles';

export default function ListPage() {
  const classes = useStyles();

  const match = useRouteMatch();
  const history = useHistory();

  const [filterParam, setFilterParam] = useState<FilterParam>({ nameLike: '' });
  const { allContacts, isLoading } = useGetAllContacts(filterParam);

  const onViewContact = (contact: Contact) => {
    history.push(`${match.path}/${contact.id}`);
  };

  const onSearchChangeHandler = debounce((newFilter: FilterParam) => {
    setFilterParam(newFilter);
  }, 350);

  const onGenderChangeHandler = (newFilter: FilterParam) => {
    setFilterParam(newFilter);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.titleContainer}>
        <Typography variant="h5">Contacts Management</Typography>
      </Box>

      <Box className={classes.filterContainer}>
        <ContactFilter
          filter={filterParam}
          onSearchChange={onSearchChangeHandler}
          onChange={onGenderChangeHandler}
        />
      </Box>

      {isLoading ? (
        <LinearProgress className={classes.loading} />
      ) : (
        <Box>
          <ContactTable contactList={allContacts} onView={onViewContact} />
        </Box>
      )}
    </Box>
  );
}
