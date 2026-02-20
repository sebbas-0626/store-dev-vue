#!/usr/bin/env bash
set -e

echo "🔍 Ejecutando ESLint con --fix"
# Run ESLint with the --fix flag to automatically correct fixable issues
npx eslint --ext .js,.ts,.vue src --fix

echo "✅ Lint completado (auto‑fix aplicado)"
