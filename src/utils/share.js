import toast from "react-hot-toast";

export async function shareCard() {
  const shareData = {
    title: "NITS Computer Training Institute",
    text: "Connect with NITS Computer Training Institute",
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      toast.success("Thanks for sharing!");
    } catch {
      // User cancelled share
    }
  } else {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    } catch {
      toast.error("Unable to copy link");
    }
  }
}