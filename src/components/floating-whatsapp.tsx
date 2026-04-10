"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://wa.me/351938121196"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:scale-110 transition-all duration-200 z-50"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="w-7 h-7 text-white" />
        </motion.a>
    );
}
