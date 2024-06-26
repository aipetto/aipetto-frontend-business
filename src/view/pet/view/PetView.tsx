import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import moment from 'moment';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import BreedViewItem from 'src/view/breed/view/BreedViewItem';
import PetTypesViewItem from 'src/view/petTypes/view/PetTypesViewItem';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';
import PetPhotosViewItem from 'src/view/petPhotos/view/PetPhotosViewItem';
import PetVaccinesViewItem from 'src/view/petVaccines/view/PetVaccinesViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import PetDiseasesViewItem from 'src/view/petDiseases/view/PetDiseasesViewItem';
import PetViewItem from 'src/view/pet/view/PetViewItem';

function PetView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.pet.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.nickname')}
        value={record.nickname}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.uniqueIdentifier')}
        value={record.uniqueIdentifier}
      />

      <ImagesViewItem
        label={i18n('entities.pet.fields.profileImage')}
        value={record.profileImage}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.birthdate')}
        value={record.birthdate}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.age')}
        value={record.age}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.color')}
        value={
          record.color &&
          i18n(
            `entities.pet.enumerators.color.${record.color}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.secondColor')}
        value={
          record.secondColor &&
          i18n(
            `entities.pet.enumerators.secondColor.${record.secondColor}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.thirdColor')}
        value={
          record.thirdColor &&
          i18n(
            `entities.pet.enumerators.thirdColor.${record.thirdColor}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.sex')}
        value={
          record.sex &&
          i18n(
            `entities.pet.enumerators.sex.${record.sex}`,
          )
        }
      />

      <BreedViewItem
        label={i18n('entities.pet.fields.breed')}
        value={record.breed}
      />

      <BreedViewItem
        label={i18n('entities.pet.fields.secondBreedMixed')}
        value={record.secondBreedMixed}
      />

      <PetTypesViewItem
        label={i18n('entities.pet.fields.type')}
        value={record.type}
      />

      <CustomerViewItem
        label={i18n('entities.pet.fields.customerIds')}
        value={record.customerIds}
      />

      <UserViewItem
        label={i18n('entities.pet.fields.petOwners')}
        value={record.petOwners}
      />

      <PetPhotosViewItem
        label={i18n('entities.pet.fields.photos')}
        value={record.photos}
      />

      <PetVaccinesViewItem
        label={i18n('entities.pet.fields.vaccines')}
        value={record.vaccines}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.maturitySize')}
        value={
          record.maturitySize &&
          i18n(
            `entities.pet.enumerators.maturitySize.${record.maturitySize}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.furLength')}
        value={
          record.furLength &&
          i18n(
            `entities.pet.enumerators.furLength.${record.furLength}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.hasBeenVaccinated')}
        value={
          record.hasBeenVaccinated
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.hasBeenDewormed')}
        value={
          record.hasBeenDewormed
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.hasBeenSterilizedSpayed')}
        value={
          record.hasBeenSterilizedSpayed
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.health')}
        value={
          record.health &&
          i18n(
            `entities.pet.enumerators.health.${record.health}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.isLost')}
        value={
          record.isLost
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.biography')}
        value={record.biography}
      />

      <UserViewItem
        label={i18n('entities.pet.fields.usersAuthorized')}
        value={record.usersAuthorized}
      />

      <BusinessViewItem
        label={i18n('entities.pet.fields.businessAuthorized')}
        value={record.businessAuthorized}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.isLookingForMatch')}
        value={
          record.isLookingForMatch
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <PetDiseasesViewItem
        label={i18n('entities.pet.fields.diseases')}
        value={record.diseases}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.isGuideDog')}
        value={
          record.isGuideDog
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.numberOfLikes')}
        value={record.numberOfLikes}
      />

      <PetViewItem
        label={i18n('entities.pet.fields.matches')}
        value={record.matches}
      />

      <PetViewItem
        label={i18n('entities.pet.fields.petFriends')}
        value={record.petFriends}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.governmentUniqueID')}
        value={record.governmentUniqueID}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.bloodType')}
        value={
          record.bloodType &&
          i18n(
            `entities.pet.enumerators.bloodType.${record.bloodType}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.hasMicrochip')}
        value={
          record.hasMicrochip
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.weight')}
        value={record.weight}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.weightUnit')}
        value={
          record.weightUnit &&
          i18n(
            `entities.pet.enumerators.weightUnit.${record.weightUnit}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.height')}
        value={record.height}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.heightUnit')}
        value={
          record.heightUnit &&
          i18n(
            `entities.pet.enumerators.heightUnit.${record.heightUnit}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.latitude')}
        value={record.latitude}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.longitude')}
        value={record.longitude}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.microchipNumber')}
        value={record.microchipNumber}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.isDead')}
        value={
          record.isDead
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      {record.deathDate && <TextViewItem
        label={i18n(
          'entities.pet.fields.deathDate',
        )}
        value={moment(record.deathDate).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <BusinessViewItem
        label={i18n('entities.pet.fields.allowedBusinessesAccess')}
        value={record.allowedBusinessesAccess}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.hasPedigree')}
        value={
          record.hasPedigree
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.isAggressive')}
        value={
          record.isAggressive
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.isHyperActive')}
        value={
          record.isHyperActive
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.allowedToGrooming')}
        value={
          record.allowedToGrooming
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.phobias')}
        value={record.phobias}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.feeding')}
        value={record.feeding}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.isObsessive')}
        value={
          record.isObsessive
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.isAntiSocial')}
        value={
          record.isAntiSocial
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />

      <TextViewItem
        label={i18n('entities.pet.fields.generalNotes')}
        value={record.generalNotes}
      />

      <TextViewItem
        label={i18n('entities.pet.fields.problemsAndRestrinctions')}
        value={record.problemsAndRestrinctions}
      />
    </div>
  );
}

export default PetView;
