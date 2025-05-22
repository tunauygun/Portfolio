import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

interface ClickableCardImageProps {
  image: string
  alt: string
  className?: string
}

export function ClickableCardImage({ image, alt, className }: ClickableCardImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={image}
          alt={alt}
          className={`cursor-pointer ${className ?? ""}`}
        />
      </DialogTrigger>
      <DialogContent className="h-[90vh] min-w-[90vw] flex items-center justify-center ">
        <img
          src={image}
          alt={alt}
          className="max-w-full max-h-full"
        />
      </DialogContent>
    </Dialog>
  )
}
