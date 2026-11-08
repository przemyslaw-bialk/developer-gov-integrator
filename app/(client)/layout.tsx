import Navigation from "@/components/(client)/navigation/Navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />

      <div className="mx-auto min-h-screen w-full max-w-[1800px]">
        {children}
      </div>
    </>
  );
}
