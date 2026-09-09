import { shop } from "@/lib/shop";

export default function InstagramLink({ className = "button button-outline", label = "Seguinos en Instagram" }: { className?: string; label?: string }) {
  if (!shop.instagramUrl) return <span className={`${className} unavailable`} aria-disabled="true">Instagram · próximamente</span>;
  return <a className={className} href={shop.instagramUrl} target="_blank" rel="noopener noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>{label}<span aria-hidden="true">↗</span></a>;
}
