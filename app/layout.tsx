"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";

const inter = Inter({ subsets: ["latin"] });

import {Authenticator} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";
import {Amplify} from "aws-amplify";

Amplify.configure(outputs)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Authenticator>
      {children}
      </Authenticator>
      </body>
    </html>
  );
}
