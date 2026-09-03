export function Footer() {
  return (
    <footer id="contact" className="border-t border-bone/10 bg-basil py-12 text-bone">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-xl italic">Salad Treat</p>
          <p className="mt-2 max-w-xs text-sm text-bone/60">
            Enjoy the taste of eating right. Fresh bowls and meal plans,
            delivered across Kampala.
          </p>
        </div>

        <div className="flex gap-16 text-sm text-bone/70">
          <div>
            <p className="font-medium text-bone">Get in touch</p>
            <p className="mt-2">0752 182 379</p>
            <p>0775 980 728</p>
          </div>
          <div>
            <p className="font-medium text-bone">Follow</p>
            <p className="mt-2">@salad.treat.ug on TikTok</p>
            <p>@salad_treat_ug on Instagram</p>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-6 text-xs text-bone/40">
        © {new Date().getFullYear()} Salad Treat. All rights reserved.
      </p>
    </footer>
  );
}
