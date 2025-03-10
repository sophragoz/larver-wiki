<!-- Sophron Ragozin, sophragoz -->
# Начало
Этот **гайд** предназначен для публикования статей на тему сервера, а так же на иную тему(плагины, др).
Сам процесс создания и публикования довольно легкий, **нужно обладать некоторыми программами и терпением.**

## Требования
Для того чтобы создавать статьи в формате Markdown необходимо иметь установленный obsidian, сама программа кроссплатформенная и доступна во всех операционных системах.
Для публикования статей необходимо иметь аккаунт в GitHub, а так же установленный git(в Linux дистрибутивах он должен быть установлен изначально. Для android необходимо иметь termux). 
## Оформление
После того как у вас все необходимое установленно, вы можете начинать писать статью в obsidian, а так же оформить ее через форматирование Markdown, само форматирование изучать не нужно так как оно уже встроенно в программу и вам достаточно нажать 'форматирование'

После того как вы написали статью вам нужно создать комментарий в самом начале и указать свои инициалы и никнейм(любой, хоть майнкрафт никнейм).
```md
Пример (инициалы, никнейм)
<!-- Ivan Ivanov, ivanivanov -->
```

## Публикование
После того как вы создали статью и указали коментарии, вы должны зарегистрироваться в GitHub.
После регистрации вы можете настроить сам профиль если будете использовать саму платформу повторно.

Для того чтобы публиковать статьи вам нужно форкнуть репозиторий wiki который находится по [ссылке](https://github.com/sophragoz/larver-wiki). После форка вы должны склонировать репозиторий с помощью git через вашу консоль.
```bash
git clone https://github.com/username/renamed-fork 
cd renamed-fork
#username - ваш никнейм
#renamed-fork - название форка, если вы не меняли то просто larver-wiki
```
после этого скопируйте свой файл статьи и вставьте его в /ваш-репозитоий/wiki/
После этого укажите сам файл в конфигурации vitepress, находится в /ваш-репозиторий/wiki/.vitepress/config.mjs
Пример:
```mjs

    sidebar: [
      {
        text: 'Основное',
        items: [
          { text: 'Название статьи', link: '/ваша-статья.md' }
        ]
      }
    ],
```
после этого сделайте коммит, если вы это делали в самом GitHub то нажмите кнопку коммит и назовите сам коммит.
Иначе, если вы делали это все в папке репозитория в системе то:
```bash
cd ваш-репозиторий/
git add wiki/ваша-статья.md
git add wiki/.vitepress/config.mjs
git commit -m "название коммита"
git push origin main
```
Вам необходимо иметь токен для пушинга репозитория, в интернете по этой теме имеется множетсво гайдов как это сделать.
## Создание Pull Request
После того как вы все это сделали у вас должен появится коммит на главной странице форка репозитория. 
А так же у должна появится плашка об синхронизации форка с репозиторием 'compare & pull request'. Нажимаете на эту кнопку и создаете pull request с вашим названием и описанием того что вы написали.
Мейнтейнер увидит ваш pull request, и если все верно то просто сделает merge. Если что то вы не то сделали то мейнтейнер укажет коментарии на то что не так. После того как вы все сделаете верно то мейнтейнер сделает merge.

# Готово, ваша статья после автосборки на вики.
