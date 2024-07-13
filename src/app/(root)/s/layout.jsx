import SHeader from "@/components/s/SHeader";

export default function SearchLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
}
