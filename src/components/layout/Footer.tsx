import Container from "../ui/container/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 text-center">
      <Container>
        <p className="text-body-sm">© {year} Sehanya Ranasingha. All rights reserved.</p>
        <p className="mt-2 text-xs text-slate-600">
          Built with React · TypeScript · Tailwind
        </p>
      </Container>
    </footer>
  );
}
