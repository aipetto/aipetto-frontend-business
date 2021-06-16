import React from 'react';
import { i18n } from 'src/i18n';
import WalletListFilter from 'src/view/wallet/list/WalletListFilter';
import WalletListTable from 'src/view/wallet/list/WalletListTable';
import WalletListToolbar from 'src/view/wallet/list/WalletListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function WalletListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/dashboard'],
          [i18n('entities.wallet.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.wallet.list.title')}
        </h1>
        <WalletListToolbar />
        <WalletListFilter />
        <WalletListTable />
      </div>
    </>
  );
}

export default WalletListPage;
