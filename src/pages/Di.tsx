import * as React from "react"
import { Route, Switch } from "react-router-dom"
import styled from "styled-components"
import { Nav } from "../theme/Nav"
import { Link } from "../theme/Link"
import { Content } from "../theme/Content"
import { Code } from "../theme/Code"

export const Di = () => {
  return (
    <Layout>
      <Content>
        Table of contents
        <div>---</div>
        <Switch>
          <Route path="/di/gettig-started">
            <GettingStarted />
          </Route>
        </Switch>
      </Content>

      <Nav>
        <Link to="/di/gettig-started">Начало</Link>
      </Nav>
    </Layout>
  )
}

const Layout = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 20%;
`

const GettingStarted = () => (
  <>
    <h2>Установка используя composer</h2>
    <Code language="bash">$ composer require cekta/di</Code>
    <h2>Использование</h2>
    <p>Рассмотрим ситуацию:</p>
    <ul>
      <li>
        Необходимо сделать AuthHandler для входа на сайт по username и password.
      </li>
      <li>AuthHandler для работы с БД будет использовать PDO для примера.</li>
      <li>
        Параметры для подключения к бд будут лежать в config.json для примера.
      </li>
    </ul>
    <details>
      <summary>
        /public/index.php - основная точка входа для демонстрации работы
      </summary>
      <Code language="php">
        {`<?php

declare(strict_types=1);

use App\\AuthHandler;
use App\\MyContainer;

require __DIR__ . '/../vendor/autoload.php';

$container = new MyContainer();
$auth = $container->get(AuthHandler::class);
var_dump($auth->handle('test', '12345'));`}
      </Code>
    </details>
    <details>
      <summary>
        /src/MyContainer.php - здесь лежит основная настройка иньекции
        зависимостей
      </summary>
      <Code>{`<?php

declare(strict_types=1);

namespace App;

use Cekta\\DI\\Container;
use Cekta\\DI\\Provider;
use Cekta\\DI\\Reflection;

class MyContainer extends Container
{
    public function __construct()
    {
        $reflection = new Reflection();
        $providers[] = new Provider\\KeyValue(
            json_decode(file_get_contents(__DIR__ . '/../config.json'), true)
        );
        $providers[] = new Provider\\Autowiring($reflection);
        parent::__construct(...$providers);
    }
}`}</Code>
    </details>
    <details>
      <summary>/config.json - параметры для подключения к бд</summary>
      <Code language="json">{`{
  "dsn": "mysql:dbname=testdb;host=127.0.0.1",
  "username": "root",
  "passwd": "1234",
  "options": {}
}`}</Code>
    </details>
    <p>
      Если поднять БД, создать таблицу code и вписать туда пользователя test и
      пароль password_hash(‘12345’, PASSWORD_DEFAULT).
    </p>
    <Code language="bash">{`$ php -f public/index.php 
/public/index.php:13:
bool(true)`}</Code>
    <h2>Полезное</h2>
    <ul>
      <li>
        MyContainer может содержать любое число провайдеров. MyContainer хранит
      </li>
      <li>
        основные настройки cekta/di. Расширение функционала и возможностей
      </li>
      <li>
        осуществляются с помощью провайдеров Порядок провайдеров важен, если два
      </li>
      <li>
        провайдера предоставляют контейнер с одинаковыми именами, используется
        тот что добавлен раньше.
      </li>
    </ul>
    <p>Смотрите другие разделы для знакомства с другими возможностями.</p>
  </>
)
