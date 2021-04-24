import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/messages/importer/messagesImporterSelectors';
import MessagesService from 'src/modules/messages/messagesService';
import fields from 'src/modules/messages/importer/messagesImporterFields';
import { i18n } from 'src/i18n';

const messagesImporterActions = importerActions(
  'MESSAGES_IMPORTER',
  selectors,
  MessagesService.import,
  fields,
  i18n('entities.messages.importer.fileName'),
);

export default messagesImporterActions;