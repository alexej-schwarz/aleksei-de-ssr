import { Track } from '../interfaces/album'
import { PO_PARKU_GU, UNPLUGGED } from './playlist-data/kassovyj-apparat'
import { AZBUKA_VETRA, OTRAZHENIJA } from './playlist-data/jb'
import {
  KGS,
  INVALIDY,
  ESHHJO_ODIN,
  FESTIVAL_STADTALLENDORF
} from './playlist-data/trava'
import { environment } from '../../../environments/environment'

export const KASSOVYJ_APPARAT_PO_PARKU_GU = PO_PARKU_GU
export const KASSOVYJ_APPARAT_UNPLUGGED = UNPLUGGED
export const ZHIZN: Track[] = [
  {
    title: 'Жизнь',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2023-zhizn/01-zhizn-a-schwarz.mp3`
  },
  {
    title: 'Смерть',
    author: {
      music: 'Алексей Шварц',
      text: 'по мотивам стихотворения Никиты Блинова'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2023-zhizn/02-smert-a-schwarz.mp3`
  },
  {
    title: 'Прощай',
    author: {
      music: 'Алексей Шварц',
      text: 'Иосиф Бродский'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2023-zhizn/03-proshhaj-a-schwarz.mp3`
  },
  {
    title: 'Петров',
    author: {
      music: 'Алексей Шварц',
      text: 'Никита Блинов'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2023-zhizn/04-petrow-a-schwarz.mp3`
  },
  {
    title: 'Романтический мальчик',
    author: {
      music: 'Алексей Шварц',
      text: 'Никита Блинов'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2023-zhizn/05-romanticheskij-malchik-a-schwarz.mp3`
  },
  {
    title: 'Любимой',
    author: {
      music: 'Алексей Шварц',
      text: 'по мотивам стихотворений Никиты Блинова'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2023-zhizn/06-ljubimoj-a-schwarz.mp3`
  },
  {
    title: 'Обои',
    author: {
      music: 'Алексей Шварц',
      text: 'Никита Блинов'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2023-zhizn/07-oboi-a-schwarz.mp3`
  },
  {
    title: 'Пушкин',
    author: {
      music: 'Алексей Шварц',
      text: 'Александр Пелевин'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2023-zhizn/08-pushkin-a-schwarz.mp3`
  },
  {
    title: 'Письмо',
    author: {
      music: 'Алексей Шварц',
      text: 'Александр Пелевин'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2023-zhizn/09-pismo-a-schwarz.mp3`
  },
  {
    title: 'Коршун',
    author: {
      music: 'Алексей Шварц',
      text: 'Александр Блок'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2023-zhizn/10-korshun-a-schwarz.mp3`
  },
  {
    title: 'Где родился',
    author: {
      music: 'Алексей Шварц',
      text: 'Александр Пелевин'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2023-zhizn/11-gde-rodilsja-a-schwarz.mp3`
  },
  {
    title: 'Четверо',
    author: {
      music: 'Алексей Шварц',
      text: 'Александр Пелевин'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2023-zhizn/12-chetwero-a-schwarz.mp3`
  }
]

export const KNIZHNYJ_ALBOM: Track[] = [
  {
    title: 'Если бы я',
    author: {
      music: 'Алексей Распутнис',
      text: 'Алексей Распутнис'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2007-knizhnyj-albom/01-schwarz-esli-by-ja.mp3`
  },
  {
    title: 'На глубине',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2007-knizhnyj-albom/02-schwarz-na-glubine.mp3`
  },
  {
    title: 'Море',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2007-knizhnyj-albom/03-schwarz-more.mp3`
  },
  {
    title: 'Прощай',
    author: {
      music: 'Алексей Шварц',
      text: 'Иосиф Бродский'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2007-knizhnyj-albom/04-schwarz-proshhaj.mp3`
  },
  {
    title: 'Вальсок',
    author: {
      music: 'Владимир Капша',
      text: 'Иосиф Бродский'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2007-knizhnyj-albom/05-schwarz-walsok.mp3`
  },
  {
    title: 'Добрые люди',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2007-knizhnyj-albom/06-schwarz-dobrye-ljudi.mp3`
  },
  {
    title: 'Душа и тело',
    author: {
      music: 'Алексей Шварц',
      text: 'Хачатур Кечареци'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2007-knizhnyj-albom/07-schwarz-dusha-i-telo.mp3`
  },
  {
    title: 'Дом',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2007-knizhnyj-albom/08-schwarz-dom.mp3`
  },
  {
    title: 'Встреча',
    author: {
      music: 'Алексей Шварц',
      text: 'И. С. Тургенев, A. Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2007-knizhnyj-albom/09-schwarz-wstrecha.mp3`
  },
  {
    title: 'Слово и глина',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2007-knizhnyj-albom/10-schwarz-slowo-i-glina.mp3`
  },
  {
    title: 'Немецкая баллада',
    author: {
      music: 'Алексей Шварц',
      text: 'Козьма Прутков'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2007-knizhnyj-albom/11-schwarz-nemeckaja-ballada.mp3`
  },
  {
    title: 'Море (ремикс)',
    author: {
      music: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2007-knizhnyj-albom/12-schwarz-more-remix.mp3`
  }
]

export const DOMASHNIJ_ALBOM: Track[] = [
  {
    title: 'Мы твёрдо по жизни хотели идти...',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2004-domashnij-albom/schwarz-domashnij-albopm-01-my-twjordo.mp3`
  },
  {
    title: 'Мы больны',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2004-domashnij-albom/schwarz-domashnij-albopm-02-my-bolny.mp3`
  },
  {
    title: 'Балда',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2004-domashnij-albom/schwarz-domashnij-albopm-03-balda.mp3`
  },
  {
    title: 'Там',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2004-domashnij-albom/schwarz-domashnij-albopm-04-tam.mp3`
  },
  {
    title: 'Дом',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2004-domashnij-albom/schwarz-domashnij-albopm-05-dom.mp3`
  },
  {
    title: 'Тема',
    author: {
      music: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2004-domashnij-albom/schwarz-domashnij-albopm-06-tema.mp3`
  },
  {
    title: 'Пусто',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2004-domashnij-albom/schwarz-domashnij-albopm-07-pusto.mp3`
  },
  {
    title: 'Колесо',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2004-domashnij-albom/schwarz-domashnij-albopm-08-koleso.mp3`
  },
  {
    title: 'Солдат',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/2004-domashnij-albom/schwarz-domashnij-albopm-09-soldat.mp3`
  },
  {
    title: 'бонус',
    url: `${environment.dataHostUrl}/audio/schwarz/2004-domashnij-albom/schwarz-domashnij-albopm-10-bonus-long.mp3`
  }
]

export const RAZBITYJ_FONAR: Track[] = [
  {
    title: 'Грусть',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1999-razbityj-fonar/01-schwarz-grust.mp3`
  },
  {
    title: 'Шпиёнъ',
    author: {
      music: 'В. Беляшов и А. Шварц',
      text: 'Виталий Беляшов'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1999-razbityj-fonar/02-schwarz-spijon.mp3`
  },
  {
    title: 'Автобус',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1999-razbityj-fonar/03-schwarz-awtobus.mp3`
  },
  {
    title: 'Осень',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1999-razbityj-fonar/04-schwarz-osen.mp3`
  },
  {
    title: 'Разбитый фонарь',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1999-razbityj-fonar/05-schwarz-razbityj-fonar.mp3`
  },
  {
    title: 'Зима',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1999-razbityj-fonar/06-schwarz-zima.mp3`
  },
  {
    title: 'По дороге',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1999-razbityj-fonar/07-schwarz-po-doroge.mp3`
  }
]

export const TAM_GDE_MENJA_NE_ZHDUT: Track[] = [
  {
    title: 'Домой',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1995-uk-rup-aha-peci/01-domoj.mp3`
  },
  {
    title: 'Эти люди',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1995-uk-rup-aha-peci/02-eti-ljudi.mp3`
  },
  {
    title: 'Баллада',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1995-uk-rup-aha-peci/03-ballada.mp3`
  },
  {
    title: 'Мы больны',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1995-uk-rup-aha-peci/04-my-bolny.mp3`
  },
  {
    title: 'По дороге',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1995-uk-rup-aha-peci/05-po-doroge.mp3`
  },
  {
    title: 'Автобус',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1995-uk-rup-aha-peci/06-awtobus.mp3`
  },
  {
    title: 'Пёс',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1995-uk-rup-aha-peci/07-pjos.mp3`
  },
  {
    title: 'Разбитый фонарь',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1995-uk-rup-aha-peci/09-razbityj-fonar.mp3`
  },
  {
    title: 'Весна',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    },
    url: `${environment.dataHostUrl}/audio/schwarz/1995-uk-rup-aha-peci/10-wesna.mp3`
  }
]

export const JB_AZBUKA_VETRA = AZBUKA_VETRA

export const JB_OTRAZHENIJA = OTRAZHENIJA

// export const PESNI_PESENKI_I_PLJASKI_TRAVA = PESNI_PESENKI_I_PLJASKI

export const TRAVA_KGS = KGS

export const TRAVA_INVALIDY = INVALIDY

export const TRAVA_ESHHJO_ODIN = ESHHJO_ODIN

export const TRAVA_FESTIVAL_STADTALLENDORF = FESTIVAL_STADTALLENDORF

export const VYHOD_VENNMK: Track[] = [
  {
    title: 'Когда Ты Скажешь «Пойдём»',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Пионеры Ещё Вернутся',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Не Плачь, Бедное Животное',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'В Москве Уже Всё',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Чёрные Портреты',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Юная Кровь',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Умереть В Постели С Тобой',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Дьявол Знал',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Дороги (Вены Земли)',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Дон Педро Гомец',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Счастье По Самые Уши',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Вандализм',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Бугор (Непрерывность Простых Вещей)',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Колесо',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Сага Об Обсосанном И Вялом',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'У Речки, У Реки',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Пригласи Меня На Анашу',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Шёл, Нашёл И Потерял',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Ночь С Пятницы На Понедельник',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Убивать Себя',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Дуба Дам',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },
  {
    title: 'Не Могу Кончить',
    author: {
      music: 'Сергей Селюнин',
      text: 'Сергей Селюнин'
    }
  },

]

export const PERELYGIN_JLUWS: Track[] = [
  {
    title: 'Запой',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    },
    url: `${environment.dataHostUrl}/audio/perelygin/2003-jluws/perelygin-jluws-01-zapoj.mp3`
  },
  {
    title: 'Я люблю умирать во сне',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    },
    url: `${environment.dataHostUrl}/audio/perelygin/2003-jluws/perelygin-jluws-02-jluws.mp3`
  },
  {
    title: 'Дай что ли денег',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    },
    url: `${environment.dataHostUrl}/audio/perelygin/2003-jluws/perelygin-jluws-03-daj-deneg.mp3`
  },
  {
    title: 'Сном - огнём',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    },
    url: `${environment.dataHostUrl}/audio/perelygin/2003-jluws/perelygin-jluws-04-snom-ognjom.mp3`
  }
]

export const PERELYGIN_AKUSTIKA: Track[] = [
  {
    title: 'Блядская любовь',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    },
    url: `${environment.dataHostUrl}/audio/perelygin/1999-akustika/perelygin-akustika-01-bljadskaja-lubow.mp3`
  },
  {
    title: 'Хлопнули дверью',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    },
    url: `${environment.dataHostUrl}/audio/perelygin/1999-akustika/perelygin-akustika-02-hlopnuli-dwerju.mp3`
  },
  {
    title: 'Я искал людей',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    },
    url: `${environment.dataHostUrl}/audio/perelygin/1999-akustika/perelygin-akustika-03-iskal-ljudej.mp3`
  },
  {
    title: 'Кони',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    },
    url: `${environment.dataHostUrl}/audio/perelygin/1999-akustika/perelygin-akustika-04-koni.mp3`
  },
  {
    title: 'Небесная трава',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    },
    url: `${environment.dataHostUrl}/audio/perelygin/1999-akustika/perelygin-akustika-05-nebesnaja-trava.mp3`
  },
  {
    title: 'Самый-самый',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    },
    url: `${environment.dataHostUrl}/audio/perelygin/1999-akustika/perelygin-akustika-06-samyj-samyj.mp3`
  },
  {
    title: 'Рядом я с тобой',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    },
    url: `${environment.dataHostUrl}/audio/perelygin/1999-akustika/perelygin-akustika-07-rjadom-ja-s-toboj.mp3`
  },
  {
    title: 'Зря наобещали',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    },
    url: `${environment.dataHostUrl}/audio/perelygin/1999-akustika/perelygin-akustika-08-zrja-naobeshhali.mp3`
  },
  {
    title: 'Встретились с тобой',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    },
    url: `${environment.dataHostUrl}/audio/perelygin/1999-akustika/perelygin-akustika-09-vstretilis-s-toboj.mp3`
  }
]

export const MACUK_VREMENA_GODA_I_SUTOK: Track[] = [
  {
    title: 'Ленинградское утро',
    author: {
      music: 'Стас Мацюк',
      text: 'Стас Мацюк'
    }
  },
  {
    title: 'Чужие среди чужих',
    author: {
      music: 'Андрей Макаревич',
      text: 'Андрей Макаревич'
    }
  },
  {
    title: 'Река',
    author: {
      music: 'Стас Мацюк',
      text: 'Стас Мацюк'
    }
  },
  {
    title: 'Про злую любовь',
    author: {
      music: 'Стас Мацюк',
      text: 'Стас Мацюк'
    }
  },
  {
    title: 'Осень',
    author: {
      music: 'Стас Мацюк',
      text: 'Стас Мацюк'
    }
  },
  {
    title: 'Кадриль',
    author: {
      music: 'Стас Мацюк',
      text: 'Стас Мацюк'
    }
  },
  {
    title: 'Снова один',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    }
  },
  {
    title: 'Касыда о последнем пороге',
    author: {
      music: 'Игорь Воленко',
      text: 'Олег Ладыженский'
    }
  },
  {
    title: 'Романтический мальчик',
    author: {
      music: 'Стас Мацюк',
      text: 'Никита Блинов'
    }
  }
]

export const DELO_VREMENI_VSJO_ETO_BYLO: Track[] = [
  {
    title: 'Всё это было',
    author: {
      music: 'Владимир Шамай',
      text: 'Иосиф Бродский'
    }
  },
  {
    title: 'На семи ветрах',
    author: {
      music: 'Владимир Шамай',
      text: 'Никита Блинов'
    }
  },
  {
    title: 'Скрипка',
    author: {
      music: 'Владимир Шамай',
      text: 'Сергей Есенин'
    }
  },
  {
    title: 'Коршун',
    author: {
      music: 'Алексей Шварц',
      text: 'Александр Блок'
    }
  },
  {
    title: 'Она сидела на полу',
    author: {
      music: 'Владимир Шамай',
      text: 'Федор Тютчев'
    }
  }
]

export const HKB_IN_THE_BEGINNING: Track[] = [
  { title: 'Yikhes and Perenica' },
  { title: 'Hoffmans Hora' },
  { title: 'Bulgar and Kodenice' },
  { title: 'Tepl and Lekhu Neranena' },
  { title: 'Nokh Der Khavdole' },
  { title: 'Ne Zhurites Klopcy and Kolomeyke' },
  { title: 'Moldavian Medley' },
  { title: 'Racenice and Salonice' },
  { title: 'Bukhuser Khosidl' },
  { title: 'Dem Rebns Nign' },
  { title: 'Forshpil and Bukoviner Freylekhs' },
  { title: 'German Goldenshteyn Medley' },
  { title: 'Gas-Nign and Khosidl' },
  { title: 'Heyser Bulgar' },
  { title: 'Boyberiker Nign' }
]

export const PERELYGIN_SCHWARZ_KOLICHESTVO_900: Track[] = [
  {
    title: 'Грусть',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    }
  },
  {
    title: 'Небесная трава',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Холодные сны',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    }
  },
  {
    title: 'Смерть у каждого своя',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Сегодня ты ещё жив',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    }
  },
  {
    title: 'Я в кабине угорел',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Столько лет по земле',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    }
  },
  {
    title: 'Зазеркалье',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Если слова внутри',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    }
  },
  {
    title: 'Входную дверь ...',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Белым',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    }
  },
  {
    title: 'Из дома ссор (колыбельная)',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Осень',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    }
  },
  {
    title: 'Спи, Лен!',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Опять улететь (Улусновой)',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    }
  },
  {
    title: 'Головой на восток (Улусновой)',
    author: {
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Детские шутки',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Моя милая М',
    author: {
      music: 'Алексей Шварц',
      text: 'Алексей Шварц'
    }
  },
  {
    title: 'Я прокляну этот Мир',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Шпион',
    author: {
      music: 'Беляшов и Шварц',
      text: 'Виталий Беляшов'
    }
  },
  {
    title: 'Забыв о правде',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Песня про Эммаус',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Such a lovely day',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Like a fatal sun',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'I\'ll write you all the time',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Temptation',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  },
  {
    title: 'Let me free',
    author: {
      music: 'Павел Перелыгин',
      text: 'Павел Перелыгин'
    }
  }
]

export const URICH_ZA_GORIZONT: Track[] = [
  {
    title: 'Великий город',
    author: {
      music: 'Евгений Урих',
      text: 'Евгений Урих'
    }
  },
  {
    title: 'Кому это надо?',
    author: {
      music: 'Евгений Урих',
      text: 'Евгений Урих'
    }
  },
  {
    title: 'Нетерпиливый мы народ',
    author: {
      music: 'Евгений Урих',
      text: 'Евгений Урих'
    }
  },
  {
    title: 'Я один',
    author: {
      music: 'Евгений Урих',
      text: 'Евгений Урих'
    }
  },
  {
    title: 'Дальняя дорога',
    author: {
      music: 'Евгений Урих',
      text: 'Евгений Урих'
    }
  },
  {
    title: 'Проснись человечество',
    author: {
      music: 'Евгений Урих',
      text: 'Евгений Урих'
    }
  },
  {
    title: 'Всё набирает оборот',
    author: {
      music: 'Евгений Урих',
      text: 'Евгений Урих'
    }
  },
  {
    title: 'Дорога в новый год',
    author: {
      music: 'Евгений Урих',
      text: 'Евгений Урих'
    }
  },
  {
    title: 'Red Bar',
    author: {
      music: 'Евгений Урих',
      text: 'Евгений Урих'
    }
  },
  {
    title: 'Я приду',
    author: {
      music: 'Евгений Урих',
      text: 'Александр Яровой'
    }
  },
  {
    title: 'За горизонт',
    author: {
      music: 'Евгений Урих',
      text: 'Евгений Урих'
    }
  }
]

export const PROSPEKT_KALININA_KARUSEL: Track[] = [
  {
    title: 'Добрый вечер',
    author: {
      music: 'Андрей Каргальцев',
      text: 'Андрей Каргальцев'
    }
  },
  {
    title: 'К берегам',
    author: {
      music: 'Андрей Каргальцев',
      text: 'Андрей Каргальцев'
    }
  },
  {
    title: 'Остановись',
    author: {
      music: 'Андрей Каргальцев',
      text: 'Андрей Каргальцев'
    }
  },
  {
    title: 'Друзьям',
    author: {
      music: 'Андрей Каргальцев',
      text: 'Андрей Каргальцев'
    }
  },
  {
    title: 'Поговори со мной',
    author: {
      music: 'Андрей Каргальцев',
      text: 'Андрей Каргальцев'
    }
  },
  {
    title: 'Карусель',
    author: {
      music: 'Андрей Каргальцев',
      text: 'Андрей Каргальцев'
    }
  },
  {
    title: 'По дороге домой',
    author: {
      music: 'Андрей Каргальцев',
      text: 'Андрей Каргальцев'
    }
  },
  {
    title: 'Проспект Калинина',
    author: {
      music: 'Андрей Каргальцев',
      text: 'Андрей Каргальцев'
    }
  },
  {
    title: 'Со мной рядом ты',
    author: {
      music: 'Андрей Каргальцев',
      text: 'Андрей Каргальцев'
    }
  },
  {
    title: 'О Твери',
    author: {
      music: 'Андрей Каргальцев',
      text: 'Андрей Каргальцев'
    }
  }
]
