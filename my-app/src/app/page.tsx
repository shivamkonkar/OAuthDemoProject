import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../config/msal-config";
import AzureAuthButton from "../components/AzureAuthButton";

const msalInstance = new PublicClientApplication(msalConfig);

export default function Home() {
  return (
    <MsalProvider instance={msalInstance}>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Azure AD OAuth Demo</h1>
        <AzureAuthButton />
      </main>
    </MsalProvider>
  );
}

