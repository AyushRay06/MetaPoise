import { HeroVideoDialog } from "./magicui/video"
export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/WHQgqkNU3A4"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/WHQgqkNU3A4"
        thumbnailSrc="/events/e9.jpeg"
        thumbnailAlt="Hero Video"
      />
    </div>
  )
}
