import { CONTACTS } from '../mock';
import { Contact } from '../models';

const DELAY = 500;

export const contactApi = {
  getAll: () => {
    return new Promise<Contact[]>((resolve, reject) =>
      setTimeout(() => resolve(CONTACTS), DELAY)
    );
  },

  getById: (id: string) => {
    return new Promise<Contact | undefined>((resolve, reject) =>
      setTimeout(
        () => resolve(CONTACTS.find((contact) => contact.id === id)),
        DELAY
      )
    );
  },
};
