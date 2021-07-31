import { i18n } from 'src/i18n';

class Roles {
  static get values() {
    return {
      aipettoAdmin: 'aipettoAdmin',
      aipettoManager: 'aipettoManager',
      aipettoEditor: 'aipettoEditor',
      businessAdmin: 'businessAdmin',
      businessManager: 'businessManager',
      petshopAdmin: 'petshopAdmin',
      businessEmployee: 'businessEmployee',
      veterinaryAdmin: 'veterinaryAdmin',
      veterinarian: 'veterinarian',
      transporterAdmin: 'transporterAdmin',
      transporter: 'transporter',
      petOwner: 'petOwner'
    };
  }

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.label`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.description`);
  }
}

export default Roles;
