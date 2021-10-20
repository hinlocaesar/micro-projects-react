import React from "react";
import { Trans, useTranslation } from "react-i18next";

//Main Class component
function Project5() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <h3>PROJECT 5 - Language Localization using i18n library</h3>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("de")}>DE</button>

      <Trans i18nKey="description.part1">
        To get started, edit <code>src/project/project5.component.jsx</code> and
        save to reload.
      </Trans>
      <div>{t("description.part2")}</div>
      <h3>-------------------------------------------------------------</h3>
    </div>
  );
}

export default Project5;
