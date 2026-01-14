export type DecodedToken = {
  sub: string;
  name: string;
  email: string;
  email_verified: boolean;
  realm_access: { roles: string[] };
};
