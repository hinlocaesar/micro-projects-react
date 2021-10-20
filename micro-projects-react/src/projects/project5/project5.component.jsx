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
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("de")}>DE</button>
      <hr />
      <Trans i18nKey="description.part1">
        To get started, edit <code>src/App.js</code> and save to reload.
      </Trans>
      <div>{t("description.part2")}</div>
    </div>
  );
}

export default Project5;
