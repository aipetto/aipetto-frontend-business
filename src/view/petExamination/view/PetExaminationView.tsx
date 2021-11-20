import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import PetViewItem from 'src/view/pet/view/PetViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import LanguagesViewItem from 'src/view/languages/view/LanguagesViewItem';
import ProvidersViewItem from 'src/view/providers/view/ProvidersViewItem';
import moment from "moment";

function PetExaminationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <PetViewItem
        label={i18n('entities.petExamination.fields.petID')}
        value={record.petID}
      />

      <TextViewItem
        label={i18n('entities.petExamination.fields.examinationInternalCode')}
        value={record.examinationInternalCode}
      />

      <UserViewItem
        label={i18n('entities.petExamination.fields.veterinariesResponsibleDiagnostic')}
        value={record.veterinariesResponsibleDiagnostic}
      />

      <BusinessViewItem
        label={i18n('entities.petExamination.fields.businessID')}
        value={record.businessID}
      />

      <LanguagesViewItem
        label={i18n('entities.petExamination.fields.language')}
        value={record.language}
      />

      <ProvidersViewItem
        label={i18n('entities.petExamination.fields.providersID')}
        value={record.providersID}
      />

      <TextViewItem
        label={i18n('entities.petExamination.fields.statusExamination')}
        value={
          record.statusExamination &&
          i18n(
            `entities.petExamination.enumerators.statusExamination.${record.statusExamination}`,
          )
        }
      />

      <FilesViewItem
        label={i18n(
          'entities.petExamination.fields.examinationsFiles',
        )}
        value={record.examinationsFiles}
      />

      <ImagesViewItem
        label={i18n('entities.petExamination.fields.examinationImages')}
        value={record.examinationImages}
      />

      <TextViewItem
        label={i18n('entities.petExamination.fields.examinationDiagnosticNotes')}
        value={record.examinationDiagnosticNotes}
      />

      <TextViewItem
        label={i18n('entities.petExamination.fields.examinationRecommendationNotes')}
        value={record.examinationRecommendationNotes}
      />

      {record.nextExaminationSession && <TextViewItem
        label={i18n(
          'entities.petExamination.fields.nextExaminationSession',
        )}
        value={moment(record.nextExaminationSession).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}
    </div>
  );
}

export default PetExaminationView;
