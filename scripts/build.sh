#!/usr/bin/env bash
set -e

echo "🔧 Generando build de producción..."
npm run build

echo "✅ Build completado en ./dist"
