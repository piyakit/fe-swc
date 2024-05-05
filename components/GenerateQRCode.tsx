import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { QRCode } from "react-qrcode-logo";
import { Label } from "@/components/ui/label"

const GenerateQRCode = () => {
  const downloadCode = () => {
    const canvas = document.getElementById("QR") as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `qr_${Date.now()}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const [url, setUrl] = useState("");
  return (
    <section className="px-[20vw] pt-20 flex flex-col justify-center items-center">
      <div className="mt-8 w-[40vw]">
        <Label htmlFor="terms" className="">Url</Label>
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://"
          className="mb-8 mt-2"
        />
      </div>

      <QRCode
        value={url} // here you should keep the link/value(string) for which you are generation promocode
        size={350} // the dimension of the QR code (number)
        logoImage="/logo.png" // URL of the logo you want to use, make sure it is a dynamic url
        logoHeight={60}
        logoWidth={80}
        logoOpacity={1}
        enableCORS={true} // enabling CORS, this is the thing that will bypass that DOM check
        qrStyle="squares" // type of qr code, wether you want dotted ones or the square ones
        eyeRadius={10} // radius of the promocode eye
        id={"QR"}
      />

      <Button onClick={downloadCode} className="mt-8">
        Download QR Code
      </Button>
    </section>
  );
};

export default GenerateQRCode;
