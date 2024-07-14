"use client";
import { useState, useEffect } from 'react';
import { languages } from '@/app/i18n/settings';
import {useTranslation} from "@/app/i18n";

const LanguageSwitcher = ({ lng }) => {
	const { t } = useTranslation(lng, 'footer')
	const [selectedLang, setSelectedLang] = useState(lng);

	useEffect(() => {
		setSelectedLang(lng);
	}, [lng]);

	const handleChangeLanguage = (event) => {
		const selectedLang = event.target.value;
		window.location.href = `/${selectedLang}`;
	};

	return (
		<div>
			<select
				value={selectedLang}
				onChange={handleChangeLanguage}
				className="text-blue-500 hover:text-blue-700 underline bg-transparent border-none"
			>
				{languages.map((lang) => (
					<option key={lang} value={lang}>
						{lang}
					</option>
				))}
			</select>
		</div>
	);
};

export default LanguageSwitcher;