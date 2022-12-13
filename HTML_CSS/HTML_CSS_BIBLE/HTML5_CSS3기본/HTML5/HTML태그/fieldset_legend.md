# fieldset , legend 태그

legend태그는 fieldset 태그 내부에서만 사용할 수 있다.

```html
<body>
    <form>
        <fieldset>
            <legend>입력양식</legend>
            <table>
                <tr>
                    <td><lable for="name">이름</lable></td>
                    <td><input for="name" type = "text" /></td>
                </tr>
                <tr>
                    <td><label for="mail">이메일</label></td>
                    <td><input id="mail" type="email" /></td>
                </tr>
            </table>
            <input type="submit" />
        </fieldset>
    </form>
</body>
```



