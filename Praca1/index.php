<?php

function complementary_pairs($k, $A) {
    $n = sizeof($A);
    $z = 0;
    for ($i = 0; $i < $n; $i++) {
        for ($j = 0; $j < $n; $j++) {
            if ($A[$i] + $A[$j] == $k) {
                $z++;
            }
        }
    }
    return $z;
}

function dominator($inputArray) {
    $n = sizeof($inputArray);
    $sortedArray = $inputArray;
    sort($sortedArray);
    $dominator = false;
    for ($i = 0; $i < $n; $i++) {
        if ($i == 0) {
            $presentValue = $sortedArray[$i];
            $z = 1;
        } else {
            if ($n - 1 == $i && $presentValue == $sortedArray[$i]) {
                $z++;
            }
            if ($sortedArray[$i] != $presentValue || $n - 1 == $i) {
                if ($z > $n / 2) {
                    $dominator = true;
                    for ($j = 0; $j < $n; $j++) {
                        if ($inputArray[$j] == $presentValue) {
                            return $j;
                            break;
                        }
                    }
                }
                $z = 0;
                $presentValue = $sortedArray[$i];
            }
            $z++;
        }
    }
    if ($dominator == false) {
        return "-1";
    }
}
?>


<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <form action="" method="POST">
            <p>
                <label>k</label>
                <input type="text" name="k_value" />
            </p>
            <p>
                <label>A (Wartości tablicy oddziel średnikiem ";")</label>
                <input type="text" name="A_value" />
            </p>
            <input type="submit" name="submit" value="Show" />
        </form>
        <?php
        if (isset($_POST['submit'])) {
            if (!(empty($_POST['k_value']) || empty($_POST['A_value']))) {

                echo '<p>First function return: ' . complementary_pairs($_POST['k_value'], explode(";", $_POST['A_value'])) . '</p>';
                echo '<p>Second function return:</p>';
                echo '<p>' . dominator(explode(";", $_POST ['A_value'])) . '</p>';
            } else {
                echo "Wypenił pola";
            }
        }
        ?>
    </body>
</html>
