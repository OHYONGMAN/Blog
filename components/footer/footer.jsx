import { FooterWrapper, FooterLink } from "@/styled-components/footer.styles";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterLink
        href="https://github.com/OHYONGMAN"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </FooterLink>
      <p>© 2024. All rights reserved.</p>
    </FooterWrapper>
  );
}
