<?php
  parse_str(file_get_contents('php://input'), $_POST);

  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    file_put_contents('value.txt', array_keys($_POST)[0]);
  } else {
    echo file_get_contents('value.txt');
  }
