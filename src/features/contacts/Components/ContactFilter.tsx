import React, { ChangeEvent, useRef } from 'react';
import { Search } from '@material-ui/icons';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@material-ui/core';
import { FilterParam } from '../../../models';
import { GENDER } from '../../../constants';

export interface ContactFilterProps {
  filter: FilterParam;
  onChange?: (newFilter: FilterParam) => void;
  onSearchChange?: (newFilter: FilterParam) => void;
}

export default function ContactFilter({
  filter,
  onChange,
  onSearchChange,
}: ContactFilterProps) {
  const searchRef = useRef<HTMLInputElement>();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onSearchChange) return;

    const newFilter = {
      ...filter,
      nameLike: e.target.value,
    };

    onSearchChange(newFilter);
  };

  const handleSelectChange = (e: React.ChangeEvent<{ value: any }>) => {
    if (!onChange) return;

    const newFilter: FilterParam = {
      ...filter,
      gender: e.target.value,
    };

    onChange(newFilter);
  };

  const handleClearFilter = () => {
    if (!onChange) return;

    const newFilter: FilterParam = {
      ...filter,
      gender: undefined,
      nameLike: '',
    };

    onChange(newFilter);

    if (searchRef.current) {
      searchRef.current.value = '';
    }
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel htmlFor="searchByName">Search By Name</InputLabel>
            <OutlinedInput
              id="searchByName"
              endAdornment={<Search />}
              label="Search By Name"
              onChange={handleSearchChange}
              inputRef={searchRef}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel id="filterByGender">Gender</InputLabel>
            <Select
              labelId="filterByGender"
              value={filter.gender || ''}
              onChange={handleSelectChange}
              label="Gender"
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {GENDER.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={1}>
          <Button
            onClick={handleClearFilter}
            variant="outlined"
            color="primary"
            fullWidth
            size="small"
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
