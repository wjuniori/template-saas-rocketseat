"use client";

import useMercadoPago from "@/app/hooks/useMercadoPago";
import { useStripe } from "@/app/hooks/useStripe";

export default function Pagamentos() {
  const {
    createPaymentStripeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  } = useStripe();

  const { createMercadoPagoCheckout } = useMercadoPago();

  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Pagamentos</h1>
      <button
        className="border rounded-md px-1"
        onClick={() => createPaymentStripeCheckout({ testeId: "123" })}
      >
        Criar Pagamento Stripe
      </button>
      <button
        className="border rounded-md px-1"
        onClick={() => createSubscriptionStripeCheckout({ testeId: "123" })}
      >
        Criar Assinatura Stripe
      </button>
      <button
        className="border rounded-md px-1"
        onClick={handleCreateStripePortal}
      >
        Criar Portal de Pagamentos
      </button>
      <button
        className="border rounded-md px-1"
        onClick={() =>
          createMercadoPagoCheckout({
            testeId: "123",
            userEmail: "teste@teste.com",
          })
        }
      >
        Criar Pagamento Mercado pago
      </button>
    </div>
  );
}
