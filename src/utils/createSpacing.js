import fs from "fs";

const generateCSSVariables = () => {
  let output = "@theme {\n";
  const categories = ["spacing", "radius", "text"];

  categories.forEach((category) => {
    let px = 2;

    for (let i = 1; i <= 600; i++) {
      let num = (i * 0.5).toFixed(1).replace(".0", "").replace(".", "-"); // Mengganti '.

      output += `  --${category}-c-${num}: clamp(calc(${px}px * 0.35), calc(${px} / 1920 * 100vw), ${px}px);\n`;

      px += 2;
    }

    output += "\n";
  });

  output += "}";

  fs.writeFileSync("spacing.css", output);
  console.log("✅ spacing.css created!");
};

generateCSSVariables();
