import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'YOUR_GOOGLE_CLOUD_API_KEY';

interface LanguageSwitcherProps {
  text: string;
  setTranslatedText: (translatedText: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ text, setTranslatedText }) => {
  const [language, setLanguage] = useState<string>('en');

  const translateText = async (targetLanguage: string) => {
    try {
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2`,
        {},
        {
          params: {
            q: text,
            target: targetLanguage,
            key: API_KEY,
          },
        }
      );
      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    translateText(selectedLanguage);
  };

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="es">Spanish</option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
