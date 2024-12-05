import Header from "./components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="/profile.png"
        type="image/x-icon"
      />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
