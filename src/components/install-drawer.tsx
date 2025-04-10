"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      (deferredPrompt as any).prompt();
      const { outcome } = await (deferredPrompt as any).userChoice;
      setDeferredPrompt(null);
      setIsInstallable(false);
      console.log(`User response to the install prompt: ${outcome}`);
    }
  };

  return (
    <>
      {isInstallable && (
        <InstallDrawer
          handler={handleInstallClick}
          installable={isInstallable}
        />
      )}
    </>
  );
}

function InstallDrawer({
  handler,
  installable,
}: {
  handler: () => Promise<void>;
  installable: boolean;
}) {
  if (!installable) return null;

  const [defaultOpen, setDefaultOpen] = useState(true);

  useEffect(() => {
    setDefaultOpen(
      localStorage.getItem("install-drawer-shown") != "displayed" &&
        !window.matchMedia("(display-mode: standalone)").matches,
    );
  }, []);

  return (
    <Drawer
      defaultOpen={defaultOpen && installable}
      open={installable && defaultOpen}
    >
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Install the app</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>

          {/*checks if it's ios device*/}
          {/iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !(window as any).MSStream ? (
            <p>
              To install this app on your iOS device, tap the share button
              <span role="img" aria-label="share icon">
                {" "}
                ⎋{" "}
              </span>
              and then "Add to Home Screen"
              <span role="img" aria-label="plus icon">
                {" "}
                ➕{" "}
              </span>
              .
            </p>
          ) : (
            <div>
              <p>This lets you get the best experience out of the platform</p>

              <Button onClick={() => handler()}>Install App</Button>
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  onClick={() =>
                    localStorage.setItem("install-drawer-shown", "displayed")
                  }
                >
                  Cancel
                </Button>
              </DrawerClose>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
