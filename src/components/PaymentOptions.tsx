import React from "react";
import { 
  Banknote, 
  CreditCard, 
  Wallet, 
  HandCoins, 
  CheckCircle2 
} from "lucide-react";
import { motion } from "framer-motion";

const PaymentOptions = () => {
  const methods = [
    { icon: <Banknote size={32} />, name: "Cash" },
    { icon: <Wallet size={32} />, name: "M-Pesa" },
    { icon: <CreditCard size={32} />, name: "Cheques" },
    { icon: <HandCoins size={32} />, name: "Installments" },
  ];

  return (
    <div className="py-16 bg-slate-50 border-t border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-10 uppercase tracking-widest text-sm text-primary">Accepted Payment Methods</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {methods.map((method, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="text-primary">{method.icon}</div>
                <span className="font-bold text-slate-700">{method.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10 inline-flex items-center gap-3">
             <CheckCircle2 size={20} className="text-primary" />
             <p className="text-slate-600 font-medium">
               We offer <span className="text-primary font-bold">Flexible Payment Plans</span> for extensive orthodontic and restorative treatments.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;