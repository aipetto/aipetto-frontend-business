import React from 'react';
import { i18n } from 'src/i18n';
import ProfessionalsServiceAvailabilityListFilter from 'src/view/professionalsServiceAvailability/list/ProfessionalsServiceAvailabilityListFilter';
import ProfessionalsServiceAvailabilityListTable from 'src/view/professionalsServiceAvailability/list/ProfessionalsServiceAvailabilityListTable';
import ProfessionalsServiceAvailabilityListToolbar from 'src/view/professionalsServiceAvailability/list/ProfessionalsServiceAvailabilityListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ProfessionalsServiceAvailabilityListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/network'],
          [i18n('entities.professionalsServiceAvailability.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.professionalsServiceAvailability.list.title')}
        </h1>
        <ProfessionalsServiceAvailabilityListToolbar />
        <ProfessionalsServiceAvailabilityListFilter />
        <ProfessionalsServiceAvailabilityListTable />
      </div>
    </>
  );
}

export default ProfessionalsServiceAvailabilityListPage;
