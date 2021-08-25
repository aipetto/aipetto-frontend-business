/**
 * Available only in the current session of the browser
 */
export default class AuthInvitationTokenEmail {
  static get() {
    return (
      sessionStorage.getItem('invitationToken') || null
    );
  }

  static set(token) {
    sessionStorage.setItem('invitationToken', token);
  }

  static clear() {
    sessionStorage.removeItem('invitationToken');
  }

  static getEmail() {
      return (
          sessionStorage.getItem('invitationEmail') || null
      );
    }

  static setEmail(email) {
      sessionStorage.setItem('invitationEmail', email);
    }

  static clearEmail() {
      sessionStorage.removeItem('invitationEmail');
    }
}
