
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'

import {getLastCommitDate} from "@/lib/gitUtils";
import {CVDownload} from "@/app/[lng]/components/Downloads";
import TypingAnimation from "@/app/[lng]/components/TypingAnimation";
import Social from "@/app/[lng]/components/Social";
import Photo from "@/app/[lng]/components/Photo";
import Stats from "@/app/[lng]/components/Stats";
import {Trans} from "react-i18next/TransWithoutContext";
import Link from "next/link";
import LanguageSwitcher from "@/app/[lng]/components/LanguageSwitcher";
import {Footer} from "@/app/[lng]/components/Footer";

export async function generateMetadata({ params: { lng }, path = ''  }) {
  const { t } = await useTranslation(lng)
  return { title: t('Main page') }
}

export default async function Page({ params: { lng }, path = '' }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)
  const lastCommitDate = getLastCommitDate();


  return (
    <>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl text-text-light dark:text-text-dark">Full-stack developer</span>
              <h1 className="h1 mb-6 text-text-light dark:text-text-dark">
                Hello I'm <br/> <span className="text-accent">Youri Janssen</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-text-light dark:text-text-dark">
                <TypingAnimation
                    text="Welcome to my portfolio page! Here you'll find information about me and my projects. If you have any questions or would like to get in touch, please visit the contact page."/>
              </p>
              {/* btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <CVDownload/>
                <div className="mb-8 xl:mb-0">
                  <Social
                      containerStyles="flex gap-6"
                      iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
              <div className="container mx-auto xl:text-left">
                <p className="text-text-light dark:text-text-dark">Page last updated on: {lastCommitDate}</p>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo/>
            </div>
          </div>
        <Footer lng={lng}/>
        </div>
        <Stats/>
      </section>
      </>
  );
};

