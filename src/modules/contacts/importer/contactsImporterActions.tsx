import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/contacts/importer/contactsImporterSelectors';
import ContactsService from 'src/modules/contacts/contactsService';
import fields from 'src/modules/contacts/importer/contactsImporterFields';
import { i18n } from 'src/i18n';

const contactsImporterActions = importerActions(
  'CONTACTS_IMPORTER',
  selectors,
  ContactsService.import,
  fields,
  i18n('entities.contacts.importer.fileName'),
);

export default contactsImporterActions;