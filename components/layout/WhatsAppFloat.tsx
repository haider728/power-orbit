"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import styles from "@/components/layout/whatsapp-float.module.css";

const WHATSAPP_NUMBER = "966533085658";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppFloat() {
  const { t } = useLanguage();

  return (
    <a
      href={WHATSAPP_URL}
      className={styles.whatsappFloat}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp.label")}
      title={t("whatsapp.label")}
    >
      <i className="fab fa-whatsapp" aria-hidden="true" />
    </a>
  );
}
