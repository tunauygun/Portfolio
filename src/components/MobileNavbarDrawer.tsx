import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function MobileNavbarDrawer() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button variant="outline" size="lg" className="m-2">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <div onClick={() => handleNavClick("#Home")}>Home</div>
          <div onClick={() => handleNavClick("#Experience")}>Experience</div>
          <div onClick={() => handleNavClick("#Education")}>Education</div>
          <div onClick={() => handleNavClick("#Projects")}>Projects</div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
