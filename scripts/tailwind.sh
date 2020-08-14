TAILWIND_CONFIG=tailwind.js
if [ ! -f "$TAILWIND_CONFIG" ]; then
    npx tailwind init tailwind.js --full 
fi