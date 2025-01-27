"use client";

import React from "react";
import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";
import { Tables } from "@/types/supabase-types";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
  },
  date: {
    fontSize: 10,
    color: "gray",
  },
});

type OfferRow = Tables<"offers">;

interface OfferPDFProps {
  offer: OfferRow;
}

export function OfferPDF({ offer }: OfferPDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{offer.title || "Untitled offer"}</Text>
        <Text style={styles.description}>
          {offer.description || "No description"}
        </Text>
        <Text style={styles.date}>
          Created at: {new Date(offer.created_at).toLocaleString()}
        </Text>
      </Page>
    </Document>
  );
}
