// All site copy lives here. Edit this file, not the page.

export const site = {
  name: "pavel b.",
  role: "electronics / embedded / hardware",
  location: "tallinn, ee",
  description:
    "Electronics design, embedded firmware and hardware. Schematics, PCBs, and the code that runs on them.",
};

export const about = [
  "I design circuits, lay out boards and write the firmware that runs on them.",
  "Mostly small microcontroller systems: sensors, power, motor control, low-power wireless.",
  "Previously built web products. Now I'd rather be holding a soldering iron.",
];

export const now = [
  "learning analog fundamentals properly",
  "designing a 4-layer stm32 dev board",
  "writing bare-metal drivers in c",
];

export const projects: {
  year: string;
  name: string;
  description: string;
  tags: string[];
  href?: string;
}[] = [
  {
    year: "2026",
    name: "co224",
    description:
      "Wi-Fi CO₂ monitor. ESP32-S3 reads CO₂, temperature and humidity from an SCD4x over I²C and publishes over MQTT/TLS to a live browser dashboard.",
    tags: ["esp32-s3", "esp-idf", "scd4x", "mqtt"],
    href: "https://github.com/paulbgtr/co224",
  },
  {
    year: "2024",
    name: "nebriq",
    description:
      "AI-assisted writing SaaS. Took it from idea to production with real users, then shut it down.",
    tags: ["saas", "ai", "full-stack"],
    href: "https://github.com/paulbgtr/nebriq",
  },
];

export const tools: [string, string][] = [
  ["eda", "kicad"],
  ["mcu", "stm32, esp32, rp2040"],
  ["lang", "c, rust, python"],
  ["bench", "oscilloscope, logic analyzer, bench psu"],
];

export const links: [string, string, string][] = [
  ["email", "pavel@paulbg.dev", "mailto:pavel@paulbg.dev"],
  ["github", "paulbgtr", "https://github.com/paulbgtr"],
  ["bluesky", "pbgtr.bsky.social", "https://pbgtr.bsky.social/"],
];
