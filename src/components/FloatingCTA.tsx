"use client";
import { Button } from "@heroui/react";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

// Top translucent bar that appears under the navbar
export default function FloatingCTA() {
  return (
    <div className="fixed z-40 left-0 right-0 top-14 md:top-16">
      <div className="container-max px-4 md:px-6">
        <div className="bg-black/60 text-white rounded-md md:rounded-lg backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 py-2 px-3 md:py-2.5 md:px-4">
          <p className="text-xs md:text-sm">
            Butuh bantuan cepat? Tim kami siap 24 jam melalui WhatsApp.
          </p>
          <Button
            as={"a"}
            href="https://wa.me/6281234567890"
            target="_blank"
            size="sm"
            color="success"
            radius="full"
            className="px-4"
            startContent={<ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4" />}
          >
            Chat WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
