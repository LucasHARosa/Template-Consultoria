import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phoneNumber = "5511999999999"; // Substitua pelo número real
  const message = "Olá! Gostaria de saber mais sobre os serviços da Strategic Vista.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-float">
      <Button
        variant="whatsapp"
        size="icon"
        className="h-14 w-14 rounded-full"
        onClick={() => window.open(whatsappUrl, "_blank")}
        aria-label="Enviar mensagem no WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;