import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins";
import jwt from "jsonwebtoken";

const baseURL =
  process.env.BETTER_AUTH_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  "http://localhost:3000";

export const auth = betterAuth({
  baseURL,
  basePath: "/api/auth",
  plugins: [
    genericOAuth({
      config: [
        {
          providerId: "keycloak",
          clientId: process.env.KEYCLOAK_CLIENT_ID!,
          clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
          authorizationUrl: `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/`,
          scopes: ["openid"],
          getUserInfo: async (tokens) => {
            // Access provider-specific fields from raw token data
            const decodedToken = jwt.decode(tokens.accessToken!) as any;
            return {
              id: decodedToken.sub,
              name: decodedToken.name,
              email: decodedToken.email,
              emailVerified: decodedToken.email_verified,
              roles: decodedToken.roles,
              permissions: decodedToken.permissions,
              groups: decodedToken.groups,
              clientRoles: decodedToken.clientRoles,
              realmRoles: decodedToken.realmRoles,
              clientId: decodedToken.clientId,
              clientName: decodedToken.clientName,
              clientDisplayName: decodedToken.clientDisplayName,
              clientIcon: decodedToken.clientIcon,
            };
          },
        },
      ],
    }),
  ],
});
