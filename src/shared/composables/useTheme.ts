import { ref } from 'vue'

// Idiomas disponibles: 'en' o 'es'
const language = ref<'en' | 'es'>('en')

export function useTheme() {
  function setLanguage(lang: 'en' | 'es') {
    language.value = lang
  }

  return {
    language,
    setLanguage,
  }
}
