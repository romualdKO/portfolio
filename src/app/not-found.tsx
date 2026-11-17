import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <main className="not-found-page"><span className="not-found-mark">RK / 404</span><p className="eyebrow"><span className="eyebrow-line" /> Page introuvable</p><h1>Cette piste<br /><em>s’arrête ici.</em></h1><p className="not-found-copy">La page demandée n’existe pas ou a été déplacée.</p><Link href="/" className="button button-primary"><ArrowLeft size={16} /> Revenir à l’accueil</Link></main>;
}