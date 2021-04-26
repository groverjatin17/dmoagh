import React from 'react';
import {useTranslation} from 'react-i18next';
import { isMobile } from 'react-device-detect';
import conditionsXL from './ConditionsXLScreens';
import conditionsXS from './ConditionsXSScreens';
import ConditionList from './ConditionsList';

export default function Conditions() {
  const {t} = useTranslation();
  const conditionsObject = {};
  ConditionList.forEach((item) => {
    conditionsObject[item.listId] = [...item.listItems];
  });
  if (isMobile) {
    console.log('This is a mobile');
  } else {
    console.log('This is not a mobile');
  }
  console.log("🚀 ~ file: Conditions.Main.js ~ line 11 ~ ConditionList.forEach ~ conditionsObject", conditionsObject)

  return !isMobile ? conditionsXL(conditionsObject, t) : conditionsXS(conditionsObject, t);
}
