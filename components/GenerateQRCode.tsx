import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { QRCode } from "react-qrcode-logo";

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
  const [fg, setFg] = useState("#000");
  const [bgQr, setBgQr] = useState("#ffffff");

  return (
    <section className="px-[20vw] pt-20 flex flex-col justify-center items-center">
      <div className="mt-8 w-[40vw]">
        <Label htmlFor="terms" className="">
          Url
        </Label>
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://"
          className="mb-8 mt-2"
        />
        <Label htmlFor="terms">Foreground color</Label>
        <Input
          type="color"
          value={fg}
          onChange={(e) => setFg(e.target.value)}
          className="mt-2 mb-8"
        />
        <Label htmlFor="terms">background color</Label>
        <Input
          type="color"
          value={bgQr}
          onChange={(e) => setBgQr(e.target.value)}
          className="mt-2 mb-8"
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
        fgColor={fg}
        bgColor={bgQr}
        style={{ borderRadius: "10px" }}
      />

      <Button onClick={downloadCode} className="mt-8">
        Download QR Code
      </Button>
    </section>
  );
};

export default GenerateQRCode;
