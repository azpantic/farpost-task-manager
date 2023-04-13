# 📅 Tasks App (To-Do List)

Веб-сайт списка дел, созданный с помощью React JS, TypeScript, Redux Toolkit и других инструментов.

([Пример интерфейса](https://github.com/azpantic/farpost-task-manager/blob/master/public/Task-App-Img.jpg)

## Описание

- Применяется для организации ваших задач со следующими данными: название, описание, дата, пометка как завершенная и пометка как важная.
- Задачи организованы в маршруты: сегодняшние задачи, важные задачи, незавершенные, завершенные, все задачи и задачи по каталогу (папке). Каталоги и задачи можно редактировать или удалять. Кроме того, существует основной каталог под названием «Главный», который нельзя редактировать или удалить.
- Список задач может отображаться первым в: ближайшие, самые дальние, полные или неполные.


## Используемые инструменты

- React JS
- TypeScript
- CSS
- Redux Toolkit
- React Router DOM
- HTML


Команды для запуска

``` 
git clone https://github.com/azpantic/farpost-task-manager.git
cd tasks-app
npm install
npm start
```

## Observações

- Os dados de tarefas, diretórios e darkmode ficam salvos no localStorage do seu navegador. Você pode clicar no botão "delete all data" para removê-los do localStorage.
- Para fins demonstrativos, o aplicativo possui uma lista padrão de 3 tarefas e 1 diretório chamado "Main".
