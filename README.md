# Відновлення можливості одночасної роботи з Державним реєстром актів цивільного стану громадян та АРКАН (можливо й інші, невідомо)


**Швидкі посилання на розділи:**
* [Шляхи вирішення](#шляхи-вирішення)
* [Моє рішення (сподіваюсь тимчасове)](#моє-рішення-сподіваюсь-тимчасове)
* [Як встановити та налаштувати](#як-встановити-та-налаштувати)


## Передісторія
**05.04.2021** міністр Міністерства Юстиції Денис Малюська [заявив](https://sud.ua/ru/news/ukraine/197994-maye-litati-onovili-platformu-na-yakiy-pratsyuyut-reyestri-minyustu) про оновлення програмного забезпечення ряду реєстрів:
* ДРРП (держреєстр речових прав на нерухоме майно)
* ДРАЦС (акти цівільного стану)
* АСВП (автоматизована система виконавчого провадження)

>За інші реєстри невідомо, але в реєстрі ДРАЦС додатково додано перевірку криптографічної бібліотеки
*"Користувач центру сертифікації ключів. Web-бібліотеки підпису"* (EUSignWebInstall.exe), чи здіснювалась ця перевірка до оновлення мені невідомо, але якщо оновити EUSignWebInstall.exe до версії 1.3.1.58, то вона пройде перевірку на сайті ДРАЦС, але після цього неможливо увійти до АРКАну.

**Версії EUSignWebInstall.exe, що пропонуються для завантаження (про які мені відомо):**
* Зі сторінки входу до АРКАНу: 1.3.1.45 *(посилання відсутнє, завантаження здійснюється зі сторінки самого сервісу у разі відсутності у користувача встановленної або запущенної версії)*
* На сайті АЦСК МВС: 1.3.1.46  [посилання](https://ca.mvs.gov.ua/download/install/EUSignWebInstall.exe)
* ДРАЦС (оновлення або завантаження): 1.3.1.58 [посилання](https://iit.com.ua/download/productfiles/EUSignWebInstall.exe)


## Шляхи вирішення
* Мін‘юст (ДП «Національні інформаційні системи») вимкне перевірку версії бібліотеки EUSignWebInstall.exe при вході. Перевірено, що з реєстром можливо працювати і на версії 1.3.1.46, і 1.3.1.45
* Інші реєстри, що використовують EUSignWebInstall.exe оновлять версію бібліотеки (це потребує оновлення коду роботи з нею). Вважаю малоймовірним


## Моє рішення (сподіваюсь тимчасове)
Використовуючи плагін для браузера, що дозволяє виконувати так званні "UserScript" (користувацьки скрипти) замінити функцію, що здійснює перевірку встановленої версії EUSignWebInstall.
Рішення не стабільне та може викликати несподівані помилки при вході на сайт https://regdracs.minjust.gov.ua/, але працює.


## Як встановити та налаштувати

**ВАРІАНТ 1:**

<details>
<summary>Firefox Portable (РЕКОМЕНДОВАНИЙ ВАРІАНТ)</summary>

>підготовив заздалегідь налаштовану портативну версію Firefox версії 86.0, яка запускається в x86 режимі (про всяк випадок)

**Що необіхдно:**
1. Завантажити архів з Firefox Portable [DRACS.zip](https://mega.nz/file/CJkhWaAL#1q8JvK8aJaBCuIxAL9wPCUcOrbsWyzYDFdXOGWCwUas)
1. Розархівувати так, щоб шлях до файлу "FirefoxPortable.exe" був таким: **C:\DRACS\FirefoxPortable\FirefoxPortable.exe**
1. Якщо необхідно, створіть ярлик на робочому столі
1. Запустити портативну версію Firefox та працювати з ДРАЦС з її використанням
1. **!!! неможливо запустити портативну версію Firefox, якщо запущена інша версія** 

<BR />

**Коментар:**

>***Для попереднього налаштування завантажив портативну версію Firefox з [ЦЬОГО сайту](https://mozilla-firefox-portable.ru.uptodown.com/windows/versions), далі провів налаштування, завантажив плагін Tampermonkey та додав до нього скрипт. 
>Під час тестування виявив "проблему": якщо після інсталяції портативну версію перемістити в іншу директорію, то вона перестане працювати, так як в конфігі зберігається шлях інсталяції, тому вирішив повторно провести налаштування, але за шляхом "C:\DRACS\FirefoxPortable\" для можливості подальшого розповсюдження***
</details>



#

**ВАРІАНТ 2:**

**Завантажити плагін "Tampermonkey":**
* Google Chrome [(відкрити сторінку завантаження плагіну)](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* Firefox [(відкрити сторінку завантаження плагіну)](https://addons.mozilla.org/ru/firefox/addon/tampermonkey/)
* Opera [(відкрити сторінку завантаження плагіну)](https://addons.opera.com/ru/extensions/details/tampermonkey-beta/)

**Встановити розширення**

**Додати скрипт до роширення Tempermonkey:**

<details> 
<summary>Firefox</summary>

**UPD 07.04.2021 18:00:** Зіштовхнувся з проблемою. Деякі інсталяції Firefox блокують так званий CORS-підключення, АЛЕ для роботи з EUSignWebInstall використовується адреса "localhost:8081" "localhost:8083".  Часу поглиблено вивчати можливі шляхи вирішеня немає, тому додам ще один варіант - завантаження портативної та попередньо налаштованної версії 


> Для того, щоб повторно не робити скрішоти по налаштуванню в Firefox, продублю з Google Chrome

> Версії Firefox на яких перевірено: **Firefox 86.0(64-bit) та 87.0(64-bit)**

1. **У разі наявності в системі вже встановленого EUSignWebInstall, що пропонує ДРАЦС, видалити та встановити той, з яким працювали до цього (АРКАН, МВС, інший)**

1. **Відкрити емблему плагінів та натиснути на іконку плагіну Tempermonkey**<br />
   ![](images/1.jpg)
    <br />

1. **З випадаючого меню обрати "Dashboard"**<br />
   ![](images/2.jpg)
    <br />

1. **У правій частині натиснути на плюс (+)**<br />
   ![](images/3.jpg)
    <br />

1. **Повністю замінити текст скрипту на скопійований за** [**посиланням**](https://raw.githubusercontent.com/kpycnuk/regdracs/main/regdracs_FIREFOX_only.js) *(для відкриття у новій вкладці зажміть Ctrl+клік мишкою)*<br />
   <img src="images/4.jpg" alt="" style="max-width:100%;" width="500px">
    <br />

1. **В меню натиснути на "File" та з випадаючого меню обрати "Save"**<br />
   ![](images/5.jpg)
    <br />

1. **Закрити сторінку та спробувати перейти на сайт ДРАЦС**<br />

</details>

<details>
<summary>ОПИС ДЛЯ Google Chrome та інших (не Firefox).</summary>

**!! Працює не стабільно, рекомендую використовувати Firefox**

**UPD 07.04.2021 17:00:** 07.04.2021 неможлива нормальна робота, бо при вході (після авторизації) додана ще одна перевірка наявності конкретної версії. При цьму якщо дозволити саме цій версії скрипта виконуватись на сайті, то виникаюсть проблеми із запитами


> Процес додавання скрипта зробив на прикладі браузера Google Chrome версії 89 (64-bit):

1. **У разі наявності в системі вже встановленого EUSignWebInstall, що пропонує ДРАЦС, видалити та встановити той, з яким працювали до цього (АРКАН, МВС, інший)**

1. **Відкрити емблему плагінів та натиснути на іконку плагіну Tempermonkey**<br />
   ![](images/1.jpg)
    <br />

1. **З випадаючого меню обрати "Dashboard"**<br />
   ![](images/2.jpg)
    <br />

1. **У правій частині натиснути на плюс (+)**<br />
   ![](images/3.jpg)
    <br />

1. **Повністю замінити текст скрипту на скопійований за** [**посиланням**](https://raw.githubusercontent.com/kpycnuk/regdracs/main/regdracs_TM.js) *(для відкриття у новій вкладці зажміть Ctrl+клік мишкою)*<br />
   <img src="images/4.jpg" alt="" style="max-width:100%;" width="500px">
    <br />

1. **В меню натиснути на "File" та з випадаючого меню обрати "Save"**<br />
   ![](images/5.jpg)
    <br />

1. **Закрити сторінку та спробувати перейти на сайт ДРАЦС**<br />
</details>



#### У разі виникнення зауважень або пропозицій, відкритий до спілкування. :smirk:
Писати на електрону пошту kpycnuk@gmail.com
