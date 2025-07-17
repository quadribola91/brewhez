import Container from "@/shared/Container";
import Button from "@/shared/Button";

export default function Home() {
  return (
    <>
      <Container className="py-10">
        <h1 className="text-3xl font-bold mb-4">Welcome to Home Page</h1>
        <p className="mb-4">This is your coding test brew jaz app home page.</p>
        <Button>Click Me</Button>
      </Container>
    </>
  );
}
