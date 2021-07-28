import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';
import ServiceReservationViewItem from 'src/view/serviceReservation/view/ServiceReservationViewItem';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';
import CurrencyViewItem from 'src/view/currency/view/CurrencyViewItem';

function BusinessPaymentCycleView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <BusinessViewItem
        label={i18n('entities.businessPaymentCycle.fields.businessID')}
        value={record.businessID}
      />

      <TextViewItem
        label={i18n('entities.businessPaymentCycle.fields.cycleStart')}
        value={record.cycleStart}
      />

      <TextViewItem
        label={i18n('entities.businessPaymentCycle.fields.cycleEnd')}
        value={record.cycleEnd}
      />

      <TextViewItem
        label={i18n('entities.businessPaymentCycle.fields.statusPayment')}
        value={
          record.statusPayment &&
          i18n(
            `entities.businessPaymentCycle.enumerators.statusPayment.${record.statusPayment}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.businessPaymentCycle.fields.totalBusinessServiceReservationPeriod')}
        value={record.totalBusinessServiceReservationPeriod}
      />

      <TextViewItem
        label={i18n('entities.businessPaymentCycle.fields.totalCommisionCalculated')}
        value={record.totalCommisionCalculated}
      />

      <TextViewItem
        label={i18n('entities.businessPaymentCycle.fields.commisionRateUsedOnCalculation')}
        value={record.commisionRateUsedOnCalculation}
      />

      <ServiceReservationViewItem
        label={i18n('entities.businessPaymentCycle.fields.businessServiceReservationsUsed')}
        value={record.businessServiceReservationsUsed}
      />

      <TextViewItem
        label={i18n('entities.businessPaymentCycle.fields.statusCyclePayment')}
        value={
          record.statusCyclePayment &&
          i18n(
            `entities.businessPaymentCycle.enumerators.statusCyclePayment.${record.statusCyclePayment}`,
          )
        }
      />

      <CustomerViewItem
        label={i18n('entities.businessPaymentCycle.fields.customerID')}
        value={record.customerID}
      />

      <TextViewItem
        label={i18n('entities.businessPaymentCycle.fields.paymentMethod')}
        value={
          record.paymentMethod &&
          i18n(
            `entities.businessPaymentCycle.enumerators.paymentMethod.${record.paymentMethod}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.businessPaymentCycle.fields.paymentGatewayReferenceCode')}
        value={record.paymentGatewayReferenceCode}
      />

      <TextViewItem
        label={i18n('entities.businessPaymentCycle.fields.paymentGatewayType')}
        value={
          record.paymentGatewayType &&
          i18n(
            `entities.businessPaymentCycle.enumerators.paymentGatewayType.${record.paymentGatewayType}`,
          )
        }
      />

      <CountryViewItem
        label={i18n('entities.businessPaymentCycle.fields.country')}
        value={record.country}
      />

      <CurrencyViewItem
        label={i18n('entities.businessPaymentCycle.fields.currency')}
        value={record.currency}
      />
    </div>
  );
}

export default BusinessPaymentCycleView;
