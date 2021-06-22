import React from 'react';
import { i18n } from 'src/i18n';
import BusinessPlaceServiceAvailabilityListFilter from 'src/view/businessPlaceServiceAvailability/list/BusinessPlaceServiceAvailabilityListFilter';
import BusinessPlaceServiceAvailabilityListTable from 'src/view/businessPlaceServiceAvailability/list/BusinessPlaceServiceAvailabilityListTable';
import BusinessPlaceServiceAvailabilityListToolbar from 'src/view/businessPlaceServiceAvailability/list/BusinessPlaceServiceAvailabilityListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function BusinessPlaceServiceAvailabilityListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/dashboard'],
          [i18n('entities.businessPlaceServiceAvailability.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.businessPlaceServiceAvailability.list.title')}
        </h1>
        <BusinessPlaceServiceAvailabilityListToolbar />
        <BusinessPlaceServiceAvailabilityListFilter />
        <BusinessPlaceServiceAvailabilityListTable />
      </div>
    </>
  );
}

export default BusinessPlaceServiceAvailabilityListPage;
