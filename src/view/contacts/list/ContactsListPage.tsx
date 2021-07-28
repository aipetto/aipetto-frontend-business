import React from 'react';
import { i18n } from 'src/i18n';
import ContactsListFilter from 'src/view/contacts/list/ContactsListFilter';
import ContactsListTable from 'src/view/contacts/list/ContactsListTable';
import ContactsListToolbar from 'src/view/contacts/list/ContactsListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ContactsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.contacts.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.contacts.list.title')}
        </h1>
        <ContactsListToolbar />
        <ContactsListFilter />
        <ContactsListTable />
      </div>
    </>
  );
}

export default ContactsListPage;
