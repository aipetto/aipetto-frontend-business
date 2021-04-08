import { i18n } from 'src/i18n';

class Roles {
  static get values() {
    return {
      admin: 'admin',
      adminPetshop: 'adminPetshop',
      employee: 'employee',
      adminVeterinary: 'adminVeterinary',
      petOwner: 'petOwner',
      veterinarian: 'veterinarian',
      transporter: 'transporter'
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
