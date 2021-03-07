<?php
if (isset($_POST['tel'])){
    // Переменные с формы
    $name = $_POST['name'];
    $content = $_POST['content'];
    $tel = $_POST['tel'];
    
    // Параметры для подключения
    $db_host = "localhost";
    $db_user = "architc9_form"; // Логин БД
    $db_password = "tGSy6uWM"; // Пароль БД
    $db_base = 'architc9_form'; // Имя БД
    $db_table = "form"; // Имя Таблицы БД
    
    try {
        // Подключение к базе данных
        $db = new PDO("mysql:host=$db_host;dbname=$db_base", $db_user, $db_password);
        // Устанавливаем корректную кодировку
        $db->exec("set names utf8");
        // Собираем данные для запроса
        $data = array( 'name' => $name, 'content' => $content, 'tel' => $tel); 
        // Подготавливаем SQL-запрос
        $query = $db->prepare("INSERT INTO $db_table (id, name, tel, content, date) values (NULL, :name, :tel, :content, NOW())");
        // Выполняем запрос с данными
        $query->execute($data);
        // Запишим в переменую, что запрос отрабтал
        $result = true;

        header("Location: index.html");
    } catch (PDOException $e) {
        // Если есть ошибка соединения или выполнения запроса, выводим её
        print "Error: " . $e->getMessage() . "<br/>";
        header("Location: https://alexproekt.ru");
    }
}
?>
