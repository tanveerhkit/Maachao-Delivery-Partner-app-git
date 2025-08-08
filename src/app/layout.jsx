import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Maachao Delivery Partner App</title>
        <meta name="description" content="Join Maachao as a delivery partner and start earning today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/party-logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
} 