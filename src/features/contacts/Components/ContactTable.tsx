import React from 'react';
import {
  Button,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
} from '@material-ui/core';

import { Contact } from '../../../models';

interface Column {
  id: keyof Contact;
  label: string;
  width?: number;
  align?: 'right';
  format?: (contact: Contact) => any;
}

const columns: Column[] = [
  { id: 'name', label: 'Name' },
  { id: 'gender', label: 'Gender' },
  { id: 'age', label: 'Age', align: 'right' },
  {
    id: 'email',
    label: 'Email',
    format: (contact: Contact) => (
      <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
    ),
  },
];

export interface ContactTableProps {
  contactList: Contact[];
  onView?: (contact: Contact) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 'calc(100vh - 256px)',
  },
  table: {},
  actions: {
    '& > * ': {
      margin: theme.spacing(0, 0.3),
    },
  },
}));

export default function ContactTable({
  contactList,
  onView,
}: ContactTableProps) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table
        stickyHeader
        className={classes.table}
        size="small"
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {columns.map((x) => (
              <TableCell {...x} key={x.id}>
                {x.label}
              </TableCell>
            ))}
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactList.map((contact) => (
            <TableRow key={contact.id}>
              {columns.map((x) => (
                <TableCell {...x} key={x.id}>
                  {x.format ? x.format(contact) : contact[x.id]}
                </TableCell>
              ))}
              <TableCell className={classes.actions} align="center">
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => onView?.(contact)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
