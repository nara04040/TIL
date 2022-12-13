# select

여러 개의 목록에서 몇 가지를 선택할 수 있는 입력 양식 요소.

<br>

- select : 선택 양식을 생성
- optgroup : 옵션을 그룹화한다.
- option : 옵션을 생성한다.

```html
<body>
    <select>
        <option>김밥</option>
        <option>떡볶이</option>
        <option>순대</option>
        <option>오뎅</option>
    </select>
</body>
```
 <br>

화면상에서 옵션중 하나를 선택 할 수 있는 기능이 나타난다.

여러 개의 목록을 선택하고싶다면 select 태그의 multiple속성을 사용한다.

<br>

### multiple

```html
<body>
    <select multiple="multiple">
        <option>김밥</option>
        <option>떡볶이</option>
        <option>순대</option>
        <option>오뎅</option>
    </select>
</body>
```

<br>

### optgroup

```html
<body>
    <select>
        <optgroup label="HTML5">
            <option>Multimedia Tag</option>
            <option>Connectivity</option>
            <option>Device Access</option>
        </optgroup>
        <optgroup label="CSS3">
            <option>Animation</option>
            <option>3D Transform</option>
        </optgroup>
    </select>
</body>
```