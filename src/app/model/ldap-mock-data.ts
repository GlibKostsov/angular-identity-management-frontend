import { UserLdap } from './user-ldap';

export const LDAP_USERS: UserLdap[] = [
  {
    login: 'test.v1',
    nom: 'V1',
    prenom: 'Test',
    nomComplet: 'V1 Test',
    motDePasse: '',
    mail: 'test.v1@epsi.fr',
    role: 'ROLE_USER',
    employeNumero: 1234,
    employeNiveau: 120,
    dateEmbauche: '2020-01-01',
    publicherId: 1,
    active: true,
  },
  {
    login: 'test.v2',
    nom: 'V2',
    prenom: 'Test',
    nomComplet: 'V2 Test',
    motDePasse: '',
    mail: 'test.v2@epsi.fr',
    role: 'ROLE_USER',
    employeNumero: 2345,
    employeNiveau: 240,
    dateEmbauche: '2020-02-02',
    publicherId: 2,
    active: true,
  },
];