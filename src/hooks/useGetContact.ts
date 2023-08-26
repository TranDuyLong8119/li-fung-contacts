import { useState, useEffect } from 'react';
import { Contact } from '../models';
import { contactApi } from '../api';
import { useParams } from 'react-router-dom';

export const useGetContact = () => {
  const [contact, setContact] = useState<Contact>();
  const [isLoading, setIsLoading] = useState(false);

  const { contactId } = useParams<{ contactId: string }>();

  useEffect(() => {
    if (!contactId) return;

    (async () => {
      setIsLoading(true);

      const contact = await contactApi.getById(contactId);
      setContact(contact);

      setIsLoading(false);
    })();
  }, [contactId]);

  return { contact, isLoading };
};
