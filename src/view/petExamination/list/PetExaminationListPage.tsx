import React from 'react';
import { i18n } from 'src/i18n';
import PetExaminationListFilter from 'src/view/petExamination/list/PetExaminationListFilter';
import PetExaminationListTable from 'src/view/petExamination/list/PetExaminationListTable';
import PetExaminationListToolbar from 'src/view/petExamination/list/PetExaminationListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PetExaminationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.petExamination.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.petExamination.list.title')}
        </h1>
        <PetExaminationListToolbar />
        <PetExaminationListFilter />
        <PetExaminationListTable />
      </div>
    </>
  );
}

export default PetExaminationListPage;
