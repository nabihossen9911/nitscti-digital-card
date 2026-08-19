export async function shareCard() {

  if (navigator.share) {

    try {

      await navigator.share({

        title: "NITS Computer Training Institute",

        text: "Connect with Nabi Hossen",

        url: window.location.href,

      });

    } catch (err) {

      console.log(err);

    }

  } else {

    await navigator.clipboard.writeText(window.location.href);

    alert("Link copied successfully.");

  }

}