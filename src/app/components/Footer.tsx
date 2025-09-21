export default function Footer() {
  return (
    <footer id="homepage-footer" className="footer-sec bg-dark text-light py-4">
      <div className="container text-center">
        <p>© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
