import { useState, useEffect } from 'react';
import { Contact, FilterParam } from '../models';
import { contactApi } from '../api';

export const useGetAllContacts = (filter: FilterParam) => {
  const [allContacts, setAllContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const res = await contactApi.getAll();

      const contacts = res.filter(
        (contact) =>
          contact.name.toLowerCase().includes(filter.nameLike.toLowerCase()) &&
          (!filter.gender || contact.gender === filter.gender)
      );

      setAllContacts(contacts);

      setIsLoading(false);
    })();
  }, [filter]);

  return { allContacts, isLoading };
};
