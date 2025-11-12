export default function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-3xl font-sans mb-4 leading-tight">{children}</h1>;
}
