# Реализация счётчика с Redux Toolkit
### Иллюстрация:
![image](https://github.com/user-attachments/assets/9ffc4daa-855e-4e27-86c0-e9575d831514)
![image](https://github.com/user-attachments/assets/752085ff-4203-4e64-8607-6050138ec096)

## Описание проекта
Данное приложение реализует простой счётчик, управляемый через Redux Toolkit. Приложение показывает текущее значение счётчика и предоставляет следующие функции:
- ➕ Увеличение счётчика на 1
- ➖ Уменьшение счётчика на 1
- ➕ Увеличение счётчика на 3
- ➕ Увеличение на произвольное значение из поля ввода

Все данные о счётчике хранятся в Redux store, а взаимодействие с ним осуществляется через createSlice, configureStore, Provider, useSelector и useDispatch.

## Установка и запуск

1. Клонируйте репозиторий и перейдите в папку проекта:
     ```bash
     git clone https://github.com/aidin1324/-Practice---4-Redux-Toolkit-Counter.git
     cd app
     ```

2. Установите зависимости:
     ```bash
     npm install
     ```

3. Запустите приложение:
     ```bash
     npm run start
     ```

## Заключение
Данный проект позволяет закрепить навыки работы с Redux Toolkit и управлением состоянием в React-приложении. Все функциональные требования выполнены: отображение счётчика, кнопки для изменения состояния и динамическое добавление произвольного значения.
