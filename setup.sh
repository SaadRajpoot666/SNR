#!/bin/bash

echo "🚀 Creating Vite + React app (latest version)..."
npm create vite@latest . -- --template react
cd my-app

echo "📦 Installing dependencies..."
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

echo "⚙️ Configuring tailwind.config.js..."
cat > tailwind.config.js << EOL
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

echo "🧠 Configuring postcss.config.js..."
cat > postcss.config.js << EOL
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOL

echo "🪄 Creating base Tailwind CSS file..."
mkdir -p src
cat > src/index.css << EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

echo "🔗 Linking Tailwind in main.jsx..."
sed -i '1s;^;import "./index.css";\n;' src/main.jsx

echo "🎉 All set jani! Run the app with:"
echo "cd my-app && npm run dev"
