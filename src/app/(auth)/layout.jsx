import Container from "@/components/global/Container";

export default function Layout({ children }) {
  return (
    <Container>
      <div className="min-h-screen flex flex-col justify-center items-center">
        {children}
      </div>
    </Container>
  );
}
