Основы бэкэнда: php, mysql


php - язык с динамичекой типизацией данных

<?php	
	print("Hello world!");
    echo "Hello, ";
    echo 'my world';
?>


<?php	
	$_name = 'Alevtina';
    $_13 = 10;
    $name_13 = 467;
    echo $_name;
?>

<?php
    $name = ‘Nera’;
    Sbool = true;
    $num = 15.28;
    echo "Привет, $name"; // Привет, Nera
    echo "булевский тип? $bool";
    echo "это дробь = $num"; // это дробь = 15.28
    echo 6+5;
    $var = 3 + 5;
    echo $var;
    $heroes = ['Arni', 'Silva', 'Jecki']
?>


<?php
    class User {
        public $name;
        public $date;

        public function show()
        {
            echo $this->name, ' ', $this->date;
        }
    }

    $alevtina = new User;
    Salevtina->name = 'Anepruna';
    S$alevtina->date = 10;
    Salevtina->show(); // Anepruna 10
?>



mysql
CREATE TABLE EMPLOYEE (
empId INTEGER PRIMARY KEY,
name TEXT NOT NULL,
dept TEXT NOT NULL
);

INSERT INTO EMPLOYEE VALUES (2001, ‘Clark’, ‘Sales");
INSERT INTO EMPLOYEE VALUES (0002, ‘Dave’, ‘Accounting');
INSERT INTO EMPLOVEE VALUES (2003, ‘Ava', ‘Sales');

SELECT * FROM EMPLOYEE WHERE dept = ‘Sales’;