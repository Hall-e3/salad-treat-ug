import { SparklesIcon, MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";
import AppText from "@/components/ui/AppText";

export default function Footer() {
  return (
    <footer className="bg-basil-deep text-bone py-16 border-t border-bone/10">
      <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2 font-display text-2xl italic tracking-wide text-bone">
            <SparklesIcon className="h-6 w-6 text-zest" />
            <span>Salad Treat</span>
          </div>
          <AppText variant="body-sm" color="inverse" className="opacity-70 max-w-sm leading-relaxed">
            Kampala&rsquo;s premier fresh salad bar & meal plan subscription provider. Portion-controlled, nutrient-dense, and delivered fresh to your doorstep Monday to Saturday.
          </AppText>
          <AppText variant="caption" color="zest" className="font-semibold block">
            &ldquo;Enjoy the Taste of Eating Right&rdquo;
          </AppText>
        </div>

        <div className="space-y-3">
          <AppText variant="label-lg" color="zest" transform="uppercase" className="font-bold">
            Quick Navigation
          </AppText>
          <ul className="space-y-2 text-xs text-bone/70">
            <li><a href="#top" className="hover:text-zest cursor-pointer">Home</a></li>
            <li><a href="#menu" className="hover:text-zest cursor-pointer">Meal Subscription Plans</a></li>
            <li><a href="#bowls" className="hover:text-zest cursor-pointer">Signature Salad Bowls</a></li>
            <li><a href="#builder" className="hover:text-zest cursor-pointer">Custom Bowl Builder</a></li>
            <li><a href="#order" className="hover:text-zest cursor-pointer">Kampala Delivery Estimator</a></li>
            <li><a href="#faq" className="hover:text-zest cursor-pointer">FAQs</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <AppText variant="label-lg" color="zest" transform="uppercase" className="font-bold">
            Delivery & Support
          </AppText>
          <AppText variant="body-sm" color="inverse" className="opacity-80 flex items-center gap-2">
            <MapPinIcon className="h-4 w-4 text-zest shrink-0" />
            <span>Kampala, Uganda</span>
          </AppText>
          <AppText variant="body-sm" color="inverse" className="opacity-80 flex items-center gap-2">
            <PhoneIcon className="h-4 w-4 text-zest shrink-0" />
            <span>0752 182 379 / 0775 980 728</span>
          </AppText>
          <AppText variant="body-sm" color="inverse" className="opacity-80 flex items-center gap-2">
            <ClockIcon className="h-4 w-4 text-zest shrink-0" />
            <span>Mon &ndash; Sat: 8:00 AM &ndash; 5:00 PM</span>
          </AppText>
          <div className="pt-2 text-xs text-bone/50">
            Follow us on Instagram & TikTok @saladtreat
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-12 pt-6 border-t border-bone/10 text-center text-xs text-bone/40">
        © {new Date().getFullYear()} Salad Treat. All rights reserved. Crafted with fresh ingredients in Kampala.
      </div>
    </footer>
  );
}
